// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Pacifica Ensenada – Oceanfront Condos for Sale in Ensenada, Baja California" },
  description:
    "Pacifica is a premier oceanfront condominium development in Ensenada, Baja California. Wake up to Pacific Ocean views and enjoy resort-style amenities steps from the sea.",
  openGraph: {
    title: "Pacifica Ensenada – Oceanfront Condos for Sale in Ensenada, Baja California",
    description:
      "Pacifica is a premier oceanfront condominium development in Ensenada, Baja California. Wake up to Pacific Ocean views and enjoy resort-style amenities steps from the sea.",
    url: "https://propertydreamz.com/properties/pacifica",
  },
};

export default function PacificaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
