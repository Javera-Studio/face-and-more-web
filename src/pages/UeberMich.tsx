import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import portrait from "@/assets/michaela.jpg";
import studio from "@/assets/studio.jpg";
import studio2 from "@/assets/studio2.jpg";
import studio3 from "@/assets/studio3.jpg";
import { Link } from "react-router-dom";

const UeberMich = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Über Michaela"
      title={
        <>
          Hautgesundheit ist für mich{" "}
          <span className="italic text-primary">persönlich.</span>
        </>
      }
      intro="Mein Name ist Michaela Kornherr. Seit vielen Jahren begleite ich Menschen in Wien auf dem Weg zu einer Haut, in der sie sich wohlfühlen."
    />

    <section className="py-20">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden shadow-soft">
            <img
              src={portrait}
              alt="Michaela Kornherr — Hautexpertin in Wien"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
  <p>
    Hautgesundheit ist für mich mehr als nur Pflege — sie bedeutet Wohlbefinden, Selbstvertrauen und sich in der eigenen Haut wieder wohlzufühlen. Deshalb nehme ich mir bewusst Zeit für jede Person, jede Haut und jede individuelle Geschichte dahinter.
  </p>

  <p>
    Als Kosmetikerin und Hautcoach begleite ich Jugendliche und Erwachsene bei Akne, Problemhaut, Pigmentflecken und den Bedürfnissen reifer Haut. Jede Behandlung beginnt bei mir mit einer fundierten Hautanalyse, ehrlicher Beratung und einem persönlichen Gespräch — denn keine Haut ist wie die andere.
  </p>

  <p>
    Mein Ziel ist es nicht, Haut nur kurzfristig zu verbessern, sondern sie langfristig zu verstehen, zu stärken und nachhaltig zu begleiten. Deshalb erhältst du bei FACE AND MORE nicht nur eine Behandlung, sondern auch individuell abgestimmte Pflegeempfehlungen für Zuhause.
  </p>

  <p>
    Eine besondere Leidenschaft von mir ist außerdem das Pigmentieren von Augenbrauen und präzises Microblading. Natürlich wirkende Ergebnisse, harmonische Formen und typgerechte Beratung stehen dabei immer im Mittelpunkt — für ein Ergebnis, das deine natürliche Schönheit unterstreicht.
  </p>

  <p>
    Kontinuierliche Weiterbildung ist mir besonders wichtig. Ich bilde mich regelmäßig in moderner Hautanalyse, Wirkstofftherapie und neuen Behandlungstechniken weiter, damit du von aktuellen, fundierten und wirkungsvollen Methoden profitieren kannst.
  </p>

  <p>
    Mein Studio in Wien ist bewusst ruhig, hochwertig und persönlich gestaltet — ein Ort zum Ankommen, Entspannen und Wohlfühlen.
  </p>
          <div className="pt-6">
            <Link
              to="/kontakt"
              className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>

<section className="py-20">
  <div className="container-editorial">
    <div className="grid grid-cols-3 gap-4">
      <div className="aspect-[3/4] overflow-hidden shadow-soft">
        <img
          src={studio}
          alt="Behandlungsraum FACE AND MORE"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-[3/4] overflow-hidden shadow-soft">
        <img
          src={studio2}
          alt="Hautanalyse und Empfang"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-[3/4] overflow-hidden shadow-soft">
        <img
          src={studio3}
          alt="Studio Atmosphäre"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

  </SiteLayout>
);

export default UeberMich;