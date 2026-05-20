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
import P4 from "@/assets/Produkt4.jpg";
import P9 from "@/assets/Produkt9.jpg";
import P10 from "@/assets/Produkt10.jpg";
import P16 from "@/assets/Produkt16.jpg";
import P19 from "@/assets/Produkt19.jpg";
import P20 from "@/assets/Produkt20.jpg";
import P27 from "@/assets/Produkt27.jpg";
import P31 from "@/assets/Produkt31.jpg";

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
    name: "Daily Facial Cleanser",
    image: P9,
    price: "€45",
    size: "200 ml",
    skinType: "Unreine & zu Akne neigende Haut",
    description:
      "Klärendes Reinigungsgel mit AHA zur Unterstützung eines reineren und glatteren Hautbildes.",
    benefits: ["Unterstützt reine Haut", "Entfernt abgestorbene Hautzellen", "Verfeinert die Hautstruktur"],
    tags: ["Akne", "AHA", "Reinigung"],
  },
  {
    name: "Daily Facial Cleanser Travel Size",
    image: P10,
    price: "€35",
    size: "50 ml",
    skinType: "Unreine & zu Akne neigende Haut",
    description:
      "Praktische Reisegröße des klärenden Reinigungsgels für unreine Haut und Akne.",
    benefits: ["Unterstützt reine Haut", "Sanfte AHA Reinigung", "Ideal für unterwegs"],
    tags: ["Travel Size", "Akne", "Reinigung"],
  },
  {
    name: "Super B Complex",
    image: P3,
    price: "€110",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Niacinamid-Serum zur Unterstützung beruhigter, ausgeglichener und hydratisierter Haut.",
    benefits: ["Reduziert sichtbare Rötungen", "Unterstützt Hautfeuchtigkeit", "Verfeinert Poren"],
    tags: ["Niacinamid", "Rötungen", "Problemhaut"],
  },
  {
    name: "Radiance Serum",
    image: P4,
    price: "€110",
    size: "30 ml",
    skinType: "Alle Hauttypen",
    description:
      "Aktives Serum zur Unterstützung eines klareren, glatteren und ebenmäßigeren Hautbildes.",
    benefits: ["Unterstützt Hauterneuerung", "Gegen Pigmentierung", "Verfeinert die Hautstruktur"],
    tags: ["Glow", "Akne", "Hautbild"],
  },
  {
    name: "Clear Complexion Gel",
    image: P16,
    price: "€60",
    size: "50 ml",
    skinType: "Unreine Haut & Akne",
    description:
      "Intensive Pflege gegen Hautunreinheiten, Akne und entzündete Hautstellen.",
    benefits: ["Unterstützt reine Haut", "Beruhigt die Haut", "Unterstützt ebenmäßigen Teint"],
    tags: ["Akne", "Problemhaut", "Unreinheiten"],
  },
  {
    name: "Soothing Gel",
    image: P19,
    price: "€35",
    size: "50 ml",
    skinType: "Fettige, empfindliche & unreine Haut",
    description:
      "Beruhigendes Aloe-Vera Gel zur Pflege gereizter, empfindlicher oder entzündeter Haut.",
    benefits: ["Unterstützt Hautberuhigung", "Spendet leichte Feuchtigkeit", "Ideal nach Behandlungen"],
    tags: ["Aloe Vera", "Sensitive Skin", "Beruhigung"],
  },
  {
    name: "Soothing Gel Large",
    image: P20,
    price: "€58,50",
    size: "200 ml",
    skinType: "Fettige & unreine Haut",
    description:
      "Große Pflegegröße des beruhigenden Aloe-Vera Gels für Gesicht und Körper.",
    benefits: ["Kühlt und beruhigt", "Unterstützt empfindliche Haut", "Auch nach Laser oder Waxing geeignet"],
    tags: ["Aftercare", "Problemhaut", "Aloe Vera"],
  },
  {
    name: "Clearskin Bodygel",
    image: P27,
    price: "€75",
    size: "120 ml",
    skinType: "Alle Hauttypen",
    description:
      "Körperpflege zur Unterstützung glatter Haut bei Körperakne und eingewachsenen Haaren.",
    benefits: ["Unterstützt reine Haut", "Entfernt abgestorbene Hautzellen", "Ideal nach Rasur oder Waxing"],
    tags: ["Körperakne", "AHA", "Bodycare"],
  },
  {
    name: "Clear Complexion Set",
    image: P31,
    price: "€145",
    size: "Pflege-Set",
    skinType: "Unreine Haut & Akne",
    description:
      "Pflege-Set zur Unterstützung einer klareren und ausgeglicheneren Hautroutine.",
    benefits: ["Ideal bei Akne", "Abgestimmte Pflegeroutine", "Unterstützt reine Haut"],
    tags: ["Set", "Akne", "Problemhaut"],
  },
];

const benefitTags = [
  "Problemhaut",
  "Hautbalance",
  "Niacinamid",
  "Beruhigung",
  "Hauterneuerung",
  "Klärende Pflege",
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

const Problemhaut = () => (
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
            <p className="eyebrow mb-6">Kategorie · Problemhaut & Akne</p>
            <h1 className="display">
              <span className="italic text-primary">Klare</span>, ausgeglichene & sichtbar{" "}
              <span className="italic text-primary">beruhigte</span> Haut.
            </h1>
            <p className="lede mt-7 max-w-xl">
              Hochwertige Wirkstoffpflege zur Unterstützung einer klareren, ruhigeren und ausgeglicheneren Haut — individuell abgestimmt auf unreine, empfindliche oder zu Akne neigende Haut.
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
                alt="Pflege bei Problemhaut & Akne"
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
            Problemhaut benötigt{" "}
            <span className="italic text-primary">Balance</span> — keine aggressiven Lösungen.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:pt-3">
          <p className="text-foreground/75 leading-relaxed">
            Unreine Haut entsteht häufig durch ein Zusammenspiel aus überschüssigem Talg, Entzündungen, gestörter Hautbarriere und äußeren Einflüssen. Moderne Problemhautpflege setzt deshalb nicht auf aggressive Austrocknung, sondern auf gezielte Wirkstoffe zur Unterstützung einer ruhigeren und ausgeglicheneren Haut.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Bei FACE AND MORE werden Pflegeprodukte individuell auf Hautzustand, Empfindlichkeit und Hautziele abgestimmt — für eine langfristig gesunde und klar wirkende Haut.
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
              <span className="italic text-primary">klare Haut</span>.
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
            Welche Pflege eignet sich bei{" "}
            <span className="italic text-primary">Problemhaut & Akne</span>?
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Nicht jede unreine Haut benötigt dieselben Wirkstoffe. Manche Hautbilder profitieren stärker von beruhigender Pflege, andere von sanfter Hauterneuerung oder ausgleichenden Aktivstoffen wie Niacinamid und AHA.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Im Rahmen einer professionellen Hautanalyse helfen wir dabei, die passende Pflegeroutine für deine individuellen Hautbedürfnisse zu finden.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "Individuelle Hautanalyse vor jeder Empfehlung",
              "Wirkstoffe abgestimmt auf Hauttyp & Hautziele",
              "Sanfte, klärende Pflege statt aggressiver Behandlungen",
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
          Klare Haut beginnt mit der{" "}
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

export default Problemhaut;
