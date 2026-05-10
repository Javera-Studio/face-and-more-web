import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, HeartHandshake } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import productImg from "@/assets/treatment-skin.jpg";
import asapImg from "@/assets/treatment-facial.jpg";
import demaresImg from "@/assets/treatment-antiaging.jpg";
import beratungImg from "@/assets/michaela.avif";

const Section = ({
  eyebrow,
  title,
  text,
  image,
  reverse,
  bullets,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image: string;
  reverse?: boolean;
  bullets?: string[];
}) => (
  <section className="py-20 md:py-28">
    <div
      className={`container-editorial grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="lg:col-span-6">
        <div className="aspect-[4/5] overflow-hidden">
          <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="lg:col-span-6">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="headline">{title}</h2>
        <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">{text}</p>
        {bullets && (
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </section>
);

const Produkte = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Produkte & Heimpflege Wien"
      title={
        <>
          Professionelle Heimpflege mit{" "}
          <span className="italic text-primary">ASAP</span> &{" "}
          <span className="italic text-primary">DEMARÉS</span>.
        </>
      }
      intro="Die richtige Pflege zu Hause macht den Unterschied. Statt Standardprodukte empfehle ich dir hochwertige, individuell abgestimmte Pflege, die zu deiner Haut, deinem Hautziel und deinen Behandlungen passt — ohne Verkaufsdruck, ehrlich und fundiert."
    />

    {/* Why home care */}
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5">Warum Heimpflege</p>
          <h2 className="headline">
            Wirkung entsteht <span className="italic text-primary">zwischen</span> den Behandlungen.
          </h2>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-px bg-border border border-border">
          {[
            { icon: Sparkles, t: "Sichtbare Ergebnisse", d: "Die richtigen Wirkstoffe verstärken jede Behandlung und stabilisieren die Haut langfristig." },
            { icon: Leaf, t: "Hautbarriere stärken", d: "Hochwertige Pflege schützt die Hautbarriere und verhindert neue Hautprobleme." },
            { icon: HeartHandshake, t: "Persönlich abgestimmt", d: "Keine Standardroutine — jede Empfehlung basiert auf deiner Hautanalyse." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8 lg:p-10 flex flex-col gap-5 min-h-[200px]">
              <Icon className="text-primary" size={22} />
              <p className="font-serif text-lg leading-snug">{t}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Section
      eyebrow="ASAP Skincare"
      title={
        <>
          ASAP — australische <span className="italic text-primary">Wirkstoffpflege</span>.
        </>
      }
      text="ASAP steht für hochkonzentrierte, wirkungsvolle Pflegeprodukte aus Australien. Mit Inhaltsstoffen wie Vitamin C, AHA-Fruchtsäuren, Niacinamid und Hyaluron unterstützt ASAP die Haut bei Unreinheiten, Pigmentierung, Anti Aging und einem strahlenden Teint."
      image={asapImg}
      bullets={[
        "Hochkonzentrierte Wirkstoffe",
        "AHA-Fruchtsäuren & Vitamin C",
        "Klärend, ausgleichend, erneuernd",
        "Ideal nach Behandlungen im Studio",
      ]}
    />

    <Section
      eyebrow="DEMARÉS Skincare"
      title={
        <>
          DEMARÉS — sanfte, <span className="italic text-primary">individuelle</span> Pflege.
        </>
      }
      text="DEMARÉS verbindet hochwertige Wirkstoffe mit einer angenehmen, sinnlichen Pflegeerfahrung. Die Produkte eignen sich besonders für sensible, reife oder anspruchsvolle Haut und bilden eine schöne Ergänzung zu jeder professionellen Behandlung."
      image={demaresImg}
      reverse
      bullets={[
        "Schonend & gut verträglich",
        "Für sensible und reife Haut",
        "Pflegende Texturen mit Wirkung",
        "Harmoniert ideal mit ASAP",
      ]}
    />

    {/* Personal recommendation */}
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={beratungImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5">Persönliche Empfehlung</p>
          <h2 className="headline">
            Pflege, die nach deiner <span className="italic text-primary">Hautanalyse</span> entsteht.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Statt einer Routine von der Stange erhältst du nach deiner Hautanalyse eine individuelle Empfehlung — abgestimmt auf deinen Hautzustand, deine Behandlungen und deinen Alltag. Wir starten mit dem Wesentlichen und bauen die Pflege bewusst und in Ruhe auf.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Pflegeberatung buchen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/hautanalyse"
              className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Zur Hautanalyse
            </Link>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Produkte;
