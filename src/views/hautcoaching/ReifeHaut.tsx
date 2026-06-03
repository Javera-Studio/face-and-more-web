import HautcoachingDetailPage from "@/components/HautcoachingDetailPage";
import hero from "@/assets/reife-haut.jpg";
import antiagingImg from "@/assets/treatment-antiaging.jpg";
import needlingImg from "@/assets/treatment-microneedling.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import p1 from "@/assets/treatment-antiaging.jpg";
import p2 from "@/assets/treatment-skin.jpg";
import p3 from "@/assets/treatment-microneedling.jpg";
import p4 from "@/assets/treatment-facial.jpg";
import p5 from "@/assets/treatment-fruchtsaeure.jpg";

export default function ReifeHaut() {
  return (
    <HautcoachingDetailPage
      eyebrow="Hautcoaching Reife Haut"
      title={<>Hautcoaching für <span className="italic text-primary">reife Haut</span>.</>}
      subtitle="Pflege, Wirkstoffe und Behandlungen — abgestimmt auf deinen aktuellen Hautzustand."
      heroImage={hero}
      intro="Reife Haut braucht eine durchdachte, wirkstoffstarke Pflege. Im Hautcoaching schauen wir gemeinsam, welche Inhaltsstoffe deine Haut wirklich braucht — von Retinol über Peptide bis hin zu Antioxidantien. Ziel ist eine Routine, die dich entspannt, sichtbar pflegt und nachhaltig wirkt."
      treatments={[
        { title: "Anti Aging", desc: "Hochwirksame Wirkstofftherapien für straffe, vitale Haut.", to: "/leistungen/anti-aging", image: antiagingImg },
        { title: "Microneedling", desc: "Aktiviert Kollagen und natürliche Hauterneuerung.", to: "/leistungen/microneedling", image: needlingImg },
        { title: "Fruchtsäure Peeling", desc: "Verfeinert das Hautbild und sorgt für sichtbaren Glow.", to: "/leistungen/fruchtsaeure", image: fruchtImg },
      ]}
      products={[
        { name: "Retinol Renewal", desc: "Sanfte Zellerneuerung über Nacht — für straffere Haut.", image: p1 },
        { name: "Vitamin C Serum", desc: "Antioxidativer Schutz und sichtbarer Glow am Morgen.", image: p2 },
        { name: "Peptid Reparatur Creme", desc: "Stärkt die Hautbarriere und glättet feine Linien.", image: p3 },
        { name: "Augenpflege Lift", desc: "Reduziert Augenringe und verfeinert die feine Haut.", image: p4 },
        { name: "SPF 50 Anti-Age", desc: "Schutz vor lichtbedingter Hautalterung — täglich.", image: p5 },
      ]}
    />
  );
}
