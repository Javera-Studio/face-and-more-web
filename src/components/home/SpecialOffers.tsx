import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag, Clock } from "lucide-react";
import type { SpecialOffer } from "@/../../lib/notion";

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

const SpecialOffers = ({ offers }: SpecialOffersProps) => {
  if (!offers || offers.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-warm border-t border-border/40">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <p className="eyebrow mb-5 text-primary">Aktuelle Angebote</p>
            <h2 className="headline">
              Besondere{" "}
              <span className="italic text-primary">Angebote</span>{" "}
              für dich.
            </h2>
          </div>
          <p className="lede max-w-sm">
            Limitierte Aktionen — jetzt Termin sichern und profitieren.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="group relative bg-background border border-border/70 flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-soft"
            >
              {offer.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-[0.65rem] uppercase tracking-widest font-medium">
                    <Tag size={10} /> {offer.badge}
                  </span>
                </div>
              )}

              {offer.photoUrl && (
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={offer.photoUrl}
                    alt={offer.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <p className="eyebrow mb-5 text-primary">Sonderangebot</p>
                <h3 className="font-serif text-2xl md:text-3xl leading-snug text-foreground group-hover:text-primary transition-colors">
                  {offer.title}
                </h3>

                {offer.description && (
                  <p className="mt-4 text-foreground/75 leading-relaxed">
                    {offer.description}
                  </p>
                )}

                <div className="mt-8 pt-6 border-t border-border/60 flex items-end justify-between gap-4">
                  <div>
                    {offer.validUntil && (
                      <p className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground mb-2">
                        <Clock size={11} /> Gültig bis{" "}
                        {new Date(offer.validUntil).toLocaleDateString("de-AT", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </p>
                    )}
                    {offer.price && (
                      <p className="font-serif text-3xl text-primary leading-none">
                        {offer.price}
                      </p>
                    )}
                  </div>
                  <Link
                    href={offer.linkUrl || "/kontakt"}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors shrink-0"
                  >
                    Buchen <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
