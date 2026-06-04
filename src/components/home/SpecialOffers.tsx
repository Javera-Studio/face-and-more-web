import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { SpecialOffer } from "@/../../lib/notion";

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

const SpecialOffers = ({ offers }: SpecialOffersProps) => {
  if (!offers || offers.length === 0) return null;

  return (
    <section className="bg-[#f9f4f0] border-y border-[#e8ddd5]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 divide-y divide-[#e8ddd5]">
        {offers.map((offer) => (
          <article
            key={offer.id}
            className="group flex flex-col md:flex-row md:items-center gap-5 md:gap-0 py-8 md:py-0 md:min-h-[140px]"
          >
            {/* Left: label */}
            <div className="md:w-[220px] shrink-0">
              <p className="eyebrow text-primary">
                {offer.badge || "Aktuelles Angebot"}
              </p>
            </div>

            {/* Center: title + description */}
            <div className="flex-1 md:border-l md:border-[#e8ddd5] md:pl-10 md:pr-10">
              <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                {offer.title}
              </h3>
              {offer.description && (
                <p className="mt-1.5 text-[0.85rem] text-foreground/60 leading-relaxed line-clamp-2">
                  {offer.description}
                </p>
              )}
            </div>

            {/* Right: price + date + button */}
            <div className="md:w-[260px] shrink-0 md:border-l md:border-[#e8ddd5] md:pl-10 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start justify-between md:justify-center gap-3 md:gap-2">
              <div>
                {offer.price && (
                  <p className="font-serif text-2xl text-primary leading-none">
                    {offer.price}
                  </p>
                )}
                {offer.validUntil && (
                  <p className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground mt-1.5">
                    <Clock size={10} />
                    {new Date(offer.validUntil).toLocaleDateString("de-AT", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
              <Link
                href={offer.linkUrl || "/kontakt"}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-[0.75rem] uppercase tracking-widest hover:bg-primary-glow transition-colors shrink-0"
              >
                Buchen <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
