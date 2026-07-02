"use client";
// Interactive map page — light theme per Figma: map + filter overlay (left), listing cards (right), teal CTA band.
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ExploreListingCard } from "@/components/explore-map/ExploreListingCard";
import { MapPanel } from "@/components/explore-map/MapPanel";
import { MapFiltersCard } from "@/components/explore-map/MapFiltersCard";
import { ExploreFilters } from "@/components/explore-map/ExploreFilters";
import { RevealOnScroll } from "@/components/ui";
import { VerifyFeatures } from "@/components/shared/VerifyFeatures";
import { listings, pins, CONSTRUCTION_STATUSES, type ConstructionStatus, type Currency } from "./data";
import { formatShortPrice } from "./utils";
import { cn } from "@/lib/utils";

type MobileView = "map" | "list";

const QUICK_FILTERS = ["Oceanfront", "Lots", "Homes", "Under $100k"] as const;

export default function ExploreMapPage() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [stateFilter, setStateFilter] = useState("All");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [sortBy, setSortBy] = useState("rec");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [statusFilters, setStatusFilters] = useState<Set<ConstructionStatus>>(new Set(CONSTRUCTION_STATUSES));
  const [financingOnly, setFinancingOnly] = useState(false);
  const [quickFilters, setQuickFilters] = useState<Set<string>>(new Set());

  // Pre-fill search from the ?search= query param — used by the homepage sitelinks search action.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("search");
    if (q) setSearchVal(q);
  }, []);
  const [mobileView, setMobileView] = useState<MobileView>("list");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleStatus = (status: ConstructionStatus) => {
    setStatusFilters((prev) => {
      const next = new Set(prev);
      if (next.has(status)) next.delete(status);
      else next.add(status);
      return next;
    });
  };

  const toggleQuickFilter = (tag: string) => {
    setQuickFilters((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(
    () =>
      listings
        .filter((listing) => {
          if (stateFilter !== "All" && listing.state !== stateFilter) return false;
          if (typeFilter !== "All" && listing.type !== typeFilter) return false;
          if (verifiedOnly && listing.status !== "verified") return false;
          if (!statusFilters.has(listing.constructionStatus)) return false;
          if (financingOnly && !listing.financingAvailable) return false;
          if (quickFilters.has("Under $100k") && listing.priceUSD >= 100_000) return false;
          const tagFilters = [...quickFilters].filter((f) => f !== "Under $100k");
          if (tagFilters.length > 0 && !tagFilters.some((tag) => (listing.tags as readonly string[]).includes(tag))) {
            return false;
          }
          if (
            searchVal &&
            !listing.title.toLowerCase().includes(searchVal.toLowerCase()) &&
            !listing.zone.toLowerCase().includes(searchVal.toLowerCase())
          ) {
            return false;
          }
          return true;
        })
        .sort((a, b) => {
          if (sortBy === "price-asc") return a.priceUSD - b.priceUSD;
          if (sortBy === "price-desc") return b.priceUSD - a.priceUSD;
          return 0;
        }),
    [stateFilter, typeFilter, verifiedOnly, statusFilters, financingOnly, quickFilters, searchVal, sortBy]
  );

  const mapPins = useMemo(
    () => pins.filter((p) => filtered.some((l) => l.id === p.id)).map((p) => ({ ...p, listing: filtered.find((l) => l.id === p.id)! })),
    [filtered]
  );

  const handleCardClick = (id: number) => {
    setActivePin((prev) => (prev === id ? null : id));
    setMobileView("list");
  };

  return (
    <main className="flex-1 bg-white">
      {/* Header — Figma: light #eaedf0 band, "Explore Map" + subtitle, search bar, Filter, quick pills */}
      <div className="bg-[#eaedf0] px-5 py-8 shadow-[0_2px_18px_rgba(0,0,0,0.08)] sm:px-8 md:px-12 lg:px-16 lg:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs space-y-2 sm:max-w-sm">
            <h1 className="font-ewangi text-[clamp(2rem,4vw,3rem)] leading-none text-brand-pine animate-[fade-left_0.8s_ease-out_both]">
              Explore Map
            </h1>
            <p className="font-ewangi text-[1.15rem] font-semibold leading-snug text-brand-ink">
              Explore verified developments in Mexico
            </p>
            <p className="font-ewangi text-[0.95rem] font-light text-brand-ink/60">
              Move the map to discover properties in your ideal location.
            </p>
          </div>

          <div className="flex flex-1 flex-col items-stretch gap-4 lg:items-end">
            <div className="flex w-full flex-wrap items-center gap-4 lg:justify-end">
              <div className="flex w-full items-center gap-3 rounded-[14px] border-2 border-black/20 bg-white px-5 py-3.5 sm:w-auto sm:min-w-95">
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Where would you like to go?"
                  className="min-w-0 flex-1 bg-transparent font-ewangi text-[1rem] text-brand-ink outline-none placeholder:text-brand-ink/40"
                />
                <Search className="h-5 w-5 shrink-0 text-brand-teal" strokeWidth={2} />
              </div>

              <button
                type="button"
                onClick={() => setFiltersOpen((o) => !o)}
                aria-expanded={filtersOpen}
                className="flex items-center gap-2 font-ewangi text-[1.3rem] text-brand-pine transition hover:text-brand-teal"
              >
                <span>Filter</span>
                {filtersOpen ? (
                  <X className="h-6 w-6" strokeWidth={1.5} />
                ) : (
                  <SlidersHorizontal className="h-6 w-6" strokeWidth={1.5} />
                )}
              </button>
            </div>

            {/* Quick filter pills — Figma: teal r=6 pills */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {QUICK_FILTERS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleQuickFilter(tag)}
                  className={cn(
                    "rounded-[6px] px-5 py-2.5 font-ewangi text-[1rem] font-medium transition",
                    quickFilters.has(tag)
                      ? "bg-brand-pine text-white"
                      : "bg-brand-teal text-brand-ink hover:bg-brand-teal-dark"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtersOpen && (
          <div className="mt-6">
            <ExploreFilters
              searchVal={searchVal}
              onSearchChange={setSearchVal}
              typeFilter={typeFilter}
              onTypeChange={setTypeFilter}
              stateFilter={stateFilter}
              onStateChange={(v) => {
                setStateFilter(v);
                setActivePin(null);
              }}
              currency={currency}
              onCurrencyChange={(v) => setCurrency(v as Currency)}
              verifiedOnly={verifiedOnly}
              onVerifiedChange={setVerifiedOnly}
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultCount={filtered.length}
            />
          </div>
        )}
      </div>

      {/* Sticky toggle + map/listings share this wrapper so the sticky bar un-sticks before the CTA */}
      <div className="relative">
        {/* Mobile map/list toggle */}
        <div className="sticky top-14.25 z-30 border-b border-brand-ink/10 bg-white/95 backdrop-blur-sm lg:hidden">
          <div className="flex gap-2 px-5 py-3 sm:px-8">
            {(["map", "list"] as const).map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setMobileView(view)}
                className={cn(
                  "flex-1 rounded-full px-4 py-2.5 font-ewangi text-sm uppercase tracking-widest transition",
                  mobileView === view
                    ? "bg-brand-teal text-brand-ink"
                    : "border border-brand-ink/15 text-brand-ink/50 hover:text-brand-pine"
                )}
              >
                {view === "map" ? "Map" : `List (${filtered.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Map + listings — Figma: map ~49% left, listing cards ~43% right */}
        <div className="px-5 py-8 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {/* Map */}
          <div
            className={cn(
              "relative h-[70vh] w-full overflow-hidden rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] lg:h-auto lg:w-[46%]",
              mobileView === "list" ? "hidden lg:block" : "block"
            )}
          >
            <MapPanel selectedState={stateFilter} filteredCount={filtered.length} className="absolute inset-0" />

            <MapFiltersCard
              activeStatuses={statusFilters}
              onToggleStatus={toggleStatus}
              financingOnly={financingOnly}
              onToggleFinancing={setFinancingOnly}
              onSearchArea={() => {}}
            />

            {/* Legend */}
            <div className="pointer-events-none absolute bottom-3 left-3 z-10 flex max-w-45 items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0_1px_6px_rgba(0,0,0,0.22)] sm:left-4 sm:bottom-4">
              <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-brand-emerald" />
              <span className="font-ewangi text-[9px] leading-tight text-brand-emerald">
                Clusters show number of available properties
              </span>
            </div>

            {/* Decorative price pins — approximate positions from the static pin map */}
            {mapPins.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleCardClick(p.id)}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
              >
                <span
                  className={cn(
                    "flex h-8.5 w-8.5 items-center justify-center rounded-full border-2 border-white font-ewangi text-[13px] font-bold text-white shadow-md transition",
                    activePin === p.id ? "bg-brand-pine" : "bg-brand-emerald"
                  )}
                >
                  1
                </span>
                <span className="whitespace-nowrap rounded-[7px] border border-white bg-brand-emerald px-2.5 py-1 font-ewangi text-[11px] font-bold text-white shadow-md">
                  {formatShortPrice(p.listing.priceUSD)}
                </span>
              </button>
            ))}
          </div>

          {/* Listing cards */}
          <div
            className={cn(
              "flex-1 space-y-4 lg:max-h-[845px] lg:overflow-y-auto lg:pr-1",
              mobileView === "map" ? "hidden lg:block" : "block"
            )}
          >
            {filtered.length > 0 ? (
              filtered.map((listing) => (
                <ExploreListingCard
                  key={listing.id}
                  listing={listing}
                  active={activePin === listing.id}
                  currency={currency}
                  onClick={() => handleCardClick(listing.id)}
                />
              ))
            ) : (
              <div className="rounded-[22px] border border-brand-ink/10 bg-[#eaedf0]/50 px-6 py-16 text-center">
                <p className="font-ewangi text-[2rem] text-brand-pine/60">No results</p>
                <button
                  type="button"
                  className="mt-4 rounded-full border border-brand-pine/30 px-6 py-2 font-ewangi text-sm text-brand-pine/70 transition hover:bg-brand-pine/10"
                  onClick={() => {
                    setSearchVal("");
                    setTypeFilter("All");
                    setStateFilter("All");
                    setVerifiedOnly(false);
                    setSortBy("rec");
                    setStatusFilters(new Set(CONSTRUCTION_STATUSES));
                    setFinancingOnly(false);
                    setQuickFilters(new Set());
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

      {/* CTA — Figma: full-width teal band, verify checklist, headline, house illustration */}
      <div className="bg-[#03a593] px-6 py-12 sm:px-10 sm:py-16 lg:rounded-t-[20px] lg:px-16">
        <RevealOnScroll direction="up">
          <VerifyFeatures className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" />
        </RevealOnScroll>

        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <RevealOnScroll direction="left" className="max-w-lg space-y-5">
            <h2 className="font-ewangi text-[clamp(1.75rem,4vw,3rem)] leading-tight text-[#eaedf0]">
              <span className="font-light italic">Didn&apos;t find your</span> dream&apos;s property?
            </h2>
            <p className="font-ewangi text-[clamp(1.25rem,2.5vw,2.25rem)] font-bold text-[#eaedf0]">
              Speak with us!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-ewangi text-[1.05rem] font-bold text-brand-ink transition hover:bg-white/90"
            >
              Talk to an advisor
            </Link>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} className="relative h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <Image
              src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/Modern_House_White.H03.2k_sjznmv.png"
              alt="Modern house illustration"
              fill
              sizes="(max-width: 1024px) 288px, 320px"
              className="object-contain"
            />
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}
