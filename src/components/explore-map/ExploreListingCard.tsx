"use client";
// Wide horizontal listing card for the explore-map results list — Figma: "Developments Map Section", 614x190 r=13.
import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent } from "react";
import { Bath, Bed, Heart, Images, Maximize2, MapPin } from "lucide-react";
import type { Currency, Listing } from "@/app/explore-map/data";
import { formatFullPrice, toSavedProperty } from "@/app/explore-map/utils";
import { useSavedProperties } from "@/hooks/useSavedProperties";
import { cn } from "@/lib/utils";

type ExploreListingCardProps = {
  listing: Listing;
  active: boolean;
  currency: Currency;
  onClick: () => void;
};

export function ExploreListingCard({ listing, active, currency, onClick }: ExploreListingCardProps) {
  const { isSaved, toggleSaved } = useSavedProperties();
  const savedProperty = toSavedProperty(listing);
  const saved = isSaved(savedProperty.id);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex overflow-hidden rounded-[13px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition duration-200",
        "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal",
        active ? "ring-2 ring-brand-teal" : ""
      )}
    >
      {/* Photo */}
      <div className="relative w-[38%] shrink-0 sm:w-[46%]">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 1024px) 45vw, 290px"
          className="object-cover"
        />

        {/* CMRE mini badge — Figma: navy 30x41 stamp, top-left */}
        <div className="absolute left-2.5 top-0 flex h-9 w-6.5 flex-col items-center justify-center gap-0.5 rounded-b-[4px] bg-brand-pine text-[7px] font-bold leading-none text-white">
          <span>CM</span>
          <span>RE</span>
        </div>

        {/* Photo count badge */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-[3px] bg-[#1e1e1e]/87 px-1.5 py-1 text-[10px] font-bold text-white">
          <Images className="h-3 w-3" strokeWidth={2} />
          {listing.photos}
        </div>

        {listing.financingAvailable && (
          <div className="absolute bottom-2 right-0 rounded-l-[4px] bg-brand-teal px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white sm:right-2 sm:rounded-[4px]">
            Financing available
          </div>
        )}
      </div>

      {/* Info */}
      <div className="relative flex flex-1 flex-col justify-between p-3 sm:p-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleSaved(savedProperty);
          }}
          aria-label={saved ? "Remove from saved" : "Save property"}
          className="absolute right-2.5 top-2.5 text-brand-ink/25 transition hover:text-brand-teal"
        >
          <Heart className={cn("h-4 w-4", saved && "fill-brand-teal text-brand-teal")} strokeWidth={saved ? 0 : 2} />
        </button>

        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-ewangi text-[12px] text-brand-pine">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
            {listing.constructionStatus}
          </p>
          <p className="mt-1 truncate pr-5 font-ewangi text-[15px] font-bold text-brand-pine sm:text-[16px]">
            {listing.title}
          </p>
          <p className="mt-0.5 flex items-center gap-1 font-ewangi text-[10px] text-brand-pine/60">
            <MapPin className="h-2.5 w-2.5 shrink-0" strokeWidth={2} />
            <span className="truncate">{listing.zone}</span>
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-ewangi text-[11px] text-[#1e1e1e] sm:text-[12px]">
            <span className="flex items-center gap-1">
              <Maximize2 className="h-3 w-3 text-brand-teal" strokeWidth={2} />
              <span className="font-bold text-brand-emerald">{listing.sqft}</span> sqm
            </span>
            <span className="flex items-center gap-1">
              <Bed className="h-3 w-3 text-brand-teal" strokeWidth={2} />
              <span className="font-bold text-brand-emerald">{listing.beds}</span> Rooms
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3 w-3 text-brand-teal" strokeWidth={2} />
              <span className="font-bold text-brand-emerald">{listing.baths}</span> Baths
            </span>
          </div>
        </div>

        <div className="mt-2 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="font-ewangi text-[9px] uppercase tracking-wide text-brand-pine/60">From</p>
            <p className="truncate font-ewangi text-[14px] font-bold text-[#00c9a7] sm:text-[15px]">
              {formatFullPrice(listing.priceMXN, listing.priceUSD, currency)}
            </p>
          </div>
          <Link
            href="/contact"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 rounded-[4px] bg-brand-teal px-3 py-1.5 font-ewangi text-[11px] font-bold text-white transition hover:bg-brand-teal-dark"
          >
            Talk to an advisor
          </Link>
        </div>
      </div>
    </article>
  );
}
