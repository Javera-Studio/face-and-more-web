# FACE AND MORE Wien – Projektnotizen

Next.js-Website (App Router) für FACE AND MORE (faceandmore.at), Kosmetikstudio von Michaela Kornherr in Wien. Gebaut und betreut von JAVERA Studio.

---

# Security Standards für JAVERA Next.js Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (SECURITY-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung — bei Änderungen am Standard beide Stellen synchron halten.

Diese Standards gelten für **jedes** Next.js-Projekt, das für JAVERA Studio Kunden gebaut wird. Bei Projektstart und vor jedem Production-Deploy prüfen und umsetzen.

## 1. HTTP Security Header (Code-Ebene — immer umsetzen)

In `next.config.js` bzw. `next.config.ts` per `headers()` setzen:

- **Content-Security-Policy (CSP)** — vor dem Setzen IMMER zuerst den Code nach allen extern eingebundenen Ressourcen scannen (Fonts, Analytics-Snippets, Notion-/Elementor-Embeds, Maps-Embeds, Payment-Widgets, Booking-Tools wie Treatwell/Calendly) und die CSP passend dazu bauen. Nie eine generische CSP blind übernehmen — danach lokal testen und Browser-Konsole (F12) auf CSP-Verstöße prüfen.
- **Strict-Transport-Security** — `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options** — `SAMEORIGIN` (Clickjacking-Schutz)
- **X-Content-Type-Options** — `nosniff`
- **Referrer-Policy** — `strict-origin-when-cross-origin`
- **Permissions-Policy** — nicht genutzte Browser-Features explizit sperren (`camera=()`, `microphone=()`, `geolocation=()` außer bei Standort-Feature wie Anfahrtsbeschreibung)

Nach jedem Deploy: Ergebnis mit securityheaders.com gegenchecken (Ziel: mind. Note A).

Umsetzung in diesem Repo: `next.config.mjs`. Diese Website bindet extern nur ein: Google Fonts (CSS-Import in `app/globals.css`, lädt von `fonts.googleapis.com` + `fonts.gstatic.com`, next/font wird nicht genutzt), ein Google-Maps-Embed-iframe im Footer (`src/components/SiteFooter.tsx`, `www.google.com`) sowie Cover-/Angebotsbilder aus Notion (`lib/notion.ts`, wechselnde https-Hosts — daher `img-src` pauschal `https:`). WhatsApp- (`wa.me`) und Treatwell-Buchungslinks (`trea.tw`) sind reine `<a target="_blank">`-Links, keine Embeds, daher nicht in der CSP. Kein Analytics/GTM/Pixel im Einsatz.

## 2. CORS

- `Access-Control-Allow-Origin: *` nur setzen, wenn wirklich öffentliche Assets (z. B. Fonts, Bilder für externe Einbindung) betroffen sind — niemals bei API-Routen mit sensiblen Daten (Formulardaten, Buchungen)
- Next.js API-Routes: CORS explizit und restriktiv pro Route konfigurieren, nicht global öffnen

Umsetzung in diesem Repo: entfällt aktuell — es gibt keine API-Routes (`app/api/**`) und kein Kontaktformular. Terminanfragen laufen ausschließlich über externe Kanäle (WhatsApp-Link, Treatwell-Buchungsseite). Falls künftig ein eigenes Kontaktformular mit API-Route hinzukommt, Abschnitt 3 (Rate-Limiting, Honeypot, serverseitige Validierung) verbindlich nachrüsten.

## 3. Formulare & API-Routes

- Serverseitige Validierung IMMER zusätzlich zur Client-Validierung (Client-Checks sind umgehbar)
- Rate-Limiting auf API-Routes gegen Spam/Missbrauch von Kontaktformularen
- Honeypot-Feld oder einfaches CAPTCHA gegen Bot-Spam bei Buchungsanfragen
- Keine API-Keys, SMTP-Zugangsdaten o. ä. im Client-Bundle — nur `NEXT_PUBLIC_`-Prefix für Werte, die wirklich öffentlich sein dürfen. Alles andere ausschließlich als Server-Env-Variable in Vercel, nie ins Git-Repo committen (`.env.local` in `.gitignore`)

Umsetzung in diesem Repo: Der `NOTION_TOKEN` (siehe `lib/notion.ts`) wird ausschließlich serverseitig (Server Components, Build-Zeit) verwendet und taucht in keinem Client-Bundle auf. `.env*` ist in `.gitignore` erfasst. Kein Kontaktformular vorhanden, daher aktuell kein Rate-Limiting/Honeypot nötig — sobald ein Formular hinzukommt, `src/lib/rate-limit.ts` aus dem javera-studio-Repo als Vorlage übernehmen (self-contained, keine Dependencies).

## 4. Dependencies

- Vor Projektabschluss: `npm audit` laufen lassen, kritische/hohe Findings fixen
- Dependabot bzw. Vercel-eigene Update-Hinweise aktivieren, wo möglich
- Keine veralteten/unmaintained Packages für sicherheitsrelevante Funktionen (Auth, Payment, Formular-Handling)

Stand Security-Review 2026-07-11: `npm audit fix` (ohne `--force`) angewendet, dadurch 6 von 11 Findings behoben (brace-expansion, form-data, lodash, minimatch, picomatch, yaml). Verbleibend 5 Findings (1 moderate, 4 high) — alle erfordern ein Major-Upgrade auf `next@16` (aktuell `next@^14.2.5`) bzw. hängen daran (`postcss`, `glob` via `eslint-config-next`). Bewusst nicht mit `--force` gefixt, da Next 14→16 ein breaking Major-Upgrade ist und eigenes Testing/Review braucht — als separate Aufgabe einplanen.

## 5. robots.txt, sitemap.xml, security.txt

- `robots.txt` und `sitemap.xml` Standard bei jedem Projekt
- `/.well-known/security.txt` ergänzen (RFC 9116)

Umsetzung in diesem Repo: `public/robots.txt`, `app/sitemap.ts`, `public/.well-known/security.txt`.

## 6. Mixed Content

- Sicherstellen, dass ALLE eingebundenen Ressourcen (Bilder, Scripts, Fonts, iframes) über `https://` geladen werden, keine `http://`-Referenzen

Geprüft 2026-07-11: keine `http://`-Ressourcen im Code (nur SVG-Namespace-URIs `http://www.w3.org/2000/svg`, keine echten Ressourcen-Loads).

## 7. Dinge, die NICHT im Code passieren (manuell prüfen/einstellen, aber im Report erwähnen)

| Punkt | Wo einstellen | Warum wichtig |
|---|---|---|
| **DNSSEC** | Beim Domain-Registrar | Schützt vor DNS-Spoofing/Cache-Poisoning |
| **DNS CAA-Record** | Beim DNS-Provider | Legt fest, welche CAs Zertifikate für die Domain ausstellen dürfen |
| **SSL/TLS-Zertifikat** | Bei Vercel automatisch (Let's Encrypt), bei Fremd-Hosting prüfen | Auto-Renewal + TLS 1.3 |
| **SPF / DKIM / DMARC** | Beim E-Mail-/DNS-Provider | Schützt die Domain vor E-Mail-Spoofing/Phishing |
| **Malware-/Blacklist-Scan** | Google Safe Browsing, VirusTotal, Sucuri SiteCheck | Bei jedem Webseitencheck durchführen |
| **Registrar-Zugang/2FA** | Beim Registrar | Kompromittierte Registrar-Logins sind ein häufiger Grund für gehackte Kundenseiten |
