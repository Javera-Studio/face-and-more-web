import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
    <Link
      to="/kontakt"
      className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-primary-foreground text-sm tracking-wide"
    >
      <Calendar size={16} /> Hautanalyse Termin buchen
    </Link>
  </div>
);

export default StickyMobileCTA;
