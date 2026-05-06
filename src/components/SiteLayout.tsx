import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import StickyMobileCTA from "./StickyMobileCTA";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <SiteFooter />
    <StickyMobileCTA />
    <div className="lg:hidden h-20" />
  </div>
);

export default SiteLayout;
