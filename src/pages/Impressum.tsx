import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";

const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-serif text-2xl mt-10 mb-3">{title}</h2>
    <div className="text-foreground/80 leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

const Impressum = () => (
  <SiteLayout>
    <PageHero eyebrow="Rechtliches" title="Impressum" />
    
    <section className="py-16">
      <div className="container-editorial max-w-3xl">

        <LegalSection title="Angaben gemäß §5 ECG">
          <p>
            FACE AND MORE<br />
            Michaela Kornherr<br />
            Liechtensteinstraße 62 TOP 2<br />
            A - 1090 Wien<br />
            Österreich
          </p>

          <p className="mt-4">
            Tel: +43 677 62 920 665<br />
            E-Mail: michaela@faceandmore.at<br />
            Website: www.faceandmore.at
          </p>
        </LegalSection>

        <LegalSection title="Unternehmensgegenstand">
          <p>
            Kosmetikstudio, Hautanalyse, Hautcoaching und kosmetische Behandlungen.
          </p>
        </LegalSection>

        <LegalSection title="Berufsrecht">
          <p>
            Gewerbeordnung: www.ris.bka.gv.at
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Inhalte">
          <p>
            Die Inhalte dieser Website werden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.
          </p>
        </LegalSection>

        <LegalSection title="Urheberrecht">
          <p>
            Alle Inhalte dieser Website, insbesondere Texte, Bilder und Grafiken, sind urheberrechtlich geschützt.
          </p>
        </LegalSection>

        <LegalSection title="Online-Streitbeilegung">
          <p>
            Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:
          </p>

          <p className="mt-2">
            https://ec.europa.eu/consumers/odr/
          </p>

          <p className="mt-4">
            Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </LegalSection>

      </div>
    </section>
  </SiteLayout>
);

export default Impressum;
