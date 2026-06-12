import type { Metadata } from 'next'
import Hautanalyse from '@/views/Hautanalyse'

export const metadata: Metadata = {
  title: 'Moderne 3D-Hautanalyse Wien',
  description: 'Professionelle 3D-Hautanalyse in Wien mit modernster Technologie. Erkenne deinen genauen Hauttyp, Pigmentierung, Poren und Feuchtigkeit — die Basis für jede wirksame Hautpflege.',
  openGraph: {
    title: 'Moderne 3D-Hautanalyse Wien | FACE AND MORE',
    description: 'Professionelle 3D-Hautanalyse in Wien: Erkenne deinen genauen Hauttyp und erhalte eine individuelle Pflegeempfehlung.',
    url: 'https://faceandmore.at/hautanalyse',
  },
}

export default function Page() {
  return <Hautanalyse />
}