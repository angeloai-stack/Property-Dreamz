"use client";
// Full-bleed hero with Ken Burns background image, icon rail sidebar, and search bar.
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heart, Home, MapPin, MessageCircle, Search } from "lucide-react";

const heroImage = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/hero-suburban";

const iconRail = [
  { icon: Home, label: "Home", href: "/" },
  { icon: MapPin, label: "Explore map", href: "/explore-map" },
  { icon: Heart, label: "Saved", href: "/saved" },
  { icon: MessageCircle, label: "Contact", href: "/contact" },
];

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

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


      {/* Left icon rail — matches Figma sidebar vectors at x≈20, y=199/308/412/516 */}
      <aside
        aria-label="Quick navigation"
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-11 rounded-full bg-white/20 px-1 py-24 backdrop-blur-md lg:flex"
      >
        {iconRail.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <Icon size={20} strokeWidth={1.5} />
          </Link>
        ))}
      </aside>

      {/* Headline + search — flex column fills the full hero height, mt-[15vh] pushes search to visual center */}
      <div className="relative z-10 flex min-h-[min(88vh,820px)] flex-col px-6 pt-24 sm:px-10 lg:px-20 lg:pt-36">
        <h1 className="font-ewangi text-[clamp(4rem,10vw,7.5rem)] leading-[0.88] tracking-tight">
          <span className="block text-[#EAEDF0] animate-[fade-left_0.8s_ease-out_both]">Find your</span>
          <span className="font-bold text-brand-ink animate-[fade-left_0.9s_ease-out_0.18s_both]">Piece of Mexico</span>
        </h1>

        {/* Search bar — roughly centered vertically */}
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
