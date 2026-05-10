import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import img1 from "@/assets/treatment-fruchtsaeure.jpg";
import img2 from "@/assets/treatment-microneedling.jpg";
import img3 from "@/assets/treatment-facial.jpg";
import img4 from "@/assets/treatment-skin.jpg";
import img5 from "@/assets/treatment-antiaging.jpg";
import img6 from "@/assets/gesichtsbehandlung.jpg";

interface Article {
  title: string;
  excerpt: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    title: "Warum ein Fruchtsäurepeeling auch im Frühjahr sinnvoll sein kann",
    excerpt:
      "Viele denken, Fruchtsäure sei nur im Winter möglich — dabei kann sie bei richtiger Pflege auch im Frühjahr eine effektive Behandlung für Glow, Hautstruktur und Unreinheiten sein.",
    category: "Fruchtsäure",
    image: img1,
  },
  {
    title: "Warum Microneedling die Haut frischer und strahlender wirken lässt",
    excerpt:
      "Microneedling unterstützt die natürliche Hauterneuerung, verbessert die Hautstruktur und sorgt für einen frischen, gesunden Glow.",
    category: "Microneedling",
    image: img2,
  },
  {
    title: "Gesichtsbehandlungen mit ASAP Skincare bei Face and More",
    excerpt:
      "Hochwertige Wirkstoffe, individuell abgestimmte Pflege und professionelle Behandlungen unterstützen die Haut langfristig und nachhaltig.",
    category: "Hautpflege",
    image: img3,
  },
  {
    title: "Warum täglicher UVA/UVB Schutz so wichtig ist",
    excerpt:
      "UV-Strahlung beeinflusst die Haut das ganze Jahr über. Ein täglicher Sonnenschutz hilft dabei, Hautalterung und Pigmentflecken vorzubeugen.",
    category: "Hautpflege",
    image: img4,
  },
  {
    title: "Warum AHA-Fruchtsäureprodukte nach Behandlungen sinnvoll sind",
    excerpt:
      "AHA-Fruchtsäuren unterstützen die Hauterneuerung, verbessern die Wirkstoffaufnahme und sorgen für ein glatteres Hautbild.",
    category: "Fruchtsäure",
    image: img5,
  },
  {
    title: "Warum Fruchtsäure in der modernen Kosmetik nicht mehr wegzudenken ist",
    excerpt:
      "Fruchtsäure zählt zu den effektivsten Wirkstoffen zur Verbesserung von Hautstruktur, Glow, Poren und Unreinheiten.",
    category: "Fruchtsäure",
    image: img6,
  },
];

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
          <article key={a.title} className="group flex flex-col">
            <div className="aspect-[4/5] overflow-hidden mb-6">
              <img
                src={a.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <p className="eyebrow mb-3">{a.category}</p>
            <h2 className="font-serif text-2xl leading-snug text-foreground group-hover:text-primary transition-colors">
              {a.title}
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed text-sm">{a.excerpt}</p>
            <Link
              to="/kontakt"
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
