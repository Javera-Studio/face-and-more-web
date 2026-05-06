import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-pmu.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/michaela.avif";
import g3 from "@/assets/studio.jpg";

const Microblading = () => (
  <TreatmentPage
    eyebrow="Microblading Wien"
    title={<>Natürlich schöne Augenbrauen mit präzisem <span className="italic text-primary">Microblading</span>.</>}
    subtitle="Typgerechtes Microblading und Permanent Make-Up für natürliche und harmonische Ergebnisse."
    intro="Mit Microblading können Augenbrauen auf natürliche Weise verdichtet und neu geformt werden. Feine pigmentierte Härchen sorgen für ein harmonisches und typgerechtes Ergebnis, das deine natürliche Schönheit dezent unterstreicht."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Natürliche Härchenoptik",
      "Kein tägliches Nachzeichnen",
      "Typgerechte, harmonische Form",
      "Langanhaltendes Ergebnis",
      "Ideal bei lückenhaften Brauen",
      "Individuelle Farbabstimmung",
    ]}
    process={[
      { t: "Persönliche Beratung", d: "Wünsche, Form und Farbe besprechen." },
      { t: "Vorzeichnung", d: "Symmetrie- und Formfindung — passend zu deinem Gesicht." },
      { t: "Pigmentierung", d: "Präzises Setzen feiner Härchen." },
      { t: "Pflege & Nachbehandlung", d: "Pflegehinweise und Refresh-Termin." },
    ]}
    prices={[
      { name: "Microblading inkl. Nachbehandlung", duration: "120 Min", price: "ab € 380" },
      { name: "Permanent Make-Up Brauen", duration: "120 Min", price: "ab € 420" },
      { name: "Refresh (innerhalb 12 Monaten)", duration: "75 Min", price: "ab € 180" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Microblading;
