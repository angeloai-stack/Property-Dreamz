// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Palacio del Mar – Luxury Beachfront Condos for Sale in Rosarito, Baja CA" },
  description:
    "Palacio del Mar is an upscale beachfront condominium community in the Rosarito corridor. Live in luxury on the Pacific coast with premium finishes, spectacular ocean views, and world-class amenities.",
  openGraph: {
    title: "Palacio del Mar – Luxury Beachfront Condos for Sale in Rosarito, Baja CA",
    description:
      "Palacio del Mar is an upscale beachfront condominium community in the Rosarito corridor. Live in luxury on the Pacific coast with premium finishes, spectacular ocean views, and world-class amenities.",
    url: "https://propertydreamz.com/properties/palacio-del-mar",
  },
};

export default function PalacioDelMarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
