import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/home/Hero";
import Concerns from "@/components/home/Concerns";
import SkinAnalysis from "@/components/home/SkinAnalysis";
import Hautcoaching from "@/components/home/Hautcoaching";
import Treatments from "@/components/home/Treatments";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";
import Booking from "@/components/home/Booking";

const Index = () => (
  <SiteLayout>
    <Hero />
    <Concerns />
    <SkinAnalysis />
    <Hautcoaching />
    <Treatments />
    <About />
    <Testimonials />
    <WhyUs />
    <Booking />
  </SiteLayout>
);

export default Index;
