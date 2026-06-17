"use client";

import Image from "next/image";
import { type KeyboardEvent } from "react";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import type { Currency, Listing, ListingStatus } from "@/app/explore-map/data";
import { formatMXN, formatPrice, formatUSD } from "@/app/explore-map/utils";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  ListingStatus,
  { label: string; variant?: "default" | "success" | "gold"; className?: string }
> = {
  verified: { label: "Verified", variant: "success" },
  preventa: { label: "Presale", className: "bg-brand-pine text-brand-paper" },
  destacado: { label: "Featured", variant: "gold" },
  vendido: { label: "Sold", className: "bg-brand-gray text-brand-paper" },
};

type ListingCardProps = {
  listing: Listing;
  active: boolean;
  currency: Currency;
  onClick: () => void;
  compact?: boolean;
};

export function ListingCard({ listing, active, currency, onClick, compact = false }: ListingCardProps) {
  const sold = listing.status === "vendido";
  const status = statusConfig[listing.status];
  const primaryPrice = formatPrice(listing.priceMXN, listing.priceUSD, currency);
  const secondaryPrice = currency === "USD" ? formatMXN(listing.priceMXN) : formatUSD(listing.priceUSD);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  // Compact square variant — Figma: square card (319×337), image (295×259 ≈ 8/7) on top, info below
  if (compact) {
    return (
      <article
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "overflow-hidden rounded-[30px] border bg-[#fcfdff] p-2.5 text-brand-ink shadow-[0_4px_20px_rgba(0,0,0,0.22)] transition duration-200",
          "cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39d3c0]",
          active ? "border-[#39d3c0] ring-2 ring-[#39d3c0]/40" : "border-transparent",
          sold && "opacity-70"
        )}
      >
        {/* Image — Figma image ratio 295:259 ≈ 8/7 */}
        <div className="relative aspect-8/7 overflow-hidden rounded-[22px] bg-brand-paper">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            sizes="(max-width: 1024px) 50vw, 320px"
            className={cn(
              "object-cover transition duration-300 hover:scale-105",
              sold && "grayscale"
            )}
          />
          {/* Status badge top-left */}
          <div className="absolute left-2.5 top-2.5">
            <Badge variant={status.variant} className={cn("text-[10px]", status.className)}>
              {status.label}
            </Badge>
          </div>
          {/* Savings badge top-right */}
          {!sold && (
            <div className="absolute right-2.5 top-2.5 rounded-md border border-brand-ink/10 bg-brand-paper px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-ink">
              {listing.sdSavings}% vs SD
            </div>
          )}
          {/* Price overlay bottom */}
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-3 pb-2.5 pt-8">
            <p className="font-ewangi text-[1rem] leading-tight text-white">{primaryPrice}</p>
            <p className="font-ewangi text-[10px] uppercase tracking-[0.12em] text-white/70">{secondaryPrice}</p>
          </div>
        </div>

        {/* Compact info row below image */}
        <div className="px-1.5 pb-1 pt-2">
          <h3 className="truncate font-ewangi text-[0.9rem] text-brand-ink">{listing.title}</h3>
          <p className="mt-0.5 flex items-center gap-1 font-body text-[11px] text-brand-muted">
            <Icon as={MapPin} size={11} className="shrink-0 text-brand-emerald" />
            <span className="truncate">{listing.zone}</span>
          </p>
          <div className="mt-1 flex items-center gap-1">
            <Icon as={Star} size={10} className="fill-brand-gold text-brand-gold" />
            <span className="truncate font-body text-[10px] text-brand-muted">
              {listing.rating} · {listing.beds}bd {listing.baths}ba · {listing.sqft} m²
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "overflow-hidden rounded-[43px] border bg-[#fcfdff] text-brand-ink shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition duration-200",
        "cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39d3c0]",
        active ? "border-[#39d3c0] ring-2 ring-[#39d3c0]/40" : "border-transparent",
        sold && "opacity-70"
      )}
    >
      {/* Square image */}
      <div className="relative aspect-square overflow-hidden rounded-[37px] bg-brand-paper">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 1024px) 50vw, 360px"
          className={cn(
            "object-cover transition duration-300 hover:scale-105",
            sold && "grayscale"
          )}
        />
        {/* Status badge top-left */}
        <div className="absolute left-3 top-3">
          <Badge variant={status.variant} className={status.className}>
            {status.label}
          </Badge>
        </div>
        {/* Savings badge top-right */}
        {!sold && (
          <div className="absolute right-3 top-3 rounded-lg border border-brand-ink/10 bg-brand-paper px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-ink">
            {listing.sdSavings}% vs SD
          </div>
        )}
        {/* Price overlay on bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent px-4 pb-4 pt-10">
          <p className="font-ewangi text-[1.1rem] leading-tight text-white">{primaryPrice}</p>
          <p className="font-ewangi text-[11px] uppercase tracking-[0.12em] text-white/70">{secondaryPrice}</p>
        </div>
      </div>

      {/* Compact info row below image */}
      <div className="px-4 py-3">
        <h3 className="truncate font-ewangi text-[0.95rem] text-brand-ink">{listing.title}</h3>
        <p className="mt-1 flex items-center gap-1 font-body text-[12px] text-brand-muted">
          <Icon as={MapPin} size={12} className="shrink-0 text-brand-emerald" />
          <span className="truncate">{listing.zone}</span>
        </p>
        <div className="mt-2 flex items-center gap-1">
          <Icon as={Star} size={11} className="fill-brand-gold text-brand-gold" />
          <span className="font-body text-[11px] text-brand-muted">
            {listing.rating} · {listing.beds}bd {listing.baths}ba · {listing.sqft} m²
          </span>
        </div>
      </div>
    </article>
  );
}
