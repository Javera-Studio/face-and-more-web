import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SpecialOffer } from "@/../../lib/notion";

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

const REPEATS = 6;

const Dot = () => (
  <span className="mx-4 select-none" style={{ color: "rgba(255,255,255,0.5)" }} aria-hidden="true">·</span>
);

const Divider = () => (
  <span className="mx-12 select-none" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.5rem" }} aria-hidden="true">◆</span>
);

const OfferItem = ({ offer }: { offer: SpecialOffer }) => (
  <span className="inline-flex items-center whitespace-nowrap">

    {/* 1 · Leistung */}
    {offer.badge && (
      <>
        <span style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: 500, color: "#fff", textTransform: "uppercase" }}>
          {offer.badge}
        </span>
        <Dot />
      </>
    )}

    {/* 2 · Angebotsname */}
    <span style={{ fontSize: "18px", fontWeight: 600, color: "#fff" }}>
      {offer.title}
    </span>

    {/* 3 · Beschreibung */}
    {offer.description && (
      <>
        <Dot />
        <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
          {offer.description}
        </span>
      </>
    )}

    {/* 4 · Preis */}
    {offer.price && (
      <>
        <Dot />
        <span style={{ fontSize: "20px", fontWeight: 700, color: "#fff" }}>
          {offer.price}
        </span>
      </>
    )}

    {/* 5 · Gültig bis */}
    {offer.validUntil && (
      <>
        <Dot />
        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", letterSpacing: "0.03em" }}>
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
      className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
      style={{ fontSize: "16px", fontWeight: 600, color: "#fff", letterSpacing: "0.05em" }}
      tabIndex={-1}
      aria-hidden="true"
    >
      Buchen <ArrowRight size={14} />
    </Link>

    <Divider />
  </span>
);

const SpecialOffers = ({ offers }: SpecialOffersProps) => {
  if (!offers || offers.length === 0) return null;

  const track = Array.from({ length: REPEATS }, () => offers).flat();

  return (
    <div
      className="overflow-hidden"
      style={{ background: "#1AA6A6" }}
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

      <div className="javera-ticker flex w-max items-center" style={{ minHeight: "64px", paddingTop: "14px", paddingBottom: "14px" }}>
        {track.map((offer, i) => (
          <OfferItem key={i} offer={offer} />
        ))}
      </div>

      {/* Accessible static links for screen readers */}
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
