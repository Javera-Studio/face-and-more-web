import type { Metadata } from 'next'
import Problemhaut from '@/views/Problemhaut'

export const metadata: Metadata = {
  title: 'Problemhaut-Behandlung Wien',
  description: 'Gezielte Behandlung für Problemhaut in Wien bei FACE AND MORE — individuelle Therapie bei Unreinheiten, Rötungen, empfindlicher Haut und Mischtyp. Sichtbare Ergebnisse.',
  alternates: { canonical: '/leistungen/problemhaut' },
  openGraph: {
    title: 'Problemhaut-Behandlung Wien | FACE AND MORE',
    description: 'Gezielte Behandlung für Problemhaut in Wien: individuelle Therapie bei Unreinheiten, Rötungen und empfindlicher Haut.',
    url: 'https://faceandmore.at/leistungen/problemhaut',
  },
}

export default function Page() {
  return <Problemhaut />
}