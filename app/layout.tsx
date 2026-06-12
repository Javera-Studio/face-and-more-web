import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FACE AND MORE Wien | Hautanalyse & Premium Hautpflege',
    template: '%s | FACE AND MORE Wien',
  },
  description: 'Moderne 3D-Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.',
  authors: [{ name: 'FACE AND MORE by Michaela Kornherr' }],
  metadataBase: new URL('https://faceandmore.at'),
  openGraph: {
    title: 'FACE AND MORE Wien | Hautanalyse & Premium Hautpflege',
    description: 'Moderne 3D-Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.',
    url: 'https://faceandmore.at',
    siteName: 'FACE AND MORE',
    locale: 'de_AT',
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'FACE AND MORE',
  description: 'Moderne 3D-Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.',
  url: 'https://faceandmore.at',
  telephone: '+43 677 6292 0665',
  email: 'office@faceandmore.at',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wien',
    addressCountry: 'AT',
  },
  priceRange: '€€',
  image: 'https://faceandmore.at/og-image.jpg',
  sameAs: ['https://www.instagram.com/faceandmore.at'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
