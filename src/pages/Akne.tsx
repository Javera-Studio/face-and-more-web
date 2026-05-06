import TreatmentPage from "@/components/TreatmentPage";
import img from "@/assets/treatment-akne.jpg";

const Akne = () => (
  <TreatmentPage
    eyebrow="Akne Behandlung Wien"
    title={<>Akne Behandlung — <span className="italic text-primary">klärend</span> & nachhaltig.</>}
    intro="Ein durchdachtes Konzept aus Hautanalyse, professioneller Behandlung und passender Heimpflege — für ein dauerhaft klareres Hautbild."
    image={img}
    longText={
      <>
        <p>Akne und Hautunreinheiten haben viele Ursachen — hormonelle Einflüsse, gestörte Hautbarriere, falsche Pflege oder Stress. Statt symptomatisch zu reagieren, beginnen wir mit einer fundierten Hautanalyse und entwickeln eine Strategie, die langfristig wirkt.</p>
        <p>Im Studio FACE AND MORE in Wien arbeite ich mit klärenden Wirkstoffen, sanften Peelings und gezielten Tiefenreinigungen — abgestimmt auf deinen Hautzustand und deine Verträglichkeit.</p>
      </>
    }
    benefits={[
      "Reduktion von Unreinheiten",
      "Beruhigte, ausgeglichene Haut",
      "Verfeinerte Poren",
      "Stärkere Hautbarriere",
      "Ergebnisse in mehreren Schritten",
      "Begleitende Heimpflegeempfehlung",
    ]}
    process={[
      { t: "Hautanalyse", d: "Bestimmung von Hautzustand und Ursachen." },
      { t: "Tiefenreinigung", d: "Sanfte, gründliche Klärung der Haut." },
      { t: "Wirkstofftherapie", d: "Klärende Wirkstoffe, individuell dosiert." },
      { t: "Beruhigung & Schutz", d: "Aufbau der Hautbarriere & Folgepflege." },
    ]}
    results={[
      "Sichtbar reineres Hautbild",
      "Ruhigere, weniger gerötete Haut",
      "Mehr Sicherheit im Umgang mit deiner Haut",
    ]}
    meta={{ duration: "75 Min", price: "ab € 95", intervals: "alle 2–4 W." }}
    faqs={[
      { q: "Wie viele Behandlungen sind nötig?", a: "Je nach Hautzustand sind 4–8 Behandlungen sinnvoll — wir besprechen den Plan im Vorgespräch." },
      { q: "Hilft die Behandlung auch bei Erwachsenenakne?", a: "Ja. Akne tritt in jedem Alter auf — die Behandlung wird individuell angepasst." },
      { q: "Brauche ich besondere Heimpflege?", a: "Ja. Die richtige Pflege zu Hause ist mindestens so wichtig wie die Behandlung im Studio." },
    ]}
  />
);

export default Akne;
