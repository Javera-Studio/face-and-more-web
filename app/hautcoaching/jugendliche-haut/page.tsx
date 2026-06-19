import type { Metadata } from 'next'
import JugendlicheHaut from '@/views/hautcoaching/JugendlicheHaut'

export const metadata: Metadata = {
  title: 'Hautcoaching für Jugendliche Wien',
  description: 'Hautcoaching für Jugendliche in Wien bei FACE AND MORE — sanfte Beratung und Behandlung bei Pubertätsakne, Unreinheiten und dem Aufbau einer ersten Pflegeroutine.',
  alternates: { canonical: '/hautcoaching/jugendliche-haut' },
  openGraph: {
    title: 'Hautcoaching für Jugendliche Wien | FACE AND MORE',
    description: 'Hautcoaching für Jugendliche in Wien: sanfte Behandlung bei Pubertätsakne und Aufbau einer ersten Pflegeroutine.',
    url: 'https://faceandmore.at/hautcoaching/jugendliche-haut',
  },
}

export default function Page() {
  return <JugendlicheHaut />
}