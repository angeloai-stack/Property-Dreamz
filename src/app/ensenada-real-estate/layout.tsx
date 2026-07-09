// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ensenada Real Estate",
  description:
    "Homes for sale in Ensenada, Mexico — oceanfront condos, valley homes near Valle de Guadalupe, and lots to build, 80 miles from San Diego. Every listing title-searched and developer-verified.",
  openGraph: {
    title: "Ensenada Real Estate — Property Dreamz",
    description:
      "Certified developments in Ensenada. Every listing title-searched and developer-verified, 80 miles from San Diego.",
    url: "https://propertydreamz.com/ensenada-real-estate",
  },
};

export default function EnsenadaRealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
