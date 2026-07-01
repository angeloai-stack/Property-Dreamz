"use client";
// Homepage section: scrollable developer cards, destination photo grid, and city/market SEO links.
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Heart, LayoutGrid } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";

const developers = [
  {
    id: 1,
    name: "The Wave",
    location: "Rosarito",
    price: "From $199K",
    beds: 1,
    baths: 1,
    sqft: 50,
    image: `${CLD}/the-wave/the-wave/hero`,
    href: "/properties/the-wave",
  },
  {
    id: 2,
    name: "Costa Bella",
    location: "Rosarito",
    price: "From $280K",
    beds: 2,
    baths: 2,
    sqft: 200,
    image: `${CLD}/costa-bella/hero`,
    href: "/properties/costa-bella",
  },
  {
    id: 3,
    name: "Loma Serena",
    location: "Ensenada",
    price: "From $195K",
    beds: 2,
    baths: 2,
    sqft: 300,
    image: `${CLD}/loma-serena/cta`,
    href: "/properties/loma-serena",
  },
  {
    id: 4,
    name: "Pacifica",
    location: "San Felipe",
    price: "From $89K",
    beds: 2,
    baths: 2,
    sqft: 300,
    image: `${CLD}/pacifica/hero`,
    href: "/properties/pacifica",
  },
] as const;

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
        {/* Centered badge heading — matches Figma Group 24 "Our top's developers" pill */}
        <RevealOnScroll direction="right" duration={1100} delay={0}>
        <div className="mb-5 flex justify-center md:mb-10">
          <span className="rounded-full bg-brand-emerald px-7 py-2.5 font-ewangi text-label font-semibold text-brand-paper shadow-subtle">
            Our top&apos;s developers
          </span>
        </div>
        </RevealOnScroll>

        {/* Horizontal scroll row of 4 portrait cards */}
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden lg:gap-5">
          {developers.map((dev, i) => (
            <RevealOnScroll key={dev.id} direction="left" duration={1100} delay={i * 180} className="shrink-0">
            <Link
              href={dev.href}
              aria-label={`${dev.name}, ${dev.location} — ${dev.price}`}
              className="relative shrink-0 w-52 overflow-hidden rounded-2xl block h-75 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-65 md:rounded-3xl md:h-105"
            >
              {/* Property photo — fills full card */}
              <Image
                src={dev.image}
                alt={dev.name}
                fill
                sizes="260px"
                className="object-cover transition duration-300 hover:scale-105"
              />

              {/* Bottom gradient so price badge text reads clearly */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              {/* Save/heart button — top right */}
              <button
                type="button"
                aria-label={`Save ${dev.name}`}
                onClick={(e) => e.preventDefault()}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-ink shadow-subtle backdrop-blur-sm transition hover:bg-white"
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
              </button>

              {/* Spec chips — stacked on the left, vertically centered */}
              <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
                <span className="flex items-center gap-1 rounded-full bg-brand-emerald px-2.5 py-1 text-[10px] font-bold text-brand-paper">
                  <Bed className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.beds}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-emerald px-2.5 py-1 text-[10px] font-bold text-brand-paper">
                  <Bath className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.baths}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-emerald px-2.5 py-1 text-[10px] font-bold text-brand-paper">
                  <LayoutGrid className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.sqft} m²
                </span>
              </div>

              {/* Price badge — full-width strip at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-emerald px-4 py-3">
                <p className="font-ewangi text-subtitle font-bold text-brand-paper">
                  {dev.price}
                </p>
                <p className="font-ewangi text-[10px] font-semibold uppercase tracking-widest text-brand-paper/70">
                  {dev.location}
                </p>
              </div>
            </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={300}>
        {/* Social proof — matches Figma Group 25 "+2369 people purchasing" */}
        <p className="mt-8 text-center font-ewangi text-label text-brand-muted">
          +2,369 people purchasing properties right now
        </p>
        </RevealOnScroll>

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
