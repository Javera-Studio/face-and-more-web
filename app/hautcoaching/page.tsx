import type { Metadata } from 'next'
import Hautcoaching from '@/views/Hautcoaching'

export const metadata: Metadata = {
  title: 'Hautcoaching Wien',
  description: 'Persönliches Hautcoaching in Wien bei Michaela Kornherr: Problemhaut, Akne, jugendliche Haut und reife Haut — individuelle Beratung und gezielte Pflegeempfehlungen.',
  alternates: { canonical: '/hautcoaching' },
  openGraph: {
    title: 'Hautcoaching Wien | FACE AND MORE',
    description: 'Persönliches Hautcoaching in Wien: Problemhaut, Akne, jugendliche Haut und reife Haut — individuelle Beratung und gezielte Pflegeempfehlungen.',
    url: 'https://faceandmore.at/hautcoaching',
  },
}

export default function Page() {
  return <Hautcoaching />
}