import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const concerns = [
  { title: "Unreine Haut", desc: "Klärende Routinen, die Balance zurückbringen." },
  { title: "Akne", desc: "Langfristige Begleitung statt schneller Reizung." },
  { title: "Trockene Haut", desc: "Tiefe Feuchtigkeit und ein ruhiger Schutzfilm." },
  { title: "Sensible Haut", desc: "Sanfte Wirkstoffe, individuell abgestimmt." },
  { title: "Pigmentflecken", desc: "Gleichmäßiges Hautbild durch gezielte Aufhellung." },
  { title: "Erste Falten", desc: "Sichtbar straffere, vitale Haut." },
  { title: "Fahle Haut", desc: "Frischer Glow durch zellaktivierende Pflege." },
  { title: "Große Poren", desc: "Verfeinerte Textur, sichtbar ebenmäßig." },
];

const ConcernRow = ({ title, desc, index }: { title: string; desc: string; index: number }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`group border-b border-border/60 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Link
        to="/hautanalyse"
        className="flex items-baseline gap-5 md:gap-8 py-6 md:py-7 transition-colors hover:text-primary"
      >
        <span className="eyebrow shrink-0 w-8 text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-serif text-2xl md:text-3xl flex-1 leading-tight">{title}</span>
        <span className="hidden md:block text-sm text-muted-foreground max-w-[260px] text-right">
          {desc}
        </span>
        <ArrowRight
          size={18}
          className="text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Link>
    </li>
  );
};

const Concerns = () => (
  <section className="py-24 md:py-32">
    <div className="container-editorial">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5">Hautanliegen</p>
        <h2 className="headline">Kommt dir das bekannt vor?</h2>
        <p className="lede mt-5">
          Jede Haut ist anders — deshalb beginnt jede Behandlung mit einem genauen
          Verständnis deiner Haut.
        </p>
      </div>

      <ul className="mt-14 border-t border-border/60">
        {concerns.map((c, i) => (
          <ConcernRow key={c.title} title={c.title} desc={c.desc} index={i} />
        ))}
      </ul>

      <div className="mt-12">
        <Link
          to="/hautanalyse"
          className="group inline-flex items-center gap-3 text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
        >
          Jetzt Haut analysieren lassen
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default Concerns;
