import TreatmentPage from "@/components/TreatmentPage";
import img from "@/assets/treatment-fruchtsaeure.jpg";

const Fruchtsaeure = () => (
  <TreatmentPage
    eyebrow="Fruchtsäure Behandlung Wien"
    title={<>Fruchtsäure — sanft <span className="italic text-primary">erneuern.</span></>}
    intro="Eine professionelle Fruchtsäure-Behandlung erneuert die Haut, klärt das Hautbild und hinterlässt einen sichtbaren Glow."
    image={img}
    longText={
      <>
        <p>Fruchtsäuren (AHA / BHA) zählen zu den effektivsten Wirkstoffen für eine sichtbare Hautverbesserung. Sie lösen abgestorbene Hautzellen, regen die Erneuerung an und gleichen das Hautbild aus — ideal bei Unreinheiten, Pigmentflecken oder fahler Haut.</p>
        <p>Im Studio wähle ich die passende Säure und Konzentration individuell für deine Haut. So profitierst du vom maximalen Effekt — bei höchster Verträglichkeit.</p>
      </>
    }
    benefits={[
      "Ebenmäßiges Hautbild",
      "Reduktion von Pigmentflecken",
      "Glow & Frische",
      "Verfeinerte Poren",
      "Klärt Unreinheiten",
      "Ideal als Serie",
    ]}
    process={[
      { t: "Reinigung", d: "Vorbereitung der Haut." },
      { t: "Säure-Auftrag", d: "Individuell dosiert auf deine Haut." },
      { t: "Neutralisation", d: "Sanfte Beruhigung der Haut." },
      { t: "Pflege & Schutz", d: "Beruhigende Pflege & SPF-Empfehlung." },
    ]}
    results={[
      "Sichtbar ebenmäßigeres Hautbild",
      "Frischer Glow direkt nach der Behandlung",
      "Stärkste Effekte in einer Kur (4–6 Behandlungen)",
    ]}
    meta={{ duration: "45 Min", price: "ab € 85", intervals: "alle 2–4 W." }}
    faqs={[
      { q: "Brennt die Fruchtsäure?", a: "Ein leichtes Kribbeln ist normal — angenehm und kontrolliert." },
      { q: "Welche Hauttypen profitieren?", a: "Fast alle. Die Konzentration wird individuell gewählt — auch sensible Haut wird sanft behandelt." },
      { q: "Brauche ich Sonnenschutz?", a: "Ja, unbedingt. SPF 30+ ist nach jeder Säurebehandlung Pflicht." },
    ]}
  />
);

export default Fruchtsaeure;
