import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-pmu.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/michaela.jpg";
import g3 from "@/assets/studio.jpg";

const Microblading = () => (
  <TreatmentPage
    eyebrow="Microblading Wien"
    heroImage={hero}
    gallery={[g1, g2, g3]}

title={<>Natürlich schöne Augenbrauen mit präzisem <span className="italic text-primary">Microblading</span>.</>}

subtitle="Typgerechtes Microblading und Permanent Make-Up für natürliche, harmonische Ergebnisse."

intro="Microblading verbindet Präzision, Ästhetik und typgerechte Beratung. Feine pigmentierte Härchen werden individuell auf deinen Hauttyp, deine Gesichtsform und deine natürliche Augenbraue abgestimmt — für besonders harmonische und natürliche Ergebnisse."

benefits={[
  "Natürlich wirkende Härchenzeichnung",
  "Kein tägliches Nachzeichnen",
  "Kein Verwischen von Make-Up",
  "Typgerechte Form & Farbabstimmung",
  "Rekonstruktion fehlender Augenbrauen",
  "Inklusive Nachbehandlung",
]}
process={[
  { t: "Aufklärungsgespräch", d: "Wir besprechen deine Wünsche, Form, Farbe und den genauen Ablauf." },
  { t: "Vorzeichnung", d: "Die ideale Brauenform wird vorab exakt vorgezeichnet und gemeinsam abgestimmt." },
  { t: "Pigmentierung", d: "Feine Härchen werden präzise pigmentiert und dezent aufgefüllt." },
  { t: "Pflege & Nachbehandlung", d: "Du erhältst eine Healing Creme, Pflegeanleitung und eine Nachbearbeitung innerhalb von 2 Monaten." },
]}

prices={[
  { name: "Microblading Augenbrauen inkl. Nachbehandlung", duration: "120 Min", price: "€ 345 inkl. MwSt." },
  { name: "Zusätzliche Schattierung", duration: "nach Aufwand", price: "auf Anfrage" },
  { name: "Refresh Behandlung", duration: "75 Min", price: "auf Anfrage" },
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
