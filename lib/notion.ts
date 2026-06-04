import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

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

  return res.results.map((page: any) => ({
    id: page.id,
    slug: page.id,
    title: titleText(getProp(page, 'Name')) || 'Artikel',
    category: richText(getProp(page, 'Kategorie')) || 'Blog',
    excerpt: richText(getProp(page, 'Kurzbeschreibung')) || '',
    coverUrl: filesUrl(getProp(page, 'Titelbild')),
    publishedAt: dateVal(getProp(page, 'Datum')) || '',
    content: [],
    relatedTo: '/leistungen',
  }))
}

// Fetch a single blog post by its page ID (used as slug)
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: slug }) as any
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
      coverUrl: filesUrl(getProp(page, 'Titelbild')),
      publishedAt: dateVal(getProp(page, 'Datum')) || '',
      content,
      relatedTo: '/leistungen',
    }
  } catch {
    return null
  }
}

// Fetch active special offers (Aktiv = true)
export async function fetchSpecialOffers(): Promise<SpecialOffer[]> {
  const res = await notion.databases.query({
    database_id: OFFERS_DB,
    filter: { property: 'Aktiv', checkbox: { equals: true } },
  })

  return res.results.map((page: any) => ({
    id: page.id,
    title: getTitleFromPage(page) || 'Angebot',
    description: richText(getProp(page, 'Beschreibung')) || '',
    price: numberPrice(getProp(page, 'Preis')) || richText(getProp(page, 'Preis')) || '',
    validUntil: dateVal(getProp(page, 'Gültig bis')),
    badge: selectText(getProp(page, 'Leistung')) || richText(getProp(page, 'Leistung')) || null,
    linkUrl: '/kontakt',
    photoUrl: filesUrl(getProp(page, 'Foto')),
  }))
}
