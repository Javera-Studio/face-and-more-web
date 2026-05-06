import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-akne.jpg";
import g1 from "@/assets/treatment-skin.jpg";
import g2 from "@/assets/treatment-facial.jpg";
import g3 from "@/assets/studio.jpg";

const Akne = () => (
  <TreatmentPage
    eyebrow="Aknebehandlung Wien"
    title={<>Aknebehandlung — <span className="italic text-primary">klärend</span> & nachhaltig.</>}
    subtitle="Ein durchdachtes Konzept aus Hautanalyse, professioneller Behandlung und passender Heimpflege — für ein dauerhaft klareres Hautbild."
    intro="Akne hat viele Ursachen. Statt symptomatisch zu reagieren, beginnen wir mit einer fundierten Hautanalyse und entwickeln eine Strategie, die langfristig wirkt — sanft, professionell und individuell auf deine Haut abgestimmt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Sichtbare Reduktion von Unreinheiten",
      "Beruhigte, ausgeglichene Haut",
      "Verfeinerte Poren",
      "Stärkere, widerstandsfähigere Hautbarriere",
      "Individuelle Heimpflegeempfehlung",
      "Persönliche Begleitung über mehrere Schritte",
    ]}
    process={[
      { t: "Beratung", d: "Persönliches Gespräch zu Hautbild, Pflege & Lebensstil." },
      { t: "Hautanalyse", d: "Fundierte Bestimmung von Hautzustand und Ursachen." },
      { t: "Behandlung", d: "Tiefenreinigung & Wirkstofftherapie — sanft und gezielt." },
      { t: "Pflegeempfehlung", d: "Individueller Pflegeplan für nachhaltige Ergebnisse." },
    ]}
    prices={[
      { name: "Erstberatung & Hautanalyse", duration: "60 Min", price: "ab € 65" },
      { name: "Aknebehandlung", duration: "75 Min", price: "ab € 95" },
      { name: "Akne — Serie 4er Paket", duration: "4 × 75 Min", price: "ab € 340", note: "Für nachhaltige Ergebnisse" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Akne;
