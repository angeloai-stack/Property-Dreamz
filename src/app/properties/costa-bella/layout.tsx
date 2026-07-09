// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Costa Bella – Beachside Condominiums for Sale in Rosarito, Baja California" },
  description:
    "Costa Bella offers coastal condominiums in the northern Baja corridor near Rosarito. Steps from the Pacific Ocean, ideal for vacation homes or permanent residence in Baja California.",
  openGraph: {
    title: "Costa Bella – Beachside Condominiums for Sale in Rosarito, Baja California",
    description:
      "Costa Bella offers coastal condominiums in the northern Baja corridor near Rosarito. Steps from the Pacific Ocean, ideal for vacation homes or permanent residence in Baja California.",
    url: "https://propertydreamz.com/properties/costa-bella",
  },
};

export default function CostaBellaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
