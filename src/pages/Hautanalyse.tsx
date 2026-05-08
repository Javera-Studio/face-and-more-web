import TreatmentPage from "@/components/TreatmentPage";
import hero from "@/assets/skin-analysis.jpg";
import g1 from "@/assets/treatment-facial.jpg";
import g2 from "@/assets/treatment-skin.jpg";
import g3 from "@/assets/studio.jpg";

const Hautanalyse = () => (
  <TreatmentPage
    eyebrow="Hautanalyse Wien"
    title={<>Moderne 3D-<span className="italic text-primary">Hautanalyse</span> in Wien.</>}
    subtitle="Der Einstieg in eine Hautpflege, die wirklich zu dir passt — fundiert, präzise und persönlich besprochen."
    intro="Eine moderne Hautanalyse ist mehr als ein Blick auf die Hautoberfläche. Mit hochauflösender 3D-Technologie machen wir Hautzustände sichtbar, die mit dem bloßen Auge nicht erkennbar sind — und entwickeln einen Pflegeplan, der wirklich passt."
    heroImage={hero}
    gallery={[g1, g2, g3]}
  benefits={[
  "Professionelle Hautberatung",
  "3D-Hautanalyse mit modernen Hautscans",
  "Persönliches Beratungsgespräch",
  "Individuelle Behandlungsansätze",
  "Empfehlung für passende Heimpflege",
  "Analyse von Poren, Feuchtigkeit & Hautstruktur",
]}
    process={[
      { t: "Vorgespräch", d: "Hautgeschichte und Ziele besprechen." },
      { t: "3D-Aufnahme", d: "Schmerzfreie, hochauflösende Analyse." },
      { t: "Auswertung", d: "Gemeinsame Besprechung der Ergebnisse." },
      { t: "Pflegeplan", d: "Individuell auf dich abgestimmt." },
    ]}
  prices={[
  { 
    name: "3D-Hautanalyse mit Skin Focus Pro", 
    duration: "45 Min", 
    price: "€ 95" 
  },
]}
   faqs={[
  {
    q: "Was ist die 3D-Hautanalyse mit Skin Focus Pro?",
    a: "Die 3D-Hautanalyse mit Skin Focus Pro ermöglicht eine detaillierte Analyse deiner Haut mit modernster RGB-, UV- und PL-Technologie. Hautzustand, Feuchtigkeit, Poren, Pigmentflecken, Falten und weitere Hautmerkmale werden sichtbar gemacht und ausgewertet.",
  },
  {
    q: "Welche Hautprobleme können erkannt werden?",
    a: "Die Analyse kann unter anderem Poren, Feuchtigkeitsmangel, Pigmentflecken, UV-Schäden, Falten, Hautstruktur, Unreinheiten und erste Anzeichen der Hautalterung sichtbar machen — auch bevor sie an der Oberfläche deutlich erkennbar sind.",
  },
  {
    q: "Wie läuft die Hautanalyse ab?",
    a: "Nach der Aufnahme der Hautbilder werden die Ergebnisse direkt ausgewertet und gemeinsam besprochen. Anschließend erhältst du individuelle Empfehlungen für passende Behandlungen und die optimale Heimpflege.",
  },
  {
    q: "Wie lange dauert die 3D-Hautanalyse?",
    a: "Die Behandlung inklusive Beratung dauert etwa 45 Minuten.",
  },
  {
    q: "Ist die Hautanalyse schmerzhaft?",
    a: "Nein. Die Analyse ist vollkommen schmerzfrei und nicht invasiv. Es werden lediglich hochauflösende Hautbilder aufgenommen.",
  },
  {
    q: "Warum ist eine professionelle Hautanalyse sinnvoll?",
    a: "Eine professionelle Hautanalyse hilft dabei, den aktuellen Zustand deiner Haut besser zu verstehen und Behandlungen gezielt auf deine Hautbedürfnisse abzustimmen. Dadurch können langfristig bessere Ergebnisse erzielt werden.",
  },
  {
    q: "Kann die Analyse versteckte Hautprobleme erkennen?",
    a: "Ja. Durch die spezielle Bildtechnologie können auch tieferliegende Hautveränderungen und UV-Schäden sichtbar gemacht werden, die mit bloßem Auge oft noch nicht erkennbar sind.",
  },
  {
    q: "Erhalte ich Empfehlungen für Pflegeprodukte?",
    a: "Ja. Basierend auf deiner Hautanalyse erhältst du individuelle Empfehlungen für passende Behandlungen und eine abgestimmte Pflegeroutine für Zuhause.",
  },
]}
  />
);

export default Hautanalyse;
