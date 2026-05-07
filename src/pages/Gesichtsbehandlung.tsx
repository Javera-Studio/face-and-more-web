import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/gesichtsbehandlung.jpg";
import g1 from "@/assets/treatment-skin.jpg";
import g2 from "@/assets/treatment-antiaging.jpg";
import g3 from "@/assets/studio.jpg";

const Gesichtsbehandlung = () => (
  <TreatmentPage
    eyebrow="Kosmetische Gesichtsbehandlung Wien"
    title={<>Gesichtsbehandlung — <span className="italic text-primary">ruhig</span>, gründlich, persönlich.</>}
    subtitle="Eine moderne Klassik-Behandlung mit Tiefenreinigung, Pflege und Massage — für gesunde, strahlende Haut."
    intro="Jede Haut hat andere Bedürfnisse. Deshalb kombiniere ich entspannende Gesichtsbehandlungen mit persönlichem Hautcoaching und individuell abgestimmter Pflege — für ein gesundes, strahlendes Hautbild und echte Wohlfühlmomente."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Sichtbar gepflegtes Hautbild",
      "Tiefenreinigende Wirkung",
      "Beruhigende Pflege",
      "Frischer, gesunder Glow",
      "Entspannende Atmosphäre",
      "Individuell auf deine Haut abgestimmt",
    ]}
    process={[
      { t: "Beratung", d: "Kurzes Gespräch zu Hautbild & Wünschen." },
      { t: "Reinigung & Analyse", d: "Sanfte Tiefenreinigung & Hautcheck." },
      { t: "Behandlung", d: "Wirkstoffe, Massage und passende Maske." },
      { t: "Pflegeempfehlung", d: "Tipps für die optimale Pflege zu Hause." },
    ]}
    prices={[
      { name: "Klassische Gesichtsbehandlung", duration: "60 Min", price: "ab € 75" },
      { name: "Premium Gesichtsbehandlung", duration: "90 Min", price: "ab € 110" },
      { name: "Express-Pflege", duration: "45 Min", price: "ab € 55", note: "Für zwischendurch" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Gesichtsbehandlung;
