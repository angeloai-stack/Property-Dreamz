// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "The Wavve Baja – Surf-Inspired Condos for Sale in Rosarito, Baja California" },
  description:
    "The Wavve is a surf-lifestyle condominium development in Rosarito, Baja California. Modern design, coastal energy, and prime Pacific Ocean access make it ideal for surf enthusiasts and beach lovers.",
  openGraph: {
    title: "The Wavve Baja – Surf-Inspired Condos for Sale in Rosarito, Baja California",
    description:
      "The Wavve is a surf-lifestyle condominium development in Rosarito, Baja California. Modern design, coastal energy, and prime Pacific Ocean access make it ideal for surf enthusiasts and beach lovers.",
    url: "https://propertydreamz.com/properties/the-wave",
  },
};

export default function TheWavveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
