import type { Metadata } from 'next'
import Datenschutz from '@/views/Datenschutz'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von FACE AND MORE Wien gemäß DSGVO.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/datenschutz' },
}

export default function Page() {
  return <Datenschutz />
}
