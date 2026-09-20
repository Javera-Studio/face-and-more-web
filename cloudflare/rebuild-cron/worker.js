// Taeglicher Rebuild-Ausloeser fuer die statisch exportierte Seite.
//
// Warum das noetig ist: "Gültig bis" bei Notion-Angeboten wird nur beim Build ausgewertet
// (siehe lib/notion.ts, isOfferStillValid). Ohne einen taeglichen Rebuild wuerde ein
// abgelaufenes Angebot so lange live bleiben, bis irgendetwas anderes einen neuen Build
// ausloest (z. B. Michaela haktet es manuell ab).
//
// Was dieser Worker tut: ruft einmal taeglich kurz nach Mitternacht (Europe/Vienna) den
// Cloudflare-Pages-Deploy-Hook auf und stoesst damit einen neuen Build an, der die
// "Gültig bis"-Pruefung mit dem aktuellen Datum neu durchfuehrt.
//
// Cron-Zeit 01:00 UTC ist bewusst gewaehlt: das entspricht 02:00 Uhr Wien im Winter (CET,
// UTC+1) bzw. 03:00 Uhr Wien im Sommer (CEST, UTC+2) - in beiden Faellen sicher NACH
// Mitternacht Wien, unabhaengig von der Zeitumstellung. Cloudflare Cron Triggers kennen
// keine Zeitzonen, deshalb dieser feste UTC-Wert statt "0 0 * * *".
//
// DEPLOY_HOOK_URL wird NICHT hier im Code hinterlegt, sondern als Worker-Secret gesetzt:
//   wrangler secret put DEPLOY_HOOK_URL
// (siehe README.md in diesem Ordner fuer die vollstaendige Einrichtung)

export default {
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(triggerRebuild(env))
  },

  // Manueller Testaufruf ueber die Worker-URL (z. B. im Browser), damit sich die Einrichtung
  // ohne Warten auf den naechsten Cron-Lauf pruefen laesst.
  async fetch(_request, env) {
    const result = await triggerRebuild(env)
    return new Response(result, { status: result.startsWith('OK') ? 200 : 500 })
  },
}

async function triggerRebuild(env) {
  if (!env.DEPLOY_HOOK_URL) {
    return 'FEHLER: Secret DEPLOY_HOOK_URL ist nicht gesetzt.'
  }
  try {
    const res = await fetch(env.DEPLOY_HOOK_URL, { method: 'POST' })
    if (!res.ok) {
      return `FEHLER: Deploy Hook antwortete mit HTTP ${res.status}`
    }
    return 'OK: Rebuild ausgeloest.'
  } catch (e) {
    return `FEHLER: ${e.message}`
  }
}
