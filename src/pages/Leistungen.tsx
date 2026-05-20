import { useEffect, useRef, useState } from "react";
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
import wimpernImg from "@/assets/wimpernkranz.jpg";
import akneImg from "@/assets/treatment-akne.jpg";
import analysisImg from "@/assets/skin-analysis.jpg";

const items = [
  { img: analysisImg, title: "3D Hautanalyse", desc: "Der präzise Einstieg in eine individuell abgestimmte Hautpflege — fundiert, datenbasiert und persönlich begleitet.", price: "€ 95", duration: "45 Min", to: "/hautanalyse" },
  { img: akneImg, title: "Akne Behandlung", desc: "Klärend, ausgleichend und langfristig wirksam — für ein ruhiges, klares Hautbild, das du wieder gerne zeigst.", price: "ab € 95", duration: "75 Min", to: "/leistungen/akne" },
  { img: skinImg, title: "Problemhaut", desc: "Sanfte, individuelle Pflege für sensible, gestresste oder reaktive Haut. Mit Geduld und Expertise zurück ins Gleichgewicht.", price: "ab € 95", duration: "75 Min", to: "/leistungen/problemhaut" },
  { img: antiagingImg, title: "Anti Aging", desc: "Sichtbar straffere, vitale Haut durch hochwirksame Wirkstofftherapien — natürlich und altersgerecht.", price: "ab € 120", duration: "75 Min", to: "/leistungen/anti-aging" },
  { img: fruchtImg, title: "Fruchtsäure Peeling", desc: "Eine sanfte Hauterneuerung mit sichtbarem Glow-Effekt — verfeinert die Poren und ebnet das Hautbild.", price: "ab € 85", duration: "45 Min", to: "/leistungen/fruchtsaeure" },
  { img: needlingImg, title: "Microneedling", desc: "Aktiviert Kollagen und natürliche Hauterneuerung — für mehr Spannkraft, Frische und Strahlkraft.", price: "ab € 136", duration: "60 Min", to: "/leistungen/microneedling" },
  { img: facialImg, title: "Kosmetische Gesichtsbehandlung", desc: "Eine ruhige, gründliche Pflegeroutine, die deine Haut tief reinigt, beruhigt und sichtbar zum Strahlen bringt.", price: "ab € 72", duration: "60 Min", to: "/leistungen/gesichtsbehandlung" },
  { img: pmuImg, title: "Microblading", desc: "Definierte, natürliche Augenbrauen mit feinster Härchenzeichnung — handwerklich präzise und individuell gestaltet.", price: "ab € 345", duration: "120 Min", to: "/leistungen/microblading" },
  { img: wimpernImg, title: "Wimpernkranzverdichtung", desc: "Ausdrucksstarke Augen mit natürlichem Permanent Make-Up — dezent, elegant und wunderbar wachfrisch.", price: "ab € 275", duration: "120 Min", to: "/leistungen/wimpernkranzverdichtung" },
];

const TreatmentRow = ({ item, index }: { item: typeof items[number]; index: number }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reverse = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="group relative py-16 md:py-24 border-b border-border/60 last:border-b-0"
    >
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div
          className={`md:col-span-7 ${reverse ? "md:order-1" : "md:order-2"} transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link to={item.to} className="block overflow-hidden bg-muted">
            <div className="aspect-[4/3] md:aspect-[5/4] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] ${
                  visible ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          </Link>
        </div>

        {/* Text */}
        <div
          className={`md:col-span-5 ${reverse ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"} transition-all duration-1000 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="eyebrow mb-5">{String(index + 1).padStart(2, "0")} — Behandlung</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-foreground">
            {item.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            {item.desc}
          </p>

          <div className="mt-8 flex items-center gap-8">
            <div>
              <p className="eyebrow">Dauer</p>
              <p className="mt-1 text-sm text-foreground">{item.duration}</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="eyebrow">Preis</p>
              <p className="mt-1 text-sm text-primary">{item.price}</p>
            </div>
          </div>

          <Link
            to={item.to}
            className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-foreground/30 pb-1 transition-all duration-300 hover:text-primary hover:border-primary hover:gap-3"
          >
            Mehr erfahren
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Leistungen = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Leistungen"
      title={<>Behandlungen für jede Haut <span className="italic text-primary">— individuell</span> abgestimmt.</>}
      intro="Jede Behandlung im Studio FACE AND MORE wird individuell auf dein Hautbild und deine Ziele abgestimmt — basierend auf einer fundierten Hautanalyse."
    />
    <section className="pb-24 md:pb-32">
      <div className="container-editorial">
        {items.map((t, i) => (
          <TreatmentRow key={t.title} item={t} index={i} />
        ))}
      </div>
    </section>
  </SiteLayout>
);

export default Leistungen;
