// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Tower 51 – Urban Condo Tower for Sale in Rosarito, Baja California" },
  description:
    "Tower 51 is a modern high-rise condominium tower in Rosarito's urban core. Developed by Vive Inversión y Desarrollos, it offers contemporary city living with easy access to Baja California's beaches.",
  openGraph: {
    title: "Tower 51 – Urban Condo Tower for Sale in Rosarito, Baja California",
    description:
      "Tower 51 is a modern high-rise condominium tower in Rosarito's urban core. Developed by Vive Inversión y Desarrollos, it offers contemporary city living with easy access to Baja California's beaches.",
    url: "https://propertydreamz.com/properties/torre51",
  },
};

export default function Tower51Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
