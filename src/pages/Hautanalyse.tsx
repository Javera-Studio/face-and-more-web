import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/skin-analysis.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/treatment-skin.jpg";
import g3 from "@/assets/studio.jpg";

const Hautanalyse = () => (
  <TreatmentPage
    eyebrow="Hautanalyse Wien"
    title={<>Moderne 3D-<span className="italic text-primary">Hautanalyse</span> in Wien.</>}
    subtitle="Der Einstieg in eine Hautpflege, die wirklich zu dir passt — fundiert, präzise und persönlich besprochen."
    intro="Eine moderne Hautanalyse ist mehr als ein Blick auf die Hautoberfläche. Mit hochauflösender 3D-Technologie machen wir Hautzustände sichtbar, die mit dem bloßen Auge nicht erkennbar sind — und entwickeln einen Pflegeplan, der wirklich passt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Sichtbare Auswertung deiner Haut",
      "Individueller Pflegeplan",
      "Konkrete Behandlungsempfehlungen",
      "Vergleichsmessung bei Folgeterminen",
      "Für jede Haut & jedes Alter geeignet",
      "Persönliche 1:1 Beratung",
    ]}
    process={[
      { t: "Vorgespräch", d: "Hautgeschichte und Ziele besprechen." },
      { t: "3D-Aufnahme", d: "Schmerzfreie, hochauflösende Analyse." },
      { t: "Auswertung", d: "Gemeinsame Besprechung der Ergebnisse." },
      { t: "Pflegeplan", d: "Individuell auf dich abgestimmt." },
    ]}
    prices={[
      { name: "3D Hautanalyse & Beratung", duration: "60 Min", price: "ab € 65" },
      { name: "Folge-Hautanalyse", duration: "45 Min", price: "ab € 45", note: "Für Vergleichsmessung" },
      { name: "Hautanalyse + Pflegeplan", duration: "90 Min", price: "ab € 95" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Hautanalyse;
