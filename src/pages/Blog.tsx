import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import articles from "@/data/blogArticles";

const Blog = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Blog — FACE AND MORE"
      title={
        <>
          Hautwissen, das <span className="italic text-primary">Klarheit</span> schafft.
        </>
      }
      intro="Persönliche Einblicke, Wirkstoffe verständlich erklärt und Tipps aus der Praxis — für eine Hautpflege, die wirklich wirkt."
    />

    <section className="py-20 md:py-28">
      <div className="container-editorial grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-10 lg:gap-y-20">
        {articles.map((a) => (
          <article key={a.slug} className="group flex flex-col">
            <Link to={`/blog/${a.slug}`} className="aspect-[4/5] overflow-hidden mb-6 block">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </Link>
            <p className="eyebrow mb-3">{a.category}</p>
            <h2 className="font-serif text-2xl leading-snug text-foreground group-hover:text-primary transition-colors">
              <Link to={`/blog/${a.slug}`}>{a.title}</Link>
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed text-sm">{a.excerpt}</p>
            <Link
              to={`/blog/${a.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-primary hover:text-primary-glow transition-colors"
            >
              Artikel lesen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </section>

    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <p className="eyebrow mb-5">Persönliche Beratung</p>
        <h2 className="headline">
          Frag mich gerne <span className="italic text-primary">persönlich</span>.
        </h2>
        <p className="lede mt-6">
          Du hast eine Frage zu deiner Haut oder zu einer Behandlung? Schreib mir — ich antworte persönlich.
        </p>
        <Link
          to="/kontakt"
          className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
        >
          Kontakt aufnehmen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default Blog;
