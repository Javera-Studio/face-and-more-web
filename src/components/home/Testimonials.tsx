import { Star } from "lucide-react";

const reviews = [
  {
    text: "Endlich eine Hautexpertin, die wirklich zuhört. Die Hautanalyse hat mir die Augen geöffnet — und mein Hautbild ist seit Monaten so klar wie nie.",
    name: "Anna K.",
    detail: "Hautanalyse & Pflegeplan",
  },
  {
    text: "Michaela nimmt sich Zeit, erklärt jeden Schritt und arbeitet mit modernster Technik. Ich fühle mich hier rundum gut aufgehoben.",
    name: "Sophie M.",
    detail: "Microneedling",
  },
  {
    text: "Ruhige Atmosphäre, Premium-Qualität, sichtbare Ergebnisse. Genau das, was ich gesucht habe.",
    name: "Lisa B.",
    detail: "Anti Aging Treatment",
  },
];

const Testimonials = () => (
  <section className="py-24 md:py-32">
    <div className="container-editorial">
      <div className="max-w-xl">
        <p className="eyebrow mb-5">Kundenstimmen</p>
        <h2 className="headline">Vertrauen, das wächst — Termin für Termin.</h2>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <figure key={r.name} className="bg-secondary/50 p-8 md:p-10 flex flex-col">
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-[1.4rem] leading-snug mt-6 text-foreground/90">
              „{r.text}“
            </blockquote>
            <figcaption className="mt-auto pt-8">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="eyebrow mt-1">{r.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
