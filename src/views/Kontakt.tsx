import SiteLayout from "@/components/SiteLayout";
import { Mail, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";
import { imgSrc } from "@/lib/utils";
import michiImg from "@/assets/michi.JPG";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Kontakt = () => (
  <SiteLayout>
    <section className="bg-gradient-warm pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="container-editorial grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">
        <div>
          <p className="eyebrow mb-6">Kontakt & Buchung</p>
          <h1 className="display max-w-4xl">Lass uns über deine <span className="italic text-primary">Haut</span> sprechen.</h1>
          <p className="lede mt-7 max-w-2xl">Schreib mir einfach auf WhatsApp — ich antworte persönlich und finde mit dir den passenden Termin.</p>
        </div>
        <div className="overflow-hidden shadow-soft">
          <img
            src={imgSrc(michiImg)}
            alt="Michaela Kornherr — Kosmetikerin & Gründerin von Face and More"
            className="w-full object-cover object-top aspect-[4/4.5]"
          />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container-editorial grid lg:grid-cols-2 gap-8 lg:gap-12">

        {/* Left — WhatsApp + Treatwell */}
        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/436776292066?text=Hallo%20Michaela%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between hover:bg-primary-glow transition-colors"
          >
            <div className="flex items-start justify-between">
              <WhatsAppIcon />
              <ArrowUpRight size={18} strokeWidth={1.3} className="text-primary-foreground/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-10">
              <p className="eyebrow text-primary-foreground/70 mb-1">Empfohlen</p>
              <p className="font-serif text-2xl md:text-3xl">Direkt auf WhatsApp anfragen</p>
              <p className="mt-3 text-sm text-primary-foreground/80 max-w-sm">
                Schnell, unkompliziert und persönlich — Michaela antwortet direkt.
              </p>
            </div>
          </a>

          <a
            href="https://www.treatwell.at/ort/face-and-more/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-secondary/60 border border-border p-5 flex items-center justify-between hover:border-primary/40 transition-colors"
          >
            <div>
              <p className="eyebrow mb-0.5">Alternativ</p>
              <p className="font-serif text-lg">Online Buchung über Treatwell</p>
            </div>
            <ArrowUpRight size={16} className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 ml-4" />
          </a>
        </div>

        {/* Right — Address + Opening hours */}
        <div className="flex flex-col gap-4">
          <div className="bg-secondary/60 p-8 space-y-5">
            <p className="eyebrow">Studio</p>
            <div className="flex gap-3 text-sm text-foreground/85">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              <span>Wolfsaugasse 6/2, A-1200 Wien</span>
            </div>
            <div className="flex gap-3 text-sm text-foreground/85">
              <Phone size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="tel:+436776292066" className="hover:text-primary transition-colors">
                +43 677 62 920 665
              </a>
            </div>
            <div className="flex gap-3 text-sm text-foreground/85">
              <Mail size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:michaela@faceandmore.at" className="hover:text-primary transition-colors">
                michaela@faceandmore.at
              </a>
            </div>
          </div>

          <div className="bg-secondary/60 p-8 space-y-4">
            <p className="eyebrow">Öffnungszeiten</p>
            <div className="flex gap-3 text-sm text-foreground/85">
              <Clock size={15} className="text-primary mt-0.5 shrink-0" />
              <div className="space-y-1.5">
                <p>Mo – Do: 08:30 – 18:00 Uhr</p>
                <p>
                  Fr: 08:30 – 13:00 Uhr{" "}
                  <span className="text-foreground/50">(nachmittags nach Rücksprache)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </SiteLayout>
);

export default Kontakt;
