// Client component required because the map and filters rely on interactive state.
"use client";

import { useMemo, useState } from "react";
import { ListingCard } from "@/components/explore-map/ListingCard";
import { MapPanel } from "@/components/explore-map/MapPanel";
import { ExploreFilters } from "@/components/explore-map/ExploreFilters";
import { Badge, Button, Container, Heading, Section } from "@/components/ui";
import { listings, pins, type Currency } from "./data";
import { cn } from "@/lib/utils";

type MobileView = "map" | "list";

export default function ExploreMapPage() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [sortBy, setSortBy] = useState("rec");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [mobileView, setMobileView] = useState<MobileView>("list");

  const filtered = useMemo(
    () =>
      listings
        .filter((listing) => {
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
    [typeFilter, verifiedOnly, searchVal, sortBy]
  );

  const handlePin = (id: number) => {
    // Tapping the same pin again deselects it; switching to list so the card is visible on mobile.
    setActivePin((prev) => (prev === id ? null : id));
    setMobileView("list");
  };

  return (
    <main className="flex-1 bg-brand-paper text-brand-ink">
      <Section className="pt-8 pb-4 md:pt-12">
        <Container className="space-y-6">
          <div className="space-y-3">
            <Badge variant="gold">Explore</Badge>
            <Heading level={1}>
              Projects in Mexico
            </Heading>
            <p className="max-w-2xl font-body text-body text-brand-muted">
              Browse verified developments on the map or in the list. Filter by type, price, and
              location to find your next investment.
            </p>
          </div>

          <ExploreFilters
            searchVal={searchVal}
            onSearchChange={setSearchVal}
            typeFilter={typeFilter}
            onTypeChange={setTypeFilter}
            currency={currency}
            onCurrencyChange={(value) => setCurrency(value as Currency)}
            verifiedOnly={verifiedOnly}
            onVerifiedChange={setVerifiedOnly}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultCount={filtered.length}
          />
        </Container>
      </Section>

      <div className="sticky top-0 z-30 border-b border-brand-ink/10 bg-brand-paper/95 backdrop-blur-sm lg:hidden">
        <Container className="flex gap-2 py-3">
          {(["map", "list"] as const).map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setMobileView(view)}
              className={cn(
                "flex-1 rounded-(--radius-btn) px-4 py-2.5 text-sm font-semibold uppercase tracking-widest transition",
                mobileView === view
                  ? "bg-brand-emerald text-brand-paper"
                  : "border border-brand-ink/10 bg-white text-brand-muted hover:text-brand-ink"
              )}
            >
              {view === "map" ? "Map" : `List (${filtered.length})`}
            </button>
          ))}
        </Container>
      </div>

      <div className="lg:flex lg:min-h-[calc(100vh-14rem)]">
        <div
          className={cn(
            "border-b border-brand-ink/10 lg:w-[44%] lg:shrink-0 lg:border-b-0 lg:border-r",
            mobileView === "list" ? "hidden lg:block" : "block",
            "lg:sticky lg:top-0 lg:h-[calc(100vh-14rem)]"
          )}
        >
          <MapPanel
            pins={pins}
            listings={listings}
            activePin={activePin}
            onPinClick={handlePin}
            filtered={filtered}
            currency={currency}
            className="h-[42vh] sm:h-[48vh] lg:h-full"
          />
        </div>

        <div
          className={cn(
            "flex-1",
            mobileView === "map" ? "hidden lg:block" : "block"
          )}
        >
          <Container className="space-y-6 py-6 lg:max-w-none lg:px-6 xl:px-8">
            <div className="flex flex-col gap-2 border-b border-brand-ink/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <Heading level={2} className="text-2xl sm:text-3xl">
                Available projects
              </Heading>
              <p className="text-xs uppercase tracking-[0.14em] text-brand-muted">
                Prices in {currency} · Verified by Property Dreamz
              </p>
            </div>

            {filtered.length > 0 ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                  {filtered.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      active={activePin === listing.id}
                      currency={currency}
                      onClick={() => handlePin(listing.id)}
                    />
                  ))}
                </div>

                <div className="flex justify-center pb-8 pt-4">
                  <Button variant="outline">View more projects</Button>
                </div>
              </>
            ) : (
              <div className="rounded-4xl border border-brand-ink/10 bg-white px-6 py-16 text-center">
                <p className="text-4xl" aria-hidden="true">
                  🏖️
                </p>
                <Heading level={3} className="mt-4 text-xl">
                  No results found
                </Heading>
                <p className="mt-2 text-sm text-brand-muted">
                  Adjust your filters or search term to discover more projects.
                </p>
                <Button
                  variant="ghost"
                  className="mt-6"
                  onClick={() => {
                    setSearchVal("");
                    setTypeFilter("All");
                    setVerifiedOnly(false);
                    setSortBy("rec");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </Container>
        </div>
      </div>
    </main>
  );
}
