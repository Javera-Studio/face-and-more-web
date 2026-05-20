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
import P6 from "@/assets/Produkt6.jpg";
import P36 from "@/assets/Produkt36.jpg";

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
    name: "Super C Complex",
    image: P1,
    price: "€110",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Kombiniert hochkonzentriertes Vitamin C mit starken Antioxidantien zur Unterstützung der Kollagenproduktion. Fördert Leuchtkraft, schützt vor Umweltbelastungen und hilft, vorzeitige Hautalterung sichtbar zu reduzieren.",
    benefits: ["Unterstützt strahlende Haut", "Fördert Kollagenbildung", "Unterstützt antioxidativen Hautschutz"],
    tags: ["Vitamin C", "Glow", "Antioxidantien"],
  },
  {
    name: "Super A+ Serum",
    image: P2,
    price: "€110",
    size: "30 ml",
    skinType: "Reife & anspruchsvolle Haut",
    description:
      "Retinol und biomimetische Peptide unterstützen die Zellerneuerung und verbessern die Hautstruktur. Die intensive Feuchtigkeitsversorgung sorgt für ein glatteres, pralleres Hautbild.",
    benefits: ["Unterstützt Hauterneuerung", "Fördert glattere Haut", "Unterstützt Elastizität"],
    tags: ["Retinol", "Anti-Aging", "Straffung"],
  },
  {
    name: "Super B Complex",
    image: P3,
    price: "€110",
    size: "30 ml",
    skinType: "Sensible & unreine Haut",
    description:
      "Ein multifunktionales Serum mit Niacinamid, Lakritze und Rotklee zur Beruhigung der Haut, Reduktion von Rötungen und Unterstützung eines ebenmäßigen Hautbildes.",
    benefits: ["Unterstützt Hautberuhigung", "Reduziert sichtbare Rötungen", "Fördert ein ebenmäßiges Hautbild"],
    tags: ["Niacinamid", "Feuchtigkeit", "Glow"],
  },
  {
    name: "Radiance Serum",
    image: P4,
    price: "€110",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Kombiniert leistungsstarke AHA/BHAs mit Peptiden und antioxidativen Pflanzenextrakten. Unterstützt die Hauterneuerung und sorgt für ein glatteres, verfeinertes Hautbild.",
    benefits: ["Unterstützt Hauterneuerung", "Fördert Glow & Ebenmäßigkeit", "Verfeinert die Hautstruktur"],
    tags: ["Glow", "Peeling", "Hautbild"],
  },
  {
    name: "DNA Renewal Treatment",
    image: P36,
    price: "€129",
    size: "30 ml",
    skinType: "Reife & anspruchsvolle Haut",
    description:
      "Innovative Anti-Aging-Formulierung mit Peptiden, Stammzellentechnologie und Telomer-Technologie zur Unterstützung der Hautregeneration und Verbesserung von Festigkeit und Hydration.",
    benefits: ["Unterstützt Hautregeneration", "Fördert Hautfestigkeit", "Intensive Anti-Aging Pflege"],
    tags: ["Luxury", "Regeneration", "Anti-Aging"],
  },
  {
    name: "Liquid Platinum",
    image: P6,
    price: "€79,50",
    size: "50 ml",
    skinType: "Reife & anspruchsvolle Haut",
    description:
      "Eine intensiv regenerierende Nachtbehandlung mit niedrigem pH-Wert, die abgestorbene Hautzellen löst, die Kollagenproduktion unterstützt und die Haut sichtbar glatter und strahlender wirken lässt.",
    benefits: ["Unterstützt Hauterneuerung", "Fördert strahlende Haut", "Unterstützt glatteres Hautbild"],
    tags: ["Glow", "Nachtpflege", "Fruchtsäure"],
  },
];

const benefitTags = [
  "Glow",
  "Anti-Aging",
  "Hauterneuerung",
  "Feuchtigkeit",
  "Wirkstoffpflege",
  "Hautschutz",
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

const Seren = () => (
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
            <p className="eyebrow mb-6">Kategorie · Seren</p>
            <h1 className="display">
              Hochkonzentrierte Wirkstoffpflege für sichtbar{" "}
              <span className="italic text-primary">gesunde</span> Haut.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Seren zählen zu den effektivsten Schritten moderner Hautpflege. Hochwertige Wirkstoffformulierungen unterstützen die Haut gezielt bei Feuchtigkeit, Glow, Hauterneuerung und sichtbarer Hautverbesserung.
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
                alt="Seren"
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
            Seren wirken dort, wo deine Haut gezielte{" "}
            <span className="italic text-primary">Unterstützung</span> braucht.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            Hochkonzentrierte Seren enthalten leistungsstarke Wirkstoffe wie Vitamin C, Retinol, Niacinamid, Peptide oder Fruchtsäuren, um unterschiedliche Hautbedürfnisse gezielt zu unterstützen.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Ob Glow, Feuchtigkeit, Hauterneuerung oder Anti-Aging — moderne Seren ergänzen die tägliche Pflegeroutine mit intensiver Wirkstoffpflege für ein sichtbar glatteres, ausgeglicheneres und strahlenderes Hautbild.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Bei FACE AND MORE werden Seren individuell passend zu Hauttyp, Hautzustand und persönlichen Hautzielen empfohlen.
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
              Wirkstoffseren für{" "}
              <span className="italic text-primary">jeden Hauttyp</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Jedes Serum wird individuell nach Hautanalyse und persönlicher Beratung empfohlen.
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
            Welches Serum passt zu{" "}
            <span className="italic text-primary">deiner Haut</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Jede Haut hat unterschiedliche Bedürfnisse. Während manche Hauttypen intensive Feuchtigkeit und Beruhigung benötigen, profitieren andere stärker von regenerierenden Wirkstoffen, Vitamin C oder Retinol.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passenden Wirkstoffseren für deine individuelle Hautroutine zu finden.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Individuelle Hautanalyse vor jeder Empfehlung",
              "Wirkstoffseren abgestimmt auf Hauttyp & Hautziele",
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
          Professionelle Wirkstoffpflege für sichtbar{" "}
          <span className="italic text-primary">strahlende Haut</span>.
        </h2>
        <p className="lede mt-6">
          Buche deine persönliche Hautanalyse und finde die Seren, die wirklich zu deiner Haut passen.
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

export default Seren;
