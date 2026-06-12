import type { Metadata } from 'next'
import ReifeHaut from '@/views/hautcoaching/ReifeHaut'

export const metadata: Metadata = {
  title: 'Hautcoaching reife Haut Wien',
  description: 'Hautcoaching für reife Haut in Wien bei FACE AND MORE — gezielte Beratung und Behandlung bei Falten, Elastizitätsverlust und den besonderen Bedürfnissen reifer Haut.',
  openGraph: {
    title: 'Hautcoaching reife Haut Wien | FACE AND MORE',
    description: 'Hautcoaching für reife Haut in Wien: gezielte Behandlung bei Falten, Elastizitätsverlust und den Bedürfnissen reifer Haut.',
    url: 'https://faceandmore.at/hautcoaching/reife-haut',
  },
}

export default function Page() {
  return <ReifeHaut />
}