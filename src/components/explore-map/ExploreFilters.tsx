"use client";

import { Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const types = ["All", "House", "Condo", "Land"] as const;
const currencies = ["USD", "MXN"] as const;

type ExploreFiltersProps = {
  searchVal: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  currency: string;
  onCurrencyChange: (value: string) => void;
  verifiedOnly: boolean;
  onVerifiedChange: (value: boolean) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  resultCount: number;
};

function FilterPill({
  active,
  children,
  onClick,
  activeVariant = "default",
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  activeVariant?: "default" | "gold";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-[var(--radius-btn)] px-4 py-2 font-ewangi text-label font-semibold uppercase transition",
        active
          ? activeVariant === "gold"
            ? "bg-brand-gold text-brand-ink shadow-subtle"
            : "bg-brand-paper text-brand-pine shadow-subtle"
          : "bg-transparent text-brand-paper/80 hover:bg-brand-pine/40 hover:text-brand-paper"
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
  currency,
  onCurrencyChange,
  verifiedOnly,
  onVerifiedChange,
  sortBy,
  onSortChange,
  resultCount,
}: ExploreFiltersProps) {
  return (
    <div className="space-y-4 rounded-[var(--radius-card)] border border-brand-ink/10 bg-brand-emerald p-4 sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <Icon
            as={Search}
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"
          />
          <Input
            type="search"
            placeholder="City, area, or development..."
            value={searchVal}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
            className="border-brand-ink/10 bg-brand-paper pl-10"
          />
        </div>
        <Badge variant="gold" className="w-fit shrink-0 self-start sm:self-center">
          {resultCount} projects
        </Badge>
      </div>

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-thin">
        <div className="flex shrink-0 gap-1 rounded-[var(--radius-btn)] border border-brand-paper/20 bg-brand-pine/60 p-1">
          {types.map((type) => (
            <FilterPill
              key={type}
              active={typeFilter === type}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </FilterPill>
          ))}
        </div>

        <div className="flex shrink-0 gap-1 rounded-[var(--radius-btn)] border border-brand-paper/20 bg-brand-pine/60 p-1">
          {currencies.map((c) => (
            <FilterPill
              key={c}
              active={currency === c}
              activeVariant="gold"
              onClick={() => onCurrencyChange(c)}
            >
              {c}
            </FilterPill>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-paper">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => onVerifiedChange(e.target.checked)}
            className="h-4 w-4 cursor-pointer rounded border-brand-paper/40 accent-brand-gold"
          />
          <span>Verified only</span>
        </label>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort projects"
          className="w-full rounded-[var(--radius-input)] border border-brand-paper/20 bg-brand-pine px-3 py-2 text-sm text-brand-paper outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 sm:w-auto"
        >
          <option value="rec">Relevance</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>
    </div>
  );
}
