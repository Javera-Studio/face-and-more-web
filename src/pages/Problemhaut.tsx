import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-skin.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/treatment-akne.jpg";
import g3 from "@/assets/studio.jpg";

const Problemhaut = () => (
  <TreatmentPage
    eyebrow="Problemhaut Wien"
    title={<>Problemhaut — <span className="italic text-primary">verstanden</span> & ausgeglichen.</>}
    subtitle="Wenn deine Haut sensibel, gerötet oder unausgeglichen ist — wir finden gemeinsam einen Weg, der wirklich passt."
    intro="Problemhaut braucht Verständnis statt schneller Lösungen. Wir analysieren in Ruhe, was deine Haut belastet, und entwickeln eine Behandlung, die langfristig stärkt — sanft, individuell und mit echter Begleitung."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Beruhigte, ausgeglichene Haut",
      "Stärkere Hautbarriere",
      "Reduktion von Rötungen",
      "Individuelle Wirkstofftherapie",
      "Langfristige Hautstabilität",
      "Persönliche Begleitung",
    ]}
    process={[
      { t: "Beratung", d: "Persönliches Gespräch zu Beschwerden & Pflegeroutine." },
      { t: "Analyse", d: "Fundierte Hautanalyse — Ursachenforschung statt Symptombehandlung." },
      { t: "Behandlung", d: "Schonende Reinigung & beruhigende Wirkstoffe." },
      { t: "Pflegeempfehlung", d: "Individueller Pflegeplan für zu Hause." },
    ]}
    prices={[
      { name: "Erstberatung & Analyse", duration: "60 Min", price: "ab € 65" },
      { name: "Problemhaut-Behandlung", duration: "75 Min", price: "ab € 95" },
      { name: "Hautberuhigungs-Serie", duration: "4 × 75 Min", price: "ab € 340", note: "Für nachhaltigen Aufbau" },
    ]}
    faqs={Array.from({ length: 8 }, (_, i) => ({
      q: `FAQ ${i + 1}`,
      a: `Antwort ${i + 1} — Platzhaltertext. Hier wird die finale Antwort eingefügt.`,
    }))}
  />
);

export default Problemhaut;
