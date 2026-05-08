import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProduct {
  name: string;
  desc: string;
  image: string;
}

interface ProductCarouselProps {
  products: CarouselProduct[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [active, setActive] = useState(0);
  const n = products.length;

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % n), 5500);
    return () => clearInterval(id);
  }, [n]);

  return (
    <div className="relative w-full">
      <div
        className="relative h-[460px] md:h-[540px] flex items-center justify-center"
        style={{ perspective: "1400px" }}
      >
        {products.map((p, i) => {
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const abs = Math.abs(offset);
          const isActive = offset === 0;

          const translateX = offset * 180;
          const translateZ = -abs * 220;
          const rotateY = offset * -18;
          const opacity = abs > 2 ? 0 : 1 - abs * 0.25;
          const zIndex = 100 - abs;

          return (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              aria-label={p.name}
              className="absolute top-1/2 left-1/2 transition-all duration-[900ms] ease-out cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex,
                transformStyle: "preserve-3d",
                pointerEvents: abs > 2 ? "none" : "auto",
              }}
            >
              <div
                className={`w-[240px] md:w-[280px] aspect-[3/4] overflow-hidden bg-secondary/40 transition-shadow duration-700 ${
                  isActive ? "shadow-elegant" : "shadow-soft"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 text-center max-w-md mx-auto min-h-[5rem]">
        <p className="eyebrow text-primary mb-3">Empfehlung</p>
        <h3 className="font-serif text-2xl md:text-3xl leading-snug">{products[active].name}</h3>
        <p className="mt-3 text-foreground/70 leading-relaxed">{products[active].desc}</p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Vorheriges Produkt"
          className="size-11 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Produkt ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Nächstes Produkt"
          className="size-11 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
