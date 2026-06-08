import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  centered?: boolean;
}

const PageHero = ({ eyebrow, title, intro, centered }: PageHeroProps) => (
  <section className="bg-gradient-warm">
    <div className={`container-editorial pt-16 md:pt-24 pb-16 md:pb-24${centered ? " text-center" : ""}`}>
      <p className="eyebrow mb-6">{eyebrow}</p>
      <h1 className={`display${centered ? " mx-auto max-w-4xl" : " max-w-4xl"}`}>{title}</h1>
      {intro && <p className={`lede mt-7${centered ? " mx-auto max-w-2xl" : " max-w-2xl"}`}>{intro}</p>}
    </div>
  </section>
);

export default PageHero;
