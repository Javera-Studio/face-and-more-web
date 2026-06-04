import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { fetchBlogPosts } from "@/../../lib/notion";
import articles from "@/data/blogArticles";
import { imgSrc } from "@/lib/utils";

export const revalidate = 3600

const fallbackPosts = articles.map((a) => ({
  id: a.slug,
  slug: a.slug,
  title: a.title,
  category: a.category,
  excerpt: a.excerpt,
  coverUrl: imgSrc(a.image),
  publishedAt: '',
  content: a.content,
  relatedTo: a.relatedTo,
}))

export default async function BlogPage() {
  let posts: typeof fallbackPosts = []
  try {
    const notion = await fetchBlogPosts()
    posts = notion.length > 0 ? notion : fallbackPosts
  } catch (e) {
    posts = fallbackPosts
  }

  return (
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
        <div className="container-editorial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-10 lg:gap-y-20">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <Link href={`/blog/${post.slug}`} className="aspect-[4/5] overflow-hidden mb-6 block bg-secondary/30">
                  {post.coverUrl ? (
                    <img
                      src={post.coverUrl}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-warm flex items-center justify-center">
                      <span className="eyebrow text-primary">{post.category}</span>
                    </div>
                  )}
                </Link>
                <p className="eyebrow mb-3">{post.category}</p>
                <h2 className="font-serif text-2xl leading-snug text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed text-sm">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-primary hover:text-primary-glow transition-colors"
                >
                  Artikel lesen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
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
            href="/kontakt"
            className="group mt-10 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
          >
            Kontakt aufnehmen <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
