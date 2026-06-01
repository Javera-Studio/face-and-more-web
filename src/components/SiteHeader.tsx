'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { imgSrc } from "@/lib/utils";

const links = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/hautcoaching", label: "Hautcoaching" },
  { to: "/hautanalyse", label: "Hautanalyse" },
  { to: "/produkte", label: "Produkte" },
  { to: "/preise", label: "Preise" },
  { to: "/ueber-mich", label: "Über mich" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/blog", label: "Blog" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-24 md:h-32">
        <Link href="/" className="flex items-center" aria-label="FACE AND MORE — Startseite">
          <img src={imgSrc(logo)} alt="FACE AND MORE by Michaela Kornherr" className="h-24 md:h-28 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const isActive = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`text-xs tracking-wide transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Termin buchen
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-editorial py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-sm tracking-wide"
            >
              Termin buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
