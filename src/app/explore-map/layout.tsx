// Separate layout to hold metadata for the explore-map route,
// since the page itself is "use client" and cannot export metadata directly.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore the Map",
  description:
    "Interactively explore certified real estate developments across Mexico. Filter by location, price, bedrooms, and verification status.",
  openGraph: {
    title: "Explore the Map — Property Dreamz",
    description:
      "Find certified developments across Mexico on an interactive map. Filter by price, location, and type.",
    url: "https://propertydreamz.com/explore-map",
  },
};

export default function ExploreMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
