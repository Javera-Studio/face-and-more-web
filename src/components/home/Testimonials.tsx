import { Star, Quote } from "lucide-react";

const featured = {
  text: "Die Aknebehandlung ist jedes Mal wirklich ausgezeichnet! Da ich regelmäßig bei Michaela bin, ist meine Haut um einiges besser geworden. Ich fühle mich immer sehr gut aufgehoben.",
  name: "Charlotte",
  tag: "Akne & Problemhaut",
};

const reviews = [
  {
    text: "Individuelle Beratung und Behandlung wie es gerade passt und was man gerade braucht. Super Beratung ohne dass man zu einem Produktkauf gedrängt wird.",
    name: "Nina",
    tag: "Persönliche Beratung",
  },
  {
    text: "Michaela strahlt eine außergewöhnliche Freundlichkeit und Wärme aus. Man fühlt sich sehr gut aufgehoben und absolut willkommen.",
    name: "Bruno",
    tag: "Vertrauen & Atmosphäre",
  },
  {
    text: "…ich strahle heute wie ein glasierter Donut nach dem Microneedling.",
    name: "Claudia",
    tag: "Microneedling Glow",
    short: true,
  },
  {
    text: "Michaela ist fachlich äußerst kompetent und sie hat eine sehr angenehme Art.",
    name: "Heidemarie",
    tag: "Kompetenz & Anti Aging",
  },
  {
    text: "Eine absolute Wohlfühloase! Das liebevoll eingerichtete Ambiente und die kompetente, herzliche Betreuung lassen keine Wünsche offen.",
    name: "Milana",
    tag: "Wohlfühlatmosphäre",
  },
];

const Stars = () => (
  <div className="flex gap-1" style={{ color: "#C9A66B" }} aria-label="5 von 5 Sternen">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
    ))}
  </div>
);

const Initial = ({ name }: { name: string }) => (
  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary font-serif text-base">
    {name.charAt(0)}
  </span>
);

const Testimonials = () => (
  <section className="relative py-28 md:py-40 bg-background overflow-hidden">
    {/* subtle decorative wash */}
    <div
      aria-hidden
      className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
      style={{ background: "radial-gradient(closest-side, hsl(var(--primary-soft)), transparent)" }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
      style={{ background: "radial-gradient(closest-side, hsl(var(--primary-soft)), transparent)" }}
    />

    <div className="container-editorial relative">
      {/* Header */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
        <div className="md:col-span-7">
          <p className="eyebrow mb-6">Kundinnenstimmen</p>
          <h2 className="display max-w-[14ch]">
            Vertrauen, das unter die Haut geht.
          </h2>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="lede">
            Echte Erfahrungen von Kundinnen, die ihre Hautreise bei
            Face and More begonnen haben.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Stars />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              5,0 · Google Bewertungen
            </span>
          </div>
        </div>
      </div>

      {/* Editorial grid */}
      <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
        {/* Featured */}
        <article className="md:col-span-8 relative bg-card border border-border/70 p-10 md:p-12 lg:p-14 shadow-soft flex flex-col h-full">
          <Quote
            aria-hidden
            className="absolute -top-6 left-8 md:left-12 text-primary/15"
            size={120}
            strokeWidth={1}
            fill="currentColor"
          />
          <div className="relative flex flex-col h-full">
            <div className="flex items-center gap-4">
              <span className="eyebrow text-primary">Featured</span>
              <span className="h-px w-10 bg-primary/40" />
              <span className="eyebrow">{featured.tag}</span>
            </div>

            <blockquote className="font-serif text-2xl md:text-3xl lg:text-[2.4rem] leading-[1.25] mt-8 md:mt-10 text-foreground/95">
              „{featured.text}“
            </blockquote>

            <figcaption className="mt-10 md:mt-12 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <Initial name={featured.name} />
                <div>
                  <p className="text-sm font-medium tracking-wide">— {featured.name}</p>
                  <p className="eyebrow mt-1">Langzeit-Kundin</p>
                </div>
              </div>
              <Stars />
            </figcaption>
          </div>
        </article>

        {/* Right stacked column — matches featured height */}
        <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 h-full">
          <article className="flex-1 bg-primary/[0.04] border border-primary/15 p-8 md:p-9 flex flex-col">
            <Stars />
            <blockquote className="font-serif text-lg md:text-xl leading-snug mt-5 text-foreground/90">
              „{reviews[0].text}“
            </blockquote>
            <figcaption className="mt-auto pt-8 flex items-center gap-3">
              <Initial name={reviews[0].name} />
              <div>
                <p className="text-sm font-medium">— {reviews[0].name}</p>
                <p className="eyebrow mt-0.5">{reviews[0].tag}</p>
              </div>
            </figcaption>
          </article>

          <article className="flex-1 bg-card border border-border/70 p-8 md:p-9 flex flex-col">
            <Stars />
            <blockquote className="font-serif text-lg md:text-xl leading-snug mt-5 text-foreground/90">
              „{reviews[1].text}“
            </blockquote>
            <figcaption className="mt-auto pt-8 flex items-center gap-3">
              <Initial name={reviews[1].name} />
              <div>
                <p className="text-sm font-medium">— {reviews[1].name}</p>
                <p className="eyebrow mt-0.5">{reviews[1].tag}</p>
              </div>
            </figcaption>
          </article>
        </div>

        {/* Row 2 — three cards, all aligned top & bottom */}
        <article className="md:col-span-5 relative p-10 md:p-12 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex flex-col h-full">
          <Quote
            aria-hidden
            className="absolute top-6 right-6 text-primary-foreground/20"
            size={64}
            strokeWidth={1}
            fill="currentColor"
          />
          <blockquote className="font-serif text-2xl md:text-3xl leading-snug">
            „{reviews[2].text}“
          </blockquote>
          <figcaption className="mt-auto pt-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">— {reviews[2].name}</p>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] mt-1 text-primary-foreground/70">
                {reviews[2].tag}
              </p>
            </div>
            <div className="flex gap-1" style={{ color: "#E8D6A8" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </figcaption>
        </article>

        <article className="md:col-span-3 bg-card border border-border/70 p-8 md:p-9 flex flex-col h-full">
          <Stars />
          <blockquote className="font-serif text-lg md:text-xl leading-snug mt-6 text-foreground/90">
            „{reviews[3].text}“
          </blockquote>
          <figcaption className="mt-auto pt-8">
            <p className="text-sm font-medium">— {reviews[3].name}</p>
            <p className="eyebrow mt-1">{reviews[3].tag}</p>
          </figcaption>
        </article>

        <article className="md:col-span-4 bg-secondary/60 border border-border/60 p-8 md:p-10 flex flex-col h-full">
          <Stars />
          <blockquote className="font-serif text-lg md:text-xl leading-snug mt-6 text-foreground/90">
            „{reviews[4].text}“
          </blockquote>
          <figcaption className="mt-auto pt-8 flex items-center gap-3">
            <Initial name={reviews[4].name} />
            <div>
              <p className="text-sm font-medium">— {reviews[4].name}</p>
              <p className="eyebrow mt-0.5">{reviews[4].tag}</p>
            </div>
          </figcaption>
        </article>
      </div>

      {/* Footer note */}
      <div className="mt-24 md:mt-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-border/60 pt-10">
        <p className="font-serif text-2xl md:text-3xl max-w-xl leading-snug">
          Persönliche Betreuung, die man spürt — Behandlung für Behandlung.
        </p>
        <a href="/kontakt" className="link-underline text-sm uppercase tracking-[0.2em]">
          Termin vereinbaren →
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;
