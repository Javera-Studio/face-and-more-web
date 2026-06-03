import HautcoachingDetailPage from "@/components/HautcoachingDetailPage";
import hero from "@/assets/jugendliche-haut.jpg";
import akneImg from "@/assets/treatment-akne.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import facialImg from "@/assets/gesichtsbehandlung.jpg";
import p1 from "@/assets/treatment-skin.jpg";
import p2 from "@/assets/treatment-akne.jpg";
import p3 from "@/assets/treatment-fruchtsaeure.jpg";
import p4 from "@/assets/treatment-facial.jpg";
import p5 from "@/assets/treatment-microneedling.jpg";

export default function JugendlicheHaut() {
  return (
    <HautcoachingDetailPage
      eyebrow="Hautcoaching Jugendliche"
      title={<>Hautcoaching für <span className="italic text-primary">junge Haut</span>.</>}
      subtitle="Reinigung, Pflege und Selbstvertrauen — Schritt für Schritt zu einem ruhigeren Hautbild."
      heroImage={hero}
      intro="In der Pubertät verändert sich die Haut stark. Pickel, Mitesser und Unreinheiten gehören oft dazu — müssen aber nicht das Selbstbewusstsein belasten. Im Hautcoaching für Jugendliche erkläre ich verständlich, wie die Haut funktioniert, welche Reinigung sie braucht und wie eine einfache, alltagstaugliche Routine aussehen kann. Gerade bei jugendlicher Haut ist Vertrauen wichtig — du darfst deshalb gerne gemeinsam mit einer Begleitperson zu deinem Termin kommen."
      treatments={[
        { title: "Aknebehandlung", desc: "Tiefenreinigung, Ausreinigung und beruhigende Wirkstoffe für reine Haut.", to: "/leistungen/akne", image: akneImg },
        { title: "Fruchtsäure Peeling", desc: "Sanfte Erneuerung — verfeinert die Poren und reduziert Unreinheiten.", to: "/leistungen/fruchtsaeure", image: fruchtImg },
        { title: "Klassische Behandlung", desc: "Gründliche Pflege als Basis für ein klares, gesundes Hautbild.", to: "/leistungen/gesichtsbehandlung", image: facialImg },
      ]}
      products={[
        { name: "Sanftes Reinigungsgel", desc: "Mildes Cleansing für unreine, junge Haut — ohne die Schutzbarriere zu reizen.", image: p1 },
        { name: "Klärendes Tonic", desc: "Verfeinert die Poren und bereitet die Haut auf die Pflege vor.", image: p2 },
        { name: "Aktiv-Serum BHA", desc: "Salicylsäure löst Verhornungen und reduziert Mitesser sichtbar.", image: p3 },
        { name: "Leichte Tagespflege", desc: "Mattierende Feuchtigkeit für Mischhaut und unreine Haut.", image: p4 },
        { name: "SPF 50 Daily", desc: "Leichter Sonnenschutz — ein Muss bei aktiven Wirkstoffen.", image: p5 },
      ]}
    />
  );
}
