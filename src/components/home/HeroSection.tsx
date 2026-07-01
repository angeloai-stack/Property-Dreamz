"use client";
// Full-bleed hero with Ken Burns background image and search bar.
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  { line1: "Find your",   line2: "Piece of Mexico"  },
  { line1: "Own a slice", line2: "of Paradise"      },
  { line1: "Live the",    line2: "Mexican Dream"    },
];

const heroImage = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/hero-suburban";

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [slide, setSlide] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setSlide(s => (s + 1) % slides.length);
        setShow(true);
      }, 500);
    }, 4500);
    return () => clearInterval(id);
  }, []);
  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/explore-map?search=${encodeURIComponent(q)}` : "/explore-map");
  }

  return (
    <section className="relative overflow-hidden bg-[#eaedf0] min-h-[min(88vh,820px)]">
      {/* Full-bleed hero image */}
      <Image
        src={heroImage}
        alt="Modern luxury residence in Mexico"
        fill
        priority
        className="object-cover animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
        sizes="100vw"
      />


      {/* Headline + search — flex column fills the full hero height, mt-[15vh] pushes search to visual center */}
      <div className="relative z-10 flex min-h-[min(88vh,820px)] flex-col px-6 pt-24 sm:px-10 lg:px-20 lg:pt-36">
        <h1 className="font-ewangi text-[clamp(4rem,10vw,7.5rem)] leading-[0.88] tracking-tight">
          <span
            className="block text-[#EAEDF0]"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(-14px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            {slides[slide].line1}
          </span>
          <span
            className="block font-bold text-brand-ink"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(-14px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: show ? "90ms" : "0ms",
            }}
          >
            {slides[slide].line2}
          </span>
        </h1>

        {/* Carousel dots */}
        <div className="mt-5 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                setShow(false);
                setTimeout(() => { setSlide(i); setShow(true); }, 500);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === slide ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/60"
              )}
            />
          ))}
        </div>

        {/* Search bar + desktop icon rail */}
        <div className="mt-[15vh] w-full max-w-xl mx-auto animate-[fade-up_0.8s_ease-out_0.35s_both]">
          <form onSubmit={handleSearch}>
            <label htmlFor="hero-search" className="sr-only">Search properties</label>
            <div className="flex items-center gap-3 rounded-full bg-[rgba(0,0,0,0.35)] px-5 py-3.5 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-[rgba(0,0,0,0.45)] focus-within:ring-white/30">
              <Search className="h-5 w-5 shrink-0 text-white/70" strokeWidth={1.5} />
              <input
                id="hero-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tijuana, Rosarito, Pto. Nuevo…"
                className="flex-1 bg-transparent font-ewangi text-[clamp(0.95rem,1.8vw,1.2rem)] text-white placeholder:text-white/55 outline-none"
              />
            </div>
          </form>

        </div>
      </div>

      {/* CMRE badge — bottom-right */}
      <div className="absolute bottom-6 right-6 z-10">
        <Image
          src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-02_p8szqi.png"
          alt="CMRE Certified Mexico Real Estate"
          width={69}
          height={95}
          className="h-16 w-auto drop-shadow-md"
        />
      </div>

    </section>
  );
}
