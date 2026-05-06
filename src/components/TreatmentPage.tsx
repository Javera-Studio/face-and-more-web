import { ReactNode, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Plus, Clock, Tag, Repeat } from "lucide-react";

interface Faq { q: string; a: string }
interface Step { t: string; d: string }
interface PriceItem { name: string; duration: string; price: string; note?: string }

export interface TreatmentPageProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  intro: string;
  heroImage: string;
  gallery: [string, string, string]; // 3 supporting images (+ hero = 4 large images)
  benefits: string[];
  process: Step[];
  prices: PriceItem[];
  faqs: Faq[]; // 8
  closingNote?: string;
}

const FaqItem = ({ q, a, defaultOpen = false }: Faq & { defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">{q}</span>
        <span className={`shrink-0 size-9 rounded-full border border-border flex items-center justify-center text-primary transition-all duration-500 ${open ? "rotate-45 bg-primary text-primary-foreground border-primary" : "group-hover:border-primary"}`}>
          <Plus size={16} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-foreground/75 leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
};

const TreatmentPage = (p: TreatmentPageProps) => (
  <SiteLayout>
    {/* HERO */}
    <section className="bg-gradient-warm pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">{p.eyebrow}</p>
          <h1 className="display">{p.title}</h1>
          <p className="lede mt-6 max-w-xl">{p.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/leistungen" className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors">
              Alle Leistungen
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden shadow-soft">
            <img src={p.heroImage} alt={p.eyebrow} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* INTRO */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Einführung</p>
        </div>
        <div className="lg:col-span-8">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground/90">
            {p.intro}
          </p>
        </div>
      </div>
    </section>

    {/* IMAGE BAND 1 */}
    <section className="pb-24 md:pb-32">
      <div className="container-editorial">
        <div className="aspect-[16/8] overflow-hidden">
          <img src={p.gallery[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Vorteile</p>
          <h2 className="headline">Was diese Behandlung <span className="italic text-primary">besonders</span> macht.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {p.benefits.map((b, i) => (
            <div key={b} className="bg-background p-8 flex gap-5 items-start min-h-[140px]">
              <span className="font-serif text-primary text-sm mt-1">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-foreground/85 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-5">Ablauf</p>
          <h2 className="headline">Dein Weg <span className="italic text-primary">Schritt für Schritt</span>.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Jede Behandlung beginnt mit einem persönlichen Gespräch und einer fundierten Einschätzung deiner Haut.
          </p>
          <div className="mt-10 aspect-[4/5] overflow-hidden">
            <img src={p.gallery[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <ol className="lg:col-span-7 lg:pt-16 space-y-px bg-border">
          {p.process.map((s, i) => (
            <li key={s.t} className="bg-background grid grid-cols-[auto_1fr] gap-8 p-8 md:p-10">
              <span className="font-serif text-3xl text-primary leading-none">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-serif text-xl">{s.t}</p>
                <p className="mt-2 text-foreground/70 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* PRICES */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-5">Preise & Dauer</p>
            <h2 className="headline">Transparent. <span className="italic text-primary">Klar.</span> Persönlich.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Der finale Preis hängt vom individuellen Hautbild und Behandlungsumfang ab. Wir besprechen alles im Vorgespräch.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {p.prices.map((pr) => (
            <div key={pr.name} className="bg-background p-8 border border-border flex flex-col">
              <p className="font-serif text-xl">{pr.name}</p>
              {pr.note && <p className="text-sm text-muted-foreground mt-2">{pr.note}</p>}
              <div className="mt-8 pt-6 border-t border-border flex items-baseline justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} /> {pr.duration}
                </div>
                <p className="font-serif text-2xl text-primary">{pr.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Tag size={14} /> Inkl. Beratung & Hautanalyse</span>
          <span className="inline-flex items-center gap-2"><Repeat size={14} /> Serien-Pakete auf Anfrage</span>
        </div>
      </div>
    </section>

    {/* IMAGE BAND 2 */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid md:grid-cols-2 gap-6">
        <div className="aspect-[4/5] overflow-hidden md:translate-y-12">
          <img src={p.gallery[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-5">Persönlich. Diskret.</p>
          <h2 className="headline">Behandlung mit <span className="italic text-primary">Zeit</span> und Ruhe.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Im Studio FACE AND MORE in Wien arbeite ich ohne Zeitdruck — mit Fokus auf dich, deine Haut und ein
            Ergebnis, das sich natürlich und gesund anfühlt.
          </p>
          {p.closingNote && (
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">{p.closingNote}</p>
          )}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 className="headline">Häufige <span className="italic text-primary">Fragen</span>.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Du hast eine Frage, die hier nicht beantwortet ist? Schreib mir — ich melde mich persönlich zurück.
          </p>
          <Link to="/kontakt" className="link-underline mt-8 inline-block text-sm">
            Frage stellen →
          </Link>
        </div>
        <div className="lg:col-span-8 border-t border-border">
          {p.faqs.map((f, i) => (
            <FaqItem key={f.q + i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Bereit?</p>
        <h2 className="headline">Lass uns gemeinsam <span className="italic text-primary">starten</span>.</h2>
        <p className="lede mt-6">
          Buche dein persönliches Erstgespräch oder direkt deinen Termin im Studio FACE AND MORE in Wien.
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

export default TreatmentPage;
