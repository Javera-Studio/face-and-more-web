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

export const revalidate = 120

export default async function HomePage() {
  let offers = []
  try {
    offers = await fetchSpecialOffers()
  } catch (e) {
    // Notion not configured yet — renders without offers section
  }

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
