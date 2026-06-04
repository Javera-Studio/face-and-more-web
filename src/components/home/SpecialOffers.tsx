import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SpecialOffer } from "@/../../lib/notion";

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

// Enough repeats so even a single short offer fills any viewport width
const REPEATS = 6;

const Dot = () => (
  <span className="mx-3 text-[#c9b4a8] select-none" aria-hidden="true">·</span>
);

const Divider = () => (
  <span className="mx-10 text-[#c9b4a8]/50 text-[0.55rem] select-none" aria-hidden="true">◆</span>
);

const OfferItem = ({ offer }: { offer: SpecialOffer }) => (
  <span className="inline-flex items-center whitespace-nowrap">

    {/* 1 · Name */}
    <span className="font-serif text-[1rem] text-foreground">
      {offer.title}
    </span>

    {/* 2 · Leistung */}
    {offer.badge && (
      <>
        <Dot />
        <span className="text-[0.6rem] uppercase tracking-widest font-medium text-primary">
          {offer.badge}
        </span>
      </>
    )}

    {/* 3 · Beschreibung */}
    {offer.description && (
      <>
        <Dot />
        <span className="text-[0.78rem] text-foreground/55 tracking-wide">
          {offer.description}
        </span>
      </>
    )}

    {/* 4 · Preis */}
    {offer.price && (
      <>
        <Dot />
        <span className="font-serif text-[1rem] text-primary">
          {offer.price}
        </span>
      </>
    )}

    {/* 5 · Gültig bis */}
    {offer.validUntil && (
      <>
        <Dot />
        <span className="text-[0.6rem] uppercase tracking-widest text-muted-foreground">
          Gültig bis{" "}
          {new Date(offer.validUntil).toLocaleDateString("de-AT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </>
    )}

    {/* 6 · Buchen */}
    <Dot />
    <Link
      href={offer.linkUrl || "/kontakt"}
      className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-widest text-primary hover:text-primary-glow transition-colors"
      tabIndex={-1}
      aria-hidden="true"
    >
      Buchen <ArrowRight size={9} />
    </Link>

    <Divider />
  </span>
);

const SpecialOffers = ({ offers }: SpecialOffersProps) => {
  if (!offers || offers.length === 0) return null;

  const track = Array.from({ length: REPEATS }, () => offers).flat();

  return (
    <div
      className="bg-[#f9f4f0] border-y border-[#e8ddd5] overflow-hidden"
      aria-label="Aktuelle Angebote"
    >
      <style>{`
        @keyframes javera-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / ${REPEATS})); }
        }
        .javera-ticker {
          animation: javera-ticker 55s linear infinite;
          will-change: transform;
        }
        .javera-ticker:hover {
          animation-play-state: paused;
        }
        @media (max-width: 767px) {
          .javera-ticker { animation-duration: 85s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .javera-ticker { animation-play-state: paused; }
        }
      `}</style>

      <div className="javera-ticker flex w-max py-[18px]">
        {track.map((offer, i) => (
          <OfferItem key={i} offer={offer} />
        ))}
      </div>

      {/* Accessible static link for screen readers and keyboard users */}
      <div className="sr-only">
        {offers.map((offer) => (
          <Link key={offer.id} href={offer.linkUrl || "/kontakt"}>
            {offer.title} – Buchen
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
