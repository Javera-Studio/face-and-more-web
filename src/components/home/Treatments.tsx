import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import skinImg from "@/assets/treatment-skin.jpg";
import antiagingImg from "@/assets/treatment-antiaging.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import needlingImg from "@/assets/treatment-microneedling.jpg";
import facialImg from "@/assets/treatment-facial.jpg";
import pmuImg from "@/assets/treatment-pmu.jpg";

const treatments = [
  { img: skinImg, title: "Hautverbesserung", desc: "Individuelle Behandlung für ein klareres, ebenmäßigeres Hautbild.", duration: "60–90 Min", price: "ab € 95", to: "/leistungen/problemhaut" },
  { img: antiagingImg, title: "Anti Aging", desc: "Sanfte Wirkstofftherapie für straffe, vitale Haut.", duration: "75 Min", price: "ab € 120", to: "/leistungen/anti-aging" },
  { img: fruchtImg, title: "Fruchtsäure", desc: "Erneuert die Haut & verfeinert das Hautbild sichtbar.", duration: "45 Min", price: "ab € 85", to: "/leistungen/fruchtsaeure" },
  { img: needlingImg, title: "Microneedling", desc: "Aktiviert die Hauterneuerung — Glow von innen.", duration: "75 Min", price: "ab € 140", to: "/leistungen/microneedling" },
  { img: facialImg, title: "Klassische Behandlung", desc: "Ruhige, gründliche Pflege für jede Hautsituation.", duration: "60 Min", price: "ab € 75", to: "/leistungen" },
  { img: pmuImg, title: "Microblading / PMU", desc: "Definierte, natürliche Augenbrauen mit Präzision.", duration: "120 Min", price: "ab € 380", to: "/leistungen" },
];

const Treatments = () => (
  <section className="py-24 md:py-32">
    <div className="container-editorial">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="eyebrow mb-5">Beliebte Behandlungen</p>
          <h2 className="headline">Gezielte Behandlungen für deine Haut.</h2>
        </div>
        <Link to="/leistungen" className="link-underline text-sm">
          Alle Leistungen
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {treatments.map((t) => (
          <Link key={t.title} to={t.to} className="group block">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <span className="text-sm text-primary whitespace-nowrap">{t.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              <p className="mt-3 eyebrow">{t.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Treatments;
