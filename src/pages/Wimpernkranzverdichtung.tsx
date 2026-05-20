import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/wimpernkranz.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/michaela.jpg";
import g3 from "@/assets/studio.jpg";

const Wimpernkranzverdichtung = () => (
  <TreatmentPage
    eyebrow="Permanent Make-Up Wien"
    title={<>Natürlich betonte Augen mit <span className="italic text-primary">Wimpernkranzverdichtung</span>.</>}
    subtitle="Permanent Make-Up für einen ausdrucksstarken Blick – natürlich, präzise und typgerecht abgestimmt."
    intro="Du möchtest deine Wimpern auf natürliche Weise betonen? Eine Wimpernkranzverdichtung oder ein feiner Eyeliner sorgt dafür, dass deine Augen ausdrucksstärker wirken und optisch mehr Tiefe bekommen. Gemeinsam stimmen wir ab, welche Variante am besten zu dir und deinem Gesicht passt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Natürlich betonter Wimpernkranz",
      "Ausdrucksstärkerer Blick",
      "Optisch dichtere Wimpern",
      "Kein tägliches Nachzeichnen",
      "Typgerecht abgestimmter Eyeliner",
      "Langanhaltendes Permanent Make-Up",
    ]}
    process={[
      { t: "Aufklärungsgespräch", d: "Wir besprechen deine Wünsche, den Ablauf und welche Variante zu dir passt." },
      { t: "Vorzeichnung & Abstimmung", d: "Eyeliner oder Wimpernkranzverdichtung werden passend zu deiner Augenform abgestimmt." },
      { t: "Pigmentierung", d: "Die Farbe wird präzise am Wimpernkranz eingearbeitet." },
      { t: "Pflege & Nachbehandlung", d: "Du erhältst eine Healing Creme, Pflegeanleitung und die Nachbearbeitung innerhalb von 2 Monaten." },
    ]}
    prices={[
      { name: "Wimpernkranzverdichtung oder Eyeliner", duration: "ca. 120 Min", price: "€ 275 inkl. MwSt." },
      { name: "Beide Oberlider oder beide Unterlider", duration: "ca. 120 Min", price: "im Preis enthalten" },
      { name: "Paketpreis für alle 4 Lider", duration: "ca. 120 Min", price: "€ 479 inkl. MwSt." },
    ]}
    faqs={[
      {
        q: "Was ist eine Wimpernkranzverdichtung?",
        a: "Bei der Wimpernkranzverdichtung werden feine Pigmente direkt am Wimpernansatz eingearbeitet. Dadurch wirken die Wimpern voller, dichter und die Augen erhalten mehr Ausdruck – ganz ohne täglichen Eyeliner."
      },
      {
        q: "Für wen ist eine Wimpernkranzverdichtung geeignet?",
        a: "Die Behandlung eignet sich für alle, die ihre Augen auf natürliche Weise betonen möchten. Besonders beliebt ist sie bei hellen oder feinen Wimpern sowie bei Personen, die sich im Alltag Zeit beim Schminken sparen möchten."
      },
      {
        q: "Wie läuft die Behandlung ab?",
        a: "Zu Beginn erfolgt ein Aufklärungsgespräch und die gemeinsame Abstimmung des gewünschten Ergebnisses. Danach werden Eyeliner oder Wimpernkranzverdichtung vorgezeichnet und präzise pigmentiert."
      },
      {
        q: "Ist die Behandlung schmerzhaft?",
        a: "Das Schmerzempfinden ist individuell. Die meisten Kundinnen empfinden die Behandlung jedoch als gut aushaltbar und deutlich angenehmer als erwartet."
      },
      {
        q: "Wie lange dauert die Behandlung?",
        a: "Eine Behandlung dauert etwa 120 Minuten. Darin enthalten sind Beratung, Abstimmung, Pigmentierung sowie Pflegehinweise für die Zeit danach."
      },
      {
        q: "Wie lange hält die Wimpernkranzverdichtung?",
        a: "Die Haltbarkeit beträgt in der Regel bis zu 2 Jahre oder länger. Sie hängt vom Hauttyp, Stoffwechsel und der richtigen Pflege nach der Behandlung ab."
      },
      {
        q: "Was sollte ich nach der Behandlung beachten?",
        a: "In den ersten Tagen sollte auf Wasser, Wimperntusche, Sauna, Solarium und starkes Schwitzen verzichtet werden. Die mitgegebene Healing Creme unterstützt die Heilung und Haltbarkeit."
      },
      {
        q: "Was kostet eine Wimpernkranzverdichtung oder ein Eyeliner?",
        a: "Die erste und zweite Behandlung kosten € 275 inkl. MwSt. Der Preis beinhaltet entweder beide Oberlider oder beide Unterlider. Der Paketpreis für alle 4 Lider beträgt € 479 inkl. MwSt."
      }
    ]}
  />
);

export default Wimpernkranzverdichtung;
