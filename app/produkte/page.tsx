import type { Metadata } from 'next'
import Produkte from '@/views/Produkte'

export const metadata: Metadata = {
  title: 'ASAP Hautpflegeprodukte Wien',
  description: 'Professionelle ASAP Hautpflegeprodukte bei FACE AND MORE Wien — Australian Skin Active Products, wissenschaftlich entwickelt für sichtbare Ergebnisse.',
  alternates: { canonical: '/produkte' },
  openGraph: {
    title: 'ASAP Hautpflegeprodukte Wien | FACE AND MORE',
    description: 'Professionelle ASAP Hautpflegeprodukte in Wien — australische Hautpflege, wissenschaftlich entwickelt für sichtbare Ergebnisse.',
    url: 'https://faceandmore.at/produkte',
  },
}

export default function Page() {
  return <Produkte />
}