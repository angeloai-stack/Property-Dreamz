"use client";
// Homepage section: scrollable developer cards, destination photo grid, and city/market SEO links.
import Image from "next/image";
import Link from "next/link";
import { Container, RevealOnScroll } from "@/components/ui";
import { TopDevelopersCards } from "./TopDevelopersCards";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";

const destinations = [
  {
    name: "Tijuana",
    image: `${CLD}/the-wave/the-wave/hero`,
    href: "/explore-map?q=Tijuana",
  },
  {
    name: "Tecate",
    image: `${CLD}/encanto-del-valle/safety`,
    href: "/explore-map?q=Tecate",
  },
  {
    name: "Mexicali",
    image: `${CLD}/laguna-bay/hero`,
    href: "/explore-map?q=Mexicali",
  },
  {
    name: "Ensenada",
    image: `${CLD}/costa-baja/hero`,
    href: "/explore-map?q=Ensenada",
  },
  {
    name: "Rosarito",
    image: `${CLD}/costa-bella/hero`,
    href: "/explore-map?q=Rosarito",
  },
  {
    name: "San Felipe",
    image: `${CLD}/pacifica/hero`,
    href: "/explore-map?q=San+Felipe",
  },
] as const;

const popularCities = [
  "Cabo San Lucas", "Puerto Vallarta", "Tulum", "Cancún",
  "Los Cabos", "Riviera Maya", "Playa del Carmen", "Mérida",
  "Tijuana", "Rosarito", "Ensenada", "San Miguel de Allende",
  "Mazatlán", "Huatulco", "Puerto Escondido", "Loreto",
  "La Paz", "Akumal", "Cozumel", "Holbox",
] as const;

const markets = [
  "Baja California", "Jalisco", "Quintana Roo", "Nayarit",
  "Sonora", "Oaxaca", "Yucatán", "Sinaloa",
  "Nuevo León", "Chihuahua", "Guerrero", "View All Markets",
] as const;

export function TopDevelopers() {
  return (
    <section className="w-full bg-brand-paper py-8 md:py-16">
      <Container>
        <TopDevelopersCards />

        {/* ── Destination image grid ───────────────────────────────────── */}
        <RevealOnScroll className="mt-12 md:mt-16" delay={80} direction="right">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative block overflow-hidden rounded-lg h-28 md:h-40"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 33vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute bottom-2.5 left-3 font-ewangi text-[0.7rem] font-semibold text-white md:bottom-3.5 md:left-4 md:text-[0.9rem]">
                  {dest.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-5">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-2.5 font-ewangi text-label font-semibold text-brand-paper transition-colors duration-200 hover:bg-brand-pine"
            >
              View More Destinations →
            </Link>
          </div>
        </RevealOnScroll>

        {/* ── Real Estate in Popular Cities ────────────────────────────── */}
        <RevealOnScroll className="mt-12 md:mt-14" delay={100} direction="left">
          <h3 className="font-ewangi text-[1rem] font-bold text-brand-ink md:text-[1.05rem]">
            Real Estate in Popular Cities
          </h3>
          <p className="mt-1 font-body text-sm text-brand-muted">
            Browse listings, view photos, and connect with an agent to schedule a viewing in some of our most popular cities.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
            {popularCities.map((city) => (
              <Link
                key={city}
                href="/properties"
                className="font-body text-sm text-brand-ink underline underline-offset-2 decoration-brand-ink/30 transition-colors hover:text-brand-teal hover:decoration-brand-teal"
              >
                {city} Real Estate
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        {/* ── Real Estate Markets ──────────────────────────────────────── */}
        <RevealOnScroll className="mt-10 md:mt-12" delay={120} direction="right">
          <h3 className="font-ewangi text-[1rem] font-bold text-brand-ink md:text-[1.05rem]">
            Real Estate Markets
          </h3>
          <p className="mt-1 font-body text-sm text-brand-muted">
            Find your next dream home in one of our markets.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
            {markets.map((market) => (
              <Link
                key={market}
                href="/properties"
                className="font-body text-sm text-brand-ink underline underline-offset-2 decoration-brand-ink/30 transition-colors hover:text-brand-teal hover:decoration-brand-teal"
              >
                {market === "View All Markets" ? market : `${market} Real Estate`}
              </Link>
            ))}
          </div>
        </RevealOnScroll>

      </Container>
    </section>
  );
}
