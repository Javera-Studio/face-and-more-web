import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import { fetchBlogPosts, fetchBlogPostBySlug } from "@/../../lib/notion";
import articles from "@/data/blogArticles";
import { imgSrc } from "@/lib/utils";

export const revalidate = 600

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

export async function generateStaticParams() {
  const hardcoded = articles.map((a) => ({ slug: a.slug }))
  try {
    const posts = await fetchBlogPosts()
    const notionSlugs = posts.map((p) => ({ slug: p.slug }))
    const all = [...hardcoded]
    for (const p of notionSlugs) {
      if (!all.find((h) => h.slug === p.slug)) all.push(p)
    }
    return all
  } catch {
    return hardcoded
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  let post: (typeof fallbackPosts)[0] | null = null
  let allPosts: typeof fallbackPosts = []

  try {
    const [notionPost, notionAll] = await Promise.all([
      fetchBlogPostBySlug(params.slug),
      fetchBlogPosts(),
    ])
    post = notionPost
    allPosts = notionAll.length > 0 ? notionAll : fallbackPosts
  } catch {
    allPosts = fallbackPosts
  }

  // Fallback: look up in hardcoded articles
  if (!post) {
    const article = articles.find((a) => a.slug === params.slug)
    if (article) {
      post = {
        id: article.slug,
        slug: article.slug,
        title: article.title,
        category: article.category,
        excerpt: article.excerpt,
        coverUrl: imgSrc(article.image),
        publishedAt: '',
        content: article.content,
        relatedTo: article.relatedTo,
      }
    }
    if (allPosts.length === 0) allPosts = fallbackPosts
  }

  if (!post) notFound()

  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug)
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <SiteLayout>
      <div className="bg-gradient-warm pt-28 md:pt-36 pb-16">
        <div className="container-editorial max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>
          <p className="eyebrow mb-5 text-primary">{post.category}</p>
          <h1 className="display">{post.title}</h1>
          {post.excerpt && (
            <p className="lede mt-6 text-foreground/70">{post.excerpt}</p>
          )}
        </div>
      </div>

      <div className="container-editorial max-w-3xl py-16 md:py-24">
        {post.coverUrl && (
          <div className="aspect-[16/7] overflow-hidden shadow-soft mb-14">
            <img
              src={post.coverUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {post.content.length > 0 ? (
          <div className="prose-editorial space-y-8">
            {post.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    {block.heading}
                  </h2>
                )}
                {block.text && (
                  <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                    {block.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-foreground/60 lede">Der vollständige Artikel folgt in Kürze.</p>
        )}

        <div className="mt-16 pt-10 border-t border-border">
          <p className="eyebrow mb-4">Interesse geweckt?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary-glow transition-colors"
            >
              Termin buchen <ArrowRight size={16} />
            </Link>
            {post.relatedTo && (
              <Link
                href={post.relatedTo}
                className="inline-flex items-center gap-2 px-7 py-4 border border-border text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Behandlung ansehen
              </Link>
            )}
          </div>
        </div>

        {(prev || next) && (
          <nav className="mt-16 grid sm:grid-cols-2 gap-6">
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
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
                href={`/blog/${next.slug}`}
                className="group p-6 border border-border hover:border-primary/40 transition-colors sm:col-start-2 text-right"
              >
                <p className="eyebrow mb-2 text-muted-foreground">Nächster Artikel →</p>
                <p className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">
                  {next.title}
                </p>
              </Link>
            )}
          </nav>
        )}
      </div>
    </SiteLayout>
  )
}
