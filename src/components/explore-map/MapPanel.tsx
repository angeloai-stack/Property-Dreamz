"use client";

import { Minus, Plus } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Currency, Listing, Pin } from "@/app/explore-map/data";
import { formatUSD } from "@/app/explore-map/utils";
import { cn } from "@/lib/utils";

type MapPanelProps = {
  pins: readonly Pin[];
  listings: readonly Listing[];
  activePin: number | null;
  onPinClick: (id: number) => void;
  filtered: readonly Listing[];
  currency: Currency;
  className?: string;
};

export function MapPanel({
  pins,
  listings,
  activePin,
  onPinClick,
  filtered,
  currency,
  className,
}: MapPanelProps) {
  const visibleIds = new Set(filtered.map((l) => l.id));

  return (
    <div
      className={cn(
        "relative h-full min-h-[220px] w-full overflow-hidden bg-[#D6E8C8] sm:min-h-[280px] lg:min-h-0",
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect width="100" height="100" fill="#D6E8C8" />
        <path d="M0,40 Q10,35 15,50 Q12,70 0,80 Z" fill="#B8D4E8" opacity="0.6" />
        <path d="M100,30 Q90,40 85,60 Q88,80 100,85 Z" fill="#B8D4E8" opacity="0.6" />
        <path
          d="M15,10 Q30,8 50,12 Q70,16 85,10 Q90,20 88,35 Q82,55 75,70 Q65,82 55,88 Q45,90 35,82 Q25,72 20,60 Q12,45 15,30 Z"
          fill="#C8DEB8"
        />
        {[20, 40, 60, 80].map((v) => (
          <g key={v}>
            <line x1="0" y1={v} x2="100" y2={v} stroke="#B5C9A8" strokeWidth="0.4" />
            <line x1={v} y1="0" x2={v} y2="100" stroke="#B5C9A8" strokeWidth="0.4" />
          </g>
        ))}
        <path
          d="M14,28 Q13,40 12,55 Q11,68 13,78"
          stroke="#A8C498"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-[var(--radius-input)] border border-brand-ink/10 bg-brand-paper px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-ink shadow-subtle">
        <span className="text-brand-emerald">●</span>
        Mexico · {filtered.length} projects
      </div>

      {pins.map((pin) => {
        const listing = listings.find((l) => l.id === pin.id);
        if (!listing) return null;

        const isActive = activePin === pin.id;
        const isVisible = visibleIds.has(pin.id);
        const label =
          currency === "USD"
            ? formatUSD(listing.priceUSD)
            : `$${(listing.priceMXN / 1_000_000).toFixed(1)}M`;

        return (
          <button
            key={pin.id}
            type="button"
            aria-label={`${listing.title}, ${label}`}
            aria-pressed={isActive}
            onClick={() => onPinClick(pin.id)}
            className={cn(
              "absolute z-[1] -translate-x-1/2 -translate-y-full transition duration-200",
              isVisible ? "opacity-100" : "opacity-25",
              isActive && "z-10"
            )}
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          >
            <span
              className={cn(
                "block whitespace-nowrap rounded-[var(--radius-btn)] border border-brand-ink px-2 py-1 text-[11px] font-bold transition duration-200",
                isActive
                  ? "scale-110 bg-brand-ink text-brand-paper shadow-subtle"
                  : "bg-brand-paper text-brand-ink"
              )}
            >
              {label}
            </span>
            <span className="mx-auto block h-1.5 w-0.5 bg-brand-ink" />
            <span
              className={cn(
                "mx-auto block h-1.5 w-1.5 rounded-full",
                isActive ? "border-[1.5px] border-brand-ink bg-brand-gold" : "bg-brand-ink"
              )}
            />
          </button>
        );
      })}

      <div className="absolute bottom-4 right-3 z-10 hidden flex-col gap-1 sm:flex">
        {[Plus, Minus].map((icon, i) => (
          <button
            key={i}
            type="button"
            aria-label={i === 0 ? "Zoom in" : "Zoom out"}
            className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-card)] border border-brand-ink/10 bg-brand-paper text-brand-ink shadow-subtle transition hover:bg-brand-paper/90"
          >
            <Icon as={icon} size={16} />
          </button>
        ))}
      </div>
    </div>
  );
}
