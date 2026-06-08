import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Booking = () => (
  <section className="py-12 md:py-16 bg-foreground text-background">
    <div className="container-editorial">
      <div className="max-w-xl">
        <p className="eyebrow mb-2.5 text-background/60">Termin buchen</p>
        <h2 className="text-2xl md:text-3xl font-serif text-background">
          Bereit für deine Hautanalyse?
        </h2>
        <p className="text-sm mt-3 text-background/70 leading-relaxed">
          Schreib mir einfach auf WhatsApp — ich antworte persönlich und finde
          mit dir den passenden Termin.
        </p>
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-3 items-stretch">
        <a
          href="https://wa.me/436776292066?text=Hallo%20Michaela%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
          target="_blank"
          rel="noopener noreferrer"
          className="lg:col-span-2 group bg-primary text-primary-foreground p-5 md:p-6 flex flex-col justify-between min-h-[120px] hover:bg-primary-glow transition-colors"
        >
          <div className="flex items-start justify-between">
            <WhatsAppIcon />
            <ArrowUpRight size={14} strokeWidth={1.3} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="mt-5">
            <p className="eyebrow text-primary-foreground/70">Empfohlen</p>
            <p className="font-serif text-xl md:text-2xl mt-1">
              Direkt auf WhatsApp schreiben
            </p>
            <p className="mt-1.5 text-xs text-primary-foreground/80 max-w-md">
              Schnell, unkompliziert und persönlich — Michaela antwortet direkt.
            </p>
          </div>
        </a>

        <div className="flex flex-col gap-3">
          <Link
            href="/kontakt"
            className="group flex-1 bg-background/5 border border-background/15 p-4 flex flex-col justify-between hover:bg-background/10 transition-colors"
          >
            <div className="flex items-start justify-between">
              <Calendar size={12} strokeWidth={1.4} className="text-background/60" />
              <ArrowUpRight size={12} className="text-background/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-4">
              <p className="eyebrow text-background/50 mb-1">Alternativ</p>
              <p className="font-serif text-base">Kontaktformular</p>
              <p className="mt-1 text-xs text-background/60 leading-relaxed">
                Anfrage schreiben, ich melde mich persönlich.
              </p>
            </div>
          </Link>

          <a
            href="https://www.treatwell.at/ort/face-and-more/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 bg-background/5 border border-background/15 p-4 flex flex-col justify-between hover:bg-background/10 transition-colors"
          >
            <div className="flex items-start justify-between">
              <p className="eyebrow text-background/50">Online-Buchung</p>
              <ArrowUpRight size={12} className="text-background/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-4">
              <p className="font-serif text-base">Über Treatwell</p>
              <p className="mt-1 text-xs text-background/60 leading-relaxed">
                Externer Buchungspartner, 24/7 verfügbar.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Booking;
