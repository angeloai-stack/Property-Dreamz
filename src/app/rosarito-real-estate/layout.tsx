// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rosarito Real Estate",
  description:
    "Homes for sale in Rosarito, Mexico — beachfront condos, ocean-view homes, and surf-inspired developments 30 minutes from San Diego. Every listing title-searched and developer-verified.",
  openGraph: {
    title: "Rosarito Real Estate — Property Dreamz",
    description:
      "Certified developments in Rosarito. Every listing title-searched and developer-verified, 30 minutes from San Diego.",
    url: "https://propertydreamz.com/rosarito-real-estate",
  },
};

export default function RosaritoRealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
