import TreatmentPage from "@/components/TreatmentPage";
import img from "@/assets/treatment-antiaging.jpg";

const AntiAging = () => (
  <TreatmentPage
    eyebrow="Anti Aging Behandlung Wien"
    title={<>Anti Aging — <span className="italic text-primary">vital</span> & in Würde.</>}
    intro="Moderne Wirkstofftherapie, gezielte Behandlungstechniken und eine Pflege, die deine Haut langfristig stärkt — ohne sie zu verändern."
    image={img}
    longText={
      <>
        <p>Mein Verständnis von Anti Aging: Deine Haut soll gesund, vital und du selbst sein dürfen — nur in der besten Version. Mit gezielten Treatments unterstütze ich die natürliche Erneuerung deiner Haut, kräftige die Strukturen und mildere sichtbare Zeichen der Zeit.</p>
        <p>Wir kombinieren moderne Wirkstoffe mit ruhigen, präzisen Techniken — abgestimmt auf deine Haut, deinen Lebensstil und deine Ziele.</p>
      </>
    }
    benefits={[
      "Strafferes Hautbild",
      "Reduktion feiner Linien",
      "Mehr Spannkraft",
      "Frischer Teint",
      "Stärkere Hautbarriere",
      "Langfristige Stabilität",
    ]}
    process={[
      { t: "Hautanalyse", d: "Status und Hautziele besprechen." },
      { t: "Reinigung & Peeling", d: "Sanfte Vorbereitung der Haut." },
      { t: "Wirkstofftherapie", d: "Hochwertige Seren & Massage-Techniken." },
      { t: "Maske & Pflege", d: "Aufbauende Pflege für nachhaltige Effekte." },
    ]}
    results={[
      "Sichtbar straffere, vitalere Haut",
      "Frischer, gesunder Teint",
      "Optimale Wirkung in einer Serie",
    ]}
    meta={{ duration: "75 Min", price: "ab € 120", intervals: "alle 4–6 W." }}
    faqs={[
      { q: "Ab welchem Alter sinnvoll?", a: "Anti Aging beginnt mit Vorbeugung — ab Mitte 20 sinnvoll, in jedem Alter wirkungsvoll." },
      { q: "Ist die Behandlung invasiv?", a: "Nein. Wir arbeiten ohne invasive Eingriffe — natürlich, hochwertig, sichtbar." },
      { q: "Wie nachhaltig sind die Ergebnisse?", a: "Mit kontinuierlicher Pflege und Behandlungsserien sehr nachhaltig." },
    ]}
  />
);

export default AntiAging;
