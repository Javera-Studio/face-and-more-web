import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Rabbit,
  Droplets,
  Ban,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import heroImg from "@/assets/treatment-skin.jpg";
import beratungImg from "@/assets/treatment-facial.jpg";
import philosophyImg from "@/assets/treatment-antiaging.jpg";
import Produkt1 from "@/assets/Produkt1.jpg";
import Produkt2 from "@/assets/Produkt2.jpg";
import Produkt3 from "@/assets/Produkt3.jpg";
import Produkt4 from "@/assets/Produkt4.jpg";
import Produkt5 from "@/assets/Produkt5.jpg";
import Produkt6 from "@/assets/Produkt6.jpg";

// Placeholder product images — replace with real product photography later.
// Filenames are intentionally generic (Produkt1.jpg ... Produkt6.jpg) so the
// real images can be dropped into /src/assets without touching the layout.
const productPlaceholder = (n: number) =>
  `/placeholder.svg?text=Produkt${n}`;

interface Product {
  name: string;
  type: string;
  price: string;
  benefits: string[];
  skinType: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    name: "Super C Complex",
    type: "Serum",
    price: "€110",
    description:
      "Hochkonzentriertes Vitamin-C-Serum für einen ebenmäßigen, strahlenden Teint.",
    skinType: "Alle Hauttypen · fahle Haut",
    benefits: ["Glow & Kollagenaufbau", "Antioxidativer Schutz", "Ebenmäßiger Teint"],
    image: Produkt1,
    category: "Seren",
  },
  {
    name: "Super B Complex",
    type: "Serum",
    price: "€110",
    description:
      "Niacinamid-Serum, das Rötungen beruhigt und das Hautbild sichtbar verfeinert.",
    skinType: "Sensible & unreine Haut",
    benefits: ["Beruhigt Rötungen", "Unterstützt Feuchtigkeit", "Gegen Pigmentflecken"],
    image: Produkt2,
    category: "Seren",
  },
  {
    name: "Liquid Platinum",
    type: "Nachtpflege",
    price: "€79,50",
    description:
      "Regenerierende Nachtpflege mit Peptiden für ein verfeinertes Hautbild über Nacht.",
    skinType: "Reife & anspruchsvolle Haut",
    benefits: [
      "Verfeinert das Hautbild",
      "Unterstützt Kollagenproduktion",
      "Mehr Glow über Nacht",
    ],
    image: Produkt3,
    category: "Anti-Aging",
  },
  {
    name: "Clear Complexion Gel",
    type: "Aknepflege",
    price: "€60",
    description:
      "Klärendes Gel für unreine, zu Akne neigende Haut — beruhigend und ausgleichend.",
    skinType: "Unreine & ölige Haut",
    benefits: [
      "Gegen Unreinheiten",
      "Beruhigt entzündete Haut",
      "Unterstützt reine Haut",
    ],
    image: Produkt4,
    category: "Akne & Problemhaut",
  },
  {
    name: "SPF50+ Hydrating Defence",
    type: "Tagespflege mit SPF",
    price: "€59",
    description:
      "Leichter, feuchtigkeitsspendender Sonnenschutz für täglichen UVA/UVB-Schutz.",
    skinType: "Alle Hauttypen",
    benefits: ["UVA/UVB Schutz", "Feuchtigkeit", "Anti-Aging Schutz"],
    image: Produkt5,
    category: "Sonnenschutz",
  },
  {
    name: "Ultimate Hydration",
    type: "Tages- & Nachtpflege",
    price: "€99",
    description:
      "Reichhaltige Pflege mit Hyaluron für intensive, langanhaltende Feuchtigkeit.",
    skinType: "Trockene & reife Haut",
    benefits: [
      "Intensive Feuchtigkeit",
      "Unterstützt Elastizität",
      "Für trockene Haut",
    ],
    image: Produkt6,
    category: "Feuchtigkeit",
  },
];

const categories: { title: string; text: string; href: string }[] = [
  { title: "Reinigung", text: "Sanfte, effektive Reinigung als Basis jeder Pflegeroutine.", href: "/produkte/reinigung" },
  { title: "Seren", text: "Hochkonzentrierte Wirkstoffe für gezielte Hautziele.", href: "/produkte/seren" },
  { title: "Anti-Aging & Regeneration", text: "Pflege, die Festigkeit, Glow und Elastizität unterstützt.", href: "/produkte/anti-aging" },
  { title: "Problemhaut & Akne", text: "Klärende Pflege für ein beruhigtes, reineres Hautbild.", href: "/produkte/problemhaut" },
  { title: "Feuchtigkeit & Pflege", text: "Aufbauende Pflege für eine widerstandsfähige Hautbarriere.", href: "/produkte/feuchtigkeit" },
  { title: "Sonnenschutz", text: "Täglicher Schutz vor UV-Strahlung und vorzeitiger Hautalterung.", href: "/produkte/sonnenschutz" },
  { title: "Körperpflege", text: "Verwöhnende Pflege für einen seidigen, glatten Teint am Körper.", href: "/produkte/koerperpflege" },
  { title: "Sets & Pflegekits", text: "Abgestimmte Routinen, ideal zum Einstieg in deine Pflege.", href: "/produkte/sets" },
  { title: "Zubehör & Tools", text: "Hochwertige Tools, die deine Pflegeroutine ergänzen.", href: "/produkte/zubehoer" },
];

const benefits = [
  { icon: Leaf, label: "Vegan" },
  { icon: Rabbit, label: "Tierversuchsfrei" },
  { icon: Droplets, label: "Frei von Mikroplastik" },
  { icon: Ban, label: "Keine Parabene" },
  { icon: FlaskConical, label: "Keine Mineralöle" },
  { icon: Sparkles, label: "Keine künstlichen Duftstoffe" },
  { icon: ShieldCheck, label: "Wirkstoffkosmetik" },
  { icon: Users, label: "Für alle Hauttypen" },
];

const ProductCard = ({ p }: { p: Product }) => (
  <article className="group bg-background border border-border/70 transition-all duration-500 hover:border-primary/40 hover:shadow-soft flex flex-col">
    <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
      <img
        src={p.image}
        alt={p.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
    <div className="p-7 lg:p-8 flex flex-col flex-1">
      <p className="eyebrow mb-3">{p.type}</p>
      <h3 className="font-serif text-2xl leading-snug">{p.name}</h3>
      <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.description}</p>

      <ul className="mt-6 space-y-2">
        {p.benefits.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
            <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7 flex items-end justify-between gap-4 border-t border-border/70 mt-7">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Hauttyp</p>
          <p className="text-sm text-foreground/80 mt-1">{p.skinType}</p>
        </div>
        <p className="font-serif text-2xl text-primary">{p.price}</p>
      </div>
    </div>
  </article>
);

const Produkte = () => (
  <SiteLayout>
    {/* HERO */}
    <section className="bg-gradient-warm pt-16 md:pt-20 pb-16 md:pb-24">
      <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">Professionelle Hautpflege Wien</p>
          <h1 className="display">
            Professionelle Hautpflege für{" "}
            <span className="italic text-primary">gesunde, strahlende</span> Haut.
          </h1>
          <p className="lede mt-6 max-w-xl">
            Die richtigen Produkte können deine Haut langfristig verändern — wenn sie wirklich zu deinem Hauttyp passen.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
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
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden shadow-soft">
            <img src={heroImg} alt="Professionelle Hautpflege" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* PHILOSOPHY */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={philosophyImg} alt="ASAP Skincare" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Philosophie</p>
          <h2 className="headline">
            Warum ich mit <span className="italic text-primary">ASAP</span> arbeite.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-xl">
            Ich arbeite bewusst mit ASAP Australian Skincare, weil die Produkte wirksam, modern und gleichzeitig hautfreundlich sind. Die Pflege basiert auf hochwertigen Wirkstoffen, ist vegan, tierversuchsfrei und frei von unnötigen Zusatzstoffen.
          </p>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-xl">
            Gemeinsam finden wir die Produkte, die wirklich zu deiner Haut passen — statt wahllos Produkte auszuprobieren.
          </p>
        </div>
      </div>
    </section>

    {/* BENEFITS / ICON GRID */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Was ASAP ausmacht</p>
          <h2 className="headline">
            Wirkstoffkosmetik mit <span className="italic text-primary">klarer Haltung</span>.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
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

    {/* PERSONAL CONSULTATION */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 lg:order-2">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={beratungImg} alt="Persönliche Hautberatung" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">Persönliche Beratung</p>
          <h2 className="headline">
            Pflege, die wirklich zu <span className="italic text-primary">deiner Haut</span> passt.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Nicht jedes Produkt passt zu jeder Haut. Deshalb empfehle ich Pflegeprodukte immer individuell — abgestimmt auf Hautzustand, Ziele und bestehende Probleme wie Akne, Rötungen oder Pigmentflecken.
          </p>
          <Link
            to="/hautanalyse"
            className="group mt-9 inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Hautanalyse buchen{" "}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>

    {/* PRODUCT CATEGORIES */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Kategorien</p>
          <h2 className="headline">
            Kuratierte Pflege — <span className="italic text-primary">für jeden Schritt</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {categories.map((c, i) => (
            <Link
              key={c.title}
              to={c.href}
              className="group bg-background p-7 lg:p-9 min-h-[200px] flex flex-col gap-4 transition-colors duration-500 hover:bg-secondary/40 relative"
            >
              <span className="font-serif text-xs text-primary tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-xl leading-snug">{c.title}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{c.text}</p>
              <ArrowRight
                size={18}
                className="text-primary mt-auto transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* PRODUCT CARDS */}
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Ausgewählte Produkte</p>
            <h2 className="headline">
              Eine kleine Auswahl aus dem <span className="italic text-primary">ASAP Sortiment</span>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Jedes Produkt empfehle ich erst nach einem persönlichen Gespräch und einer Hautanalyse — abgestimmt auf dich.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Noch unsicher?</p>
        <h2 className="headline">
          Unsicher, welche Produkte zu deiner <span className="italic text-primary">Haut</span> passen?
        </h2>
        <p className="lede mt-6">
          Bei einer persönlichen Hautanalyse finden wir gemeinsam die passende Pflegeroutine für deine Haut.
        </p>
        <Link
          to="/hautanalyse"
          className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
        >
          Hautanalyse buchen{" "}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default Produkte;
