// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Loma Serena – Hilltop Homes & Lots with Ocean Views in Rosarito, Baja CA" },
  description:
    "Loma Serena is a hillside residential community in Rosarito offering breathtaking views of the Pacific Ocean. Discover homes and lots in one of Baja California's most scenic coastal settings.",
  openGraph: {
    title: "Loma Serena – Hilltop Homes & Lots with Ocean Views in Rosarito, Baja CA",
    description:
      "Loma Serena is a hillside residential community in Rosarito offering breathtaking views of the Pacific Ocean. Discover homes and lots in one of Baja California's most scenic coastal settings.",
    url: "https://propertydreamz.com/properties/loma-serena",
  },
};

export default function LomaSerenaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
