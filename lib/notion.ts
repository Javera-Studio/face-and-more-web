import { Client, APIErrorCode, isNotionClientError } from '@notionhq/client'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, extname } from 'node:path'

// Ohne Token/Datenbank-IDs liefert die Notion-Abfrage entweder einen Auth-Fehler oder eine
// falsche Datenbank und wuerde nur zu einer leeren Angebote-Leiste bzw. fehlenden Blogartikeln
// fuehren - ohne dass der Build das bemerkt. Deshalb hier hart und sofort beim Laden des
// Moduls pruefen: fehlt eine der drei Variablen, bricht der Build sofort mit einer eindeutigen
// Fehlermeldung ab, statt "erfolgreich" ohne die erwarteten Inhalte zu deployen.
for (const name of ['NOTION_TOKEN', 'NOTION_BLOG_DB', 'NOTION_OFFERS_DB']) {
  if (!process.env[name]) {
    throw new Error(
      `[Notion] Pflicht-Umgebungsvariable ${name} fehlt. Build abgebrochen, damit nicht ` +
      `unbemerkt ein Deploy ohne Blogartikel/Angebote entsteht. In Cloudflare Pages unter ` +
      `Settings -> Environment variables eintragen.`
    )
  }
}

const notion = new Client({ auth: process.env.NOTION_TOKEN })

// Notion-Dateien vom Typ "file" (in Notion selbst hochgeladen) liefern zeitlich signierte
// S3-URLs, die nach kurzer Zeit ablaufen (siehe expiry_time der Notion-API). Im statischen
// Export wird eine solche URL einmalig zum Build-Zeitpunkt eingebettet und wuerde danach
// dauerhaft ins Leere zeigen. Deshalb wird jedes Bild einmal beim Build heruntergeladen und
// unter public/notion-images/ zwischengespeichert; referenziert wird nur noch der lokale,
// dauerhaft gueltige Pfad. Nur der Pfad-Anteil der URL (ohne Signatur-Query) ist zwischen
// Notion-Abfragen stabil und dient als Cache-Schluessel.
const NOTION_IMAGE_DIR = join(process.cwd(), 'public', 'notion-images')

async function cacheNotionFile(url: string | null): Promise<string | null> {
  if (!url) return null

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return url
  }

  const ext = extname(parsed.pathname).toLowerCase() || '.jpg'
  const hash = createHash('sha1').update(parsed.pathname).digest('hex')
  const filename = `${hash}${ext}`
  const filePath = join(NOTION_IMAGE_DIR, filename)
  const publicPath = `/notion-images/${filename}`

  if (existsSync(filePath)) return publicPath

  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buffer = Buffer.from(await res.arrayBuffer())
    mkdirSync(NOTION_IMAGE_DIR, { recursive: true })
    writeFileSync(filePath, buffer)
    return publicPath
  } catch (e) {
    // Ein abgelaufener Notion-Link im statischen Export ist schlechter als gar kein Bild —
    // deshalb hier kein Fallback auf die (bald ungueltige) Original-URL, sondern sichtbarer
    // Fehler im Build-Log und null (Aufrufer zeigen dann einen Platzhalter).
    console.error(`[Notion] Bild-Download fehlgeschlagen fuer ${parsed.pathname}:`, e)
    return null
  }
}

// Blog Posts DB: Datum, Veröffentlicht (checkbox), Kategorie, Titelbild, Kurzbeschreibung, Name
const BLOG_DB = process.env.NOTION_BLOG_DB!
// Angebote DB: Beschreibung, Gültig bis, Aktiv (checkbox), Leistung, Foto, Preis, Name
const OFFERS_DB = process.env.NOTION_OFFERS_DB!

export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  coverUrl: string | null
  publishedAt: string
  content: { heading?: string; text: string }[]
  relatedTo: string
}

export interface SpecialOffer {
  id: string
  title: string
  description: string
  price: string
  validUntil: string | null
  badge: string | null
  linkUrl: string | null
  photoUrl: string | null
}

function getProp(page: any, name: string): any {
  return page.properties?.[name]
}

function richText(prop: any): string {
  return prop?.rich_text?.map((r: any) => r.plain_text).join('') ?? ''
}

function titleText(prop: any): string {
  return prop?.title?.map((r: any) => r.plain_text).join('') ?? ''
}

// Finds the title-type property regardless of its column name in Notion
function getTitleFromPage(page: any): string {
  const props = page.properties ?? {}
  for (const key of Object.keys(props)) {
    if (props[key]?.type === 'title') {
      const t = titleText(props[key])
      if (t) return t
    }
  }
  return ''
}

function dateVal(prop: any): string | null {
  return prop?.date?.start ?? null
}

function selectText(prop: any): string {
  return prop?.select?.name ?? ''
}

function numberPrice(prop: any): string {
  const n = prop?.number
  if (n == null) return ''
  return `${n} €`
}

// Heutiges Datum in Europe/Vienna als "YYYY-MM-DD" (lexikographisch vergleichbar mit den
// Notion-Datumswerten, die ebenfalls reine Kalendertage ohne Uhrzeit/Zeitzone sind). Ein
// Angebot mit "Gültig bis" = heute soll noch den ganzen Tag sichtbar bleiben, ab dem
// Folgetag nicht mehr - siehe isOfferStillValid.
function todayInVienna(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Vienna',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
}

function isOfferStillValid(validUntil: string | null): boolean {
  if (!validUntil) return true
  return validUntil >= todayInVienna()
}

function filesUrl(prop: any): string | null {
  const files = prop?.files
  if (!files || files.length === 0) return null
  const f = files[0]
  if (f.type === 'external') return f.external?.url ?? null
  if (f.type === 'file') return f.file?.url ?? null
  return null
}

async function getBlocks(blockId: string): Promise<{ heading?: string; text: string }[]> {
  const blocks: { heading?: string; text: string }[] = []
  let cursor: string | undefined

  do {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
    })

    for (const block of res.results as any[]) {
      const type = block.type
      const textArr = block[type]?.rich_text ?? []
      const text = textArr.map((r: any) => r.plain_text).join('')

      if (!text) continue

      if (type === 'heading_2' || type === 'heading_3') {
        blocks.push({ heading: text, text: '' })
      } else if (type === 'paragraph') {
        if (blocks.length > 0 && blocks[blocks.length - 1].text === '' && blocks[blocks.length - 1].heading) {
          blocks[blocks.length - 1].text = text
        } else {
          blocks.push({ text })
        }
      } else if (type === 'bulleted_list_item' || type === 'numbered_list_item') {
        blocks.push({ text: `• ${text}` })
      }
    }

    cursor = res.next_cursor ?? undefined
  } while (cursor)

  return blocks
}

// Fetch all published blog posts (Veröffentlicht = true)
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await notion.databases.query({
    database_id: BLOG_DB,
    sorts: [{ property: 'Datum', direction: 'descending' }],
    filter: { property: 'Veröffentlicht', checkbox: { equals: true } },
  })

  return Promise.all(res.results.map(async (page: any) => ({
    id: page.id,
    slug: page.id,
    title: titleText(getProp(page, 'Name')) || 'Artikel',
    category: richText(getProp(page, 'Kategorie')) || 'Blog',
    excerpt: richText(getProp(page, 'Kurzbeschreibung')) || '',
    coverUrl: await cacheNotionFile(filesUrl(getProp(page, 'Titelbild'))),
    publishedAt: dateVal(getProp(page, 'Datum')) || '',
    content: [],
    relatedTo: '/leistungen',
  })))
}

// Fetch a single blog post by its page ID (used as slug)
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  let page: any
  try {
    page = await notion.pages.retrieve({ page_id: slug })
  } catch (e) {
    // Erwartete, harmlose Faelle: fest hinterlegte Blogartikel (blogArticles.ts) haben
    // sprechende Slugs statt echter Notion-UUIDs, die Notion konsequent ablehnt
    // (validation_error) oder eine geloeschte/verschobene Notion-Seite (object_not_found).
    // Beides bedeutet nur "kein Notion-Artikel unter diesem Slug", kein Systemfehler.
    if (
      isNotionClientError(e) &&
      (e.code === APIErrorCode.ValidationError || e.code === APIErrorCode.ObjectNotFound)
    ) {
      return null
    }
    // Alles andere (falscher Token, Rate-Limit, Netzwerkfehler, Notion down) ist ein echter
    // Fehler und darf den Build nicht unbemerkt mit fehlendem Artikel-Inhalt durchlaufen lassen.
    throw e
  }
  if (!page) return null

  // Check it's published
  const published = page.properties?.Veröffentlicht?.checkbox
  if (!published) return null

  const content = await getBlocks(page.id)

  return {
    id: page.id,
    slug: page.id,
    title: titleText(getProp(page, 'Name')) || 'Artikel',
    category: richText(getProp(page, 'Kategorie')) || 'Blog',
    excerpt: richText(getProp(page, 'Kurzbeschreibung')) || '',
    coverUrl: await cacheNotionFile(filesUrl(getProp(page, 'Titelbild'))),
    publishedAt: dateVal(getProp(page, 'Datum')) || '',
    content,
    relatedTo: '/leistungen',
  }
}

// Fetch active special offers (Aktiv = true UND "Gültig bis" noch nicht abgelaufen).
// Die Ablaufpruefung passiert hier zusaetzlich zum Notion-Filter, weil "Gültig bis" in
// Notion selbst nicht automatisch "Aktiv" deaktiviert - ohne diese Pruefung wuerde ein
// abgelaufenes Angebot weiterlaufen, bis Michaela es manuell abhakt. Da die Seite statisch
// exportiert wird, wirkt das erst ab dem naechsten Build (siehe Cloudflare Cron Trigger in
// der Migrations-Doku fuer den taeglichen Rebuild nach Mitternacht Europe/Vienna).
export async function fetchSpecialOffers(): Promise<SpecialOffer[]> {
  const res = await notion.databases.query({
    database_id: OFFERS_DB,
    filter: { property: 'Aktiv', checkbox: { equals: true } },
  })

  const offers = await Promise.all(res.results.map(async (page: any) => ({
    id: page.id,
    title: getTitleFromPage(page) || richText(getProp(page, 'Angebotsname')) || 'Angebot',
    description: richText(getProp(page, 'Beschreibung')) || '',
    price: numberPrice(getProp(page, 'Preis')) || richText(getProp(page, 'Preis')) || '',
    validUntil: dateVal(getProp(page, 'Gültig bis')),
    badge: selectText(getProp(page, 'Leistung')) || richText(getProp(page, 'Leistung')) || null,
    linkUrl: '/kontakt',
    photoUrl: await cacheNotionFile(filesUrl(getProp(page, 'Foto'))),
  })))

  return offers.filter((o) => isOfferStillValid(o.validUntil))
}
