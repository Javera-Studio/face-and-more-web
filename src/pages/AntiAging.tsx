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
      q: "Für wen sind diese Behandlungen geeignet?",
    a: "Die Behandlungen für reife Haut eignen sich für alle, die Falten, Erschlaffung oder Pigmentveränderungen gezielt angehen möchten. Bereits ab Mitte 30 kann die Haut von speziell abgestimmten Anwendungen profitieren.",
  },
  {
    q: "Wie läuft die Behandlung ab?",
    a: "Vor jeder Behandlung wird die Haut analysiert und die passende Methode individuell gewählt. Je nach Anwendung — ob Microneedling, Microblading oder Fruchtsäure — dauert die Behandlung zwischen 30 und 60 Minuten.",
  },
  {
    q: "Wann sehe ich erste Ergebnisse?",
    a: "Erste Verbesserungen sind oft bereits nach der ersten Sitzung sichtbar — die Haut wirkt strahlender und straffer. Für langanhaltende Ergebnisse empfiehlt sich eine Behandlungskur über mehrere Sitzungen.",
  },
  {
    q: "Wie viele Behandlungen werden empfohlen?",
    a: "Das hängt vom individuellen Hautzustand und dem gewünschten Ergebnis ab. In der Regel werden 3 bis 6 Sitzungen im Abstand von 2 bis 4 Wochen empfohlen. Die genaue Anzahl wird beim ersten Termin gemeinsam besprochen.",
  },
  {
    q: "Sind die Behandlungen auch für empfindliche Haut geeignet?",
    a: "Ja — reife Haut ist oft sensibler, weshalb jede Behandlung individuell angepasst wird. Intensität und verwendete Wirkstoffe werden auf deine Haut abgestimmt, damit die Anwendung so schonend wie möglich ist.",
  },
  {
    q: "Was muss nach der Behandlung beachtet werden?",
    a: "Nach der Behandlung sollte die Haut gut mit Feuchtigkeit versorgt und vor Sonne geschützt werden — ein Sonnenschutz mit SPF 50 ist empfohlen. Leichte Rötungen oder ein Spannungsgefühl sind normal und klingen in der Regel schnell ab.",
  },
  {
    q: "Können mehrere Behandlungen kombiniert werden?",
    a: "Ja — Kombinationen wie Microneedling mit Hyaluron oder ergänzende Ampullen können die Wirkung deutlich verstärken. Welche Kombination für dich sinnvoll ist, wird beim Beratungsgespräch individuell festgelegt.",
    }))}
  />
);

export default AntiAging;
