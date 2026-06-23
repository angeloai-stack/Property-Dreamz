"use client";

import { Search } from "lucide-react";
import { MEXICAN_STATES } from "@/app/explore-map/data";
import { cn } from "@/lib/utils";

const types = ["All", "House", "Condo", "Land"] as const;
const currencies = ["USD", "MXN"] as const;

type ExploreFiltersProps = {
  searchVal: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  stateFilter: string;
  onStateChange: (value: string) => void;
  currency: string;
  onCurrencyChange: (value: string) => void;
  verifiedOnly: boolean;
  onVerifiedChange: (value: boolean) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  resultCount: number;
};

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-(--radius-btn) px-4 py-2 font-ewangi text-sm uppercase tracking-wide transition",
        active
          ? "bg-brand-teal text-[#1e1e1e]"
          : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

export function ExploreFilters({
  searchVal,
  onSearchChange,
  typeFilter,
  onTypeChange,
  stateFilter,
  onStateChange,
  currency,
  onCurrencyChange,
  verifiedOnly,
  onVerifiedChange,
  sortBy,
  onSortChange,
  resultCount,
}: ExploreFiltersProps) {
  return (
    <div className="space-y-4 rounded-[22px] border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
      {/* Search + result count */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
            strokeWidth={1.5}
          />
          <input
            type="search"
            placeholder="City, area, or development..."
            value={searchVal}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
            className="w-full rounded-(--radius-input) border border-white/20 bg-white/8 py-2.5 pl-10 pr-4 font-ewangi text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-teal/60 focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>
        <span className="shrink-0 rounded-(--radius-btn) bg-brand-teal/20 px-3 py-1.5 font-ewangi text-sm text-brand-teal">
          {resultCount} projects
        </span>
      </div>

      {/* State filter — updates the map view */}
      <div>
        <p className="mb-2 font-ewangi text-[10px] uppercase tracking-[0.12em] text-white/35">
          State
        </p>
        <div className="flex flex-wrap gap-2">
          {MEXICAN_STATES.map((state) => (
            <Pill key={state} active={stateFilter === state} onClick={() => onStateChange(state)}>
              {state === "All" ? "All states" : state}
            </Pill>
          ))}
        </div>
      </div>

      {/* Property type + currency pills */}
      <div>
        <p className="mb-2 font-ewangi text-[10px] uppercase tracking-[0.12em] text-white/35">
          Type &amp; Currency
        </p>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <Pill key={type} active={typeFilter === type} onClick={() => onTypeChange(type)}>
              {type}
            </Pill>
          ))}

          <div className="mx-2 hidden w-px self-stretch bg-white/15 sm:block" aria-hidden="true" />

          {currencies.map((c) => (
            <Pill key={c} active={currency === c} onClick={() => onCurrencyChange(c)}>
              {c}
            </Pill>
          ))}
        </div>
      </div>

      {/* Verified + sort */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <label className="flex cursor-pointer items-center gap-2 font-ewangi text-sm text-white/60">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => onVerifiedChange(e.target.checked)}
            className="h-4 w-4 cursor-pointer rounded border-white/30 accent-brand-teal"
          />
          <span>Verified only</span>
        </label>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort projects"
          className="w-full rounded-(--radius-input) border border-white/20 bg-white/8 px-3 py-2 font-ewangi text-sm text-white outline-none transition focus:border-brand-teal/60 sm:w-auto"
        >
          <option value="rec">Relevance</option>
          <option value="price-asc">Price: low → high</option>
          <option value="price-desc">Price: high → low</option>
        </select>
      </div>
    </div>
  );
}
