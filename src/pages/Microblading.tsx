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
    faqs={[
  {
    q: "Was ist Microblading?",
    a: "Microblading ist eine präzise Härchentechnik, bei der feine pigmentierte Härchen manuell in die Haut eingearbeitet werden. Dadurch wirken die Augenbrauen voller, natürlicher und harmonischer – ganz ohne künstlichen Effekt."
  },
  {
    q: "Für wen ist Microblading geeignet?",
    a: "Die Behandlung eignet sich besonders bei lückenhaften, asymmetrischen oder sehr hellen Augenbrauen. Auch bei Narben, Haarausfall oder nach übermäßigem Zupfen kann Microblading die natürliche Form der Brauen wiederherstellen."
  },
  {
    q: "Wie läuft die Behandlung ab?",
    a: "Vor der Behandlung erfolgt ein ausführliches Beratungsgespräch inklusive Vorzeichnung und Farbabstimmung. Anschließend werden feine Härchen pigmentiert, die optimal zu deinem Gesicht und deiner natürlichen Brauenform passen."
  },
  {
    q: "Wie lange dauert die Behandlung?",
    a: "Die Behandlung dauert in der Regel etwa 2 Stunden. Darin enthalten sind Beratung, Vorzeichnung, Pigmentierung und Pflegehinweise für die Zeit danach."
  },
  {
    q: "Ist die Behandlung schmerzhaft?",
    a: "Das Schmerzempfinden ist von Person zu Person unterschiedlich. Die meisten Kundinnen empfinden Microblading jedoch als gut aushaltbar und deutlich angenehmer als ein klassisches Tattoo."
  },
  {
    q: "Wie sehen die Augenbrauen nach der Behandlung aus?",
    a: "Direkt nach der Behandlung wirken die Brauen etwas dunkler und intensiver. Während der Abheilung verliert die Farbe etwa 30–40 % an Intensität und das Ergebnis wirkt dadurch besonders natürlich."
  },
  {
    q: "Wie lange hält Microblading?",
    a: "Die Haltbarkeit liegt meist zwischen 12 und 24 Monaten und hängt vom Hauttyp, Stoffwechsel und der Pflege ab. Fettige Haut lässt Pigmente meist schneller verblassen als trockene Haut."
  },
  {
    q: "Ist eine Nachbehandlung notwendig?",
    a: "Ja, eine Nachbehandlung nach etwa 4–6 Wochen ist in den meisten Fällen sinnvoll und bereits im Preis inkludiert. Dabei können kleine Stellen perfektioniert und die Farbintensität angepasst werden."
  },
  {
    q: "Was sollte ich nach der Behandlung beachten?",
    a: "In den ersten 10–12 Tagen sollten Wasser, Sauna, Solarium, Sport und Make-up im Brauenbereich vermieden werden. Die mitgegebene Pflegecreme unterstützt die Heilung und sorgt für ein schönes Ergebnis."
  },
  {
    q: "Gibt es Kontraindikationen für Microblading?",
    a: "Bei Schwangerschaft, Stillzeit, Infektionskrankheiten, Blutgerinnungsstörungen oder bestimmten Hauterkrankungen sollte keine Behandlung durchgeführt werden. Im Zweifelsfall berate ich dich gerne persönlich."
  }
]}
  />
);

export default Microblading;
