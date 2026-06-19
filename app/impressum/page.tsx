import type { Metadata } from 'next'
import Impressum from '@/views/Impressum'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von FACE AND MORE — Michaela Kornherr, Wolfsaugasse 6/2, 1200 Wien.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/impressum' },
}

export default function Page() {
  return <Impressum />
}
