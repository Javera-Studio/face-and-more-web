import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { imgSrc } from "@/lib/utils";
import portrait from "@/assets/michaela.avif";
import studio from "@/assets/studio.jpg";
import studio2 from "@/assets/studio2.jpg";
import studio3 from "@/assets/studio3.jpg";
import Link from "next/link";
import { Award, Star } from "lucide-react";

const credentials = [
  { label: "Kosmetik-Meisterin" },
  { label: "Hautcoach" },
  { label: "Studiogründung 2019" },
  { label: "Spezialisierung auf Problemhaut & Akne" },
];

const UeberMich = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Über Michaela"
      title={
        <>
          FACE AND MORE ist{" "}
          <span className="italic text-primary">meine Berufung.</span>
        </>
      }
      intro="2019 habe ich mir mit der Eröffnung meines Studios einen lang gehegten Traum erfüllt. Seitdem begleite ich Menschen mit unterschiedlichsten Hautbedürfnissen auf ihrem Weg zu gesünderer, schönerer und stärkerer Haut."
    />

    <section className="py-20">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Portrait + Trust-Elemente */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="aspect-[4/5] overflow-hidden shadow-soft">
            <img
              src={imgSrc(portrait)}
              alt="Michaela Kornherr — Hautexpertin in Wien"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bewertung */}
          <div className="flex items-center gap-3 px-6 py-4 border border-border/60 bg-secondary/30">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <div>
              <p className="font-serif text-lg text-primary leading-none">5,0</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground mt-0.5">
                189 Kundenstimmen
              </p>
            </div>
          </div>

          {/* Browista Award */}
          <div className="flex items-start gap-4 px-6 py-4 border border-border/60 bg-secondary/30">
            <span className="size-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Award size={16} className="text-primary" />
            </span>
            <div>
              <p className="eyebrow text-primary mb-1">Browista Meisterschaft 2025</p>
              <p className="font-serif text-base text-foreground leading-snug">
                2. Platz — Kategorie Microblading
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col divide-y divide-border/50 border border-border/60">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-center gap-3 px-6 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-foreground/80">{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
          <p>
            Als Kosmetik-Meisterin und Hautcoach ist mir wichtig, nicht nur Symptome zu behandeln, sondern die Haut ganzheitlich zu verstehen. Jede Behandlung beginnt deshalb mit einer persönlichen Beratung und einer fundierten Hautanalyse. So kann ich individuell auf die Bedürfnisse meiner Kundinnen und Kunden eingehen und nachhaltige Ergebnisse erzielen.
          </p>
          <p>
            Mein Schwerpunkt liegt auf Problemhaut, Akne, Hyperpigmentierungen und den Bedürfnissen reifer Haut. Dabei arbeite ich mit hochwertigen Wirkstoffen und modernen Behandlungsmethoden, die gezielt auf das jeweilige Hautbild abgestimmt werden.
          </p>
          <p>
            Eine besondere Leidenschaft von mir ist das Microblading. Natürlich wirkende Augenbrauen können die Ausstrahlung eines Menschen verändern und das Selbstbewusstsein stärken. Mit präziser Technik und viel Liebe zum Detail schaffe ich Ergebnisse, die harmonisch zum Gesicht passen und langfristig Freude bereiten.
          </p>
          <p>
            Ein besonderer Meilenstein meiner Laufbahn war die Browista Meisterschaft 2025, bei der ich den 2. Platz in der Kategorie Microblading erreichen durfte. Diese Auszeichnung bestätigt meinen Anspruch an Präzision, Natürlichkeit und höchste Qualitätsstandards.
          </p>
          <p>
            Kontinuierliche Weiterbildung ist für mich selbstverständlich. Ich bilde mich regelmäßig in den Bereichen Hautanalyse, Wirkstoffkunde und moderne Behandlungstechniken weiter, damit meine Kundinnen und Kunden stets von aktuellem Fachwissen profitieren.
          </p>
          <p>
            Mein Studio soll ein Ort sein, an dem du dich wohlfühlst, verstanden wirst und individuelle Betreuung erhältst. Persönliche Beratung, hochwertige Behandlungen und ehrliche Empfehlungen stehen bei mir immer im Mittelpunkt.
          </p>
          <div className="pt-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container-editorial">
        <div className="grid grid-cols-3 gap-4">
          <div className="aspect-[3/4] overflow-hidden shadow-soft">
            <img
              src={imgSrc(studio)}
              alt="Behandlungsraum FACE AND MORE"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden shadow-soft">
            <img
              src={imgSrc(studio2)}
              alt="Hautanalyse und Empfang"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden shadow-soft">
            <img
              src={imgSrc(studio3)}
              alt="Studio Atmosphäre"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default UeberMich;
