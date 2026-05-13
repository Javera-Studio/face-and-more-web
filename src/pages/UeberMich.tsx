import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import portrait from "@/assets/michaela.avif";
import studio from "@/assets/studio.jpg";
import { Link } from "react-router-dom";

const UeberMich = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Über Michaela"
      title={<>Hautgesundheit ist für mich <span className="italic text-primary">persönlich.</span></>}
      intro="Mein Name ist Michaela Kornherr. Seit vielen Jahren begleite ich Menschen in Wien auf dem Weg zu einer Haut, in der sie sich wohlfühlen."
    />

    <section className="py-20">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden shadow-soft">
            <img src={portrait} alt="Michaela Kornherr — Hautexpertin in Wien" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
  <p>
    Mein Anspruch ist es, moderne, fundierte Behandlungen mit echter Zeit, Aufmerksamkeit und Wärme zu verbinden. Im Studio FACE AND MORE arbeite ich nicht nach Schema F — jede Behandlung beginnt mit einer fundierten Hautanalyse und einem Gespräch.
  </p>

  <p>
    Als Kosmetikerin und Hautcoach begleite ich Jugendliche und Erwachsene bei Akne, Problemhaut und individuellen Hautbedürfnissen. Mir ist wichtig, die Haut nicht nur kurzfristig zu behandeln, sondern gemeinsam langfristig zu verstehen und zu stärken.
  </p>

  <p>
    Besonders spezialisiert habe ich mich auf unreine Haut, Akne, Pigmentflecken und die Bedürfnisse reifer Haut. Jede Haut ist anders — deshalb erhältst du bei FACE AND MORE nicht nur eine Behandlung, sondern auch eine individuell abgestimmte Pflege und ehrliche Beratung für Zuhause.
  </p>

  <p>
    Kontinuierliche Weiterbildung ist mir besonders wichtig: Ich besuche regelmäßig Fortbildungen rund um moderne Hautanalyse, Wirkstofftherapie und Behandlungstechniken — damit du immer auf dem aktuellsten Stand profitierst.
  </p>

  <p>
    Mein Studio in Wien ist bewusst ruhig, hochwertig und persönlich gestaltet — ein Ort, an dem du dich entspannen, deine Haut verstehen und langfristig stärken kannst.
  </p>
          <div className="pt-6">
            <Link to="/kontakt" className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors">
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container-editorial">
        <div className="aspect-[16/8] overflow-hidden">
          <img src={studio} alt="Studio FACE AND MORE in Wien" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default UeberMich;
