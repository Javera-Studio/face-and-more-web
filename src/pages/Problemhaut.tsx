import TreatmentPage from "@/components/TreatmentPage";
import img from "@/assets/treatment-skin.jpg";

const Problemhaut = () => (
  <TreatmentPage
    eyebrow="Problemhaut Behandlung Wien"
    title={<>Problemhaut — <span className="italic text-primary">verstehen</span> & beruhigen.</>}
    intro="Sensible, gestresste oder reaktive Haut braucht keine harten Methoden — sondern Verständnis, Geduld und die richtigen Wirkstoffe."
    image={img}
    longText={
      <>
        <p>„Problemhaut“ ist kein einzelner Hautzustand — es ist Haut, die aus dem Gleichgewicht geraten ist. Rötungen, Spannungsgefühl, Unreinheiten, Empfindlichkeit: häufig Folge einer geschwächten Hautbarriere.</p>
        <p>Im Studio gehen wir Schritt für Schritt vor: Analyse, Aufbau, Beruhigung. Das Ziel ist nicht, die Haut „anders“ zu machen — sondern wieder in ihre eigene Stärke zu führen.</p>
      </>
    }
    benefits={[
      "Beruhigte, ausgeglichene Haut",
      "Stärkere Hautbarriere",
      "Weniger Rötungen",
      "Reduzierte Reaktivität",
      "Nachhaltige Stabilität",
      "Persönliche Begleitung",
    ]}
    process={[
      { t: "Hautanalyse", d: "Ursachen und Status klären." },
      { t: "Sanfte Reinigung", d: "Ohne Reizung der Hautbarriere." },
      { t: "Beruhigende Wirkstoffe", d: "Aufbau & Schutz der Haut." },
      { t: "Heimpflegeplan", d: "Damit der Effekt im Alltag bleibt." },
    ]}
    results={[
      "Spürbar ruhigere Haut",
      "Weniger Empfindlichkeit",
      "Wiedergefundenes Gleichgewicht",
    ]}
    meta={{ duration: "75 Min", price: "ab € 95", intervals: "alle 3–4 W." }}
    faqs={[
      { q: "Ist die Behandlung auch bei Rosacea geeignet?", a: "Ja, in milder Form. Im Vorgespräch klären wir das individuell." },
      { q: "Wie lange dauert es bis zur Verbesserung?", a: "Erste Effekte oft sofort — nachhaltige Stabilität braucht meist 2–3 Monate." },
      { q: "Brauche ich neue Pflege?", a: "Häufig ja. Eine zu reizende Heimpflege ist eine der häufigsten Ursachen für Problemhaut." },
    ]}
  />
);

export default Problemhaut;
