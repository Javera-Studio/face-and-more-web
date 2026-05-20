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
import P3 from "@/assets/Produkt3.jpg";
import P11 from "@/assets/Produkt11.jpg";
import P12 from "@/assets/Produkt12.jpg";
import P13 from "@/assets/Produkt13.jpg";
import P19 from "@/assets/Produkt19.jpg";
import P20 from "@/assets/Produkt20.jpg";
import P21 from "@/assets/Produkt21.jpg";
import P22 from "@/assets/Produkt22.jpg";
import P25 from "@/assets/Produkt25.jpg";
import P30 from "@/assets/Produkt30.jpg";
import P32 from "@/assets/Produkt32.jpg";

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
    name: "Super B Complex",
    image: P3,
    price: "€110",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Feuchtigkeitsspendendes Niacinamid-Serum zur Unterstützung ausgeglichener und beruhigter Haut.",
    benefits: ["Unterstützt intensive Feuchtigkeit", "Reduziert sichtbare Rötungen", "Verfeinert Poren"],
    tags: ["Niacinamid", "Feuchtigkeit", "Glow"],
  },
  {
    name: "Gentle Cleansing Gel",
    image: P11,
    price: "€45",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Sanftes Reinigungsgel mit Aloe Vera für eine gepflegte und ausgeglichene Hautroutine.",
    benefits: ["Reinigt sanft", "Unterstützt Feuchtigkeitsbalance", "Beruhigt die Haut"],
    tags: ["Reinigung", "Aloe Vera", "Pflege"],
  },
  {
    name: "CC Correcting Cream SPF15",
    image: P12,
    price: "€69",
    size: "50 ml",
    skinType: "Alle Hauttypen",
    description:
      "Getönte Feuchtigkeitspflege für einen ebenmäßigen und natürlich strahlenden Teint.",
    benefits: ["Unterstützt ebenmäßige Haut", "Spendet Feuchtigkeit", "Unterstützt natürlichen Glow"],
    tags: ["Glow", "Pflege", "SPF"],
  },
  {
    name: "SPF50+ Hydrating Defence",
    image: P13,
    price: "€59",
    size: "75 ml",
    skinType: "Alle Hauttypen",
    description:
      "Leichte Tagespflege mit intensiver Feuchtigkeit und hohem UVA-/UVB-Schutz.",
    benefits: ["Unterstützt Hautschutz", "Spendet Feuchtigkeit", "Leichtes Finish"],
    tags: ["SPF50", "Tagespflege", "Feuchtigkeit"],
  },
  {
    name: "Soothing Gel",
    image: P19,
    price: "€35",
    size: "50 ml",
    skinType: "Empfindliche & unreine Haut",
    description:
      "Leichtes Aloe-Vera Gel zur Unterstützung beruhigter und hydratisierter Haut.",
    benefits: ["Kühlt und beruhigt", "Unterstützt empfindliche Haut", "Ideal nach Behandlungen"],
    tags: ["Aloe Vera", "Feuchtigkeit", "Sensitive Skin"],
  },
  {
    name: "Soothing Gel Large",
    image: P20,
    price: "€58,50",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Große Pflegegröße des beruhigenden Aloe-Vera Gels für Gesicht und Körper.",
    benefits: ["Intensive Feuchtigkeit", "Unterstützt Hautberuhigung", "Ideal für empfindliche Haut"],
    tags: ["Pflege", "Aloe Vera", "Aftercare"],
  },
  {
    name: "Ultimate Hydration",
    image: P21,
    price: "€99",
    size: "50 ml",
    skinType: "Trockene & reife Haut",
    description:
      "Reichhaltige Pflegecreme für intensive Feuchtigkeit und mehr Hautelastizität.",
    benefits: ["Unterstützt trockene Haut", "Fördert Geschmeidigkeit", "Intensive Pflege"],
    tags: ["Feuchtigkeit", "Reife Haut", "Pflege"],
  },
  {
    name: "Advanced Hydrating Moisturiser",
    image: P22,
    price: "€99",
    size: "50 ml",
    skinType: "Normale bis trockene Haut",
    description:
      "Feuchtigkeitspflege mit Antioxidantien für ein glattes und gepflegtes Hautbild.",
    benefits: ["Unterstützt Hautfeuchtigkeit", "Fördert geschmeidige Haut", "Unterstützt Hautschutz"],
    tags: ["Antioxidantien", "Pflege", "Glow"],
  },
  {
    name: "Hydrating Lip Balm+ SPF15",
    image: P25,
    price: "€29",
    size: "10 ml",
    skinType: "Alle Hauttypen",
    description:
      "Pflegender Lippenbalsam mit Feuchtigkeit und UV-Schutz für geschmeidige Lippen.",
    benefits: ["Unterstützt weiche Lippen", "Intensive Feuchtigkeit", "Mit SPF Schutz"],
    tags: ["Lippenpflege", "SPF", "Feuchtigkeit"],
  },
  {
    name: "Beautiful Skin",
    image: P30,
    price: "€89",
    size: "Pflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Kompaktes Pflege-Set für eine einfache und effektive Hautroutine.",
    benefits: ["Ideal zum Kennenlernen", "Unterstützt tägliche Pflege", "Praktisch für Reisen"],
    tags: ["Set", "Pflege", "Glow"],
  },
  {
    name: "Skin Essentials",
    image: P32,
    price: "€159",
    size: "Pflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Abgestimmtes Pflege-Set mit Essentials für Reinigung, Feuchtigkeit und Schutz.",
    benefits: ["Komplette Pflegeroutine", "Ideal für Einsteiger", "Unterstützt gesunde Haut"],
    tags: ["Pflegekit", "Feuchtigkeit", "Routine"],
  },
];

const benefitTags = [
  "Feuchtigkeit",
  "Glow",
  "Hautschutz",
  "Pflege",
  "Sensitive Skin",
  "Hautbalance",
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

const Feuchtigkeit = () => (
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
            <p className="eyebrow mb-6">KATEGORIE · FEUCHTIGKEIT & PFLEGE</p>
            <h1 className="display">
              <span className="italic text-primary">Hydration</span>,{" "}
              <span className="italic text-primary">Glow</span> & sichtbar{" "}
              <span className="italic text-primary">gepflegte</span> Haut.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Eine ausgeglichene Feuchtigkeitsbalance ist die Grundlage gesunder und strahlender Haut. Hochwertige Pflegeprodukte unterstützen die Haut dabei, geschmeidig, beruhigt und sichtbar frischer zu wirken.
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
                alt="Feuchtigkeitspflege"
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
            Feuchtigkeit ist der Schlüssel zu{" "}
            <span className="italic text-primary">gesunder Haut</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            Feuchtigkeitsarme Haut kann schnell fahl, gespannt oder empfindlich wirken. Moderne Pflegeprodukte kombinieren deshalb intensive Hydration mit beruhigenden Wirkstoffen, Antioxidantien und schützender Pflege für ein ausgeglichenes Hautbild.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Ob leichte Gelpflege, reichhaltige Feuchtigkeitscreme oder täglicher UV-Schutz — bei FACE AND MORE werden Pflegeprodukte individuell auf Hauttyp, Hautzustand und persönliche Hautbedürfnisse abgestimmt.
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
              <span className="italic text-primary">gepflegte Haut</span>.
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
            Welche Feuchtigkeitspflege passt zu{" "}
            <span className="italic text-primary">deiner Haut</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Nicht jede Haut benötigt dieselbe Pflege. Während manche Hauttypen intensive Feuchtigkeit und reichhaltige Texturen bevorzugen, profitieren andere stärker von leichter Pflege oder beruhigenden Wirkstoffen.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passende Pflegeroutine für deine individuellen Hautbedürfnisse zu finden.
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
          Gesunde Haut beginnt mit der{" "}
          <span className="italic text-primary">richtigen Pflege</span>.
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

export default Feuchtigkeit;
