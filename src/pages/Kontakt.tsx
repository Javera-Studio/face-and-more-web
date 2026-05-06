import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react";
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
            <div className="bg-secondary/60 p-7 space-y-4">
              <p className="eyebrow">Studio</p>
              <div className="flex gap-3 text-sm text-foreground/85"><MapPin size={16} className="text-primary mt-0.5" /> Wien, Österreich</div>
              <div className="flex gap-3 text-sm text-foreground/85"><Phone size={16} className="text-primary mt-0.5" /> Auf Anfrage</div>
              <div className="flex gap-3 text-sm text-foreground/85"><Mail size={16} className="text-primary mt-0.5" /> hello@faceandmore.at</div>
            </div>

            <a
              href="https://www.treatwell.at"
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
