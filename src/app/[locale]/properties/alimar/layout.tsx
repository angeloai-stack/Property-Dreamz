// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Alimar Residencial – Oceanside Condos for Sale in Rosarito, Baja California" },
  description:
    "Discover Alimar Residencial: 16 boutique condos just 3 blocks from the beach in Rosarito. Spacious 2-bed/2-bath units from 1,046–1,287 sq ft. Modern living on the Baja California coast.",
  openGraph: {
    title: "Alimar Residencial – Oceanside Condos for Sale in Rosarito, Baja California",
    description:
      "Discover Alimar Residencial: 16 boutique condos just 3 blocks from the beach in Rosarito. Spacious 2-bed/2-bath units from 1,046–1,287 sq ft. Modern living on the Baja California coast.",
    url: "https://propertydreamz.com/properties/alimar",
  },
};

export default function AlimarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
