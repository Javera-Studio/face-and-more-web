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
import P17 from "@/assets/Produkt17.jpg";
import P20 from "@/assets/Produkt20.jpg";
import P23 from "@/assets/Produkt23.jpg";
import P24 from "@/assets/Produkt24.jpg";
import P27 from "@/assets/Produkt27.jpg";
import P28 from "@/assets/Produkt28.jpg";

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
    name: "Soothing Gel Large",
    image: P20,
    price: "€58,50",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Beruhigendes Aloe-Vera Gel für Gesicht und Körper zur Unterstützung hydratisierter und gepflegter Haut.",
    benefits: ["Unterstützt Hautberuhigung", "Spendet Feuchtigkeit", "Ideal nach Waxing oder Laser"],
    tags: ["Bodycare", "Aloe Vera", "Aftercare"],
  },
  {
    name: "Cellulite + Skin Firming Treatment",
    image: P23,
    price: "€89",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Straffende Körperpflege zur Unterstützung glatterer Haut und zur Pflege bei Cellulite und Dehnungsstreifen.",
    benefits: ["Unterstützt Hautstraffung", "Fördert glattere Haut", "Intensive Feuchtigkeit"],
    tags: ["Cellulite", "Straffung", "Bodycare"],
  },
  {
    name: "Revitalising Bodymoist",
    image: P24,
    price: "€65",
    size: "200 ml",
    skinType: "Trockene & normale Haut",
    description:
      "Feuchtigkeitsspendende Körpercreme mit glättender Pflegewirkung und frischem Hautgefühl.",
    benefits: ["Unterstützt geschmeidige Haut", "Intensive Feuchtigkeit", "Glättet trockene Hautstellen"],
    tags: ["Bodycare", "Feuchtigkeit", "Pflege"],
  },
  {
    name: "Clearskin Bodygel",
    image: P27,
    price: "€75",
    size: "120 ml",
    skinType: "Unreine & zu Akne neigende Haut",
    description:
      "Aktive Körperpflege gegen Körperunreinheiten und eingewachsene Haare.",
    benefits: ["Unterstützt reine Haut", "Verfeinert die Hautstruktur", "Ideal nach Rasur oder Waxing"],
    tags: ["Körperakne", "AHA", "Bodycare"],
  },
  {
    name: "Revitalising Bodyscrub",
    image: P28,
    price: "€55",
    size: "200 ml",
    skinType: "Alle Hauttypen",
    description:
      "Belebendes Körperpeeling für glattere, weichere und gepflegte Haut.",
    benefits: ["Entfernt abgestorbene Hautzellen", "Unterstützt glatte Haut", "Revitalisiert die Haut"],
    tags: ["Peeling", "Glow", "Körperpflege"],
  },
  {
    name: "Treat Your Body",
    image: P17,
    price: "€99",
    size: "Körperpflege-Set",
    skinType: "Alle Hauttypen",
    description:
      "Körperpflege-Set für glatte, hydratisierte und gepflegte Haut.",
    benefits: ["Unterstützt Hautstraffung", "Intensive Körperpflege", "Ideal für trockene Haut"],
    tags: ["Bodycare", "Set", "Straffung"],
  },
];

const benefitTags = [
  "Bodycare",
  "Feuchtigkeit",
  "Straffung",
  "Glow",
  "Hauterneuerung",
  "Aftercare",
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

const Koerperpflege = () => (
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
            <p className="eyebrow mb-6">Kategorie · Körperpflege</p>
            <h1 className="display">
              Glatte, gepflegte & sichtbar{" "}
              <span className="italic text-primary">hydratisierte</span> Haut.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Professionelle Körperpflege unterstützt die Haut dabei, geschmeidig, ausgeglichen und gepflegt zu wirken — von intensiver Feuchtigkeit bis hin zu glättender und straffender Pflege.
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
                alt="Körperpflege"
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
            Gesunde Hautpflege endet nicht im{" "}
            <span className="italic text-primary">Gesicht</span>.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            Auch die Körperhaut benötigt abgestimmte Pflege, Feuchtigkeit und gezielte Wirkstoffe, um geschmeidig, glatt und gepflegt zu wirken. Moderne Bodycare kombiniert intensive Hydration mit glättender, beruhigender und regenerierender Pflege für unterschiedliche Hautbedürfnisse.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Ob trockene Haut, Körperunreinheiten, sensible Haut nach Waxing oder unterstützende Pflege bei Cellulite — bei FACE AND MORE werden Produkte individuell auf Hauttyp und Hautzustand abgestimmt.
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
              Professionelle Pflege für{" "}
              <span className="italic text-primary">Körper & Haut</span>.
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
            Welche Körperpflege passt zu{" "}
            <span className="italic text-primary">deiner Haut</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Jede Haut hat unterschiedliche Bedürfnisse. Während manche Haut intensive Feuchtigkeit und beruhigende Pflege benötigt, profitieren andere Hautbilder stärker von glättenden Wirkstoffen, Peelings oder straffender Bodycare.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passende Körperpflege für deine individuellen Hautbedürfnisse zu finden.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Individuelle Hautanalyse vor jeder Empfehlung",
              "Produkte abgestimmt auf Hauttyp & Hautziele",
              "Professionelle Beratung für die passende Bodycare",
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
          Professionelle Körperpflege für sichtbar{" "}
          <span className="italic text-primary">gepflegte Haut</span>.
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

export default Koerperpflege;
