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
    faqs={[
  {
    q: "Was bewirkt ein Fruchtsäurepeeling?",
    a: "Fruchtsäurepeelings entfernen abgestorbene Hautzellen, fördern die Hauterneuerung und sorgen für ein glatteres, frischeres Hautbild. Feine Linien, Pigmentflecken, Unreinheiten und große Poren können sichtbar verbessert werden.",
  },
  {
    q: "Für welche Hautprobleme eignet sich ein AHA-Peeling?",
    a: "Fruchtsäurepeelings eignen sich besonders bei Akne, unreiner Haut, Pigmentflecken, großporiger Haut, fahlem Teint sowie ersten Zeichen der Hautalterung.",
  },
  {
    q: "Ist ein Fruchtsäurepeeling für jeden Hauttyp geeignet?",
    a: "Grundsätzlich ja — bei sehr empfindlicher Haut, Couperose, Herpes oder entzündlichen Hauterkrankungen sollte jedoch vorher individuell beraten werden.",
  },
  {
    q: "Wie läuft die Behandlung ab?",
    a: "Vor jeder Behandlung wird die Haut analysiert und die passende Intensität gewählt. Während des Peelings kann ein leichtes Kribbeln auftreten. Die Behandlung dauert etwa 30 bis 45 Minuten.",
  },
  {
    q: "Was muss nach einem Fruchtsäurepeeling beachtet werden?",
    a: "Nach der Behandlung ist täglicher Sonnenschutz mit SPF 50 besonders wichtig, da die Haut lichtempfindlicher wird. Leichte Rötungen oder Spannungsgefühle sind normal.",
  },
  {
    q: "Gibt es Nebenwirkungen nach einem AHA-Peeling?",
    a: "Die Haut kann nach dem Peeling leicht gerötet, trocken oder empfindlich sein. Teilweise kann sich die Haut einige Tage leicht schälen — das gehört zum natürlichen Erneuerungsprozess.",
  },
  {
    q: "Hilft Fruchtsäure gegen Pigmentflecken und Aknenarben?",
    a: "Ja — regelmäßige Fruchtsäurebehandlungen können Pigmentflecken, Aknenarben und ungleichmäßige Hautstruktur sichtbar verbessern und den Teint ebenmäßiger wirken lassen.",
  },
  {
    q: "Wie viele Behandlungen werden empfohlen?",
    a: "Für optimale Ergebnisse wird häufig eine Kur empfohlen — meist mehrere Behandlungen im Abstand von 1 bis 2 Wochen. Die genaue Anzahl hängt vom Hautzustand und Ziel ab.",
  },
]}
/>
);
export default Fruchtsaeure;
