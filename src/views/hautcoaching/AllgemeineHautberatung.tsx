import HautcoachingDetailPage from "@/components/HautcoachingDetailPage";
import hero from "@/assets/allgemeine-hautberatung.jpg";
import problemImg from "@/assets/treatment-skin.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import needlingImg from "@/assets/treatment-microneedling.jpg";
import p1 from "@/assets/treatment-skin.jpg";
import p2 from "@/assets/treatment-fruchtsaeure.jpg";
import p3 from "@/assets/treatment-microneedling.jpg";
import p4 from "@/assets/treatment-facial.jpg";
import p5 from "@/assets/treatment-antiaging.jpg";

export default function AllgemeineHautberatung() {
  return (
    <HautcoachingDetailPage
      eyebrow="Hautcoaching Problemhaut"
      title={<>Hautcoaching bei <span className="italic text-primary">Problemhaut</span>.</>}
      subtitle="Klare Pläne bei Unreinheiten, Pigmentflecken und wiederkehrenden Entzündungen."
      heroImage={hero}
      intro="Problemhaut hat viele Gesichter — von Rosacea und Couperose über Pigmentflecken bis hin zu hormonell bedingten Unreinheiten. Im persönlichen Hautcoaching analysieren wir die Ursachen, erarbeiten einen klaren Behandlungs- und Pflegeplan und finden eine Routine, die deine Haut wirklich beruhigt."
      treatments={[
        { title: "Problemhaut", desc: "Sanfte, individuelle Pflege für sensible und gestresste Haut.", to: "/leistungen/problemhaut", image: problemImg },
        { title: "Fruchtsäure Peeling", desc: "Verfeinert das Hautbild und mildert Pigmentflecken.", to: "/leistungen/fruchtsaeure", image: fruchtImg },
        { title: "Microneedling", desc: "Stärkt die Hautstruktur und glättet Narben sichtbar.", to: "/leistungen/microneedling", image: needlingImg },
      ]}
      products={[
        { name: "Beruhigendes Cleanser", desc: "Mildes Reinigungsgel für sensible, gereizte Haut.", image: p1 },
        { name: "Niacinamid Serum", desc: "Reduziert Rötungen und stärkt die Hautbarriere.", image: p2 },
        { name: "Pigment Correct", desc: "Hellt dunkle Flecken auf und sorgt für ein ebenmäßiges Hautbild.", image: p3 },
        { name: "Barriere Reparatur Creme", desc: "Lipidreiche Pflege für eine stabile, ruhige Haut.", image: p4 },
        { name: "Mineral SPF 50", desc: "Sanfter Schutz für reaktive und empfindliche Haut.", image: p5 },
      ]}
    />
  );
}
