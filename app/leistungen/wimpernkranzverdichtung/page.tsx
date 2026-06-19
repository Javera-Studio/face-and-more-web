import type { Metadata } from 'next'
import Wimpernkranzverdichtung from '@/views/Wimpernkranzverdichtung'

export const metadata: Metadata = {
  title: 'Wimpernkranzverdichtung Wien',
  description: 'Wimpernkranzverdichtung in Wien bei FACE AND MORE — voller, natürlicher Wimpernkranz ohne Extensions. Schonende Behandlung für mehr Volumen und Ausdruck.',
  alternates: { canonical: '/leistungen/wimpernkranzverdichtung' },
  openGraph: {
    title: 'Wimpernkranzverdichtung Wien | FACE AND MORE',
    description: 'Wimpernkranzverdichtung in Wien: voller, natürlicher Wimpernkranz ohne Extensions — schonend und effektiv.',
    url: 'https://faceandmore.at/leistungen/wimpernkranzverdichtung',
  },
}

export default function Page() {
  return <Wimpernkranzverdichtung />
}