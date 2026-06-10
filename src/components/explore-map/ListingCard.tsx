"use client";

import { Bath, Bed, LayoutGrid, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating);

  return (
    <span className="inline-flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon
          key={i}
          as={Star}
          size={12}
          className={cn(
            i <= rounded ? "fill-brand-gold text-brand-gold" : "fill-brand-paper text-brand-ink/20"
          )}
        />
      ))}
    </span>
  );
}

type ListingCardProps = {
  listing: Listing;
  active: boolean;
  currency: Currency;
  onClick: () => void;
};

export function ListingCard({ listing, active, currency, onClick }: ListingCardProps) {
  const sold = listing.status === "vendido";
  const status = statusConfig[listing.status];
  const primaryPrice = formatPrice(listing.priceMXN, listing.priceUSD, currency);
  const secondaryPrice = currency === "USD" ? formatMXN(listing.priceMXN) : formatUSD(listing.priceUSD);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "overflow-hidden rounded-[var(--radius-card)] border bg-brand-paper text-brand-ink shadow-subtle transition duration-200",
        "cursor-pointer hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-emerald",
        active ? "border-brand-emerald ring-2 ring-brand-emerald/30" : "border-brand-ink/10",
        sold && "opacity-70"
      )}
    >
      <div className="relative h-44 overflow-hidden bg-brand-paper sm:h-48">
        <img
          src={listing.image}
          alt={listing.title}
          className={cn(
            "h-full w-full object-cover transition duration-300 group-hover:scale-105",
            sold && "grayscale"
          )}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge variant={status.variant} className={status.className}>
            {status.label}
          </Badge>
        </div>
        {!sold && (
          <div className="absolute right-3 top-3 rounded-[var(--radius-btn)] border border-brand-ink/10 bg-brand-paper px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-ink">
            {listing.sdSavings}% vs SD
          </div>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <p className="font-ibrand text-title text-brand-ink">{primaryPrice}</p>
          <p className="font-ewangi text-label font-semibold uppercase tracking-[0.14em] text-brand-emerald">
            {secondaryPrice}
          </p>
        </div>

        <div>
          <h3 className="font-ibrand text-subtitle text-brand-ink">{listing.title}</h3>
          <p className="mt-1 flex items-start gap-1.5 font-body text-body text-brand-muted">
            <Icon as={MapPin} size={14} className="mt-0.5 shrink-0 text-brand-emerald" />
            <span>
              {listing.zone} · {listing.borderMiles}mi from the border
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 font-ewangi text-label font-semibold uppercase text-brand-ink">
          <span className="inline-flex items-center gap-1.5">
            <Icon as={Bed} size={14} className="text-brand-pine" />
            {listing.beds}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon as={Bath} size={14} className="text-brand-pine" />
            {listing.baths}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon as={LayoutGrid} size={14} className="text-brand-pine" />
            {listing.sqft} m²
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Stars rating={listing.rating} />
          <span className="font-body text-label text-brand-muted">
            {listing.rating} · {listing.reviews} reviews
          </span>
        </div>

        <div className="border-t border-brand-ink/10 pt-3">
          {sold ? (
            <p className="py-2 text-center text-sm text-brand-muted">Sold</p>
          ) : (
            <Button
              variant="default"
              className="w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              View project
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
