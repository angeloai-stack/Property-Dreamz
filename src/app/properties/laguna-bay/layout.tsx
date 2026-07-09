// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Laguna Bay – Oceanfront & Lagoon-View Condos for Sale in Rosarito, Baja CA" },
  description:
    "Laguna Bay features stunning condominiums with lagoon and ocean views in Rosarito, Baja California. Perfect for buyers seeking a unique waterfront lifestyle on Mexico's Pacific coast.",
  openGraph: {
    title: "Laguna Bay – Oceanfront & Lagoon-View Condos for Sale in Rosarito, Baja CA",
    description:
      "Laguna Bay features stunning condominiums with lagoon and ocean views in Rosarito, Baja California. Perfect for buyers seeking a unique waterfront lifestyle on Mexico's Pacific coast.",
    url: "https://propertydreamz.com/properties/laguna-bay",
  },
};

export default function LagunaBayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
