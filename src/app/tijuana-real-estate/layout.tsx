// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tijuana Real Estate",
  description:
    "Homes for sale in Tijuana, Mexico — modern condos in Zona Río, gated communities, and resort-style developments minutes from San Diego. Every listing title-searched and developer-verified.",
  openGraph: {
    title: "Tijuana Real Estate — Property Dreamz",
    description:
      "Certified developments in Tijuana. Every listing title-searched and developer-verified, 20 minutes from San Diego.",
    url: "https://propertydreamz.com/tijuana-real-estate",
  },
};

export default function TijuanaRealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
