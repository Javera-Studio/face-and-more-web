import type { Metadata } from 'next'
import Fruchtsaeure from '@/views/Fruchtsaeure'

export const metadata: Metadata = {
  title: 'Fruchtsäure-Peeling Wien',
  description: 'Professionelles Fruchtsäure-Peeling in Wien bei FACE AND MORE — sanfte chemische Exfoliation für ein gleichmäßiges Hautbild, Verfeinerung der Poren und strahlende Haut.',
  alternates: { canonical: '/leistungen/fruchtsaeure' },
  openGraph: {
    title: 'Fruchtsäure-Peeling Wien | FACE AND MORE',
    description: 'Professionelles Fruchtsäure-Peeling in Wien: sanfte Exfoliation für gleichmäßiges Hautbild und strahlende Haut.',
    url: 'https://faceandmore.at/leistungen/fruchtsaeure',
  },
}

export default function Page() {
  return <Fruchtsaeure />
}