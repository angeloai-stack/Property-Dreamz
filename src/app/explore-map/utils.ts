// Price formatting helpers for the explore-map listing cards — handles USD and MXN display.
import type { Currency } from "./data";

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
