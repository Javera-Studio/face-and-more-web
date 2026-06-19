import type { Metadata } from 'next'
import Preise from '@/views/Preise'

export const metadata: Metadata = {
  title: 'Preise & Leistungsübersicht',
  description: 'Transparente Preise für alle Behandlungen bei FACE AND MORE Wien: Hautanalyse, Gesichtsbehandlung, Akne, Anti-Aging, Microneedling, Microblading und Hautcoaching.',
  alternates: { canonical: '/preise' },
  openGraph: {
    title: 'Preise & Leistungsübersicht | FACE AND MORE Wien',
    description: 'Transparente Preise für alle Behandlungen in Wien: Hautanalyse, Gesichtsbehandlung, Akne, Anti-Aging, Microneedling, Microblading und Hautcoaching.',
    url: 'https://faceandmore.at/preise',
  },
}

export default function Page() {
  return <Preise />
}