import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/treatment-akne.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/studio.jpg";
import g3 from "@/assets/michaela.jpg";

export default function Akne() {
  return (
    <TreatmentPage
      eyebrow="Aknebehandlung Wien"
      title={<>Gezielte <span className="italic text-primary">Aknebehandlungen</span> für reine und ausgeglichene Haut.</>}
      subtitle="Individuelle Aknebehandlungen und Hautcoaching für jugendliche sowie reife Haut."
      intro="Unreine Haut, Akne oder entzündete Hautstellen brauchen eine individuell abgestimmte Behandlung. Durch meine langjährige Erfahrung als Hautcoach unterstütze ich Jugendliche und Erwachsene dabei, ihr Hautbild nachhaltig zu verbessern. Gemeinsam kombinieren wir professionelle Behandlungen im Studio mit der passenden Pflegeroutine für Zuhause."
      heroImage={hero}
      gallery={[g1, g2, g3]}
      benefits={[
        "Reinere und ausgeglichenere Haut",
        "Verfeinerung der Poren",
        "Regulierung der Talgproduktion",
        "Entzündungshemmende Wirkung",
        "Individuelles Hautcoaching",
        "Geeignet für jugendliche & reife Haut",
      ]}
      process={[
        { t: "Persönliche Hautanalyse", d: "Besprechung deiner Hautbedürfnisse und Ziele." },
        { t: "Reinigung & Vorbereitung", d: "Sanfte Reinigung und Vorbereitung der Haut." },
        { t: "Behandlung", d: "Ausreinigen, Fruchtsäure oder gezielte Wirkstoffe je nach Hautzustand." },
        { t: "Pflege & Beratung", d: "Pflegeempfehlungen und individuelle Routine für Zuhause." },
      ]}
      prices={[
        { name: "Akne Jugendprogramm", duration: "60 Min", price: "€ 63" },
        { name: "Fruchtsäurebehandlung", duration: "30 Min", price: "€ 94" },
        { name: "Kurpaket Fruchtsäure", duration: "6 Sitzungen", price: "auf Anfrage" },
      ]}
      faqs={[
        {
          q: "Wie läuft eine Aknebehandlung ab?",
          a: "Jede Behandlung startet mit einem persönlichen Hautcoaching und einer Analyse deiner Haut. Danach folgen Reinigung, Peeling, Bedampfung der Haut, Ausreinigung und eine beruhigende Hochfrequenzbehandlung. Die Behandlung dauert etwa 60 Minuten.",
        },
        {
          q: "Was kostet eine Aknebehandlung?",
          a: "Eine Aknebehandlung inklusive Hautcoaching kostet für Jugendliche bis 18 Jahre ab € 63 und für Erwachsene ab € 89. Für langfristige Ergebnisse empfehle ich mehrere aufeinander abgestimmte Behandlungen.",
        },
        {
          q: "Was hilft gegen Akne, Pickel und Mitesser?",
          a: "Eine Kombination aus professionellen Behandlungen, regelmäßiger Tiefenreinigung und der passenden Heimpflege kann das Hautbild nachhaltig verbessern. Besonders Fruchtsäurebehandlungen und individuell abgestimmte Pflegeprodukte helfen dabei, Entzündungen zu reduzieren und die Poren zu verfeinern.",
        },
        {
          q: "Warum entsteht Akne und unreine Haut?",
          a: "Akne entsteht häufig durch hormonelle Veränderungen, eine erhöhte Talgproduktion, verstopfte Poren und Bakterien. Besonders in der Pubertät reagiert die Haut oft empfindlich. Auch Stress, Ernährung, falsche Pflege oder reizende Inhaltsstoffe können Hautunreinheiten verstärken.",
        },
        {
          q: "Welche Wirkung hat die Hochfrequenzbehandlung?",
          a: "Die Hochfrequenz wirkt antibakteriell, entzündungshemmend und desinfizierend. Sie unterstützt die Hautregeneration, beruhigt entzündete Stellen und hilft dabei, neue Akneausbrüche zu reduzieren.",
        },
        {
          q: "Wie wirkt ein Fruchtsäurepeeling bei Akne?",
          a: "Fruchtsäure entfernt abgestorbene Hautzellen, löst Verhornungen und unterstützt die Hauterneuerung. Dadurch werden Poren gereinigt, Entzündungen reduziert und das Hautbild wirkt feiner, glatter und ebenmäßiger.",
        },
        {
          q: "Kann Microneedling bei Aknenarben helfen?",
          a: "Ja. Microneedling kann Aknenarben, Unebenheiten und vergrößerte Poren sichtbar verbessern. Durch die Anregung der Kollagenproduktion wird die Hautstruktur gestärkt und geglättet. Besonders in Kombination mit Fruchtsäurebehandlungen können sehr schöne Ergebnisse erzielt werden.",
        },
        {
          q: "Welche Pflegeprodukte eignen sich bei Akne?",
          a: "Besonders wirksam sind Produkte mit Fruchtsäuren, Salicylsäure oder beruhigenden Wirkstoffen. Wichtig ist eine regelmäßige und auf den Hauttyp abgestimmte Pflegeroutine. Gerne berate ich dich persönlich zu geeigneten Produkten und der richtigen Heimpflege.",
        },
        {
          q: "Wie oft sollte eine Aknebehandlung durchgeführt werden?",
          a: "Je nach Hautzustand empfehle ich mehrere Behandlungen im Abstand von einigen Wochen. Kontinuität und die richtige Pflege zuhause sind entscheidend, um langfristig ein ruhigeres und klareres Hautbild zu erreichen.",
        },
        {
          q: "Ist Fruchtsäure auch für erwachsene Haut geeignet?",
          a: "Ja. Fruchtsäure eignet sich nicht nur bei jugendlicher Akne, sondern auch bei unreiner Haut im Erwachsenenalter. Sie kann Poren verfeinern, Narben und Pigmentflecken mildern sowie das Hautbild insgesamt frischer und glatter wirken lassen.",
        },
      ]}
    />
  );
}
