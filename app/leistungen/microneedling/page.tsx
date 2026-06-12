import type { Metadata } from 'next'
import Microneedling from '@/views/Microneedling'

export const metadata: Metadata = {
  title: 'Microneedling Wien',
  description: 'Microneedling in Wien bei FACE AND MORE — effektive Kollagenregeneration für straffere Haut, Reduktion von Narben und feinen Linien. Professionell und sicher durchgeführt.',
  openGraph: {
    title: 'Microneedling Wien | FACE AND MORE',
    description: 'Microneedling in Wien: effektive Kollagenregeneration für straffere Haut und Reduktion von Narben und feinen Linien.',
    url: 'https://faceandmore.at/leistungen/microneedling',
  },
}

export default function Page() {
  return <Microneedling />
}