import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import { toast } from "sonner";

const Kontakt = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Vielen Dank — wir melden uns persönlich bei dir.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt & Buchung"
        title={<>Lass uns über deine <span className="italic text-primary">Haut</span> sprechen.</>}
        intro="Schreib mir kurz, was du dir wünschst — ich melde mich persönlich bei dir und finde mit dir den passenden Termin."
      />

      <section className="py-20">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="eyebrow block mb-2">Name</label>
                  <input required className="w-full bg-background border border-input px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="eyebrow block mb-2">E-Mail</label>
                  <input type="email" required className="w-full bg-background border border-input px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="eyebrow block mb-2">Telefon (optional)</label>
                <input type="tel" className="w-full bg-background border border-input px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="eyebrow block mb-2">Behandlung</label>
                <select className="w-full bg-background border border-input px-4 py-3 focus:outline-none focus:border-primary transition-colors">
                  <option>Hautanalyse</option>
                  <option>Akne Behandlung</option>
                  <option>Anti Aging</option>
                  <option>Microneedling</option>
                  <option>Fruchtsäure</option>
                  <option>Problemhaut</option>
                  <option>Microblading / PMU</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="eyebrow block mb-2">Nachricht</label>
                <textarea rows={5} className="w-full bg-background border border-input px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors disabled:opacity-60"
              >
                <Calendar size={16} /> {sending ? "Wird gesendet …" : "Anfrage senden"}
              </button>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-8">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/436776292066?text=Hallo%20Michaela%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20vereinbaren."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-primary text-primary-foreground p-7 hover:bg-primary-glow transition-colors"
            >
              <div className="flex items-center gap-4">
                <WhatsAppIcon />
                <div>
                  <p className="eyebrow text-primary-foreground/70 mb-1">Schnellste Option</p>
                  <p className="font-serif text-xl">WhatsApp schreiben</p>
                </div>
              </div>
              <ArrowUpRight size={20} className="text-primary-foreground/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="bg-secondary/60 p-7 space-y-4">
              <p className="eyebrow">Studio</p>
              <div className="flex gap-3 text-sm text-foreground/85">
                <MapPin size={16} className="text-primary mt-0.5" /> Wolfsaugasse 6/2, A-1200 Wien
              </div>
              <div className="flex gap-3 text-sm text-foreground/85">
                <Phone size={16} className="text-primary mt-0.5" />
                <a href="tel:+436776292066">+43 677 62 920 665</a>
              </div>
              <div className="flex gap-3 text-sm text-foreground/85">
                <Mail size={16} className="text-primary mt-0.5" />
                <a href="mailto:michaela@faceandmore.at">michaela@faceandmore.at</a>
              </div>
            </div>

            <div className="bg-secondary/60 p-7 space-y-4">
              <p className="eyebrow">Öffnungszeiten</p>
              <p className="text-sm text-foreground/85">Mo – Do: 08:30 – 18:00 Uhr</p>
              <p className="text-sm text-foreground/85">
                Fr: 08:30 – 13:00 Uhr{" "}
                <span className="text-foreground/50">(nachmittags nach Rücksprache)</span>
              </p>
            </div>

            
<a href="https://www.treatwell.at/ort/face-and-more/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border p-5 hover:border-primary/40 transition-colors"
            >
              <div>
                <p className="eyebrow">Alternative</p>
                <p className="font-serif text-lg mt-1">Über Treatwell buchen</p>
              </div>
              <ArrowUpRight size={18} className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Kontakt;
