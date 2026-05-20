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
    <PageHero eyebrow="Rechtliches" title="Datenschutz" intro="Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003)." />
    <section className="py-16">
      <div className="container-editorial max-w-3xl">
        <Section title="Verantwortliche">
          <p>Michaela Kornherr</p>
            <p>Wolfsaugasse 6/2</p>
            <p>A-1200 Wien</p>
<p>
  E-Mail:{" "}
  <a
    href="mailto:michaela@faceandmore.at"
    className="text-foreground transition hover:text-rose"
  >
    michaela@faceandmore.at
  </a>
</p>
        </Section>
        <Section title="Kontaktaufnahme">
          <p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        </Section>
        <Section title="Terminbuchung über externe Anbieter">
          <p>Für Terminbuchungen werden Sie auf externe Plattformen (z.B. Treatwell oder Phorest) weitergeleitet. Dabei gelten die Datenschutzbestimmungen der jeweiligen Anbieter.</p>
        </Section>
        <Section title="Cookies">
          <p>Diese Website verwendet ausschließlich technisch notwendige Cookies, um die Funktionalität zu gewährleisten.</p>
        </Section>
                <Section title="Server-Logfiles">
          <p>Der Provider der Website erhebt und speichert automatisch Informationen (z.B. IP-Adresse, Browsertyp, Uhrzeit), die Ihr Browser automatisch übermittelt. Diese Daten sind nicht bestimmten Personen zuordenbar.</p>
        </Section>
        <Section title="Deine Rechte">
          <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der österreichischen Datenschutzbehörde beschweren.</p>
        </Section>
      </div>
    </section>
  </SiteLayout>
);

export default Datenschutz;
