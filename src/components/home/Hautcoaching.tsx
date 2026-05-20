import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import jugendImg from "@/assets/jugendliche-haut.jpg";
import reifeImg from "@/assets/reife-haut.jpg";
import allgemeinImg from "@/assets/allgemeine-hautberatung.jpg";

const paths = [
  {
    title: "Hautcoaching für Jugendliche",
    text: "Pickel, Mitesser und Akne sind gerade in der Pubertät häufig belastend. Ich zeige Jugendlichen Schritt für Schritt, wie sie ihre Haut richtig reinigen und pflegen können.",
    to: "/hautcoaching/jugendliche-haut",
    img: jugendImg,
  },
  {
    title: "Hautcoaching für reife Haut",
    text: "Reife Haut hat andere Bedürfnisse. Gemeinsam stimmen wir Pflege, Wirkstoffe und Behandlungen auf deinen aktuellen Hautzustand ab.",
    to: "/hautcoaching/reife-haut",
    img: reifeImg,
  },
  {
    title: "Hautcoaching bei Problemhaut",
    text: "Bei unreiner Haut, Pigmentflecken oder wiederkehrenden Entzündungen erarbeiten wir einen klaren Behandlungs- und Pflegeplan.",
    to: "/hautcoaching/allgemeine-hautberatung",
    img: allgemeinImg,
  },
];

const Hautcoaching = () => (
  <section className="py-24 md:py-32">
    <div className="container-editorial">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-20">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5 text-primary">Hautcoaching & Pflegeberatung</p>
          <h2 className="headline">
            Persönliche Begleitung für deine Haut —{" "}
            <span className="italic text-primary">verstehen, pflegen, verändern.</span>
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="lede">
            Als Hautcoach unterstütze ich dich nicht nur im Studio, sondern auch bei deiner täglichen
            Pflegeroutine zu Hause — abgestimmt auf deinen Hautzustand und deine Lebensphase.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Coaching-Termin buchen <ArrowUpRight size={14} />
            </Link>
            <Link to="/hautcoaching" className="link-underline inline-flex items-center text-sm">
              Mehr über Hautcoaching <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {paths.map((p) => (
          <Link
            key={p.title}
            to={p.to}
            className="group flex flex-col bg-background transition-all duration-500"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="pt-6 md:pt-8">
              <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">{p.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground border-b border-foreground/30 pb-1 transition-all duration-300 group-hover:text-primary group-hover:border-primary group-hover:gap-3">
                Mehr erfahren <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Hautcoaching;
