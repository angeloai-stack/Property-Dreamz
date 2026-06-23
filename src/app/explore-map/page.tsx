"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { MapPin, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ListingCard } from "@/components/explore-map/ListingCard";
import { MapPanel } from "@/components/explore-map/MapPanel";
import { ExploreFilters } from "@/components/explore-map/ExploreFilters";
import { listings, type Currency } from "./data";
import { cn } from "@/lib/utils";

type MobileView = "map" | "list";

export default function ExploreMapPage() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [stateFilter, setStateFilter] = useState("All");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [sortBy, setSortBy] = useState("rec");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("search");
    if (q) setSearchVal(q);
  }, []);
  const [mobileView, setMobileView] = useState<MobileView>("list");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(
    () =>
      listings
        .filter((listing) => {
          if (stateFilter !== "All" && listing.state !== stateFilter) return false;
          if (typeFilter !== "All" && listing.type !== typeFilter) return false;
          if (verifiedOnly && listing.status !== "verified") return false;
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
    [stateFilter, typeFilter, verifiedOnly, searchVal, sortBy]
  );

  const handleCardClick = (id: number) => {
    setActivePin((prev) => (prev === id ? null : id));
    setMobileView("list");
  };

  return (
    <main className="relative flex-1 bg-[#1e1e1e] text-white">
      {/* Ambient gradient orbs — slow-drifting to make the dark bg feel alive */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-brand-teal/[0.06] blur-[130px] [animation:ambient-drift_20s_ease-in-out_infinite]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-64 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-pine/[0.14] blur-[110px] [animation:ambient-drift_26s_ease-in-out_infinite_5s]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-brand-teal/[0.04] blur-[100px] [animation:ambient-drift_18s_ease-in-out_infinite_10s]" />
      {/* Header — Figma: "Explore Map" Ewangi 48px #eaedf0, location pill, Filter button */}
      <div className="px-5 py-6 sm:px-8 sm:py-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-ewangi text-[clamp(2.25rem,4vw,3rem)] leading-tight text-[#eaedf0] animate-[fade-left_0.8s_ease-out_both]">
            Explore Map
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            {/* Location pill — Figma: Mask group r=29, glass bg */}
            <div className="flex items-center gap-2 rounded-[29px] bg-[rgba(217,217,217,0.18)] px-5 py-3 backdrop-blur-sm">
              <MapPin className="h-4 w-4 shrink-0 text-white/60" strokeWidth={1.5} />
              <span className="font-ewangi text-[1.05rem] text-white">
                {stateFilter === "All" ? "Tijuana, Rosarito, Pto. Nuevo" : stateFilter}
              </span>
            </div>

            {/* Filter toggle — Figma: "Filter" text + icon */}
            <button
              type="button"
              onClick={() => setFiltersOpen((o) => !o)}
              aria-expanded={filtersOpen}
              className="flex items-center gap-2.5 rounded-[29px] border border-white/25 px-5 py-3 font-ewangi text-[1.05rem] text-white transition hover:bg-white/10"
            >
              <span>Filter</span>
              {filtersOpen
                ? <X className="h-4 w-4" strokeWidth={1.5} />
                : <SlidersHorizontal className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {filtersOpen && (
          <div className="mt-5">
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

      {/* Mobile map/list toggle */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-[#1e1e1e]/95 backdrop-blur-sm lg:hidden">
        <div className="flex gap-2 px-5 py-3 sm:px-8">
          {(["map", "list"] as const).map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setMobileView(view)}
              className={cn(
                "flex-1 rounded-full px-4 py-2.5 font-ewangi text-sm uppercase tracking-widest transition",
                mobileView === view
                  ? "bg-brand-teal text-[#1e1e1e]"
                  : "border border-white/15 text-white/50 hover:text-white"
              )}
            >
              {view === "map" ? "Map" : `List (${filtered.length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Map + listings — Figma: map ~43% left, teal cards panel ~57% right, equal height */}
      <div className="mx-4 mb-6 overflow-hidden rounded-[20px] border border-white/10 sm:mx-6 sm:mb-8 sm:rounded-[28px] lg:mx-14 lg:flex">
        {/* Map — Google Maps iframe zoomed to Baja California, updates on state filter.
            On lg the wrapper stretches to the cards' height; MapPanel is positioned
            absolutely inside it so it fills that height without percentage-height quirks. */}
        <div
          className={cn(
            "relative h-[40vh] lg:h-auto lg:w-[42%] lg:shrink-0 lg:self-stretch lg:border-r lg:border-white/10",
            mobileView === "list" ? "hidden lg:block" : "block"
          )}
        >
          <MapPanel
            selectedState={stateFilter}
            filteredCount={filtered.length}
            className="lg:absolute lg:inset-0"
          />
        </div>

        {/* Cards — Figma: right 58%, teal (#3AD3C1) panel with 2×2 square cards */}
        <div
          className={cn(
            "flex-1 bg-brand-teal",
            mobileView === "map" ? "hidden lg:block" : "block"
          )}
        >
          <div className="space-y-3 p-5 lg:p-6">
            {/* Section header */}
            <div className="flex items-center justify-between pb-2">
              <p className="font-ewangi text-[1.35rem] text-brand-pine">
                Available projects
              </p>
              <p className="font-ewangi text-sm uppercase tracking-[0.12em] text-brand-pine/70">
                {filtered.length} · {currency}
              </p>
            </div>

            {filtered.length > 0 ? (
              <>
                {/* 2×2 grid — stagger each card in on filter change */}
                <motion.div
                  key={filtered.slice(0, 4).map((l) => l.id).join(",")}
                  className="grid gap-4 sm:grid-cols-2"
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                >
                  {filtered.slice(0, 4).map((listing) => (
                    <motion.div
                      key={listing.id}
                      variants={{
                        hidden: { opacity: 0, y: 14, scale: 0.96 },
                        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                      }}
                    >
                      <ListingCard
                        listing={listing}
                        active={activePin === listing.id}
                        currency={currency}
                        onClick={() => handleCardClick(listing.id)}
                        compact
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex justify-center pt-1">
                  <button
                    type="button"
                    className="rounded-full border-2 border-brand-pine/40 px-8 py-2 font-ewangi text-brand-pine transition hover:bg-brand-pine/10"
                  >
                    View more projects
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-[34px] border border-brand-pine/20 bg-white/30 px-6 py-16 text-center">
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
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA section — Figma: "Didn't find your dream's propertie?" Ewangi 48px #eaedf0
          "Speak with us!" 36px, teal button #3AD3C1, house illustration on right */}
      <div className="mx-4 mb-10 overflow-hidden rounded-[20px] border border-white/10 sm:mx-6 sm:mb-12 sm:rounded-[28px] lg:mx-14">
        <div className="flex flex-col gap-8 px-6 py-10 sm:gap-10 sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-16">
          {/* Left: copy + button */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="font-ewangi text-[clamp(2rem,4.5vw,3rem)] leading-tight text-[#eaedf0]">
                Didn&apos;t find your<br />dream&apos;s property?
              </h2>
              <p className="font-ewangi text-[clamp(1.25rem,2.5vw,2.25rem)] text-[#eaedf0]/70">
                Speak with us!
              </p>
            </div>

            {/* Figma: teal #3AD3C1 button, 309×83px, dark text */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-teal px-10 py-5 font-ewangi text-[1.1rem] text-brand-ink transition hover:bg-brand-teal-dark"
            >
              Talk to an expert
            </Link>
          </div>

          {/* Right: house illustration — Figma: image 3, 512×512 */}
          <div className="shrink-0">
            <div className="relative h-56 w-56 overflow-hidden rounded-[43px] bg-white/5 lg:h-72 lg:w-72">
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80"
                alt="Dream property"
                fill
                sizes="(max-width: 1024px) 224px, 288px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
