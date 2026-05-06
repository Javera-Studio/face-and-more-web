import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-microneedling.jpg";
import g1 from "@/assets/treatment-antiaging.jpg";
import g2 from "@/assets/treatment-facial.jpg";
import g3 from "@/assets/studio.jpg";

const Microneedling = () => (
  <TreatmentPage
    eyebrow="Microneedling Wien"
    title={<>Microneedling — <span className="italic text-primary">Glow</span> aus der Tiefe.</>}
    subtitle="Aktiviert die natürliche Hauterneuerung, glättet das Hautbild und sorgt für sichtbar straffere, vitalere Haut."
    intro="Microneedling stimuliert die körpereigene Kollagenproduktion und verbessert Hautstruktur, Porenbild, feine Linien und Narben. Eine moderne Behandlung für nachhaltige Hautverbesserung — mit echtem Glow-Effekt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Strafferes, festeres Hautbild",
      "Sichtbare Reduktion feiner Linien",
      "Glättung von Aknenarben",
      "Verfeinerte Poren",
      "Frischer, gesunder Glow",
      "Tiefe Wirkstoffaufnahme",
    ]}
    process={[
      { t: "Beratung", d: "Hautziele & Verträglichkeit besprechen." },
      { t: "Analyse", d: "Bewertung von Hautstruktur und Bedarf." },
      { t: "Behandlung", d: "Microneedling mit professionellem Pen-Gerät." },
      { t: "Pflegeempfehlung", d: "Wirkstoffserum, Beruhigung & Sonnenschutz." },
    ]}
    prices={[
      { name: "Microneedling Single", duration: "75 Min", price: "ab € 140" },
      { name: "Microneedling 3er Serie", duration: "3 × 75 Min", price: "ab € 390", note: "Beste Ergebnisse in Serie" },
      { name: "Microneedling Premium + Maske", duration: "90 Min", price: "ab € 175" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Microneedling;
