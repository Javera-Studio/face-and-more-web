import TreatmentPage from "@/components/TreatmentPage";
import img from "@/assets/treatment-microneedling.jpg";

const Microneedling = () => (
  <TreatmentPage
    eyebrow="Microneedling Wien"
    title={<>Microneedling — <span className="italic text-primary">Glow</span> aus der Tiefe.</>}
    intro="Aktiviert die natürliche Hauterneuerung, glättet das Hautbild und sorgt für sichtbar straffere, vitalere Haut."
    image={img}
    longText={
      <>
        <p>Microneedling stimuliert über feinste Mikroimpulse die körpereigene Kollagenproduktion. Die Haut wird angeregt, sich zu erneuern — Narben, feine Linien und unebenes Hautbild werden sichtbar reduziert.</p>
        <p>Ich kombiniere die Behandlung mit hochwertigen Wirkstoffseren, die durch die offenen Hautkanäle besonders effektiv aufgenommen werden. Das Ergebnis: ein frischer, gesunder Glow und nachhaltig verbessertes Hautbild.</p>
      </>
    }
    benefits={[
      "Strafferes, festeres Hautbild",
      "Reduktion feiner Linien",
      "Glättung von Aknenarben",
      "Verfeinerte Poren",
      "Frischer, gesunder Glow",
      "Tiefe Wirkstoffaufnahme",
    ]}
    process={[
      { t: "Reinigung & Vorbereitung", d: "Beruhigende Reinigung der Haut." },
      { t: "Microneedling", d: "Behandlung mit professionellem Pen-Gerät." },
      { t: "Wirkstoffserum", d: "Hochwertige Seren werden eingearbeitet." },
      { t: "Beruhigung", d: "Maske & Sonnenschutz für die Folgetage." },
    ]}
    results={[
      "Strafferes, ebenmäßigeres Hautbild",
      "Sichtbar mehr Frische und Glow",
      "Beste Ergebnisse in einer Serie von 3–4 Behandlungen",
    ]}
    meta={{ duration: "75 Min", price: "ab € 140", intervals: "alle 4–6 W." }}
    faqs={[
      { q: "Ist Microneedling schmerzhaft?", a: "Die Behandlung ist gut verträglich. Spürbar, aber nicht schmerzhaft." },
      { q: "Wann sehe ich Ergebnisse?", a: "Erste Effekte sind nach wenigen Tagen sichtbar — das volle Ergebnis nach 4–6 Wochen." },
      { q: "Gibt es Ausfallzeit?", a: "Eine leichte Rötung am ersten Tag ist normal. Make-up ist meist ab dem nächsten Tag wieder möglich." },
    ]}
  />
);

export default Microneedling;
