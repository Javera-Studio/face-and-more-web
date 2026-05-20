import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import jugendImg from "@/assets/jugendliche-haut.jpg";
import reifeImg from "@/assets/reife-haut.jpg";
import allgemeinImg from "@/assets/allgemeine-hautberatung.jpg";
import michaelaImg from "@/assets/michaela.jpg";

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

const benefits = [
  "Persönliche Analyse deiner Haut",
  "Individuelle Pflegeempfehlung",
  "Unterstützung bei Akne & Unreinheiten",
  "Hautcoaching für Jugendliche",
  "Beratung für reife Haut",
  "Routine für Zuhause verständlich erklärt",
];

const Hautcoaching = () => (
  <SiteLayout>
    {/* HERO */}
    <section className="bg-gradient-warm pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">Hautcoach Wien</p>
          <h1 className="display">
            Hautcoaching für <span className="italic text-primary">Problemhaut</span>, Akne und individuelle Pflege.
          </h1>
          <p className="lede mt-6 max-w-xl">
            Persönliche Hautberatung für Jugendliche und Erwachsene — damit du deine Haut besser verstehst und richtig pflegst.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/leistungen" className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors">
              Alle Leistungen
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden shadow-soft">
            <img src={michaelaImg} alt="Michaela — Hautcoach Wien" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Einführung</p>
        </div>
        <div className="lg:col-span-8">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground/90">
            Als Hautcoach begleite ich dich nicht nur während der Behandlung im Studio, sondern unterstütze dich auch bei deiner täglichen Pflegeroutine zu Hause. Gemeinsam finden wir heraus, was deine Haut wirklich braucht und welche Schritte langfristig zu einem ruhigeren, reineren und gesünderen Hautbild führen.
          </p>
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="pb-24 md:pb-32">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Was dich erwartet</p>
          <h2 className="headline">
            Mehr als nur eine <span className="italic text-primary">Behandlung</span>.
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-4 border-b border-border/60 pb-6">
              <span className="mt-1 size-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check size={14} />
              </span>
              <p className="font-serif text-lg text-foreground/90 leading-snug">{b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* PATHS */}
    <section className="pb-24 md:pb-32">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5 text-primary">Drei Wege</p>
          <h2 className="headline">
            Welcher Weg passt zu <span className="italic text-primary">deiner Haut</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {paths.map((p) => (
            <Link key={p.title} to={p.to} className="group flex flex-col">
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

    {/* CTA */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Bereit?</p>
        <h2 className="headline">
          Starten wir mit deinem <span className="italic text-primary">Hautcoaching</span>.
        </h2>
        <p className="lede mt-6">
          Buche dein persönliches Beratungsgespräch im Studio FACE AND MORE in Wien.
        </p>
        <Link
          to="/kontakt"
          className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
        >
          Termin buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default Hautcoaching;
