import type { Metadata } from 'next'
import AllgemeineHautberatung from '@/views/hautcoaching/AllgemeineHautberatung'

export const metadata: Metadata = {
  title: 'Allgemeine Hautberatung Wien',
  description: 'Individuelle Hautberatung in Wien bei FACE AND MORE — persönliche Analyse deiner Haut, Aufbau einer passenden Pflegeroutine und Empfehlungen für langfristig gesunde Haut.',
  alternates: { canonical: '/hautcoaching/allgemeine-hautberatung' },
  openGraph: {
    title: 'Allgemeine Hautberatung Wien | FACE AND MORE',
    description: 'Individuelle Hautberatung in Wien: persönliche Analyse, passende Pflegeroutine und Empfehlungen für gesunde Haut.',
    url: 'https://faceandmore.at/hautcoaching/allgemeine-hautberatung',
  },
}

export default function Page() {
  return <AllgemeineHautberatung />
}