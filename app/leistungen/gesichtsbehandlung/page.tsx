import type { Metadata } from 'next'
import Gesichtsbehandlung from '@/views/Gesichtsbehandlung'

export const metadata: Metadata = {
  title: 'Professionelle Gesichtsbehandlung Wien',
  description: 'Professionelle Gesichtsbehandlung in Wien bei FACE AND MORE — individuelle Tiefenreinigung, Pflege und Aufbau für deinen Hauttyp. Ergebnisse, die man sieht und fühlt.',
  alternates: { canonical: '/leistungen/gesichtsbehandlung' },
  openGraph: {
    title: 'Professionelle Gesichtsbehandlung Wien | FACE AND MORE',
    description: 'Individuelle Gesichtsbehandlung in Wien: Tiefenreinigung, Pflege und Aufbau für deinen Hauttyp.',
    url: 'https://faceandmore.at/leistungen/gesichtsbehandlung',
  },
}

export default function Page() {
  return <Gesichtsbehandlung />
}