import type { Metadata } from 'next'
import Akne from '@/views/Akne'

export const metadata: Metadata = {
  title: 'Akne-Behandlung Wien',
  description: 'Professionelle Akne-Behandlung in Wien bei FACE AND MORE — gezielte Therapie für Unreinheiten, entzündliche Akne und Aknenarben. Individuell abgestimmt auf deine Haut.',
  alternates: { canonical: '/leistungen/akne' },
  openGraph: {
    title: 'Akne-Behandlung Wien | FACE AND MORE',
    description: 'Professionelle Akne-Behandlung in Wien: gezielte Therapie für Unreinheiten, entzündliche Akne und Aknenarben.',
    url: 'https://faceandmore.at/leistungen/akne',
  },
}

export default function Page() {
  return <Akne />
}