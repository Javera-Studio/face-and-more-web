import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/gesichtsbehandlung.jpg";
import g1 from "@/assets/treatment-skin.jpg";
import g2 from "@/assets/treatment-antiaging.jpg";
import g3 from "@/assets/studio.jpg";

const Gesichtsbehandlung = () => (
  <TreatmentPage
    eyebrow="Kosmetische Gesichtsbehandlung Wien"
    title={<>Gesichtsbehandlung — <span className="italic text-primary">ruhig</span>, gründlich, persönlich.</>}
    subtitle="Jede Haut hat andere Bedürfnisse. Deshalb kombiniere ich entspannende Gesichtsbehandlungen mit persönlichem Hautcoaching und individuell abgestimmter Pflege — für ein gesundes, strahlendes Hautbild und echte Wohlfühlmomente."
    intro="Deine Haut verändert sich ständig — durch Stress, Hormone, Jahreszeiten oder den Alltag. Deshalb arbeite ich nicht mit Standardbehandlungen, sondern stimme jede Gesichtsbehandlung individuell auf deinen Hautzustand und deine Bedürfnisse ab. Mit gezielten Wirkstoffen, entspannender Pflege und persönlichem Hautcoaching entsteht eine Behandlung, die deine Haut langfristig unterstützt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
  "Individuell auf deine Haut abgestimmt",
  "Persönliche Hautberatung & Coaching",
  "Tiefenreinigung & intensive Pflege",
  "Strahlender, frischer Teint",
  "Entspannende Auszeit für dich",
  "Hochwertige Wirkstoffe für nachhaltige Ergebnisse",
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
