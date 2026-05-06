import { ReactNode } from "react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

interface Faq { q: string; a: string }

interface TreatmentPageProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  benefits: string[];
  process: { t: string; d: string }[];
  results: string[];
  meta: { duration: string; price: string; intervals: string };
  faqs: Faq[];
  longText: ReactNode;
}

const TreatmentPage = (p: TreatmentPageProps) => (
  <SiteLayout>
    <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

    <section className="py-20">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="prose prose-neutral max-w-none">
            {p.longText}
          </div>

          <div className="mt-14">
            <p className="eyebrow mb-5">Vorteile</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <p className="eyebrow mb-5">Ablauf der Behandlung</p>
            <ol className="border-t border-border">
              {p.process.map((s, i) => (
                <li key={s.t} className="grid grid-cols-[auto_1fr] gap-6 py-5 border-b border-border">
                  <span className="font-serif text-lg text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14">
            <p className="eyebrow mb-5">Ergebnisse</p>
            <ul className="space-y-2">
              {p.results.map((r) => (
                <li key={r} className="flex gap-3 items-start">
                  <span className="mt-2 size-1.5 bg-primary rounded-full shrink-0" />
                  <span className="text-foreground/85">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <p className="eyebrow mb-5">Häufige Fragen</p>
            <div className="border-t border-border">
              {p.faqs.map((f) => (
                <details key={f.q} className="group border-b border-border py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-serif text-lg pr-6">{f.q}</span>
                    <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
          <div className="aspect-[4/5] overflow-hidden bg-muted shadow-soft">
            <img src={p.image} alt={`${p.eyebrow} bei FACE AND MORE Wien`} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6 bg-secondary/60 p-7">
            <dl className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="eyebrow">Dauer</dt>
                <dd className="font-serif text-lg mt-1">{p.meta.duration}</dd>
              </div>
              <div>
                <dt className="eyebrow">Preis</dt>
                <dd className="font-serif text-lg mt-1">{p.meta.price}</dd>
              </div>
              <div>
                <dt className="eyebrow">Intervall</dt>
                <dd className="font-serif text-lg mt-1">{p.meta.intervals}</dd>
              </div>
            </dl>
            <Link
              to="/kontakt"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  </SiteLayout>
);

export default TreatmentPage;
