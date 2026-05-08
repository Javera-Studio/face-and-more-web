import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import ProductCarousel, { CarouselProduct } from "@/components/ProductCarousel";

interface RecommendedTreatment {
  title: string;
  desc: string;
  to: string;
  image: string;
}

export interface HautcoachingDetailProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  heroImage: string;
  intro: string;
  treatments: RecommendedTreatment[];
  products: CarouselProduct[];
}

const HautcoachingDetailPage = (p: HautcoachingDetailProps) => (
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
            <Link to="/hautcoaching" className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors">
              Alle Coachings
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
          <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground/90">{p.intro}</p>
        </div>
      </div>
    </section>

    {/* RECOMMENDED TREATMENTS */}
    <section className="pb-24 md:pb-32">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">Empfohlene Behandlungen</p>
          <h2 className="headline">
            Behandlungen, die <span className="italic text-primary">passen</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {p.treatments.map((t) => (
            <Link key={t.title} to={t.to} className="group flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-6">
                <h3 className="font-serif text-2xl leading-snug group-hover:text-primary transition-colors">
                  {t.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{t.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground border-b border-foreground/30 pb-1 transition-all duration-300 group-hover:text-primary group-hover:border-primary group-hover:gap-3">
                  Mehr erfahren <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* PRODUCT CAROUSEL */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="eyebrow mb-5 text-primary">Pflegeprodukte</p>
          <h2 className="headline">
            Produkte für deine <span className="italic text-primary">Heimpflege</span>.
          </h2>
          <p className="lede mt-6">
            Eine Auswahl an Produkten, die ich für diesen Hauttyp empfehle — abgestimmt auf deine Routine.
          </p>
        </div>
        <ProductCarousel products={p.products} />
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Bereit?</p>
        <h2 className="headline">
          Lass uns deine Haut <span className="italic text-primary">gemeinsam</span> verstehen.
        </h2>
        <p className="lede mt-6">Buche dein persönliches Hautcoaching im Studio FACE AND MORE in Wien.</p>
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

export default HautcoachingDetailPage;
