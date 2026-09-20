import type { Metadata } from 'next'
import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/home/Hero";
import SpecialOffers from "@/components/home/SpecialOffers";
import Concerns from "@/components/home/Concerns";
import SkinAnalysis from "@/components/home/SkinAnalysis";
import Hautcoaching from "@/components/home/Hautcoaching";
import Treatments from "@/components/home/Treatments";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import Booking from "@/components/home/Booking";
import { fetchSpecialOffers } from "@/../../lib/notion";

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  // Statischer Export: Notion wird nur einmal beim Build abgefragt, es gibt keine
  // Moeglichkeit zur Laufzeit erneut zu versuchen. Ein Fehlschlag wird bewusst NICHT
  // abgefangen: soll der Build fehlschlagen, statt "erfolgreich" ohne Angebote-Leiste zu
  // deployen. Eine leere Liste (keine aktiven Angebote) ist dagegen ein normaler, gueltiger
  // Zustand und wirft keinen Fehler.
  const offers = await fetchSpecialOffers()

  return (
    <SiteLayout>
      <Hero />
      <SpecialOffers offers={offers} />
      <Concerns />
      <SkinAnalysis />
      <Hautcoaching />
      <Treatments />
      <About />
      <Testimonials />
      <WhyUs />
      <Booking />
    </SiteLayout>
  )
}
