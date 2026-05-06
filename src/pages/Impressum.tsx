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
        <LegalSection title="Anbieterin">
          <p>FACE AND MORE by Michaela Kornherr<br />Wien, Österreich</p>
          <p>E-Mail: hello@faceandmore.at</p>
        </LegalSection>
        <LegalSection title="Unternehmensgegenstand">
          <p>Kosmetikstudio, Hautanalyse und Hautpflegebehandlungen.</p>
        </LegalSection>
        <LegalSection title="Haftung">
          <p>Inhalte dieser Webseite werden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen.</p>
        </LegalSection>
        <LegalSection title="Urheberrecht">
          <p>Alle Inhalte dieser Webseite sind urheberrechtlich geschützt.</p>
        </LegalSection>
      </div>
    </section>
  </SiteLayout>
);

export default Impressum;
