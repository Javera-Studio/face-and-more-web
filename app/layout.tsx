import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FACE AND MORE Wien | Hautanalyse & Premium Hautpflege',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
