import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-antiaging.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/treatment-skin.jpg";
import g3 from "@/assets/studio.jpg";

const AntiAging = () => (
  <TreatmentPage
    eyebrow="Anti Aging Behandlung Wien"
    title={<>Anti Aging — <span className="italic text-primary">vital</span> & in Würde.</>}
    subtitle="Moderne Wirkstofftherapie und gezielte Behandlungen, die deine Haut langfristig stärken — ohne sie zu verändern."
    intro="Mein Verständnis von Anti Aging: Deine Haut soll gesund, vital und du selbst sein dürfen — nur in der besten Version. Mit gezielten Treatments unterstütze ich die natürliche Erneuerung und mildere sichtbare Zeichen der Zeit."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Sichtbar strafferes Hautbild",
      "Reduktion feiner Linien",
      "Mehr Spannkraft & Frische",
      "Gleichmäßiger, vitaler Teint",
      "Stärkere Hautbarriere",
      "Langfristige Hautstabilität",
    ]}
    process={[
      { t: "Beratung", d: "Hautziele und Lebensstil besprechen." },
      { t: "Analyse", d: "Status deiner Haut präzise erfassen." },
      { t: "Behandlung", d: "Hochwertige Wirkstoffe & ruhige Techniken." },
      { t: "Pflegeempfehlung", d: "Aufbauende Pflege für nachhaltige Effekte." },
    ]}
    prices={[
      { name: "Anti Aging Behandlung", duration: "75 Min", price: "ab € 120" },
      { name: "Anti Aging Premium", duration: "90 Min", price: "ab € 150" },
      { name: "Anti Aging 4er Serie", duration: "4 × 75 Min", price: "ab € 440", note: "Optimale Wirkung in Serie" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default AntiAging;
