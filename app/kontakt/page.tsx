import type { Metadata } from 'next'
import Kontakt from '@/views/Kontakt'

export const metadata: Metadata = {
  title: 'Kontakt & Terminvereinbarung',
  description: 'Nimm Kontakt mit FACE AND MORE Wien auf oder vereinbare einen Termin für deine Hautanalyse, Behandlung oder Hautcoaching — Michaela Kornherr freut sich auf dich.',
  openGraph: {
    title: 'Kontakt & Terminvereinbarung | FACE AND MORE Wien',
    description: 'Kontakt aufnehmen oder Termin vereinbaren für Hautanalyse, Behandlung oder Hautcoaching in Wien.',
    url: 'https://faceandmore.at/kontakt',
  },
}

export default function Page() {
  return <Kontakt />
}