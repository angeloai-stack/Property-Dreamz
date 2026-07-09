"use client";
// Horizontal scroll row of portrait developer cards + social proof line — Figma: "Top Developers / Cards Group".
// Extracted from TopDevelopers so regional landing pages (e.g. Baja California) can reuse just the cards.
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Heart, LayoutGrid } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";
import { useSavedProperties, type SavedProperty } from "@/hooks/useSavedProperties";
import { cn } from "@/lib/utils";

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

// "From $199K" → 199000. Falls back to 0 when the label carries no number.
function parsePriceUSD(label: string): number {
  const n = parseFloat(label.replace(/[^0-9.]/g, ""));
  if (Number.isNaN(n)) return 0;
  return /k/i.test(label) ? n * 1000 : n;
}

// The `catalog-<slug>` id matches the property-catalogue converter, so hearting a development
// here and on a listing grid toggles the same saved entry.
function toSavedProperty(dev: TopDeveloper): SavedProperty {
  const slug = dev.href.split("/").filter(Boolean).pop() ?? String(dev.id);
  return {
    id: `catalog-${slug}`,
    title: dev.name,
    zone: dev.location,
    priceUSD: parsePriceUSD(dev.price),
    beds: dev.beds,
    baths: dev.baths,
    sqm: dev.sqft,
    status: "Available",
    image: dev.image,
  };
}

export function TopDevelopersCards({
  developers: items = developers,
  label = "Our top's developers",
  socialProof = "+2,369 people purchasing properties right now",
}: TopDevelopersCardsProps) {
  const { isSaved, toggleSaved } = useSavedProperties();

  return (
    <>
      {/* Centered badge heading — matches Figma Group 24 "Our top's developers" pill: light teal bg, dark pine text */}
      <RevealOnScroll direction="right" duration={1100} delay={0}>
        <div className="mb-5 flex justify-center md:mb-10">
          <span className="rounded-[14px] bg-brand-teal px-4 py-2 font-ewangi text-[clamp(0.6rem,1.2vw,1.0625rem)] font-bold text-brand-pine shadow-subtle md:px-6 md:py-3">
            {label}
          </span>
        </div>
      </RevealOnScroll>

      {/* Horizontal scroll row of portrait cards */}
      <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden lg:gap-5">
        {items.map((dev, i) => {
          const savedProperty = toSavedProperty(dev);
          const saved = isSaved(savedProperty.id);
          return (
          <RevealOnScroll key={dev.id} direction="left" duration={1100} delay={i * 180} className="shrink-0">
            <Link
              href={dev.href}
              aria-label={`${dev.name}, ${dev.location} — ${dev.price}`}
              className="relative shrink-0 w-52 overflow-hidden rounded-[32px] block h-75 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-65 md:rounded-[40px] md:h-105"
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
                aria-label={saved ? `Remove ${dev.name} from saved` : `Save ${dev.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSaved(savedProperty);
                }}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-ink shadow-subtle backdrop-blur-sm transition hover:bg-white"
              >
                <Heart className={cn("h-4 w-4", saved && "fill-brand-teal text-brand-teal")} strokeWidth={saved ? 0 : 2} aria-hidden="true" />
              </button>

              {/* Spec chips — small squared badges stacked on the left, vertically centered */}
              <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                <span className="flex items-center gap-1 rounded-[3px] bg-brand-teal px-2 py-1 text-[10px] font-bold text-brand-pine">
                  <LayoutGrid className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.sqft}
                </span>
                <span className="flex items-center gap-1 rounded-[3px] bg-brand-teal px-2 py-1 text-[10px] font-bold text-brand-pine">
                  <Bed className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.beds}
                </span>
                <span className="flex items-center gap-1 rounded-[3px] bg-brand-teal px-2 py-1 text-[10px] font-bold text-brand-pine">
                  <Bath className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.baths}
                </span>
              </div>

              {/* Price badge — floating pill near the bottom, matches Figma's centered "Rectangle 39" */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-lg bg-[#028e7f] px-4 py-2.5 shadow-subtle">
                <p className="whitespace-nowrap font-ewangi text-base text-white">{dev.price}</p>
              </div>
            </Link>
          </RevealOnScroll>
          );
        })}
      </div>

      <RevealOnScroll direction="up" delay={300}>
        {/* Social proof — matches Figma Group 25: filled heart + bold black headline */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Heart className="h-8 w-8 shrink-0 fill-brand-teal text-brand-teal" aria-hidden="true" />
          <p className="font-ewangi text-[clamp(1.1rem,2.2vw,1.75rem)] font-bold text-brand-ink">{socialProof}</p>
        </div>
      </RevealOnScroll>
    </>
  );
}
