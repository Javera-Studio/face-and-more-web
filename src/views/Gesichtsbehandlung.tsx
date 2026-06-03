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
    faqs={[
  {
    q: "Was bewirkt eine kosmetische Gesichtsbehandlung?",
    a: "Eine kosmetische Gesichtsbehandlung unterstützt die Hauterneuerung, verbessert die Durchblutung und hilft der Haut, Wirkstoffe besser aufzunehmen. Bereits nach der ersten Behandlung wirkt die Haut oft frischer, gepflegter und strahlender.",
  },
  {
    q: "Wie läuft eine Gesichtsbehandlung bei Face and More ab?",
    a: "Die Behandlung beginnt mit einer gründlichen Reinigung und Hautanalyse. Danach folgen Peeling, Maske, Ausreinigung und individuell abgestimmte Wirkstoffe. Eine entspannende Massage und passende Abschlusspflege runden die Behandlung ab.",
  },
  {
    q: "Warum ist ein Peeling bei der Gesichtsbehandlung wichtig?",
    a: "Ein Peeling entfernt abgestorbene Hautzellen, verfeinert das Hautbild und bereitet die Haut optimal auf Wirkstoffe vor. Dadurch können Pflegeprodukte besser aufgenommen werden und die Haut wirkt glatter, frischer und ebenmäßiger.",
  },
  {
    q: "Wie oft sollte man eine Gesichtsbehandlung machen?",
    a: "Da sich die Haut regelmäßig erneuert, ist eine Behandlung etwa alle 4 bis 6 Wochen sinnvoll. Wie oft eine Behandlung wirklich nötig ist, hängt aber von deinem Hautzustand, deinen Zielen und deiner Pflegeroutine zu Hause ab.",
  },
  {
    q: "Ist die Gesichtsbehandlung auch für Jugendliche geeignet?",
    a: "Ja. Besonders bei unreiner Haut, Mitessern oder ersten Hautproblemen kann eine professionelle Gesichtsbehandlung sehr hilfreich sein. Als Hautcoach erkläre ich Jugendlichen auch, wie sie ihre Haut zu Hause richtig reinigen und pflegen können.",
  },
  {
    q: "Welche Vorteile hat eine Gesichtsmassage?",
    a: "Eine Gesichtsmassage regt die Durchblutung an, entspannt die Muskulatur und unterstützt einen frischen, rosigen Teint. Sie kann Schwellungen reduzieren, die Haut geschmeidiger wirken lassen und sorgt gleichzeitig für eine wohltuende Auszeit.",
  },
]}
  />
);

export default Gesichtsbehandlung;
