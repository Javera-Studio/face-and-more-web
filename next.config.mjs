// Externe Ressourcen, die diese Website tatsächlich einbindet (Stand: Security-Review 2026-07-11):
// - Google Fonts: CSS-Import in app/globals.css lädt das Stylesheet von fonts.googleapis.com,
//   die eigentlichen Font-Dateien kommen danach von fonts.gstatic.com (next/font wird hier NICHT genutzt)
// - Google Maps Embed-iframe im SiteFooter (Standort-Karte): www.google.com
// - Notion als Headless-CMS (lib/notion.ts, server-seitig via @notionhq/client) liefert Cover-/Angebotsbilder
//   als https-URLs mit wechselnden Hosts (Notion-S3-Buckets oder von der Studio-Inhaberin frei gewählte externe
//   Bild-URLs) -> img-src kann hier keine feste Hostliste enumerieren, daher pauschal https: erlaubt (Bilder
//   können kein Skript ausführen, das Risiko eines weiten img-src ist gering)
// - Keine Analytics-Snippets (kein GA/GTM/Meta Pixel), keine Payment-Widgets
// - WhatsApp (wa.me) und Treatwell-Buchung (trea.tw) sind reine Links (<a target="_blank">), keine Embeds
//   -> keine CSP-Freigabe nötig, normale Navigation wird von CSP nicht eingeschränkt
// - Next.js App Router benötigt 'unsafe-inline' in script-src/style-src für seine eigenen Hydration-/
//   RSC-Inline-Scripts und für inline style={{}}-Props, die im gesamten Repo verwendet werden
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self'",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      { source: '/anwendungen', destination: '/leistungen', permanent: true },
      { source: '/face-and-more', destination: '/kontakt', permanent: true },
      { source: '/services-produkte', destination: '/produkte', permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // Replace next-image-loader with asset/resource so that
    // `import img from './image.jpg'` returns a URL string (Vite-compatible behavior)
    function processRules(rules) {
      return rules.map((rule) => {
        if (!rule) return rule

        if (rule.oneOf) {
          return { ...rule, oneOf: processRules(rule.oneOf) }
        }

        if (
          rule.use &&
          Array.isArray(rule.use) &&
          rule.use.some(
            (u) =>
              u &&
              typeof u.loader === 'string' &&
              (u.loader.includes('next-image-loader') ||
                u.loader.includes('image-loader'))
          )
        ) {
          return {
            test: rule.test,
            issuer: rule.issuer,
            type: 'asset/resource',
            generator: { filename: 'static/media/[name].[contenthash][ext]' },
          }
        }

        return rule
      })
    }

    config.module.rules = processRules(config.module.rules)
    return config
  },
}

export default nextConfig
