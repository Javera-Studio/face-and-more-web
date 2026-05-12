import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";

interface ProductCategoryPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  description?: string;
}

const ProductCategoryPage = ({ eyebrow, title, intro, description }: ProductCategoryPageProps) => (
  <SiteLayout>
    <PageHero
      eyebrow={eyebrow}
      title={
        <>
          {title.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="italic text-primary">
            {title.split(" ").slice(-2).join(" ")}
          </span>
        </>
      }
      intro={intro}
    />

    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <Link
          to="/produkte"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Zurück zu allen Kategorien
        </Link>

        {description && (
          <p className="max-w-2xl text-foreground/75 leading-relaxed mb-16">{description}</p>
        )}

        {/* Empty state — products will be added later */}
        <div className="border border-border/70 bg-secondary/30 px-8 py-20 md:py-28 text-center">
          <p className="eyebrow mb-5">In Kürze verfügbar</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-xl mx-auto">
            Die passenden Produkte für diese Kategorie folgen{" "}
            <span className="italic text-primary">in Kürze</span>.
          </h2>
          <p className="lede mt-6 max-w-lg mx-auto">
            Du möchtest jetzt schon eine persönliche Empfehlung? Vereinbare gerne eine Hautanalyse oder ein Beratungsgespräch.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/hautanalyse"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Hautanalyse buchen{" "}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Persönliche Beratung
            </Link>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default ProductCategoryPage;
