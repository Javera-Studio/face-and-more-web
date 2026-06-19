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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FACE AND MORE Wien — Hautanalyse & Premium Hautpflege',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FACE AND MORE Wien | Hautanalyse & Premium Hautpflege',
    description: 'Moderne 3D-Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'FACE AND MORE',
  description: 'Moderne 3D-Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.',
  url: 'https://faceandmore.at',
  telephone: '+43 677 62 920 665',
  email: 'michaela@faceandmore.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wolfsaugasse 6/2',
    postalCode: '1200',
    addressLocality: 'Wien',
    addressCountry: 'AT',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:30',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '08:30',
      closes: '13:00',
    },
  ],
  priceRange: '€€',
  image: 'https://faceandmore.at/og-image.jpg',
  sameAs: [
    'https://www.instagram.com/faceandmorewien/',
    'https://www.facebook.com/faceandmore.wien',
  ],
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
