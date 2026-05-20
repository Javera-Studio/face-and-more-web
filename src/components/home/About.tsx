import { Link } from "react-router-dom";
import portrait from "@/assets/michaela.jpg";

const About = () => (
  <section className="py-24 md:py-32 bg-secondary/40">
    <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-5">
        <div className="aspect-[4/5] overflow-hidden shadow-soft">
          <img
            src={portrait}
            alt="Michaela Kornherr — Hautexpertin & Gründerin von FACE AND MORE in Wien"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:col-span-7">
        <p className="eyebrow mb-5">Über Michaela</p>
        <h2 className="headline">
          Hautgesundheit ist für mich <span className="italic text-primary">persönlich.</span>
        </h2>
        <p className="lede mt-6">
          Seit vielen Jahren begleite ich Menschen auf dem Weg zu einer Haut, in der
          sie sich wohlfühlen. Mein Anspruch: moderne, fundierte Behandlungen
          kombiniert mit einer Atmosphäre, in der du dich verstanden fühlst.
        </p>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          Im FACE AND MORE Studio in Wien verbinde ich kontinuierliche
          Weiterbildung mit echter Zeit für jede Kundin — von der Hautanalyse bis
          zum individuellen Pflegeplan.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-border pt-8">
          {[
            ["15+", "Jahre Erfahrung"],
            ["3D", "Hautanalyse"],
            ["1:1", "Persönliche Betreuung"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-3xl text-primary">{n}</p>
              <p className="eyebrow mt-2">{l}</p>
            </div>
          ))}
        </div>

        <Link to="/ueber-mich" className="link-underline mt-10 text-sm">
          Mehr über mich erfahren →
        </Link>
      </div>
    </div>
  </section>
);

export default About;
