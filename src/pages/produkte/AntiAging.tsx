import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Leaf,
  Droplets,
  ShieldCheck,
  Check,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import heroImg from "@/assets/treatment-antiaging.jpg";
import analysisImg from "@/assets/treatment-skin.jpg";
import P2 from "@/assets/Produkt2.jpg";
import P4 from "@/assets/Produkt4.jpg";
import P5 from "@/assets/Produkt5.jpg";
import P6 from "@/assets/Produkt6.jpg";
import P15 from "@/assets/Produkt15.jpg";
import P21 from "@/assets/Produkt21.jpg";
import P22 from "@/assets/Produkt22.jpg";
import P24 from "@/assets/Produkt24.jpg";
import P33 from "@/assets/Produkt33.jpg";

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
    name: "Super A+ Serum",
    image: P2,
    price: "€110",
    size: "30 ml",
    skinType: "Die meisten Hauttypen",
    description:
      "Intensives Retinol-Serum zur Unterstützung glatterer, strafferer und sichtbar regenerierter Haut.",
    benefits: ["Unterstützt Kollagenbildung", "Fördert Hauterneuerung", "Intensive Feuchtigkeit"],
    tags: ["Retinol", "Straffung", "Anti-Aging"],
  },
  {
    name: "Radiance Serum",
    image: P4,
    price: "€110",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Aktives Anti-Aging Serum für ein verfeinertes, glatteres und strahlenderes Hautbild.",
    benefits: [
      "Unterstützt Zellerneuerung",
      "Verfeinert die Hautstruktur",
      "Unterstützt Glow & Ebenmäßigkeit",
    ],
    tags: ["Glow", "Regeneration", "Hautbild"],
  },
  {
    name: "DNA Renewal Treatment",
    image: P5,
    price: "€149",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Luxuriöses Regenerationsserum zur Unterstützung von Hautfestigkeit, Elastizität und Hauterneuerung.",
    benefits: [
      "Unterstützt Hautregeneration",
      "Fördert Elastizität",
      "Intensive Anti-Aging Pflege",
    ],
    tags: ["Luxury", "Regeneration", "Anti-Aging"],
  },
  {
    name: "Liquid Platinum",
    image: P6,
    price: "€79,50",
    size: "130 ml",
    skinType: "Alle Hauttypen",
    description:
      "Nachtpflege mit Fruchtsäure für glattere, strahlendere und sichtbar erneuerte Haut.",
    benefits: [
      "Unterstützt Glow über Nacht",
      "Fördert Hauterneuerung",
      "Verfeinert die Hautstruktur",
    ],
    tags: ["Fruchtsäure", "Glow", "Nachtpflege"],
  },
  {
    name: "Hydrating Night Repair+",
    image: P15,
    price: "€89,50",
    size: "50 ml",
    skinType: "Alle Hauttypen außer aktiver Akne",
    description:
      "Verfeinernde Nachtpflege mit AHA zur Unterstützung eines glatten und frischen Hautbildes.",
    benefits: [
      "Unterstützt Hauterneuerung",
      "Glättet die Haut",
      "Fördert einen strahlenden Teint",
    ],
    tags: ["Nachtpflege", "AHA", "Anti-Aging"],
  },
  {
    name: "Ultimate Hydration",
    image: P21,
    price: "€99",
    size: "50 ml",
    skinType: "Trockene & reife Haut",
    description:
      "Reichhaltige Pflege für intensive Feuchtigkeit, mehr Elastizität und ein geschmeidiges Hautgefühl.",
    benefits: [
      "Unterstützt trockene Haut",
      "Fördert Elastizität",
      "Intensive Feuchtigkeitspflege",
    ],
    tags: ["Reife Haut", "Feuchtigkeit", "Straffung"],
  },
  {
    name: "Advanced Hydrating Moisturiser",
    image: P22,
    price: "€99",
    size: "50 ml",
    skinType: "Normale bis trockene Haut",
    description:
      "Antioxidative Feuchtigkeitspflege zur Unterstützung glatter, geschmeidiger und gepflegter Haut.",
    benefits: [
      "Unterstützt Hautschutz",
      "Fördert Feuchtigkeit",
      "Unterstützt ein glattes Hautbild",
    ],
    tags: ["Feuchtigkeit", "Antioxidantien", "Pflege"],
  },
  {
    name: "Firming Eye Lift",
    image: P24,
    price: "€99,50",
    size: "15 ml",
    skinType: "Alle Hauttypen",
    description:
      "Straffende Augenpflege gegen feine Linien, Schwellungen und müde Augenpartien.",
    benefits: [
      "Unterstützt straffere Haut",
      "Reduziert Schwellungen",
      "Fördert glattere Augenpartie",
    ],
    tags: ["Augenpflege", "Straffung", "Anti-Aging"],
  },
  {
    name: "Platinum Collection",
    image: P33,
    price: "€286",
    size: "Pflege-Set",
    skinType: "Reife & anspruchsvolle Haut",
    description:
      "Exklusives Anti-Aging Set mit ausgewählten ASAP Wirkstoffen für Regeneration und Glow.",
    benefits: [
      "Unterstützt Hauterneuerung",
      "Ideal für reife Haut",
      "Hochwertige Wirkstoffpflege",
    ],
    tags: ["Set", "Luxury", "Anti-Aging"],
  },
];

const benefitTags = [
  "Regeneration",
  "Glow",
  "Feuchtigkeit",
  "Hauterneuerung",
  "Straffung",
  "Wirkstoffpflege",
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

const AntiAging = () => (
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
            <p className="eyebrow mb-6">Kategorie · Anti-Aging & Regeneration</p>
            <h1 className="display">
              <span className="italic text-primary">Regeneration</span>, Glow & sichtbar{" "}
              <span className="italic text-primary">gepflegte</span> Haut.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Hochwertige Wirkstoffpflege zur Unterstützung glatterer, strahlenderer und sichtbar regenerierter Haut — abgestimmt auf unterschiedliche Hautbedürfnisse und Hauttypen.
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
                alt="Anti-Aging Pflege"
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
            Professionelle Anti-Aging Pflege beginnt mit der{" "}
            <span className="italic text-primary">richtigen Wirkstoffkombination</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            Moderne Anti-Aging Pflege bedeutet heute mehr als nur Feuchtigkeit. Hochwertige Wirkstoffe wie Retinol, Fruchtsäuren, Antioxidantien und regenerative Aktivstoffe unterstützen die Haut dabei, glatter, strahlender und ausgeglichener zu wirken.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Bei FACE AND MORE werden Pflegeprodukte individuell auf Hautzustand, Hauttyp und persönliche Hautziele abgestimmt — für sichtbare Ergebnisse und eine langfristig gesunde Hautbalance.
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
              Eine kuratierte Auswahl für{" "}
              <span className="italic text-primary">deine Hautziele</span>.
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
            Welche Anti-Aging Pflege passt zu{" "}
            <span className="italic text-primary">deiner Haut</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Nicht jede Haut benötigt dieselben Wirkstoffe. Während manche Hauttypen intensive Regeneration und Straffung benötigen, profitieren andere stärker von Feuchtigkeit, sanfter Hauterneuerung oder antioxidativem Schutz.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passende Pflege für deine individuellen Hautbedürfnisse zu finden.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Individuelle Hautanalyse vor jeder Empfehlung",
              "Wirkstoffe abgestimmt auf Hauttyp & Hautziele",
              "Langfristige Pflege statt kurzfristiger Trends",
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
          Individuelle Hautpflege beginnt mit{" "}
          <span className="italic text-primary">professioneller Beratung</span>.
        </h2>
        <p className="lede mt-6">
          Buche deine persönliche Hautanalyse und finde die Pflege, die wirklich zu deiner Haut passt.
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

export default AntiAging;
