// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baja California Real Estate",
  description:
    "Explore 47+ certified developments across Tijuana, Rosarito, and Ensenada. Beachfront condos, gated homes, and lots — every title searched, every developer verified.",
  openGraph: {
    title: "Baja California Real Estate — Property Dreamz",
    description:
      "Certified developments across Tijuana, Rosarito, and Ensenada. Every listing title-searched and developer-verified.",
    url: "https://propertydreamz.com/baja-california-real-estate",
  },
};

export default function BajaCaliforniaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
