// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Encanto del Valle – Homes & Residential Lots in the Ensenada Valley, Baja CA" },
  description:
    "Encanto del Valle is a residential development in the scenic valley region of Ensenada. Explore single-family homes and lots in one of Baja California's most charming communities.",
  openGraph: {
    title: "Encanto del Valle – Homes & Residential Lots in the Ensenada Valley, Baja CA",
    description:
      "Encanto del Valle is a residential development in the scenic valley region of Ensenada. Explore single-family homes and lots in one of Baja California's most charming communities.",
    url: "https://propertydreamz.com/properties/encanto-del-valle",
  },
};

export default function EncantoDelValleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
