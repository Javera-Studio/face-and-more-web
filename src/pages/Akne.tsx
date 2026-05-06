import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-acne.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/studio.jpg";
import g3 from "@/assets/michaela.avif";

export default function Akne() {
  return (
    <TreatmentPage
      eyebrow="Aknebehandlung Wien"
      title={<>Gezielte <span className="italic text-primary">Aknebehandlungen</span> für reine und ausgeglichene Haut.</>}
      subtitle="Individuelle Aknebehandlungen und Hautcoaching für jugendliche sowie reife Haut."
      intro="Unreine Haut, Akne oder entzündete Hautstellen..."
      heroImage={hero}
      gallery={[g1, g2, g3]}
      benefits={[
        "Reiniere und ausgeglichenere Haut",
        // ... rest
      ]}
      process={[...]}
      prices={[...]}
      faqs={[...]}
    />
  );
}
