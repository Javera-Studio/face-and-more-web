import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import skinImg from "@/assets/treatment-skin.jpg";
import antiagingImg from "@/assets/treatment-antiaging.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import needlingImg from "@/assets/treatment-microneedling.jpg";
import facialImg from "@/assets/treatment-facial.jpg";
import pmuImg from "@/assets/treatment-pmu.jpg";
import akneImg from "@/assets/treatment-akne.jpg";
import analysisImg from "@/assets/skin-analysis.jpg";

const items = [
  { img: analysisImg, title: "3D Hautanalyse", desc: "Der Einstieg in individuelle Hautpflege.", price: "ab € 65", to: "/hautanalyse" },
  { img: akneImg, title: "Akne Behandlung", desc: "Klärend, ausgleichend, langfristig wirksam.", price: "ab € 95", to: "/leistungen/akne" },
  { img: skinImg, title: "Problemhaut", desc: "Individuelle Pflege für sensible & gestresste Haut.", price: "ab € 95", to: "/leistungen/problemhaut" },
  { img: antiagingImg, title: "Anti Aging", desc: "Sichtbar straffere, vitale Haut.", price: "ab € 120", to: "/leistungen/anti-aging" },
  { img: fruchtImg, title: "Fruchtsäure Peeling", desc: "Sanfte Hauterneuerung mit Glow-Effekt.", price: "ab € 85", to: "/leistungen/fruchtsaeure" },
  { img: needlingImg, title: "Microneedling", desc: "Aktiviert Kollagen & Hauterneuerung.", price: "ab € 140", to: "/leistungen/microneedling" },
  { img: facialImg, title: "Kosmetische Gesichtsbehandlung", desc: "Ruhige, gründliche Pflege.", price: "ab € 75", to: "/leistungen/gesichtsbehandlung" },
  { img: pmuImg, title: "Microblading", desc: "Definierte, natürliche Augenbrauen.", price: "ab € 380", to: "/leistungen/microblading" },
];

const Leistungen = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Leistungen"
      title={<>Behandlungen für jede Haut <span className="italic text-primary">— individuell</span> abgestimmt.</>}
      intro="Jede Behandlung im Studio FACE AND MORE wird individuell auf dein Hautbild und deine Ziele abgestimmt — basierend auf einer fundierten Hautanalyse."
    />
    <section className="py-20">
      <div className="container-editorial grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {items.map((t) => (
          <Link key={t.title} to={t.to} className="group block">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="pt-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <ArrowUpRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <p className="mt-3 eyebrow text-primary">{t.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Leistungen;
