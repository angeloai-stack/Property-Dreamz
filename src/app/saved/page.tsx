"use client";
// Saved listings page — client-only, uses local React state (no persistence yet).
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Bath,
  Bed,
  ChevronDown,
  Heart,
  Maximize2,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { RevealOnScroll, TiltCard } from "@/components/ui";
import { VerifyFeatures } from "@/components/shared/VerifyFeatures";
import { cn } from "@/lib/utils";

type SavedListing = {
  id: number;
  title: string;
  zone: string;
  sqm: number;
  priceUSD: number;
  beds: number;
  baths: number;
  status: string;
  image: string;
};

// Placeholder data — replace with persisted favourites once a backend/localStorage layer exists.
const initialSaved: SavedListing[] = [
  {
    id: 1,
    title: "Loft in Los Cabos",
    zone: "Cabo San Lucas, BCS",
    sqm: 120,
    priceUSD: 653894,
    beds: 2,
    baths: 2,
    status: "Pre sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 2,
    title: "Residencial Altamar",
    zone: "Zona Rio, Tijuana",
    sqm: 180,
    priceUSD: 250000,
    beds: 3,
    baths: 2,
    status: "Available",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 3,
    title: "Torres Pacifico",
    zone: "Playas de Rosarito, BC",
    sqm: 130,
    priceUSD: 182000,
    beds: 2,
    baths: 2,
    status: "Pre sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: 4,
    title: "Hacienda Valle",
    zone: "Valle de Guadalupe, BC",
    sqm: 420,
    priceUSD: 750000,
    beds: 5,
    baths: 4,
    status: "Available",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    id: 5,
    title: "Punta Mita Reserve",
    zone: "Punta Mita, Nayarit",
    sqm: 540,
    priceUSD: 1250000,
    beds: 5,
    baths: 5,
    status: "Verified",
    image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&q=80",
  },
  {
    id: 6,
    title: "Ensenada Marina",
    zone: "Ensenada, Baja California",
    sqm: 150,
    priceUSD: 245000,
    beds: 3,
    baths: 2,
    status: "Pre sale",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
  },
];

const SORT_OPTIONS = ["Newest first", "Price: low to high", "Price: high to low"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

function sortListings(list: SavedListing[], sort: SortOption): SavedListing[] {
  if (sort === "Price: low to high") return [...list].sort((a, b) => a.priceUSD - b.priceUSD);
  if (sort === "Price: high to low") return [...list].sort((a, b) => b.priceUSD - a.priceUSD);
  return list;
}

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

// ── SortDropdown — Figma: Rectangle 138, #1e1e1e r=7 pill above the grid ──────

function SortDropdown({ value, onChange }: { value: SortOption; onChange: (v: SortOption) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-3 rounded-[7px] bg-[#1e1e1e] px-5 py-3 font-ewangi text-[0.9rem] text-white transition hover:bg-black"
      >
        <span>{value}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} strokeWidth={2} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-[10px] bg-[#1e1e1e] shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={cn(
                  "block w-full whitespace-nowrap px-5 py-2.5 text-left font-ewangi text-[0.85rem] transition hover:bg-white/10",
                  opt === value ? "text-brand-teal" : "text-white/80"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── SavedCard — Figma: "Saved cuadro" 352x438 white card r=14 ────────────────

type SavedCardProps = {
  listing: SavedListing;
  onUnsave: () => void;
};

function SavedCard({ listing, onUnsave }: SavedCardProps) {
  return (
    <article className="group overflow-hidden rounded-[14px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
      {/* Image — flush to the card's top corners, no inset margin */}
      <div className="relative h-57.5 w-full overflow-hidden sm:h-64.75">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 1024px) 50vw, 320px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Status badge — Figma: rgba(2,142,127,0.84) r=2, top-left */}
        <div className="absolute left-3 top-3 rounded-xs bg-[#028e7f]/84 px-3 py-1">
          <span className="font-ewangi text-[13px] text-white sm:text-[15px]">{listing.status}</span>
        </div>

        {/* Heart unsave button — Figma: solid white circle 45x45, top-right */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onUnsave();
          }}
          aria-label="Remove from saved"
          className="absolute right-3 top-3 flex h-10.5 w-10.5 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
        >
          <Heart className="h-5 w-5 fill-brand-teal text-brand-teal" strokeWidth={0} />
        </button>

        {/* Stat badges — Figma: 49x20px teal r=3, stacked over the lower-left of the image */}
        <div className="absolute -left-2 bottom-14 z-10 flex flex-col gap-1.5">
          <div className="flex items-center gap-1 rounded-[3px] bg-brand-teal px-2 py-1 shadow-sm">
            <Bath className="h-3 w-3 text-white" strokeWidth={2} />
            <span className="font-ewangi text-[11px] font-semibold text-white">{listing.baths}</span>
          </div>
          <div className="flex items-center gap-1 rounded-[3px] bg-brand-teal px-2 py-1 shadow-sm">
            <Bed className="h-3 w-3 text-white" strokeWidth={2} />
            <span className="font-ewangi text-[11px] font-semibold text-white">{listing.beds}</span>
          </div>
        </div>

        {/* Price badge — Figma: #00c9a7 r=9, bottom-right */}
        <div className="absolute bottom-3 right-3 rounded-[9px] bg-[#00c9a7] px-3 py-2 shadow-md">
          <span className="font-ewangi text-[16px] leading-none text-white sm:text-[17px]">
            {formatUSD(listing.priceUSD)}
          </span>
        </div>
      </div>

      {/* Info below image — Figma: Ewangi Bold 17px #1e1e1e title */}
      <div className="px-5 pb-5 pt-4">
        <p className="font-ewangi text-[17px] font-bold leading-snug text-[#1e1e1e]">{listing.title}</p>
        <p className="mt-1 flex items-center gap-1 font-ewangi text-[13px] text-[#1e1e1e]">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-teal" strokeWidth={2} />
          <span className="truncate">{listing.zone}</span>
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="flex items-center gap-1 font-ewangi text-[13px] text-[#1e1e1e]">
            <Maximize2 className="h-3.5 w-3.5 text-brand-teal" strokeWidth={2} />
            <span className="font-bold text-brand-emerald">{listing.sqm}</span> sqm
          </span>
          <span className="flex items-center gap-1 font-ewangi text-[13px] text-[#1e1e1e]">
            <Bed className="h-3.5 w-3.5 text-brand-teal" strokeWidth={2} />
            <span className="font-bold text-brand-emerald">{listing.beds}</span> Rooms
          </span>
          <span className="flex items-center gap-1 font-ewangi text-[13px] text-[#1e1e1e]">
            <Bath className="h-3.5 w-3.5 text-brand-teal" strokeWidth={2} />
            <span className="font-bold text-brand-emerald">{listing.baths}</span> Baths
          </span>
        </div>

        {/* Actions — Figma: 119x25px, r=2, "See details" outline + "Talk to an expert" filled */}
        <div className="mt-4 flex items-center gap-3">
          <Link
            href="/properties"
            className="flex-1 rounded-xs border border-brand-teal py-1.5 text-center font-ewangi text-[13px] text-brand-pine transition hover:bg-brand-teal/10"
          >
            See details
          </Link>
          <Link
            href="/contact"
            className="flex-1 rounded-xs bg-brand-teal py-1.5 text-center font-ewangi text-[13px] font-bold text-white transition hover:bg-brand-teal-dark"
          >
            Talk to an expert
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function SavedPage() {
  const [saved, setSaved] = useState<SavedListing[]>(initialSaved);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sort, setSort] = useState<SortOption>("Newest first");
  const [query, setQuery] = useState("Tijuana, Rosarito, Puerto Nuevo");

  const unsave = (id: number) => setSaved((prev) => prev.filter((l) => l.id !== id));
  const visible = sortListings(saved, sort);

  return (
    <main className="flex-1 bg-[#eaedf0]">
      {/* Header — Figma: "Saved" 64px Ewangi Bold #024139, search bar + Filter right */}
      <div className="px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-30">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="font-ewangi text-[clamp(2.5rem,5vw,4rem)] leading-none text-brand-pine animate-[fade-left_0.8s_ease-out_both]">
            Saved
          </h1>

          <div className="flex flex-1 flex-wrap items-center gap-4 lg:justify-end">
            {/* Search input — Figma: white bg, #999 border, r=14 */}
            <div className="flex w-full items-center gap-3 rounded-[14px] border-2 border-black/20 bg-white px-5 py-3.5 sm:w-auto sm:min-w-95 lg:min-w-107.5">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by zone..."
                className="min-w-0 flex-1 bg-transparent font-ewangi text-[1rem] text-brand-ink outline-none placeholder:text-brand-ink/40"
              />
              <Search className="h-5 w-5 shrink-0 text-brand-teal" strokeWidth={2} />
            </div>

            {/* Filter button */}
            <button
              type="button"
              onClick={() => setFiltersOpen((o) => !o)}
              aria-expanded={filtersOpen}
              className="flex items-center gap-2 font-ewangi text-[1.1rem] text-brand-ink transition hover:text-brand-teal"
            >
              <span>Filter</span>
              {filtersOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <SlidersHorizontal className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {filtersOpen && (
          <div className="mt-6 rounded-[22px] border border-black/10 bg-white p-6">
            <p className="font-ewangi text-[1rem] text-brand-ink/50">Filters coming soon.</p>
          </div>
        )}

        {/* Verify banner — Figma: Rectangle 137, #03a593 r=20, 4-column checklist */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="mt-8 rounded-[20px] bg-[#03a593] px-6 py-6 sm:px-10 sm:py-7">
            <VerifyFeatures />
          </div>
        </RevealOnScroll>

        {/* Sort dropdown — Figma: Rectangle 138, right-aligned above the grid */}
        {visible.length > 0 && (
          <div className="mt-8 flex justify-end">
            <SortDropdown value={sort} onChange={setSort} />
          </div>
        )}
      </div>

      {/* Card grid — Figma: 3col x 2row, 352px cards */}
      <div className="px-5 pb-16 sm:px-8 sm:pb-24 md:px-12 lg:px-30">
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14 perspective-[1400px]">
            {visible.map((listing, i) => (
              <RevealOnScroll key={listing.id} delay={Math.min(i, 5) * 80}>
                <TiltCard intensity={4}>
                  <SavedCard listing={listing} onUnsave={() => unsave(listing.id)} />
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 py-16 text-center sm:py-24 lg:py-32">
            <Heart className="h-16 w-16 text-brand-ink/15" strokeWidth={1} />
            <h2 className="font-ewangi text-[2rem] text-brand-ink/50">No saved properties</h2>
            <p className="font-ewangi text-[1.1rem] text-brand-ink/40">
              Browse the map and heart the properties you love.
            </p>
            <a
              href="/explore-map"
              className="mt-2 inline-flex rounded-full border-2 border-brand-ink/20 px-8 py-3 font-ewangi text-brand-ink/60 transition hover:border-brand-teal hover:text-brand-teal"
            >
              Explore Map
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
