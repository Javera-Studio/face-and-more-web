import { Check } from "lucide-react";
import { imgSrc } from "@/lib/utils";
import michiImg from "@/assets/michi.JPG";

const advantages = [
  "Spezialisierung auf Akne & Problemhaut",
  "Individuelle Hautanalyse & Hautcoaching",
  "Natürliches Microblading mit Liebe zum Detail",
  "Meisterbetrieb mit langjähriger Erfahrung",
  "Treatwell Top Rated 2025",
  "Über 269 verifizierte Bewertungen auf Treatwell",
  "5 Sterne auf Google",
  "Persönliche Betreuung statt Massenabfertigung",
];

const stats = [
  { value: "269+", label: "Treatwell\nBewertungen" },
  { value: "5,0 ★", label: "Google\nBewertung" },
  { value: "Top Rated", label: "Treatwell\n2025" },
];

const WhyUs = () => (
  <section className="py-16 bg-background border-t border-border/40">
    <div className="container-editorial">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

        {/* Left column — text + advantages + stats */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col">
          <p className="eyebrow mb-4">Warum Face and More?</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-foreground">
            Persönliche Betreuung.<br />
            <span className="text-primary">Sichtbare Ergebnisse.</span>
          </h2>
          <p className="lede mt-5 max-w-xl">
            Bei Michaela steht nicht nur die Behandlung im Mittelpunkt, sondern
            deine Haut, deine Bedürfnisse und dein persönliches Wohlbefinden.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {advantages.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={12} className="text-primary stroke-[2.5]" />
                </span>
                <span className="text-sm text-foreground/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* Trust stats — pushed to bottom of column */}
          <div className="mt-auto pt-5 grid grid-cols-3 gap-px border border-border/50 bg-border/50">
            {stats.map(({ value, label }) => (
              <div key={value} className="bg-background px-3 py-5 text-center">
                <p className="font-serif text-2xl md:text-3xl text-primary leading-none">{value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-foreground/50 leading-snug whitespace-pre-line">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — portrait only */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col">
          <div className="overflow-hidden border border-border/50">
            <img
              src={imgSrc(michiImg)}
              alt="Michaela Kornherr — Kosmetikerin & Gründerin von Face and More"
              loading="lazy"
              className="w-full object-cover object-top aspect-[4/4.5]"
            />
          </div>

          <div className="px-1 mt-4">
            <p className="font-serif text-xl text-foreground">Michaela Kornherr</p>
            <p className="mt-1 text-sm text-foreground/60">Kosmetikerin, Hautcoach & Gründerin von Face and More</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default WhyUs;
