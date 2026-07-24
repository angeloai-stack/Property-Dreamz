// Price formatting helpers for the explore-map listing cards — handles USD and MXN display.
import type { Currency, Listing } from "./data";
import type { SavedProperty } from "@/hooks/useSavedProperties";

export function formatMXN(value: number) {
  return `$${(value / 1_000_000).toFixed(2).replace(/\.?0+$/, "")}M MXN`;
}

export function formatUSD(value: number) {
  return value >= 1_000_000
    ? `USD $${(value / 1_000_000).toFixed(2)}M`
    : `USD $${(value / 1_000).toFixed(0)}K`;
}

export function formatPrice(mxn: number, usd: number, currency: Currency) {
  return currency === "MXN" ? formatMXN(mxn) : formatUSD(usd);
}

// Full, non-abbreviated price — Figma explore-map cards: "$89,000 USD" / "$4,250,000 MXN".
export function formatFullPrice(mxn: number, usd: number, currency: Currency) {
  const value = currency === "MXN" ? mxn : usd;
  return `$${new Intl.NumberFormat("en-US").format(value)} ${currency}`;
}

// Compact price for map pin badges — Figma: "From $89k". `fromLabel` is the translated
// "From"/"Desde" word, passed in by the caller since this is a plain util, not a component.
export function formatShortPrice(usd: number, fromLabel: string) {
  return `${fromLabel} $${Math.round(usd / 1000)}k`;
}

// Shared shape used to save a listing to the cross-page /saved store, from either the map
// popup or the results-list card.
export function toSavedProperty(listing: Listing): SavedProperty {
  return {
    id: `explore-${listing.id}`,
    title: listing.title,
    zone: listing.zone,
    priceUSD: listing.priceUSD,
    beds: listing.beds,
    baths: listing.baths,
    sqm: listing.sqft,
    status: listing.constructionStatus,
    image: listing.image,
  };
}
