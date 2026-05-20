import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-microneedling.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/studio.jpg";
import g3 from "@/assets/michaela.jpg";

const Microneedling = () => (
  <TreatmentPage
    eyebrow="Microneedling Wien"
    title={<>Straffere und strahlendere Haut mit <span className="italic text-primary">Microneedling</span>.</>}
    subtitle="Effektive Behandlung gegen Falten, Narben, große Poren und müde Haut."
    intro="Microneedling ist eine moderne und effektive Behandlung zur Verbesserung des Hautbildes. Die Haut wirkt straffer, frischer und ebenmäßiger. Besonders bei Falten, Narben, großen Poren oder schlaffer Haut können bereits nach der ersten Behandlung sichtbare Ergebnisse erzielt werden."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Verfeinertes Hautbild",
      "Straffere und glattere Haut",
      "Minderung von Falten und Narben",
      "Verkleinerte Poren",
      "Anregung der Kollagenbildung",
      "Frischer und strahlender Teint",
    ]}
    process={[
      { t: "Hautanalyse & Beratung", d: "Individuelle Analyse deiner Haut und persönliche Beratung." },
      { t: "Vorbereitung der Haut", d: "Reinigung, Peeling und Desinfektion der Haut." },
      { t: "Microneedling Behandlung", d: "Hyaluron wird mittels Dermapen sanft in die Haut eingeschleust." },
      { t: "Abschluss & Pflege", d: "Beruhigende Abschlussmaske und Pflegehinweise für Zuhause." },
    ]}
    prices={[
      { name: "Microneedling mit Hyaluron", duration: "60 Min", price: "€ 136 inkl. MwSt." },
      { name: "Microneedling mit Hyaluron & Toxome Ampulle", duration: "60 Min", price: "€ 149 inkl. MwSt." },
      { name: "Kurpaket 5 + 1 gratis", duration: "6 Sitzungen", price: "ab € 680" },
    ]}
    faqs={[
  {
    q: "Was passiert bei einer Microneedling Behandlung?",
    a: "Beim Microneedling wird die Haut mit einem Dermapen behandelt. Die feinen Nadeln regen die Hauterneuerung, die Kollagenbildung und die Durchblutung an. Nach Reinigung, Peeling und Desinfektion werden Wirkstoffe wie Hyaluron tief in die Haut eingeschleust. Zum Abschluss beruhigt eine pflegende Maske die Haut. Die Behandlung dauert etwa 60 Minuten.",
  },
  {
    q: "Für welche Hautprobleme eignet sich Microneedling?",
    a: "Microneedling eignet sich besonders bei Falten, Aknenarben, großen Poren, Pigmentflecken, fahlem Teint, schlaffer Haut und trockener Haut. Die Behandlung verbessert die Hautstruktur sichtbar und sorgt für ein ebenmäßigeres, frischeres Hautbild.",
  },
  {
    q: "Welche Wirkung hat Microneedling?",
    a: "Bereits nach der ersten Behandlung wirkt die Haut straffer, glatter und frischer. Der Teint erscheint praller und feiner. Bei mehreren Sitzungen können Falten, Narben, Pigmentflecken und Poren langfristig sichtbar verbessert werden.",
  },
  {
    q: "Wie oft sollte Microneedling durchgeführt werden?",
    a: "Je nach Hauttyp empfehle ich mindestens 3 Behandlungen im Abstand von einigen Wochen. Für ein langfristiges Ergebnis eignet sich anschließend eine Auffrischung etwa alle 6 Monate.",
  },
  {
    q: "Ist Microneedling schmerzhaft?",
    a: "Microneedling gilt als schmerzarme Behandlung. Die feinen Nadeln des Dermapens arbeiten sehr sanft. Manche Bereiche, wie die Stirn, können etwas empfindlicher sein, insgesamt wird die Behandlung aber als gut verträglich empfunden.",
  },
  {
    q: "Was sollte ich nach dem Microneedling beachten?",
    a: "Nach der Behandlung sollte für einige Tage auf direkte Sonne, Solarium, Sauna, starkes Schwitzen und Make-Up verzichtet werden. Ein hoher Sonnenschutz ist besonders wichtig. Leichte Rötungen direkt nach der Behandlung sind normal.",
  },
  {
    q: "Wann sollte Microneedling nicht durchgeführt werden?",
    a: "Microneedling sollte nicht bei offenen Wunden, aktiven Entzündungen, Hautinfektionen, Herpes, Blutgerinnungsstörungen, Couperose oder während bestimmter medizinischer Behandlungen durchgeführt werden. Gerne berate ich dich persönlich dazu.",
  },
  {
    q: "Was ist ein Dermaroller für Zuhause?",
    a: "Ein Dermaroller für Zuhause arbeitet mit kürzeren Nadeln und unterstützt die Hauterneuerung sowie die Aufnahme von Wirkstoffen. Er kann das Hautbild verfeinern und die Haut frischer wirken lassen. Gerne berate ich dich zur richtigen Anwendung und Pflege.",
  },
]}
  />
);

export default Microneedling;
