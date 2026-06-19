import type { Metadata } from 'next'
import Leistungen from '@/views/Leistungen'

export const metadata: Metadata = {
  title: 'Behandlungen & Leistungen',
  description: 'Professionelle Hautbehandlungen in Wien: Gesichtsbehandlung, Akne, Anti-Aging, Microneedling, Microblading, Fruchtsäure-Peeling und mehr — individuell abgestimmt auf deine Haut.',
  alternates: { canonical: '/leistungen' },
  openGraph: {
    title: 'Behandlungen & Leistungen | FACE AND MORE Wien',
    description: 'Professionelle Hautbehandlungen in Wien: Gesichtsbehandlung, Akne, Anti-Aging, Microneedling, Microblading, Fruchtsäure-Peeling und mehr.',
    url: 'https://faceandmore.at/leistungen',
  },
}

export default function Page() {
  return <Leistungen />
}