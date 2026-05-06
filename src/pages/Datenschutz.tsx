import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-serif text-2xl mt-10 mb-3">{title}</h2>
    <div className="text-foreground/80 leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

const Datenschutz = () => (
  <SiteLayout>
    <PageHero eyebrow="Rechtliches" title="Datenschutz" intro="Der Schutz deiner persönlichen Daten ist uns ein wichtiges Anliegen." />
    <section className="py-16">
      <div className="container-editorial max-w-3xl">
        <Section title="Kontaktaufnahme">
          <p>Wenn du uns per Formular oder E-Mail kontaktierst, werden deine Angaben zur Bearbeitung der Anfrage und für mögliche Rückfragen gespeichert.</p>
        </Section>
        <Section title="Cookies">
          <p>Diese Website verwendet ausschließlich technisch notwendige Cookies, um die Funktionalität zu gewährleisten.</p>
        </Section>
        <Section title="Deine Rechte">
          <p>Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit.</p>
        </Section>
        <Section title="Kontakt">
          <p>Bei Fragen zum Datenschutz: hello@faceandmore.at</p>
        </Section>
      </div>
    </section>
  </SiteLayout>
);

export default Datenschutz;
