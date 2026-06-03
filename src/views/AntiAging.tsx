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
    faqs={[
      {
        q: "Für wen sind diese Behandlungen geeignet?",
        a: "Die Behandlungen eignen sich für alle, die Falten, Elastizitätsverlust oder Pigmentveränderungen gezielt verbessern möchten. Bereits ab Mitte 30 kann die Haut von individuell abgestimmten Anti-Aging-Behandlungen profitieren.",
      },
      {
        q: "Wie läuft die Behandlung ab?",
        a: "Vor jeder Behandlung wird die Haut analysiert und die passende Methode individuell ausgewählt. Je nach Anwendung dauert die Behandlung etwa 30 bis 60 Minuten.",
      },
      {
        q: "Wann sind erste Ergebnisse sichtbar?",
        a: "Oft wirkt die Haut bereits nach der ersten Behandlung frischer, glatter und strahlender. Für langfristige Ergebnisse empfiehlt sich eine regelmäßige Behandlungskur.",
      },
      {
        q: "Wie viele Behandlungen werden empfohlen?",
        a: "Die Anzahl der Sitzungen richtet sich nach Hautzustand und gewünschtem Ergebnis. Häufig werden 3 bis 6 Behandlungen im Abstand von einigen Wochen empfohlen.",
      },
      {
        q: "Sind die Behandlungen auch für empfindliche Haut geeignet?",
        a: "Ja — jede Behandlung wird individuell an die Haut angepasst. Wirkstoffe und Intensität werden so gewählt, dass die Haut möglichst schonend behandelt wird.",
      },
      {
        q: "Was sollte nach der Behandlung beachtet werden?",
        a: "Nach der Behandlung sollte die Haut intensiv gepflegt und mit SPF 50 vor Sonne geschützt werden. Leichte Rötungen oder Spannungsgefühle sind kurzfristig normal.",
      },
      {
        q: "Können verschiedene Behandlungen kombiniert werden?",
        a: "Ja — Kombinationen wie Microneedling mit Wirkstoffampullen oder ergänzende Pflegebehandlungen können die Ergebnisse zusätzlich unterstützen und verstärken.",
      },
    ]}
  />
);

export default AntiAging;