import Link from "next/link";
import logo from "@/assets/logo.jpg";
import javeraLogo from "@/assets/Javera.logo.rund.png";
import { imgSrc } from "@/lib/utils";

const SiteFooter = () => (
  <footer className="bg-secondary/60 border-t border-border mt-24">
    <div className="container-editorial py-16 grid gap-12 md:grid-cols-3">
      <div className="md:col-span-2">
        <Link href="/" aria-label="FACE AND MORE — Startseite" className="inline-block">
          <img src={imgSrc(logo)} alt="FACE AND MORE by Michaela Kornherr" className="h-28 md:h-32 w-auto" />
        </Link>
        <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Moderne Hautanalyse, gezielte Behandlungen und persönliche Hautberatung im Herzen Wiens.
        </p>
      </div>
      <div>
        <p className="eyebrow mb-4">Studio</p>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Wolfsaugasse 6/2, A-1200 Wien</li>
          <li>+43 677 62 920 665</li>
          <li>michaela@faceandmore.at</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-editorial py-6 flex flex-col items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} FACE AND MORE by Michaela Kornherr</p>
        <a
          href="https://javera-studio.at"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 opacity-35 hover:opacity-60 transition-opacity duration-500"
          style={{ textDecoration: "none" }}
        >
          <span className="text-[9px] tracking-[0.18em] uppercase font-light">
            Webdesign by
          </span>
          <img src={imgSrc(javeraLogo)} alt="JAVERA STUDIO" className="h-3.5 w-auto" />
          <span className="text-[9px] tracking-[0.18em] uppercase font-light">
            JAVERA STUDIO
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
