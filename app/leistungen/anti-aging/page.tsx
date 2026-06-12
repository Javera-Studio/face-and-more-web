import type { Metadata } from 'next'
import AntiAging from '@/views/AntiAging'

export const metadata: Metadata = {
  title: 'Anti-Aging Behandlung Wien',
  description: 'Anti-Aging Behandlung in Wien bei FACE AND MORE — gezielte Behandlungen gegen Falten, Hautalterung und Elastizitätsverlust. Für jugendlich aussehende, strahlende Haut.',
  openGraph: {
    title: 'Anti-Aging Behandlung Wien | FACE AND MORE',
    description: 'Anti-Aging Behandlung in Wien: gezielte Therapie gegen Falten, Hautalterung und Elastizitätsverlust.',
    url: 'https://faceandmore.at/leistungen/anti-aging',
  },
}

export default function Page() {
  return <AntiAging />
}