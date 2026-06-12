import type { Metadata } from 'next'
import UeberMich from '@/views/UeberMich'

export const metadata: Metadata = {
  title: 'Über Michaela Kornherr',
  description: 'Lerne Michaela Kornherr kennen — zertifizierte Kosmetikerin und Gründerin von FACE AND MORE Wien. Jahrelange Erfahrung in professioneller Hautpflege, Hautanalyse und Behandlung.',
  openGraph: {
    title: 'Über Michaela Kornherr | FACE AND MORE Wien',
    description: 'Michaela Kornherr — zertifizierte Kosmetikerin und Gründerin von FACE AND MORE Wien mit jahrelanger Erfahrung in Hautpflege und Behandlung.',
    url: 'https://faceandmore.at/ueber-mich',
  },
}

export default function Page() {
  return <UeberMich />
}