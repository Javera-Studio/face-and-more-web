import type { Metadata } from 'next'
import Microblading from '@/views/Microblading'

export const metadata: Metadata = {
  title: 'Microblading Wien',
  description: 'Microblading in Wien bei FACE AND MORE — natürlich wirkende, dauerhaft schöne Augenbrauen durch präzises Pigmentierverfahren. Zertifizierte Behandlung für perfekten Augenaufschlag.',
  openGraph: {
    title: 'Microblading Wien | FACE AND MORE',
    description: 'Microblading in Wien: natürlich wirkende, dauerhaft schöne Augenbrauen durch präzises Pigmentierverfahren.',
    url: 'https://faceandmore.at/leistungen/microblading',
  },
}

export default function Page() {
  return <Microblading />
}