import Link from "next/link";

const tiles = [
  {
    nr: "01",
    title: "Individuelle Hautanalyse",
    text: "Keine Behandlung von der Stange – deine Haut wird genau angesehen und die Pflege individuell auf deine Bedürfnisse abgestimmt.",
  },
  {
    nr: "02",
    title: "Expertise bei Problemhaut",
    text: "Spezialisiert auf Akne, Unreinheiten, Aknenarben und Pigmentflecken – mit Erfahrung, Geduld und gezielten Behandlungskonzepten.",
  },
  {
    nr: "03",
    title: "Persönliche Betreuung",
    text: "Michaela nimmt sich Zeit, hört zu und begleitet dich Schritt für Schritt – damit du dich gut aufgehoben fühlst.",
  },
];

const WhyUs = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container-editorial">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">Persönlich. Erfahren. Individuell.</p>
        <h2 className="headline">Warum Face and More?</h2>
        <p className="lede mt-5">
          Bei Michaela steht nicht nur die Behandlung im Mittelpunkt, sondern
          deine Haut, deine Bedürfnisse und dein persönliches Wohlbefinden.
        </p>
      </div>

      <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
        {tiles.map(({ nr, title, text }) => (
          <div
            key={nr}
            className="bg-secondary/40 border border-border/60 p-8 md:p-9 flex flex-col"
          >
            <span className="font-serif text-3xl text-primary/40 leading-none mb-6">
              {nr}
            </span>
            <h3 className="font-serif text-lg md:text-xl text-foreground leading-snug">
              {title}
            </h3>
            <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-14 border-t border-border/60 pt-8 flex justify-end">
        <Link href="/kontakt" className="link-underline text-sm uppercase tracking-[0.2em]">
          Termin vereinbaren →
        </Link>
      </div>
    </div>
  </section>
);

export default WhyUs;
