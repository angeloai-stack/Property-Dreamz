// Horizontal scroll row of portrait developer cards + social proof line — Figma: "Top Developers / Cards Group".
// Extracted from TopDevelopers so regional landing pages (e.g. Baja California) can reuse just the cards.
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Heart, LayoutGrid } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";

export type TopDeveloper = {
  id: number | string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  href: string;
};

export const developers: TopDeveloper[] = [
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
];

type TopDevelopersCardsProps = {
  developers?: TopDeveloper[];
  label?: string;
  socialProof?: string;
};

export function TopDevelopersCards({
  developers: items = developers,
  label = "Our top's developers",
  socialProof = "+2,369 people purchasing properties right now",
}: TopDevelopersCardsProps) {
  return (
    <>
      {/* Centered badge heading — matches Figma Group 24 "Our top's developers" pill */}
      <RevealOnScroll direction="right" duration={1100} delay={0}>
        <div className="mb-5 flex justify-center md:mb-10">
          <span className="rounded-full bg-brand-emerald px-7 py-2.5 font-ewangi text-label font-semibold text-brand-paper shadow-subtle">
            {label}
          </span>
        </div>
      </RevealOnScroll>

      {/* Horizontal scroll row of portrait cards */}
      <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden lg:gap-5">
        {items.map((dev, i) => (
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
                <p className="font-ewangi text-subtitle font-bold text-brand-paper">{dev.price}</p>
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
        <p className="mt-8 text-center font-ewangi text-label text-brand-muted">{socialProof}</p>
      </RevealOnScroll>
    </>
  );
}
