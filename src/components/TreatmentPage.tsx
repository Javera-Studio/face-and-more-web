import { ReactNode, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Plus, Clock, Tag, Repeat } from "lucide-react";
import haut1 from "@/assets/haut1.jpg";
import studioImg from "@/assets/studio.jpg";
import michaelaImg from "@/assets/michaela.jpg";

interface Faq { q: string; a: string }
interface Step { t: string; d: string }
interface PriceItem { name: string; duration: string; price: string; note?: string }

export interface TreatmentPageProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  intro: string;
  heroImage: string;
  gallery: [string, string, string];
  benefits: string[];
  process: Step[];
  prices: PriceItem[];
  faqs: Faq[];
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
      <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"}`}>
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
    <section className="bg-gradient-warm pt-16 md:pt-20 pb-16 md:pb-24">
      <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {p.benefits.map((b, i) => (
            <div
              key={b}
              className="group relative bg-background p-8 lg:p-10 flex flex-col gap-5 min-h-[180px] transition-colors duration-500 hover:bg-secondary/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs text-primary tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-border group-hover:bg-primary transition-colors duration-500" />
              </div>
              <p className="font-serif text-lg leading-snug text-foreground/90">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

   {/* PROCESS */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        <div className="lg:col-span-7 flex flex-col">
          <p className="eyebrow mb-5">Ablauf</p>
          <h2 className="headline">Dein Weg <span className="italic text-primary">Schritt für Schritt</span>.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Jede Behandlung beginnt mit einem persönlichen Gespräch und einer fundierten Einschätzung deiner Haut.
          </p>
          <ol className="mt-8 flex-1">
            {p.process.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[auto_1fr] gap-8 p-8 md:p-10 border-b border-border last:border-b-0">
                <span className="font-serif text-3xl text-primary leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-serif text-xl">{s.t}</p>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-5 overflow-hidden">
          <img src={michaelaImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
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
          {p.prices.length > 1 && (
            <p className="text-sm text-muted-foreground max-w-sm">
              Jede Behandlung wird individuell an deinen Hautzustand angepasst. Gemeinsam finden wir die passende Pflege und Behandlung für deine Hautziele.
            </p>
          )}
        </div>

        {p.prices.length === 1 ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-px bg-border border border-border self-start">
              {p.prices.map((pr, i) => (
                <div
                  key={pr.name}
                  className="group relative bg-background p-8 lg:p-10 flex flex-col transition-colors duration-500 hover:bg-secondary/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-serif text-xs text-primary tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                      <Clock size={12} /> {pr.duration}
                    </div>
                  </div>
                  <div className="mt-8 min-h-[5.5rem] flex flex-col">
                    <p className="font-serif text-xl leading-snug">{pr.name}</p>
                    {pr.note && (
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{pr.note}</p>
                    )}
                  </div>
                  <div className="mt-auto pt-8 border-t border-border/70 flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Preis</span>
                    <p className="font-serif text-2xl text-primary">{pr.price}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground leading-relaxed bg-background p-8">
                Jede Behandlung wird individuell an deinen Hautzustand angepasst. Gemeinsam finden wir die passende Pflege und Behandlung für deine Hautziele.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden shadow-soft">
              <img src={haut1} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {p.prices.map((pr, i) => (
              <div
                key={pr.name}
                className="group relative bg-background p-8 lg:p-10 flex flex-col transition-colors duration-500 hover:bg-secondary/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serif text-xs text-primary tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                    <Clock size={12} /> {pr.duration}
                  </div>
                </div>
                <div className="mt-8 min-h-[5.5rem] flex flex-col">
                  <p className="font-serif text-xl leading-snug">{pr.name}</p>
                  {pr.note && (
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{pr.note}</p>
                  )}
                </div>
                <div className="mt-auto pt-8 border-t border-border/70 flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Preis</span>
                  <p className="font-serif text-2xl text-primary">{pr.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Tag size={14} /> Inkl. Beratung & Hautanalyse</span>
          <span className="inline-flex items-center gap-2"><Repeat size={14} /> Serien-Pakete auf Anfrage</span>
        </div>
      </div>
    </section>

   {/* IMAGE BAND 2 */}
    <section className="py-24 md:py-32">
      <div className="container-editorial grid md:grid-cols-2 gap-6 items-center">
        <div className="aspect-[3/4] overflow-hidden">
          <img src={studioImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-5">Persönlich. Diskret.</p>
          <h2 className="headline">Hautpflege mit <span className="italic text-primary">Wirkung</span> und Ruhe.</h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Im Studio FACE AND MORE in Wien nehme ich mir bewusst Zeit für dich und deine Haut. Mit persönlicher Beratung, individueller Pflege und entspannter Atmosphäre entsteht eine Behandlung, die sich genauso gut anfühlt, wie sie wirkt.
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
