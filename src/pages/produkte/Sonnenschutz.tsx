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
import P12 from "@/assets/Produkt12.jpg";
import P13 from "@/assets/Produkt13.jpg";
import P25 from "@/assets/Produkt25.jpg";
import P30 from "@/assets/Produkt30.jpg";
import P32 from "@/assets/Produkt32.jpg";
import P34 from "@/assets/Produkt34.jpg";
import P35 from "@/assets/Produkt35.jpg";

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
    name: "CC Correcting Cream SPF15",
    image: P12,
    price: "€69",
    size: "50 ml",
    skinType: "Alle Hauttypen",
    description:
      "Getönte Feuchtigkeitspflege mit SPF für einen ebenmäßigen, natürlichen Glow und täglichen Hautschutz.",
    benefits: ["Unterstützt ebenmäßigen Teint", "Schützt vor UV-Strahlen", "Spendet Feuchtigkeit"],
    tags: ["SPF", "Glow", "Tagespflege"],
  },
  {
    name: "SPF50+ Hydrating Defence",
    image: P13,
    price: "€59",
    size: "75 ml",
    skinType: "Alle Hauttypen",
    description:
      "Leichte Tagespflege mit intensivem UVA- und UVB-Schutz und zusätzlicher Feuchtigkeitspflege.",
    benefits: ["Hoher SPF50 Schutz", "Unterstützt Hautfeuchtigkeit", "Leichtes Finish ohne Weißeln"],
    tags: ["SPF50", "Sonnenschutz", "Feuchtigkeit"],
  },
  {
    name: "Hydrating Lip Balm+ SPF15",
    image: P25,
    price: "€29",
    size: "10 ml",
    skinType: "Alle Hauttypen",
    description:
      "Pflegender Lippenbalsam mit SPF zum Schutz vor Austrocknung und UV-Strahlen.",
    benefits: ["Unterstützt weiche Lippen", "Schützt vor Sonne", "Intensive Feuchtigkeit"],
    tags: ["Lippenpflege", "SPF", "Pflege"],
  },
  {
    name: "Skin Essentials",
    image: P32,
    price: "€159",
    size: "Pflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Pflege-Set mit Reinigung, Feuchtigkeit und integriertem Sonnenschutz für die tägliche Routine.",
    benefits: ["Enthält SPF Pflege", "Ideal für Einsteiger", "Unterstützt gesunde Haut"],
    tags: ["Set", "SPF", "Routine"],
  },
  {
    name: "Rejuvenate + Correct",
    image: P34,
    price: "€189",
    size: "Pflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Pflege-Set mit ausgewählten Wirkstoffen und SPF Schutz zur Unterstützung eines strahlenden Hautbildes.",
    benefits: ["Unterstützt Glow", "Enthält SPF Pflege", "Abgestimmte Wirkstoffroutine"],
    tags: ["Glow", "SPF", "Set"],
  },
  {
    name: "Beautiful Skin",
    image: P30,
    price: "€89",
    size: "Pflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Kompaktes Pflege-Set mit SPF Pflege für Alltag und Reisen.",
    benefits: ["Ideal für unterwegs", "Unterstützt Hautschutz", "Einfache Pflegeroutine"],
    tags: ["Travel Size", "SPF", "Pflege"],
  },
  {
    name: "Starter Kit",
    image: P35,
    price: "€129",
    size: "Pflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Starter-Set mit ausgewählten ASAP Produkten inklusive SPF Pflege und Feuchtigkeitsroutine.",
    benefits: ["Perfekt zum Kennenlernen", "Enthält Sonnenschutz", "Unterstützt tägliche Pflege"],
    tags: ["Starter Kit", "SPF", "Pflege"],
  },
];

const benefitTags = [
  "SPF Schutz",
  "Glow",
  "Tagespflege",
  "Hautschutz",
  "Feuchtigkeit",
  "UV-Schutz",
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

const Sonnenschutz = () => (
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
            <p className="eyebrow mb-6">Kategorie · Sonnenschutz</p>
            <h1 className="display">
              <span className="italic text-primary">Schutz</span>, Feuchtigkeit & tägliche{" "}
              <span className="italic text-primary">Hautpflege</span>.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Täglicher Sonnenschutz gehört zu den wichtigsten Schritten moderner Hautpflege. Hochwertige SPF-Produkte unterstützen die Haut dabei, vor UV-Strahlen, vorzeitiger Hautalterung und Feuchtigkeitsverlust geschützt zu bleiben.
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
                alt="Sonnenschutz & SPF Pflege"
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
            Gesunde Haut beginnt mit täglichem{" "}
            <span className="italic text-primary">UV-Schutz</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            UV-Strahlung zählt zu den häufigsten Ursachen vorzeitiger Hautalterung, Pigmentflecken und gestresster Haut. Moderne Sonnenschutzpflege kombiniert deshalb effektiven UVA- und UVB-Schutz mit Feuchtigkeit, leichter Pflege und angenehmen Texturen für den Alltag.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Ob leichte Tagespflege, getönter Glow oder praktische Pflege-Sets — bei FACE AND MORE werden Produkte individuell auf Hauttyp, Alltag und Hautbedürfnisse abgestimmt.
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
              <span className="italic text-primary">täglichen Hautschutz</span>.
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
            Welcher Sonnenschutz passt zu{" "}
            <span className="italic text-primary">deiner Haut</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Nicht jede Haut benötigt dieselbe SPF Pflege. Während manche Hauttypen leichte Texturen bevorzugen, benötigen andere zusätzliche Feuchtigkeit, beruhigende Pflege oder getönte Produkte für den Alltag.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passende Sonnenschutzroutine für deine individuellen Hautbedürfnisse zu finden.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Individuelle Hautanalyse vor jeder Empfehlung",
              "SPF Pflege abgestimmt auf Hauttyp & Alltag",
              "Täglicher Schutz statt saisonaler Pflege",
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
          Täglicher Sonnenschutz ist{" "}
          <span className="italic text-primary">moderne Hautpflege</span>.
        </h2>
        <p className="lede mt-6">
          Buche deine persönliche Hautanalyse und finde die SPF Pflege, die wirklich zu deiner Haut passt.
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

export default Sonnenschutz;
