// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Costa Baja – Luxury Resort Residences with Marina & Golf in Baja California" },
  description:
    "Costa Baja is a world-class luxury resort community in Baja California featuring a full-service marina, championship golf course, and premium oceanfront residences. The ultimate Baja lifestyle destination.",
  openGraph: {
    title: "Costa Baja – Luxury Resort Residences with Marina & Golf in Baja California",
    description:
      "Costa Baja is a world-class luxury resort community in Baja California featuring a full-service marina, championship golf course, and premium oceanfront residences. The ultimate Baja lifestyle destination.",
    url: "https://propertydreamz.com/properties/costa-baja",
  },
};

export default function CostaBajaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
