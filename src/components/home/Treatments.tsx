import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import skinImg from "@/assets/treatment-skin.jpg";
import antiagingImg from "@/assets/treatment-antiaging.jpg";
import fruchtImg from "@/assets/treatment-fruchtsaeure.jpg";
import needlingImg from "@/assets/treatment-microneedling.jpg";
import facialImg from "@/assets/gesichtsbehandlung.jpg";
import pmuImg from "@/assets/treatment-pmu.jpg";

const treatments = [
  { img: skinImg, title: "Hautverbesserung", desc: "Individuelle Behandlung für ein klareres, ebenmäßigeres Hautbild — abgestimmt auf deine Haut.", duration: "60 Min", price: "ab € 96", to: "/leistungen/problemhaut" },
  { img: antiagingImg, title: "Anti Aging", desc: "Sanfte Wirkstofftherapie für straffe, vitale Haut — natürlich und altersgerecht.", duration: "75 Min", price: "ab € 120", to: "/leistungen/anti-aging" },
  { img: fruchtImg, title: "Fruchtsäure", desc: "Erneuert die Haut und verfeinert das Hautbild sichtbar — mit dezentem Glow-Effekt.", duration: "30 Min", price: "ab € 92", to: "/leistungen/fruchtsaeure" },
  { img: needlingImg, title: "Microneedling", desc: "Aktiviert Kollagen und Hauterneuerung — Glow, Spannkraft und Frische von innen.", duration: "60 Min", price: "ab € 136", to: "/leistungen/microneedling" },
  { img: facialImg, title: "Klassische Behandlung", desc: "Ruhige, gründliche Pflege für jede Hautsituation — der Klassiker, neu interpretiert.", duration: "60 Min", price: "ab € 72", to: "/leistungen/gesichtsbehandlung" },
  { img: pmuImg, title: "Microblading / PMU", desc: "Definierte, natürliche Augenbrauen mit feinster Präzision — handwerklich gestaltet.", duration: "120 Min", price: "ab € 345", to: "/leistungen/microblading" },
];

const TreatmentRow = ({ item, index }: { item: typeof treatments[number]; index: number }) => {
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
    <article ref={ref} className="group relative py-14 md:py-20 border-b border-border/60 last:border-b-0">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
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

        <div
          className={`md:col-span-5 ${reverse ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"} transition-all duration-1000 delay-150 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="eyebrow mb-5">{String(index + 1).padStart(2, "0")} — Behandlung</p>
          <h3 className="font-serif text-4xl md:text-5xl leading-[1.05] text-foreground">{item.title}</h3>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">{item.desc}</p>

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
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Treatments = () => (
  <section className="py-24 md:py-32">
    <div className="container-editorial">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16">
        <div className="max-w-xl">
          <p className="eyebrow mb-5">Beliebte Behandlungen</p>
          <h2 className="headline">Gezielte Behandlungen für deine Haut.</h2>
        </div>
        <Link to="/leistungen" className="link-underline text-sm">
          Alle Leistungen
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div>
        {treatments.map((t, i) => (
          <TreatmentRow key={t.title} item={t} index={i} />
        ))}
      </div>

      <div className="mt-16 md:mt-20 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="font-serif text-2xl md:text-3xl max-w-md leading-snug">
          Nicht sicher, welche Behandlung zu dir passt?
        </p>
        <Link
          to="/hautanalyse"
          className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors shrink-0"
        >
          Hautanalyse buchen
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  </section>
);

export default Treatments;
