import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-skin.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/treatment-akne.jpg";
import g3 from "@/assets/studio.jpg";

const Problemhaut = () => (
  <TreatmentPage
    eyebrow="Problemhaut Wien"
    title={<>Problemhaut — <span className="italic text-primary">verstanden</span> & ausgeglichen.</>}
    subtitle="Wenn deine Haut sensibel, gerötet oder unausgeglichen ist — wir finden gemeinsam einen Weg, der wirklich passt."
    intro="Problemhaut braucht Verständnis statt schneller Lösungen. Wir analysieren in Ruhe, was deine Haut belastet, und entwickeln eine Behandlung, die langfristig stärkt — sanft, individuell und mit echter Begleitung."
    heroImage={hero}
    gallery={[g1, g2, g3]}
    benefits={[
      "Beruhigte, ausgeglichene Haut",
      "Stärkere Hautbarriere",
      "Reduktion von Rötungen",
      "Individuelle Wirkstofftherapie",
      "Langfristige Hautstabilität",
      "Persönliche Begleitung",
    ]}
    process={[
      { t: "Beratung", d: "Persönliches Gespräch zu Beschwerden & Pflegeroutine." },
      { t: "Analyse", d: "Fundierte Hautanalyse — Ursachenforschung statt Symptombehandlung." },
      { t: "Behandlung", d: "Schonende Reinigung & beruhigende Wirkstoffe." },
      { t: "Pflegeempfehlung", d: "Individueller Pflegeplan für zu Hause." },
    ]}
    prices={[
      { name: "Erstberatung & Analyse", duration: "60 Min", price: "ab € 65" },
      { name: "Problemhaut-Behandlung", duration: "75 Min", price: "ab € 95" },
      { name: "Hautberuhigungs-Serie", duration: "4 × 75 Min", price: "ab € 340", note: "Für nachhaltigen Aufbau" },
    ]}
    faqs={[
  {
    q: "Was verursacht unreine Haut oder Akne?",
    a: "Unreine Haut kann viele Ursachen haben — darunter Hormone, Stress, Ernährung, falsche Pflegeprodukte oder äußere Einflüsse wie UV-Strahlen. Mit der richtigen Pflege und professioneller Begleitung lässt sich das Hautbild oft deutlich verbessern.",
  },
  {
    q: "Warum ist die richtige Pflege bei Problemhaut so wichtig?",
    a: "Zu aggressive oder ungeeignete Produkte können die Haut zusätzlich reizen. Eine abgestimmte Pflegeroutine hilft dabei, die Haut zu beruhigen, Poren sauber zu halten und Entzündungen vorzubeugen.",
  },
  {
    q: "Darf ich Pickel oder Mitesser selbst ausdrücken?",
    a: "Davon wird eher abgeraten. Durch unsachgemäßes Ausdrücken können Bakterien verteilt werden, wodurch neue Entzündungen oder Narben entstehen können. Professionelle Ausreinigung ist deutlich schonender für die Haut.",
  },
  {
    q: "Welche Behandlung hilft bei unreiner Haut?",
    a: "Je nach Hautzustand können Fruchtsäurebehandlungen, professionelle Ausreinigungen und individuell abgestimmte Wirkstoffpflege helfen, die Haut langfristig zu beruhigen und zu stärken.",
  },
  {
    q: "Warum bekommen Jugendliche häufiger Pickel?",
    a: "Während der Pubertät produziert der Körper verstärkt Hormone, die die Talgdrüsen aktivieren. Überschüssiger Talg kann Poren verstopfen und Entzündungen verursachen.",
  },
  {
    q: "Kann Stress oder Ernährung die Haut beeinflussen?",
    a: "Ja — Stress, Schlafmangel, Ernährung und hormonelle Veränderungen können sich deutlich auf das Hautbild auswirken. Die Haut reagiert oft sensibel auf innere und äußere Belastungen.",
  },
  {
    q: "Welche Pflegeprodukte verwendet FACE AND MORE?",
    a: "Im Studio wird mit ASAP Skincare gearbeitet — einer professionellen Wirkstoffpflege aus Australien. Die Produkte sind vegan, frei von Mikroplastik, Mineralölen und künstlichen Duftstoffen.",
  },
  {
    q: "Wie oft sollte man das Gesicht reinigen?",
    a: "In der Regel morgens und abends. So werden Make-up, Talg und Rückstände entfernt, die Poren verstopfen können. Wichtig ist eine sanfte Reinigung, die die Haut nicht austrocknet.",
  },
]}
/>
);
export default Problemhaut;
