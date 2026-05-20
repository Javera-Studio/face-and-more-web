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
            Wolfsaugasse 6/2<br />
            A-1200 Wien<br />
            Österreich
          </p>
          <p>
            Tel: +43 677 62 920 665<br />
            E-Mail: michaela@faceandmore.at<br />
            Website: <a href="https://www.faceandmore.at" className="underline hover:text-primary">www.faceandmore.at</a>
          </p>
        </LegalSection>

        <LegalSection title="Unternehmensgegenstand">
          <p>Kosmetikstudio, Hautanalyse, Hautcoaching und kosmetische Behandlungen.</p>
        </LegalSection>

        <LegalSection title="Berufsrecht">
          <p>
            Gewerbeordnung:{" "}
            <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              www.ris.bka.gv.at
            </a>
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
          <p>
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </LegalSection>
      </div>
    </section>
  </SiteLayout>
);

export default Impressum;
