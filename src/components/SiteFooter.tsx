import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const SiteFooter = () => (
  <footer className="bg-secondary/60 border-t border-border mt-24">
    <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" aria-label="FACE AND MORE — Startseite" className="inline-block">
          <img src={logo} alt="FACE AND MORE by Michaela Kornherr" className="h-28 md:h-32 w-auto" />
        </Link>
        <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Moderne Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.
        </p>
      </div>
      <div>
        <p className="eyebrow mb-4">Studio</p>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Wien, Österreich</li>
          <li>+43 — auf Anfrage</li>
          <li>hello@faceandmore.at</li>
        </ul>
      </div>
      <div>
        <p className="eyebrow mb-4">Navigation</p>
        <ul className="space-y-2 text-sm">
          <li><Link to="/leistungen" className="hover:text-primary">Leistungen</Link></li>
          <li><Link to="/hautanalyse" className="hover:text-primary">Hautanalyse</Link></li>
          <li><Link to="/ueber-mich" className="hover:text-primary">Über mich</Link></li>
          <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          <li><Link to="/impressum" className="hover:text-primary">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} FACE AND MORE by Michaela Kornherr</p>
        <p>Premium Skin Studio · Wien</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
