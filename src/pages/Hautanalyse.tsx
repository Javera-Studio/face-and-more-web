import TreatmentPage from "@/components/TreatmentPage";
import img from "@/assets/skin-analysis.jpg";

const Hautanalyse = () => (
  <TreatmentPage
    eyebrow="Hautanalyse Wien"
    title={<>Moderne 3D-<span className="italic text-primary">Hautanalyse</span> in Wien.</>}
    intro="Der Einstieg in eine Hautpflege, die wirklich zu dir passt — fundiert, präzise und persönlich besprochen."
    image={img}
    longText={
      <>
        <p>Eine moderne Hautanalyse ist weit mehr als ein Blick auf die Hautoberfläche. In meinem Studio in Wien arbeite ich mit einem hochauflösenden 3D-Hautanalysesystem, das Hautzustände sichtbar macht, die mit dem bloßen Auge nicht erkennbar sind — von Feuchtigkeitsverteilung über UV-Schäden bis zu beginnender Pigmentierung.</p>
        <p>Auf Basis der Auswertung besprechen wir gemeinsam, was deine Haut wirklich braucht, und entwickeln einen individuellen Pflege- und Behandlungsplan. So vermeiden wir Pauschallösungen — und investieren deine Zeit und dein Budget dort, wo es wirklich Wirkung zeigt.</p>
      </>
    }
    benefits={[
      "Sichtbare Auswertung deiner Haut",
      "Individueller Pflegeplan",
      "Konkrete Behandlungsempfehlungen",
      "Vergleichsmessung bei Folgeterminen",
      "Für jede Haut & jedes Alter geeignet",
      "Persönliche 1:1 Beratung",
    ]}
    process={[
      { t: "Vorgespräch", d: "Wir besprechen deine Hautgeschichte und Ziele." },
      { t: "3D-Aufnahme", d: "Schmerzfreie, hochauflösende Analyse deiner Haut." },
      { t: "Auswertung", d: "Gemeinsame Besprechung der Ergebnisse." },
      { t: "Pflege- & Behandlungsplan", d: "Individuell auf dich abgestimmt." },
    ]}
    results={[
      "Klarheit über den tatsächlichen Hautzustand",
      "Ein Pflegeplan, der zu deinem Alltag passt",
      "Sichere Entscheidung für die richtige Behandlung",
    ]}
    meta={{ duration: "60 Min", price: "ab € 65", intervals: "1–2× p.a." }}
    faqs={[
      { q: "Tut die Hautanalyse weh?", a: "Nein. Die 3D-Hautanalyse ist vollständig berührungsarm und schmerzfrei." },
      { q: "Wie lange dauert der Termin?", a: "Plane rund 60 Minuten ein — inklusive ausführlicher Beratung." },
      { q: "Was kostet die Hautanalyse?", a: "Die Hautanalyse beginnt ab € 65. Bei vielen Folgebehandlungen wird der Betrag angerechnet." },
      { q: "Für wen ist die Hautanalyse geeignet?", a: "Für jeden Hauttyp, jedes Alter und jede Hautsituation — auch ohne aktuelle Beschwerden." },
    ]}
  />
);

export default Hautanalyse;
