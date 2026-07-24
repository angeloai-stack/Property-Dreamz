"use client";
// Controlled filter panel for the explore-map page — state lives in the parent page component.
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { MEXICAN_STATES } from "@/app/[locale]/explore-map/data";
import { cn } from "@/lib/utils";

// Filter VALUES stay the stable English literals used for comparison; only the rendered
// LABEL is resolved via translation lookups (exploreMap.types / exploreMap.stateLabels).
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
          ? "bg-brand-teal text-brand-ink"
          : "border border-brand-ink/15 text-brand-ink/60 hover:border-brand-teal/60 hover:text-brand-pine"
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
  const t = useTranslations("exploreMap");

  return (
    <div className="space-y-4 rounded-[22px] border border-brand-ink/10 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      {/* Search + result count */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-ink/40"
            strokeWidth={1.5}
          />
          <input
            type="search"
            placeholder={t("filters.searchPlaceholder")}
            value={searchVal}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label={t("filters.searchAriaLabel")}
            className="w-full rounded-(--radius-input) border border-brand-ink/15 bg-[#eaedf0]/50 py-2.5 pl-10 pr-4 font-ewangi text-sm text-brand-ink placeholder:text-brand-ink/35 outline-none transition focus:border-brand-teal/60 focus:ring-2 focus:ring-brand-teal/20"
          />
        </div>
        <span className="shrink-0 rounded-(--radius-btn) bg-brand-teal/15 px-3 py-1.5 font-ewangi text-sm text-brand-pine">
          {t("filters.resultCount", { count: resultCount })}
        </span>
      </div>

      {/* State filter — updates the map view */}
      <div>
        <p className="mb-2 font-ewangi text-[10px] uppercase tracking-[0.12em] text-brand-ink/40">
          {t("filters.stateLabel")}
        </p>
        <div className="flex flex-wrap gap-2">
          {MEXICAN_STATES.map((state) => (
            <Pill key={state} active={stateFilter === state} onClick={() => onStateChange(state)}>
              {t(`stateLabels.${state}`)}
            </Pill>
          ))}
        </div>
      </div>

      {/* Property type + currency pills */}
      <div>
        <p className="mb-2 font-ewangi text-[10px] uppercase tracking-[0.12em] text-brand-ink/40">
          {t("filters.typeCurrencyLabel")}
        </p>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <Pill key={type} active={typeFilter === type} onClick={() => onTypeChange(type)}>
              {t(`types.${type}`)}
            </Pill>
          ))}

          <div className="mx-2 hidden w-px self-stretch bg-brand-ink/10 sm:block" aria-hidden="true" />

          {currencies.map((c) => (
            <Pill key={c} active={currency === c} onClick={() => onCurrencyChange(c)}>
              {c}
            </Pill>
          ))}
        </div>
      </div>

      {/* Verified + sort */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <label className="flex cursor-pointer items-center gap-2 font-ewangi text-sm text-brand-ink/60">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => onVerifiedChange(e.target.checked)}
            className="h-4 w-4 cursor-pointer rounded border-brand-ink/25 accent-brand-teal"
          />
          <span>{t("filters.verifiedOnly")}</span>
        </label>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label={t("filters.sortAriaLabel")}
          className="w-full rounded-(--radius-input) border border-brand-ink/15 bg-[#eaedf0]/50 px-3 py-2 font-ewangi text-sm text-brand-ink outline-none transition focus:border-brand-teal/60 sm:w-auto"
        >
          <option value="rec">{t("filters.sort.relevance")}</option>
          <option value="price-asc">{t("filters.sort.priceAsc")}</option>
          <option value="price-desc">{t("filters.sort.priceDesc")}</option>
        </select>
      </div>
    </div>
  );
}
