import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-fruchtsaeure.jpg";
import g1 from "@/assets/treatment-skin.jpg";
import g2 from "@/assets/treatment-facial.jpg";
import g3 from "@/assets/studio.jpg";

const Fruchtsaeure = () => (
  <TreatmentPage
    eyebrow="Fruchtsäurebehandlung Wien"
    title={<>Fruchtsäure — <span className="italic text-primary">sanfte</span> Hauterneuerung.</>}
    subtitle="Ein moderner Klassiker für ein frisches, ebenmäßiges Hautbild — gezielt, sanft und sichtbar wirksam."
    intro="Fruchtsäure löst sanft abgestorbene Hautzellen, regt die Zellerneuerung an und sorgt für ein klareres, frischeres Hautbild. Ideal bei Pigmentflecken, Unreinheiten oder fahlem Teint — individuell auf deine Haut abgestimmt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Frischer, ebenmäßiger Teint",
      "Reduktion von Pigmentflecken",
      "Klärung bei Unreinheiten",
      "Verfeinerte Poren",
      "Sichtbarer Glow-Effekt",
      "Individuelle Konzentrationen",
    ]}
    process={[
      { t: "Beratung", d: "Hautziele & passende Säurekonzentration." },
      { t: "Analyse", d: "Beurteilung von Hautzustand und Verträglichkeit." },
      { t: "Behandlung", d: "Sanfte Anwendung der Fruchtsäure." },
      { t: "Pflegeempfehlung", d: "Beruhigende Pflege & UV-Schutz." },
    ]}
    prices={[
      { name: "Fruchtsäure Klassik", duration: "60 Min", price: "ab € 85" },
      { name: "Fruchtsäure Premium", duration: "75 Min", price: "ab € 110" },
      { name: "Fruchtsäure 4er Serie", duration: "4 × 60 Min", price: "ab € 300", note: "Für sichtbare Resultate" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Fruchtsaeure;
