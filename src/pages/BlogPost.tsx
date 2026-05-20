import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import articles from "@/data/blogArticles";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const currentIndex = articles.indexOf(article);
  const prev = articles[currentIndex - 1] ?? null;
  const next = articles[currentIndex + 1] ?? null;

  return (
    <SiteLayout>
      <div className="bg-gradient-warm pt-28 md:pt-36 pb-16">
        <div className="container-editorial max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>
          <p className="eyebrow mb-5 text-primary">{article.category}</p>
          <h1 className="display">{article.title}</h1>
          <p className="lede mt-6 text-foreground/70">{article.excerpt}</p>
        </div>
      </div>

      <div className="container-editorial max-w-3xl py-16 md:py-24">
        <div className="aspect-[16/7] overflow-hidden shadow-soft mb-14">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose-editorial space-y-8">
          {article.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4">
                  {block.heading}
                </h2>
              )}
              <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                {block.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="eyebrow mb-4">Interesse geweckt?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin buchen <ArrowRight size={16} />
            </Link>
            <Link
              to={article.relatedTo}
              className="inline-flex items-center gap-2 px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Behandlung ansehen
            </Link>
          </div>
        </div>

        <nav className="mt-16 grid sm:grid-cols-2 gap-6">
          {prev && (
            <Link
              to={`/blog/${prev.slug}`}
              className="group p-6 border border-border hover:border-primary/40 transition-colors"
            >
              <p className="eyebrow mb-2 text-muted-foreground">← Vorheriger Artikel</p>
              <p className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">
                {prev.title}
              </p>
            </Link>
          )}
          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="group p-6 border border-border hover:border-primary/40 transition-colors sm:col-start-2 text-right"
            >
              <p className="eyebrow mb-2 text-muted-foreground">Nächster Artikel →</p>
              <p className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      </div>
    </SiteLayout>
  );
};

export default BlogPost;
