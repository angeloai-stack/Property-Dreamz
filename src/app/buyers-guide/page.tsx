// Buyer's Guide — Figma: "Buyers" (node 1377:18059).
import type { Metadata } from "next";
import { BuyersHero } from "@/components/buyers-guide/BuyersHero";
import { HowWeHelp } from "@/components/buyers-guide/HowWeHelp";
import { PlatformFeatures } from "@/components/buyers-guide/PlatformFeatures";
import { TopDestinations } from "@/components/buyers-guide/TopDestinations";

export const metadata: Metadata = {
  title: "Buyer's Guide",
  description:
    "A complete guide to buying property in Mexico: fideicomiso, title search, financing, closing costs, and certified developers. Written for international buyers.",
  openGraph: {
    title: "Buyer's Guide — How to Buy Property in Mexico",
    description:
      "Step-by-step guide for Americans buying real estate in Mexico. Fideicomiso, title search, closing costs, and certified developers explained.",
    url: "https://propertydreamz.com/buyers-guide",
  },
};

export default function BuyersGuidePage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <BuyersHero />
      <HowWeHelp />
      <PlatformFeatures />
      <TopDestinations />
    </main>
  );
}
