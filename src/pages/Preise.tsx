import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import haut from "@/assets/haut1.jpg";

interface PriceRow {
  name: string;
  duration: string;
  price: string;
}

interface Category {
  eyebrow: string;
  title: string;
  to: string;
  items: PriceRow[];
}

const categories: Category[] = [
  {
    eyebrow: "01",
    title: "Hautanalyse",
    to: "/hautanalyse",
    items: [{ name: "3D-Hautanalyse mit Skin Focus Pro", duration: "45 Min", price: "€ 95" }],
  },
  {
    eyebrow: "02",
    title: "Akne & Problemhaut",
    to: "/leistungen/akne",
    items: [
      { name: "Akne Jugendprogramm", duration: "60 Min", price: "€ 63" },
      { name: "Erstberatung & Analyse Problemhaut", duration: "60 Min", price: "ab € 65" },
      { name: "Problemhaut-Behandlung", duration: "75 Min", price: "ab € 95" },
      { name: "Hautberuhigungs-Serie", duration: "4 × 75 Min", price: "ab € 340" },
    ],
  },
  {
    eyebrow: "03",
    title: "Gesichtsbehandlungen",
    to: "/leistungen/gesichtsbehandlung",
    items: [
      { name: "Klassische Gesichtsbehandlung", duration: "60 Min", price: "€ 89" },
      { name: "Men's Facial", duration: "60 Min", price: "€ 72" },
      { name: "Microdermabrasion / Aqua Abrasion", duration: "60 Min", price: "€ 119" },
    ],
  },
  {
    eyebrow: "04",
    title: "Microneedling",
    to: "/leistungen/microneedling",
    items: [
      { name: "Microneedling mit Hyaluron", duration: "60 Min", price: "€ 136" },
      { name: "Microneedling mit Hyaluron & Toxome", duration: "60 Min", price: "€ 149" },
      { name: "Hyaluron-Paket 3 ×", duration: "3 × 60 Min", price: "€ 369" },
      { name: "Hyaluron & Toxome-Paket 3 ×", duration: "3 × 60 Min", price: "€ 390" },
    ],
  },
  {
    eyebrow: "05",
    title: "Microblading & Permanent Make-Up",
    to: "/leistungen/microblading",
    items: [
      { name: "Microblading Augenbrauen inkl. Nachbehandlung", duration: "120 Min", price: "€ 345" },
      { name: "Wimpernkranzverdichtung oder Eyeliner", duration: "120 Min", price: "€ 275" },
      { name: "Paketpreis für alle 4 Lider", duration: "120 Min", price: "€ 479" },
      { name: "Refresh Behandlung", duration: "75 Min", price: "auf Anfrage" },
    ],
  },
  {
    eyebrow: "06",
    title: "Fruchtsäure",
    to: "/leistungen/fruchtsaeure",
    items: [
      { name: "Gym for the Skin Workout", duration: "30 Min", price: "€ 92" },
      { name: "Fruchtsäure Standard", duration: "30 Min", price: "€ 99" },
      { name: "Fruchtsäure Jugendliche / Reife Haut", duration: "30 Min", price: "€ 94" },
      { name: "Gym for the Skin Workout-Paket 6 ×", duration: "6 × 30 Min", price: "€ 465" },
      { name: "Fruchtsäure Standard-Paket 6 ×", duration: "6 × 30 Min", price: "€ 510" },
      { name: "Fruchtsäure Jugendliche/Reife Haut-Paket 6 ×", duration: "6 × 30 Min", price: "€ 510" },
    ],
  },
  {
    eyebrow: "07",
    title: "Anti Aging",
    to: "/leistungen/anti-aging",
    items: [
      { name: "Anti Aging Behandlung", duration: "75 Min", price: "ab € 120" },
      { name: "Anti Aging Premium", duration: "90 Min", price: "ab € 150" },
      { name: "Anti Aging 4er Serie", duration: "4 × 75 Min", price: "ab € 440" },
    ],
  },
];

const Preise = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Preise — FACE AND MORE Wien"
      title={
        <>
          Transparente <span className="italic text-primary">Preise</span> für persönliche Hautpflege.
        </>
      }
      intro="Unsere Preise sind transparent und nachvollziehbar. Welche Behandlung wirklich zu dir passt, besprechen wir gemeinsam in einer persönlichen Beratung — die finale Empfehlung richtet sich immer nach deinem Hautzustand und deinen Zielen."
    />

    <div className="container-editorial py-10">
      <div className="aspect-[21/9] overflow-hidden shadow-soft">
        <img
          src={haut}
          alt="Hautpflege FACE AND MORE"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <section className="py-20 md:py-28">
      <div className="container-editorial space-y-24 md:space-y-32">
        {categories.map((cat) => (
          <div key={cat.title} className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-5">{cat.eyebrow}</p>
              <h2 className="headline">{cat.title}</h2>
              <Link
                to={cat.to}
                className="group mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-primary hover:text-primary-glow transition-colors"
              >
                Behandlung ansehen
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="lg:col-span-8 border-t border-border">
              {cat.items.map((it) => (
                <li
                  key={it.name}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] items-baseline gap-3 sm:gap-10 py-6 border-b border-border"
                >
                  <p className="font-serif text-lg md:text-xl text-foreground/90">{it.name}</p>
                  <p className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                    <Clock size={12} /> {it.duration}
                  </p>
                  <p className="font-serif text-xl md:text-2xl text-primary sm:text-right">{it.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Bereit?</p>
        <h2 className="headline">
          Buche deine <span className="italic text-primary">persönliche</span> Beratung.
        </h2>
        <p className="lede mt-6">
          Gerne beantworte ich offene Fragen zu Behandlungen, Preisen und individuellen Paketen — schreib mir einfach.
        </p>
        <Link
          to="/kontakt"
          className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
        >
          Termin buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default Preise;
