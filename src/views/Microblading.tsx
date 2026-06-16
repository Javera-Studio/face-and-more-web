'use client'
import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import { ArrowRight, Plus, Clock, Tag, Repeat, Award } from "lucide-react";
import { imgSrc } from "@/lib/utils";

import heroImg    from "@/assets/treatment-pmu.jpg";
import awardImg   from "@/assets/microbladingneu.jpg";
import ausgezeichnetImg from "@/assets/ausgezeichnet.JPG";
import processImg from "@/assets/IMG_2543.JPG";
import vorher1  from "@/assets/1vorher.jpg";
import nachher1 from "@/assets/1nachher.jpg";
import vorher2  from "@/assets/2vorher.jpg";
import nachher2 from "@/assets/2nachher.jpg";
import vorher3  from "@/assets/3vorher.jpg";
import nachher3 from "@/assets/3nachher.jpg";
import vorher4  from "@/assets/4vorher.jpg";
import nachher4 from "@/assets/4nachher.jpg";
import vorher6  from "@/assets/6vorher.jpg";
import nachher6 from "@/assets/6nachher.jpg";
import vorher7  from "@/assets/7vorher.jpg";
import nachher7 from "@/assets/7nachher.jpg";
import studioImg  from "@/assets/studio.jpg";

interface Faq { q: string; a: string }

const FaqItem = ({ q, a, defaultOpen = false }: Faq & { defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">{q}</span>
        <span className={`shrink-0 size-9 rounded-full border border-border flex items-center justify-center text-primary transition-all duration-500 ${open ? "rotate-45 bg-primary text-primary-foreground border-primary" : "group-hover:border-primary"}`}>
          <Plus size={16} />
        </span>
      </button>
      <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-foreground/75 leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
};

const benefits = [
  "Natürlich wirkende Härchenzeichnung",
  "Kein tägliches Nachzeichnen",
  "Kein Verwischen von Make-Up",
  "Typgerechte Form & Farbabstimmung",
  "Rekonstruktion fehlender Augenbrauen",
  "Inklusive Nachbehandlung",
];

const process = [
  {
    t: "Persönliche Beratung",
    d: "Ich bespreche mit dir deine Wünsche, deine natürliche Brauenform und den genauen Ablauf – ohne Druck, in Ruhe.",
  },
  {
    t: "Präzise Vorzeichnung",
    d: "Ich zeichne die ideale Brauenform individuell vor und stimme sie mit dir ab, bevor ich mit der Behandlung beginne.",
  },
  {
    t: "Feine Pigmentierung",
    d: "Mit einer speziellen Manualnadel arbeite ich haarfeine Striche ein, die natürlich zu deiner Haarfarbe und deinem Hauttyp passen.",
  },
  {
    t: "Pflege & Nachbehandlung",
    d: "Du erhältst eine Healing Creme, eine persönliche Pflegeanleitung und eine Nachbearbeitung innerhalb von 2 Monaten – bereits inklusive.",
  },
];

const prices = [
  { name: "Microblading Augenbrauen inkl. Nachbehandlung", duration: "120 Min", price: "€ 345 inkl. MwSt." },
  { name: "Zusätzliche Schattierung", duration: "nach Aufwand", price: "auf Anfrage" },
  { name: "Refresh Behandlung", duration: "75 Min", price: "auf Anfrage" },
];

const faqs: Faq[] = [
  {
    q: "Was ist Microblading?",
    a: "Microblading ist eine präzise Härchentechnik, bei der ich feine pigmentierte Härchen manuell in die Haut einarbeite. Dadurch wirken deine Augenbrauen voller, natürlicher und harmonischer – ganz ohne künstlichen Effekt.",
  },
  {
    q: "Für wen ist Microblading geeignet?",
    a: "Die Behandlung eignet sich besonders bei lückenhaften, asymmetrischen oder sehr hellen Augenbrauen. Auch bei Narben, Haarausfall oder nach übermäßigem Zupfen kann ich die natürliche Form deiner Brauen wiederherstellen.",
  },
  {
    q: "Wie läuft die Behandlung ab?",
    a: "Ich beginne immer mit einem ausführlichen Gespräch, einer gemeinsamen Vorzeichnung und der Farbabstimmung. Erst wenn du mit der Form zufrieden bist, starte ich mit der Pigmentierung.",
  },
  {
    q: "Wie lange dauert die Behandlung?",
    a: "Die Behandlung dauert rund 2 Stunden. Diese Zeit nehme ich mir bewusst – für Beratung, Vorzeichnung, Pigmentierung und alle Fragen, die du noch hast.",
  },
  {
    q: "Ist die Behandlung schmerzhaft?",
    a: "Das Schmerzempfinden ist individuell unterschiedlich. Die meisten meiner Kundinnen empfinden Microblading als gut aushaltbar und deutlich angenehmer als ein klassisches Tattoo.",
  },
  {
    q: "Wie sehen die Augenbrauen nach der Behandlung aus?",
    a: "Direkt nach der Behandlung wirken die Brauen etwas intensiver. Während der Abheilung verliert die Farbe etwa 30–40 % an Intensität – das Ergebnis wird dadurch noch natürlicher.",
  },
  {
    q: "Wie lange hält Microblading?",
    a: "Die Haltbarkeit liegt meist zwischen 12 und 24 Monaten und hängt vom Hauttyp, Stoffwechsel und der Pflege ab. Im persönlichen Gespräch erkläre ich dir, was du individuell erwarten kannst.",
  },
  {
    q: "Ist eine Nachbehandlung notwendig?",
    a: "Ja, eine Nachbehandlung nach etwa 4–6 Wochen ist bei den meisten Kundinnen sinnvoll und bereits im Preis inkludiert. Dabei perfektioniere ich letzte Details und passe die Farbintensität an.",
  },
  {
    q: "Was sollte ich nach der Behandlung beachten?",
    a: "In den ersten 10–12 Tagen solltest du Wasser, Sauna, Solarium, Sport und Make-up im Brauenbereich vermeiden. Die mitgegebene Pflegecreme unterstützt die Heilung – ich erkläre dir alles genau vor Ort.",
  },
  {
    q: "Gibt es Kontraindikationen für Microblading?",
    a: "Bei Schwangerschaft, Stillzeit, bestimmten Hauterkrankungen oder Blutgerinnungsstörungen führe ich keine Behandlung durch. Im Zweifelsfall berate ich dich gerne vorab persönlich.",
  },
];

const beforeAfterPairs = [
  { vorher: vorher1, nachher: nachher1 },
  { vorher: vorher2, nachher: nachher2 },
  { vorher: vorher3, nachher: nachher3 },
  { vorher: vorher4, nachher: nachher4 },
  { vorher: vorher6, nachher: nachher6 },
  { vorher: vorher7, nachher: nachher7 },
  // Set 5 folgt – einfach hier ergänzen:
  // { vorher: vorher5, nachher: nachher5 },
];

const Microblading = () => (
  <SiteLayout>

    {/* HERO */}
    <section className="bg-gradient-warm pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6">Microblading Wien</p>
          <h1 className="display">
            Natürlich schöne Augenbrauen mit präzisem{" "}
            <span className="italic text-primary">Microblading</span>.
          </h1>
          <p className="lede mt-6 max-w-xl">
            Ich gestalte typgerechte Augenbrauen, die deine natürlichen Gesichtszüge harmonisch unterstreichen – individuell geplant und präzise umgesetzt.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Alle Leistungen
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden shadow-soft">
            <img
              src={imgSrc(heroImg)}
              alt="Microblading Behandlung Wien"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* INTRO – Mein Ansatz */}
    <section className="py-12 md:py-16 border-t border-border/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <p className="eyebrow">Mein Ansatz</p>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-4">
          <p className="font-serif text-xl md:text-2xl leading-snug text-foreground/90">
            Jede Augenbraue ist einzigartig. Deshalb beginnt jede Behandlung bei mir mit einer persönlichen Beratung und einer präzisen Vorzeichnung – Form, Symmetrie und Farbwahl werden individuell auf dein Gesicht abgestimmt.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Mir ist wichtig, dass du dich mit deiner neuen Augenbrauenform wirklich wohlfühlst — natürlich, harmonisch und passend zu deinem Gesicht. Mein Ziel sind keine künstlich wirkenden Augenbrauen, sondern Ergebnisse, die deine Ausstrahlung unterstreichen.
          </p>
        </div>
      </div>
    </section>

    {/* AWARD – Browista */}
    <section className="py-12 md:py-16 bg-secondary/30 border-t border-border/40">
      <div className="container-editorial grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="size-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Award size={16} className="text-primary" />
            </span>
            <p className="eyebrow">Browista Meisterschaft 2025</p>
          </div>
          <h2 className="headline">
            Ausgezeichnete{" "}
            <span className="italic text-primary">Präzision</span>.
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-md">
            Bei der Browista Meisterschaft durfte ich einen Platz unter den Top 3 erreichen und den 2. Platz in der Kategorie Microblading belegen.
          </p>
          <p className="mt-3 text-foreground/75 leading-relaxed max-w-md">
            Diese Auszeichnung bestätigt meinen Anspruch an Präzision, Natürlichkeit und typgerechte Ergebnisse – und den hohen Standard, den ich mir für jede einzelne Behandlung setze.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center lg:items-end">
          <div className="w-full max-w-[320px] aspect-[4/3] overflow-hidden border border-border/50 shadow-soft">
            <img
              src={imgSrc(ausgezeichnetImg)}
              alt="Browista Meisterschaft 2025 – Auszeichnung"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full max-w-[320px] aspect-[4/3] overflow-hidden border border-border/50 shadow-soft">
            <img
              src={imgSrc(awardImg)}
              alt="Microblading Ergebnis – Browista Meisterschaft"
              className="w-full h-full object-cover -rotate-90 scale-[1.35]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* BEFORE / AFTER */}
    <section className="py-12 md:py-16 border-t border-border/40">
      <div className="container-editorial">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-4">Vorher & Nachher</p>
          <h2 className="headline">
            Echte{" "}
            <span className="italic text-primary">Ergebnisse</span>.
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed max-w-lg">
            Feine Härchenzeichnung, typgerechte Form und harmonische Farbwahl – alle Ergebnisse entstanden in meinem Studio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {beforeAfterPairs.map((pair, i) => (
            <div key={i} className="group flex gap-0.5 overflow-hidden border border-border/40 shadow-soft">
              <div className="relative flex-1 overflow-hidden aspect-[3/4]">
                <img
                  src={imgSrc(pair.vorher)}
                  alt={`Microblading Vorher ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-0 inset-x-0 py-2 bg-foreground/55 text-background text-[9px] uppercase tracking-[0.2em] text-center">
                  Vorher
                </span>
              </div>
              <div className="relative flex-1 overflow-hidden aspect-[3/4]">
                <img
                  src={imgSrc(pair.nachher)}
                  alt={`Microblading Nachher ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-0 inset-x-0 py-2 bg-primary/80 text-primary-foreground text-[9px] uppercase tracking-[0.2em] text-center">
                  Nachher
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* BENEFITS */}
    <section className="py-12 md:py-16 bg-secondary/40 border-t border-border/40">
      <div className="container-editorial">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-4">Vorteile</p>
          <h2 className="headline">
            Was diese Behandlung{" "}
            <span className="italic text-primary">besonders</span> macht.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {benefits.map((b, i) => (
            <div
              key={b}
              className="group relative bg-background p-8 lg:p-10 flex flex-col gap-5 min-h-[160px] transition-colors duration-500 hover:bg-secondary/40"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs text-primary tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-border group-hover:bg-primary transition-colors duration-500" />
              </div>
              <p className="font-serif text-lg leading-snug text-foreground/90">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-12 md:py-16 border-t border-border/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        <div className="lg:col-span-7 flex flex-col">
          <p className="eyebrow mb-4">Ablauf</p>
          <h2 className="headline">
            Dein Weg{" "}
            <span className="italic text-primary">Schritt für Schritt</span>.
          </h2>
          <p className="mt-4 text-foreground/75 leading-relaxed max-w-md">
            Jede Behandlung beginnt mit einem persönlichen Gespräch – ohne Eile, mit echtem Interesse an deinen Wünschen.
          </p>
          <ol className="mt-6 flex-1">
            {process.map((s, i) => (
              <li
                key={s.t}
                className="grid grid-cols-[auto_1fr] gap-8 p-7 md:p-8 border-b border-border last:border-b-0"
              >
                <span className="font-serif text-3xl text-primary leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-xl">{s.t}</p>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-5 overflow-hidden">
          <img
            src={imgSrc(processImg)}
            alt="Microblading Behandlungsdetail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    {/* PRICES */}
    <section className="py-12 md:py-16 bg-secondary/40 border-t border-border/40">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Preise & Dauer</p>
            <h2 className="headline">
              Transparent. <span className="italic text-primary">Klar.</span> Persönlich.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Die Nachbehandlung ist immer inklusive – keine versteckten Aufpreise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {prices.map((pr, i) => (
            <div
              key={pr.name}
              className="group relative bg-background p-8 lg:p-10 flex flex-col transition-colors duration-500 hover:bg-secondary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-serif text-xs text-primary tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <Clock size={12} /> {pr.duration}
                </div>
              </div>
              <div className="mt-8 min-h-[5.5rem] flex flex-col">
                <p className="font-serif text-xl leading-snug">{pr.name}</p>
              </div>
              <div className="mt-auto pt-8 border-t border-border/70 flex items-baseline justify-between">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Preis</span>
                <p className="font-serif text-2xl text-primary">{pr.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Tag size={14} /> Inkl. Beratung & Vorzeichnung</span>
          <span className="inline-flex items-center gap-2"><Repeat size={14} /> Nachbehandlung inklusive</span>
        </div>
      </div>
    </section>

    {/* STUDIO / CLOSING */}
    <section className="py-12 md:py-16 border-t border-border/40">
      <div className="container-editorial grid md:grid-cols-2 gap-6 items-center">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={imgSrc(studioImg)}
            alt="Studio Face and More Wien"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">Persönlich. Diskret.</p>
          <h2 className="headline">
            Behandlung mit{" "}
            <span className="italic text-primary">Herzblut</span> und Ruhe.
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-md">
            Im Studio FACE AND MORE in Wien nehme ich mir die Zeit, die du und deine Wünsche verdienen. Keine Hektik, kein Fließband – sondern echtes Handwerk und eine Behandlung, die ich mit voller Sorgfalt umsetze.
          </p>
          <p className="mt-3 text-foreground/75 leading-relaxed max-w-md">
            Ich freue mich darauf, dich kennenzulernen und gemeinsam das perfekte Ergebnis für dich zu finden.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-12 md:py-16 bg-secondary/40 border-t border-border/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="headline">
            Häufige <span className="italic text-primary">Fragen</span>.
          </h2>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            Du hast eine Frage, die hier nicht beantwortet ist? Schreib mir – ich melde mich persönlich bei dir.
          </p>
          <Link href="/kontakt" className="link-underline mt-6 inline-block text-sm">
            Frage stellen →
          </Link>
        </div>
        <div className="lg:col-span-8 border-t border-border">
          {faqs.map((f, i) => (
            <FaqItem key={f.q + i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 border-t border-border/40">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-4">Dein nächster Schritt</p>
        <h2 className="headline">
          Lass uns gemeinsam{" "}
          <span className="italic text-primary">starten</span>.
        </h2>
        <p className="lede mt-5">
          Buche dein persönliches Erstgespräch oder direkt deinen Termin im Studio FACE AND MORE in Wien. Ich freue mich auf dich.
        </p>
        <Link
          href="/kontakt"
          className="group mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
        >
          Termin buchen{" "}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>

  </SiteLayout>
);

export default Microblading;
