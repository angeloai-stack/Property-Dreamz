// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cíbola del Mar – Oceanfront Condos & Homes in Ensenada, Baja California" },
  description:
    "Cíbola del Mar is a premier oceanfront development on the Baja California coast near Ensenada. Enjoy panoramic Pacific views, modern amenities, and a true seaside lifestyle.",
  openGraph: {
    title: "Cíbola del Mar – Oceanfront Condos & Homes in Ensenada, Baja California",
    description:
      "Cíbola del Mar is a premier oceanfront development on the Baja California coast near Ensenada. Enjoy panoramic Pacific views, modern amenities, and a true seaside lifestyle.",
    url: "https://propertydreamz.com/properties/cibola-del-mar",
  },
};

export default function CibolaDelMarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
