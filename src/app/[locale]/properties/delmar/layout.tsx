// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Del Mar Residencial – Coastal Homes & Condos Near Tijuana, Baja California" },
  description:
    "Del Mar Residencial offers houses and condominiums along the scenic Tijuana–Ensenada coastal corridor. A refined community with easy access to both Tijuana and Ensenada.",
  openGraph: {
    title: "Del Mar Residencial – Coastal Homes & Condos Near Tijuana, Baja California",
    description:
      "Del Mar Residencial offers houses and condominiums along the scenic Tijuana–Ensenada coastal corridor. A refined community with easy access to both Tijuana and Ensenada.",
    url: "https://propertydreamz.com/properties/delmar",
  },
};

export default function DelMarResidencialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
