import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight } from "lucide-react";

const Booking = () => (
  <section className="py-24 md:py-32 bg-foreground text-background">
    <div className="container-editorial">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5 text-background/60">Termin buchen</p>
        <h2 className="headline text-background">
          Bereit für deine Hautanalyse?
        </h2>
        <p className="lede mt-6 text-background/70">
          Direktbuchung über unsere Webseite — am schnellsten, persönlich
          bestätigt und ohne Umwege.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6 items-stretch">
        <Link
          to="/kontakt"
          className="lg:col-span-2 group bg-primary text-primary-foreground p-10 md:p-12 flex flex-col justify-between min-h-[220px] hover:bg-primary-glow transition-colors"
        >
          <div className="flex items-start justify-between">
            <Calendar size={28} strokeWidth={1.3} />
            <ArrowUpRight size={28} strokeWidth={1.3} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="mt-10">
            <p className="eyebrow text-primary-foreground/70">Empfohlen</p>
            <p className="font-serif text-3xl md:text-4xl mt-2">
              Direkt bei Face and More buchen
            </p>
            <p className="mt-3 text-sm text-primary-foreground/80 max-w-md">
              Persönlich, schnell bestätigt, mit individueller Beratung vorab.
            </p>
          </div>
        </Link>

        <a
          href="https://www.treatwell.at/ort/face-and-more/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-background/5 border border-background/15 p-8 flex flex-col justify-between hover:bg-background/10 transition-colors"
        >
          <div className="flex items-start justify-between">
            <p className="eyebrow text-background/50">Alternative</p>
            <ArrowUpRight size={18} className="text-background/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="mt-10">
            <p className="font-serif text-xl">Über Treatwell buchen</p>
            <p className="mt-2 text-xs text-background/60 leading-relaxed">
              Externer Buchungspartner.
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Booking;
