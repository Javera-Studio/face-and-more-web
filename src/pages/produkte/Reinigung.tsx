import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Leaf,
  Droplets,
  ShieldCheck,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import heroImg from "@/assets/treatment-skin.jpg";
import analysisImg from "@/assets/treatment-facial.jpg";
import P1 from "@/assets/Produkt1.jpg";
import P2 from "@/assets/Produkt2.jpg";
import P3 from "@/assets/Produkt3.jpg";
import P4 from "@/assets/Produkt4.jpg";
import P5 from "@/assets/Produkt5.jpg";
import P6 from "@/assets/Produkt6.jpg";
import P7 from "@/assets/Produkt7.jpg";
import P8 from "@/assets/Produkt8.jpg";

interface Product {
  name: string;
  image: string;
  price: string;
  size: string;
  skinType: string;
  description: string;
  benefits: string[];
  tags: string[];
}

const products: Product[] = [
  {
    name: "Gentle Cleansing Gel",
    image: P1,
    price: "€45",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Sanftes Reinigungsgel mit Aloe Vera und antioxidativem weißen Tee zur gründlichen Entfernung von Make-up und Verunreinigungen, ohne die Haut auszutrocknen.",
    benefits: ["Reinigt sanft und gründlich", "Unterstützt die Feuchtigkeitsbalance", "Ideal für empfindliche Haut"],
    tags: ["Reinigung", "Aloe Vera", "Sensitive Skin"],
  },
  {
    name: "Gentle Cleansing Gel Travel Size",
    image: P2,
    price: "€25",
    size: "50 ml",
    skinType: "Alle Hauttypen",
    description:
      "Milde Reinigung mit beruhigender Aloe Vera und antioxidativem weißen Tee. Reinigt gründlich und unterstützt die natürliche Feuchtigkeitsbalance der Haut.",
    benefits: ["Ideal für unterwegs", "Unterstützt sanfte Reinigung", "Bewahrt die Hautbalance"],
    tags: ["Travel Size", "Reinigung", "Pflege"],
  },
  {
    name: "Daily Facial Cleanser",
    image: P3,
    price: "€55",
    size: "200 ml",
    skinType: "Normale & ölige Haut",
    description:
      "Parfümfreie Reinigung mit AHAs zur Entfernung abgestorbener Hautzellen und gründlichen Reinigung der Haut. Hinterlässt ein glattes, frisches Hautgefühl.",
    benefits: ["Unterstützt reine Haut", "Entfernt abgestorbene Hautzellen", "Fördert glattere Haut"],
    tags: ["AHA", "Reinigung", "Glow"],
  },
  {
    name: "Daily Facial Cleanser Travel Size",
    image: P4,
    price: "€30",
    size: "50 ml",
    skinType: "Normale & ölige Haut",
    description:
      "Effektive AHA-Reinigung zur Klärung und Verfeinerung des Hautbildes. Ideal bei Hautunreinheiten und überschüssigem Talg.",
    benefits: ["Unterstützt verfeinerte Haut", "Ideal bei Unreinheiten", "Praktisch für Reisen"],
    tags: ["Travel Size", "AHA", "Problemhaut"],
  },
  {
    name: "Facial Scrub",
    image: P5,
    price: "€50",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Peeling mit biologisch abbaubaren Peelingkügelchen und AHAs zur sanften Entfernung abgestorbener Hautzellen und Verbesserung der Hautstruktur.",
    benefits: ["Unterstützt Hauterneuerung", "Fördert glattere Haut", "Unterstützt natürlichen Glow"],
    tags: ["Peeling", "Glow", "Exfoliation"],
  },
  {
    name: "Facial Scrub Travel Size",
    image: P6,
    price: "€28",
    size: "50 ml",
    skinType: "Alle Hauttypen",
    description:
      "Sanft exfolierendes Peeling zur Unterstützung eines glatten, strahlenden Hautbildes und zur Förderung der Hauterneuerung.",
    benefits: ["Unterstützt glatte Haut", "Fördert strahlenden Teint", "Ideal für unterwegs"],
    tags: ["Travel Size", "Peeling", "Glow"],
  },
  {
    name: "Gentle Eye Makeup Remover",
    image: P7,
    price: "€35",
    size: "125 ml",
    skinType: "Sensible Haut",
    description:
      "Sanfter Augen-Make-up Entferner mit Aloe Vera und Gurke. Reinigt gründlich, ohne zu reizen, und eignet sich auch für Wimpernverlängerungen.",
    benefits: ["Unterstützt sanfte Reinigung", "Ideal für empfindliche Augen", "Entfernt Make-up gründlich"],
    tags: ["Augenpflege", "Sensitive Skin", "Reinigung"],
  },
  {
    name: "Deluxe Facial Cloth",
    image: P8,
    price: "€22",
    size: "1 Stk",
    skinType: "Alle Hauttypen",
    description:
      "Doppelseitiges, antibakterielles Reinigungstuch mit glatter und strukturierter Seite zur sanften Reinigung und leichten Exfoliation der Haut.",
    benefits: ["Unterstützt gründliche Reinigung", "Sanftes Mikro-Peeling", "Wiederverwendbar & hygienisch"],
    tags: ["Zubehör", "Reinigung", "Peeling"],
  },
];

const benefitTags = [
  "Reinigung",
  "Glow",
  "Hauterneuerung",
  "Feuchtigkeitsbalance",
  "Sensitive Skin",
  "Exfoliation",
];

const benefitIcons = [Sparkles, Leaf, Droplets];

const ProductCard = ({ p }: { p: Product }) => (
  <article className="group bg-background border border-border/60 flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-soft hover:-translate-y-1">
    <div className="aspect-square overflow-hidden bg-secondary/30 flex items-center justify-center">
      <img
        src={p.image}
        alt={p.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
    <div className="p-8 lg:p-9 flex flex-col flex-1">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl leading-snug">{p.name}</h3>
        <p className="font-serif text-xl text-primary shrink-0">{p.price}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] uppercase tracking-widest text-muted-foreground">
        <span>{p.size}</span>
        <span className="text-foreground/40">·</span>
        <span>{p.skinType}</span>
      </div>

      <p className="mt-5 text-sm text-foreground/75 leading-relaxed">{p.description}</p>

      <ul className="mt-6 space-y-2.5">
        {p.benefits.map((b, i) => {
          const Icon = benefitIcons[i % benefitIcons.length];
          return (
            <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
              <Icon size={14} className="text-primary mt-1 shrink-0" />
              <span>{b}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-7 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] uppercase tracking-widest text-foreground/70 border border-border/70 px-3 py-1.5"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        to="/kontakt"
        className="group/cta mt-auto pt-6 border-t border-border/70 inline-flex items-center justify-between text-sm tracking-wide text-foreground hover:text-primary transition-colors"
      >
        Beratung anfragen
        <ArrowRight
          size={16}
          className="transition-transform duration-500 group-hover/cta:translate-x-1"
        />
      </Link>
    </div>
  </article>
);

const Reinigung = () => (
  <SiteLayout>
    {/* HERO */}
    <section className="bg-gradient-warm pt-16 md:pt-24 pb-20 md:pb-28">
      <div className="container-editorial">
        <Link
          to="/produkte"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} /> Zurück zu allen Kategorien
        </Link>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Kategorie · Reinigung &amp; Peeling</p>
            <h1 className="display">
              Die Grundlage gesunder und{" "}
              <span className="italic text-primary">ausgeglichener</span> Haut.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Eine gründliche, aber sanfte Reinigung unterstützt die Haut dabei, ausgeglichen, frisch und aufnahmefähig für nachfolgende Pflegeprodukte zu bleiben.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/hautanalyse"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
              >
                Hautanalyse buchen{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Persönliche Beratung
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden shadow-soft">
              <img
                src={heroImg}
                alt="Reinigung & Peeling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* EDITORIAL INTRO */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">Philosophie</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground/95">
            Gesunde Haut beginnt mit der richtigen{" "}
            <span className="italic text-primary">Reinigung</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            Reinigung und sanfte Exfoliation gehören zu den wichtigsten Schritten moderner Hautpflege. Sie unterstützen die Haut dabei, Make-up, überschüssigen Talg und Umweltbelastungen zu entfernen, ohne die natürliche Hautbarriere unnötig zu belasten.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Ob empfindliche Haut, tägliche Reinigung oder verfeinernde AHA-Pflege — hochwertige Reinigungsprodukte helfen dabei, die Haut klarer, glatter und frischer wirken zu lassen.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Bei FACE AND MORE werden Reinigungsprodukte individuell auf Hauttyp, Hautzustand und persönliche Hautbedürfnisse abgestimmt.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {benefitTags.map((t) => (
              <span
                key={t}
                className="text-[11px] uppercase tracking-widest text-foreground/70 border border-border/70 px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* PRODUCT GRID */}
    <section className="pb-24 md:pb-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Ausgewählte Pflege</p>
            <h2 className="headline">
              Sanfte Reinigung &amp; Exfoliation für{" "}
              <span className="italic text-primary">jeden Hauttyp</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Jedes Produkt wird individuell nach Hautanalyse und persönlicher Beratung empfohlen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>

    {/* EXPERT SECTION */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">Expertise</p>
          <h2 className="headline">
            Welche Reinigung passt zu{" "}
            <span className="italic text-primary">deiner Haut</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Nicht jede Haut benötigt dieselbe Reinigung. Während empfindliche Haut besonders sanfte Pflege bevorzugt, profitieren andere Hauttypen stärker von klärenden Wirkstoffen oder sanfter Exfoliation.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passende Reinigungsroutine für deine individuellen Hautbedürfnisse zu finden.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Individuelle Hautanalyse vor jeder Empfehlung",
              "Reinigungsprodukte abgestimmt auf Hauttyp & Hautzustand",
              "Professionelle Beratung für die optimale Routine",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                <ShieldCheck size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={analysisImg}
              alt="Professionelle Hautanalyse"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">FACE AND MORE</p>
        <h2 className="headline">
          Professionelle Hautpflege beginnt mit der richtigen{" "}
          <span className="italic text-primary">Reinigung</span>.
        </h2>
        <p className="lede mt-6">
          Buche deine persönliche Hautanalyse und finde die Produkte, die wirklich zu deiner Haut passen.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/hautanalyse"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Hautanalyse buchen{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-8 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Reinigung;
