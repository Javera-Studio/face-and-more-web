import Link from "next/link";
import { ArrowRight, Sparkles, Star, ShieldCheck, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-skin.jpg";
import { imgSrc } from "@/lib/utils";

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-warm">
    <div className="container-editorial pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Heading + lede — always first */}
      <div className="lg:col-span-7 reveal">
        <p className="eyebrow mb-6">Premium Skin Studio · Wien</p>
        <h1 className="display">
          Individuelle Hautpflege beginnt mit dem richtigen{" "}
          <span className="italic text-primary">Verständnis</span> deiner Haut.
        </h1>
        <p className="lede mt-7 max-w-xl">
          Moderne 3D-Hautanalyse, gezielte Behandlungen und persönliche Betreuung —
          für Ergebnisse, die zu deiner Haut passen.
        </p>

        {/* Buttons + trust — desktop only here */}
        <div className="hidden lg:flex mt-10 flex-col sm:flex-row gap-3">
          <Link
            href="/hautanalyse"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Hautanalyse buchen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            Behandlungen ansehen
          </Link>
        </div>

        <div className="hidden lg:grid mt-12 grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
          {[
            { icon: HeartHandshake, label: "Persönliche Betreuung" },
            { icon: Sparkles, label: "3D Hautanalyse" },
            { icon: ShieldCheck, label: "Langjährige Erfahrung" },
            { icon: Star, label: "5.0 Bewertungen" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-xs leading-snug text-foreground/75">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-5 reveal reveal-delay-2">
        <div className="relative aspect-[2/3] overflow-hidden shadow-elegant">
          <img
            src={imgSrc(heroImg)}
            alt="Hautanalyse und Hautpflege bei FACE AND MORE in Wien"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute -bottom-px left-0 right-0 h-32 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>

      {/* Buttons + trust — mobile only, after image */}
      <div className="lg:hidden lg:col-span-7 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/hautanalyse"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Hautanalyse buchen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            Behandlungen ansehen
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 max-w-2xl">
          {[
            { icon: HeartHandshake, label: "Persönliche Betreuung" },
            { icon: Sparkles, label: "3D Hautanalyse" },
            { icon: ShieldCheck, label: "Langjährige Erfahrung" },
            { icon: Star, label: "5.0 Bewertungen" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-xs leading-snug text-foreground/75">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
