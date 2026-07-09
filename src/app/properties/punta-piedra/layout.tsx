// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Punta Piedra – Homes & Lots for Sale South of Ensenada, Baja California" },
  description:
    "Punta Piedra offers residential lots and homes in a pristine natural setting south of Ensenada. Build your Baja California retreat with Pacific Ocean access and stunning coastal scenery.",
  openGraph: {
    title: "Punta Piedra – Homes & Lots for Sale South of Ensenada, Baja California",
    description:
      "Punta Piedra offers residential lots and homes in a pristine natural setting south of Ensenada. Build your Baja California retreat with Pacific Ocean access and stunning coastal scenery.",
    url: "https://propertydreamz.com/properties/punta-piedra",
  },
};

export default function PuntaPiedraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
