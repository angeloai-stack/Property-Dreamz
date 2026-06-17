"use client";

import Image from "next/image";
import { useState } from "react";
import { Bed, Bath, Heart, MapPin, SlidersHorizontal, X } from "lucide-react";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";

type SavedListing = {
  id: number;
  title: string;
  zone: string;
  sqm: number;
  priceUSD: number;
  beds: number;
  baths: number;
  image: string;
};

const initialSaved: SavedListing[] = [
  {
    id: 1,
    title: "Loft in Los Cabos",
    zone: "Cabo San Lucas, BCS",
    sqm: 120,
    priceUSD: 653894,
    beds: 2,
    baths: 2,
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
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
  },
];

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

type SavedCardProps = {
  listing: SavedListing;
  onUnsave: () => void;
};

function SavedCard({ listing, onUnsave }: SavedCardProps) {
  return (
    <div className="relative">
      {/* Stat badges — Figma: 34x21px teal r=3, stacked on left of image */}
      <div className="absolute left-3 top-24 z-20 flex flex-col gap-1.5">
        <div className="flex items-center gap-1 rounded-[3px] bg-[#39d3c0] px-2 py-1 shadow-sm">
          <Bed className="h-3 w-3 text-white" strokeWidth={2} />
          <span className="font-ewangi text-[11px] font-semibold text-white">{listing.beds}</span>
        </div>
        <div className="flex items-center gap-1 rounded-[3px] bg-[#39d3c0] px-2 py-1 shadow-sm">
          <Bath className="h-3 w-3 text-white" strokeWidth={2} />
          <span className="font-ewangi text-[11px] font-semibold text-white">{listing.baths}</span>
        </div>
      </div>

      {/* Card — Figma: 319x337px r=43 white */}
      <article className="rounded-[43px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
        {/* Image — Figma: 295x259px inset 13px, r=37 */}
        <div className="relative mx-3 mt-3 overflow-hidden rounded-[37px]" style={{ height: 259 }}>
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            sizes="(max-width: 1024px) 50vw, 320px"
            className="object-cover transition duration-500 hover:scale-105"
          />

          {/* Heart unsave button — Figma: 24x24 teal #39D3C0 top-right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUnsave();
            }}
            aria-label="Remove from saved"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition hover:bg-white/50"
          >
            <Heart className="h-5 w-5 fill-[#39d3c0] text-[#39d3c0]" strokeWidth={0} />
          </button>

          {/* Price badge — Figma: #028E7F r=9 bottom-left */}
          <div className="absolute bottom-3 left-3 rounded-[9px] bg-[#028e7f] px-3 py-2 shadow-md">
            <span className="font-ewangi text-[17px] leading-none text-white">
              {formatUSD(listing.priceUSD)}
            </span>
          </div>
        </div>

        {/* Info below image — Figma: Ewangi 20px black */}
        <div className="px-5 pb-5 pt-3">
          <p className="font-ewangi text-[20px] leading-snug text-black">{listing.title}</p>
          <p className="mt-0.5 flex items-center gap-1 font-ewangi text-[13px] text-black/45">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{listing.zone}</span>
          </p>
          <p className="mt-0.5 font-ewangi text-[13px] text-black/40">{listing.sqm} m2</p>
        </div>
      </article>
    </div>
  );
}

export default function SavedPage() {
  const [saved, setSaved] = useState<SavedListing[]>(initialSaved);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const unsave = (id: number) => setSaved((prev) => prev.filter((l) => l.id !== id));

  return (
    <main className="flex-1 bg-[#028e7f]">
      {/* Header — Figma: "Saved" 64px Ewangi #EAEDF0, frosted location pill center, Filter right */}
      <div className="px-8 py-14 md:px-12 lg:px-30">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-ewangi text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#eaedf0]">
            Saved
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            {/* Location pill — Figma: 499x94px r=29 D9D9D9@21% backdrop-blur */}
            <div className="flex items-center gap-3 rounded-[29px] bg-[rgba(217,217,217,0.21)] px-6 py-4 backdrop-blur-sm">
              <MapPin className="h-5 w-5 shrink-0 text-white/60" strokeWidth={1.5} />
              <span className="font-ewangi text-[1.2rem] text-white">
                Tijuana, Rosarito, Pto. Nuevo
              </span>
            </div>

            {/* Filter button */}
            <button
              type="button"
              onClick={() => setFiltersOpen((o) => !o)}
              aria-expanded={filtersOpen}
              className="flex items-center gap-2.5 rounded-[29px] border border-white/25 px-6 py-4 font-ewangi text-[1.2rem] text-white transition hover:bg-white/10"
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
          <div className="mt-6 rounded-[22px] border border-white/15 bg-white/8 p-6 backdrop-blur-sm">
            <p className="font-ewangi text-[1rem] text-white/50">Filters coming soon.</p>
          </div>
        )}
      </div>

      {/* Card grid — Figma: 3col x 2row, 319px cards, ~116px gap, 120px side padding */}
      <div className="px-8 pb-24 md:px-12 lg:px-30">
        {saved.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[clamp(2rem,8vw,7.25rem)]">
            {saved.map((listing) => (
              <SavedCard
                key={listing.id}
                listing={listing}
                onUnsave={() => unsave(listing.id)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 py-32 text-center">
            <Heart className="h-16 w-16 text-white/20" strokeWidth={1} />
            <h2 className="font-ewangi text-[2rem] text-[#eaedf0]/60">No saved properties</h2>
            <p className="font-ewangi text-[1.1rem] text-white/40">
              Browse the map and heart the properties you love.
            </p>
            <a
              href="/explore-map"
              className="mt-2 inline-flex rounded-full border-2 border-white/40 px-8 py-3 font-ewangi text-white transition hover:bg-white/10"
            >
              Explore Map
            </a>
          </div>
        )}
      </div>

      <CertifiedBanner />
    </main>
  );
}
