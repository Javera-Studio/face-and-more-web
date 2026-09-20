# Taeglicher Rebuild-Trigger (fuer ablaufende Notion-Angebote)

Noch nicht deployt. Manuelle Einrichtung in Cloudflare (einmalig, nach der eigentlichen
Pages-Migration):

1. **Deploy Hook holen:** Cloudflare-Dashboard -> Workers & Pages -> das Pages-Projekt fuer
   face-and-more -> Settings -> Builds & deployments -> Deploy hooks -> neuen Hook anlegen
   (z. B. Name "Taeglicher Rebuild", Branch `main` bzw. den spaeteren Produktions-Branch).
   Cloudflare zeigt danach eine Webhook-URL - diese NICHT ins Repo eintragen.

2. **Worker deployen:**
   ```
   cd cloudflare/rebuild-cron
   npx wrangler login
   npx wrangler secret put DEPLOY_HOOK_URL
   # fragt interaktiv nach dem Wert - hier die Deploy-Hook-URL aus Schritt 1 einfuegen
   npx wrangler deploy
   ```

3. **Testen:** Die vom Deploy ausgegebene Worker-URL im Browser aufrufen. Antwort
   "OK: Rebuild ausgeloest." bedeutet Erfolg, "FEHLER: ..." zeigt die Ursache (z. B. Secret
   fehlt, Deploy Hook ungueltig/geloescht). Danach im Cloudflare-Pages-Projekt unter
   "Deployments" pruefen, ob ein neuer Build gestartet wurde.

4. **Cron-Lauf pruefen:** Nach der ersten Nacht im Worker-Dashboard unter "Triggers" bzw.
   "Logs" kontrollieren, ob der 01:00-UTC-Lauf ausgefuehrt wurde und erfolgreich war.

## Wie Michaela einen fehlgeschlagenen Rebuild erkennt

Cloudflare Pages verschickt bei einem fehlgeschlagenen Build automatisch eine E-Mail an die
Adresse(n), die im Cloudflare-Konto fuer Deployment-Benachrichtigungen hinterlegt sind
(Cloudflare-Dashboard -> Notifications -> "Workers & Pages deployment failed" aktivieren).
Diese Benachrichtigung einmalig fuer das Konto einrichten, dann bekommt Michaela (bzw. wer
im Konto hinterlegt ist) automatisch eine Mail, wenn ein Build fehlschlaegt - unabhaengig
davon, ob er durch eine Notion-Aenderung, diesen Cron-Trigger oder manuell ausgeloest wurde.

Zusaetzliche Sicherheit: Da lib/notion.ts jetzt bei fehlenden Umgebungsvariablen oder echten
Notion-Fehlern den Build bewusst abbrechen laesst (siehe Migrations-Commit), zeigt ein
fehlgeschlagener Build zuverlaessig an, dass etwas mit den Notion-Daten nicht stimmt - die
alte Version der Seite bleibt in der Zwischenzeit unveraendert online (Cloudflare Pages
ersetzt ein Deployment nur bei erfolgreichem Build).
