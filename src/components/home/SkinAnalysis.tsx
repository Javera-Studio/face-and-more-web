import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Aperture, Clock, Sun, Activity, Layers } from "lucide-react";
import analysisImg from "@/assets/skin-analysis.jpg";

const metrics = [
  { icon: Droplet, label: "Feuchtigkeit" },
  { icon: Aperture, label: "Poren" },
  { icon: Clock, label: "Hautalterung" },
  { icon: Layers, label: "Pigmentierung" },
  { icon: Sun, label: "UV-Schäden" },
  { icon: Activity, label: "Hautstruktur" },
];

const steps = [
  { n: "01", t: "Analyse", d: "Präzise 3D-Aufnahme deiner Haut." },
  { n: "02", t: "Persönliche Beratung", d: "Wir besprechen Ergebnisse & Ziele." },
  { n: "03", t: "Individueller Pflegeplan", d: "Routine, die wirklich zu dir passt." },
  { n: "04", t: "Behandlungsempfehlung", d: "Gezielte Treatments für sichtbare Resultate." },
];

const SkinAnalysis = () => (
  <section className="py-24 md:py-32 bg-secondary/40">
    <div className="container-editorial">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6 lg:sticky lg:top-28">
          <div className="aspect-[4/5] overflow-hidden bg-muted shadow-elegant">
            <img
              src={analysisImg}
              alt="Modernes 3D-Hautanalysegerät im Studio FACE AND MORE Wien"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1600}
              height={1200}
            />
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow mb-5 text-primary">Premium Hautanalyse</p>
          <h2 className="headline">
            Deine Haut zeigt mehr, als man mit bloßem Auge sieht.
          </h2>
          <p className="lede mt-6">
            Mit unserer modernen 3D-Hautanalyse erkennen wir Hautzustände sichtbar
            unter der Oberfläche und erstellen eine individuelle Empfehlung —
            präzise, fundiert, persönlich.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {metrics.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-background border border-border p-5 hover:border-primary/40 transition-colors"
              >
                <Icon size={20} className="text-primary" strokeWidth={1.4} />
                <p className="mt-4 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="eyebrow mb-5">Ablauf</p>
            <ol className="border-t border-border">
              {steps.map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 py-5 border-b border-border">
                  <span className="font-serif text-lg text-primary">{s.n}</span>
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <Link
            to="/kontakt"
            className="group mt-10 inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Hautanalyse Termin buchen
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default SkinAnalysis;
