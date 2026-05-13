import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import portrait from "@/assets/michaela.avif";
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
  <div className="container-editorial">
    <div className="grid md:grid-cols-12 gap-4">
      <div className="md:col-span-7 aspect-[4/5] overflow-hidden shadow-soft">
        <img
          src={studio}
          alt="Behandlungsraum FACE AND MORE"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:col-span-5 grid grid-rows-2 gap-4">
        <div className="overflow-hidden shadow-soft">
          <img
            src={studio2}
            alt="Hautanalyse und Empfang"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden shadow-soft">
          <img
            src={studio3}
            alt="Studio Atmosphäre"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="py-20">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-4 h-[600px]">
          <div className="md:col-span-7 overflow-hidden shadow-soft">
            <img
              src={studio}
              alt="Behandlungsraum FACE AND MORE"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex-1 overflow-hidden shadow-soft">
              <img
                src={studio2}
                alt="Hautanalyse und Empfang"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden shadow-soft">
              <img
                src={studio3}
                alt="Studio Atmosphäre"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  </SiteLayout>
);

export default UeberMich;