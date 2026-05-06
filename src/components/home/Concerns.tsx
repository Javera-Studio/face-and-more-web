import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const concerns = [
  "Unreine Haut",
  "Akne",
  "Trockene Haut",
  "Sensible Haut",
  "Pigmentflecken",
  "Erste Falten",
  "Fahle Haut",
  "Große Poren",
];

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

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
        {concerns.map((c, i) => (
          <div
            key={c}
            className="border-r border-b border-border p-7 md:p-9 flex items-end min-h-[140px] hover:bg-secondary/50 transition-colors"
          >
            <p className="font-serif text-xl md:text-2xl leading-tight">
              <span className="text-muted-foreground text-xs mr-3 align-top">
                {String(i + 1).padStart(2, "0")}
              </span>
              {c}
            </p>
          </div>
        ))}
      </div>

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
