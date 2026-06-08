'use client'
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Rabbit,
  Droplets,
  Ban,
  FlaskConical,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { imgSrc } from "@/lib/utils";
import asapHydrateImg from "@/assets/asaphydrate.jpg";
import asapCleanserImg from "@/assets/asapCleanser.jpg";
import pflegeImg from "@/assets/pflege.jpg";
import hautberatungImg from "@/assets/hautberatung.jpg";

const benefits = [
  { icon: Leaf,         label: "Vegan" },
  { icon: Rabbit,       label: "Tierversuchsfrei" },
  { icon: Droplets,     label: "Frei von Mikroplastik" },
  { icon: Ban,          label: "Frei von Parabenen" },
  { icon: FlaskConical, label: "Frei von Mineralölen" },
  { icon: Sparkles,     label: "Ohne künstliche Farb- & Duftstoffe" },
];

const ingredients = [
  { label: "Hochkonzentriertes Vitamin C",        desc: "Für Glow, Kollagenaufbau und antioxidativen Schutz vor Umwelteinflüssen." },
  { label: "Vitamin A zur Hauterneuerung",        desc: "Beschleunigt die Zellregeneration und verfeinert die Hautstruktur sichtbar." },
  { label: "Fruchtsäuren (AHA)",                  desc: "Lösen abgestorbene Hautzellen und sorgen für ein ebenmäßigeres Hautbild." },
  { label: "Antioxidantien",                      desc: "Schützen die Haut vor freien Radikalen und vorzeitiger Hautalterung." },
  { label: "Kollagen-Support",                    desc: "Unterstützt die natürliche Kollagenproduktion für mehr Spannkraft und Elastizität." },
];

const skinTypes = [
  "Akne & unreine Haut",
  "Problemhaut & Rötungen",
  "Pigmentflecken",
  "Reife Haut",
  "Empfindliche Haut",
];

const Produkte = () => (
  <SiteLayout>

    {/* Hero */}
    <section className="bg-gradient-warm pt-16 md:pt-20 pb-16 md:pb-24">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Professionelle Hautpflege Wien</p>
          <h1 className="display">
            Wissenschaft trifft{" "}
            <span className="italic text-primary">Hautgesundheit</span>
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Bei FACE AND MORE arbeite ich mit ASAP – Australian Skin Active Products, einer der führenden professionellen Hautpflegemarken Australiens.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Persönliche Hautberatung vereinbaren{" "}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Großes ASAP-Bild + Intro */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="aspect-[3/2] overflow-hidden shadow-soft">
            <img
              src={imgSrc(asapHydrateImg)}
              alt="ASAP Australian Skin Active Products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">Über ASAP</p>
          <h2 className="headline">
            Seit über 20 Jahren für{" "}
            <span className="italic text-primary">sichtbare Ergebnisse</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            ASAP steht für innovative Wirkstoffe, wissenschaftlich fundierte Hautpflege und sichtbare Ergebnisse. Die Produkte wurden speziell für professionelle Hautexperten entwickelt und unterstützen die Haut gezielt bei Regeneration, Schutz und langfristiger Hautgesundheit.
          </p>
        </div>
      </div>
    </section>

    {/* Benefits — Rein. Vegan. Verantwortungsvoll. */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Haltung & Inhaltsstoffe</p>
          <h2 className="headline">
            Rein. Vegan.{" "}
            <span className="italic text-primary">Verantwortungsvoll.</span>
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            ASAP steht für moderne Hautpflege ohne unnötige Zusätze — wirksam, verträglich und mit klarer Haltung.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {benefits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group bg-background p-7 lg:p-9 flex flex-col gap-5 min-h-[170px] transition-colors duration-500 hover:bg-secondary/40"
            >
              <Icon className="text-primary transition-transform duration-500 group-hover:scale-110" size={22} />
              <p className="font-serif text-lg leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Für jede Haut das passende Pflegekonzept */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 lg:order-2">
          <div className="aspect-[3/2] overflow-hidden shadow-soft">
            <img
              src={imgSrc(asapCleanserImg)}
              alt="Individuelle ASAP Hautpflege"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Individuelle Empfehlungen</p>
          <h2 className="headline">
            Für jede Haut das{" "}
            <span className="italic text-primary">passende Pflegekonzept</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Jede Haut ist einzigartig und verdient eine individuelle Lösung. Deshalb wähle ich die passenden Produkte nicht nach Trends, sondern nach den tatsächlichen Bedürfnissen deiner Haut.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Meine Produktempfehlungen sind immer auf deine persönliche Hautanalyse und deine Behandlungsziele abgestimmt.
          </p>
          <ul className="mt-8 space-y-3">
            {skinTypes.map((type) => (
              <li key={type} className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Hochwertige Wirkstoffe */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7">
          {ingredients.map((item, i) => (
            <div key={item.label} className="border-t border-border/60 py-7 lg:py-8">
              <div className="flex gap-6 lg:gap-8 items-start">
                <span
                  className="font-serif text-sm tracking-widest shrink-0 mt-0.5"
                  style={{ color: "#1aa5a5" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-lg leading-snug text-foreground">{item.label}</p>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border/60" />
        </div>
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">Wirkstoffkosmetik</p>
          <h2 className="headline">
            Hochwertige Wirkstoffe für sichtbare{" "}
            <span className="italic text-primary">Ergebnisse</span>.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            ASAP kombiniert moderne Wirkstoffkosmetik mit einer klaren Philosophie — das Ergebnis ist eine gesündere, strahlendere und sichtbar gepflegte Haut.
          </p>
        </div>
      </div>
    </section>

    {/* Pflege die Wirkung zeigt */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">Heimpflege</p>
          <h2 className="headline">
            Pflege, die{" "}
            <span className="italic text-primary">Wirkung zeigt</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Für mich endet eine Behandlung nicht nach deinem Termin. Die richtige Heimpflege unterstützt und verlängert die Ergebnisse deiner Behandlung und hilft dabei, deine Haut langfristig gesund und ausgeglichen zu halten.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Gerne berate ich dich persönlich, welche Produkte am besten zu deiner Haut passen.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[3/2] overflow-hidden shadow-soft">
            <img
              src={imgSrc(pflegeImg)}
              alt="Heimpflege mit ASAP"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 80%" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[3/2] overflow-hidden shadow-soft">
            <img
              src={imgSrc(hautberatungImg)}
              alt="Persönliche Hautberatung"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">Glow. Pflege. ASAP.</p>
          <h2 className="headline">
            Persönliche Hautberatung{" "}
            <span className="italic text-primary">vereinbaren</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Gemeinsam finden wir die Produkte, die wirklich zu deiner Haut passen — abgestimmt auf deine Hautanalyse und Behandlungsziele.
          </p>
          <Link
            href="/kontakt"
            className="group mt-9 inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Termin vereinbaren{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>

  </SiteLayout>
);

export default Produkte;
