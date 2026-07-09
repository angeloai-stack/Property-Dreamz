// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Tierra de Agua – Waterfront Homes & Condos in Rosarito, Baja California" },
  description:
    "Tierra de Agua Residencial features waterfront homes and condominiums in the Rosarito coastal corridor. Enjoy direct water access and a relaxed Baja California lifestyle on Mexico's Pacific coast.",
  openGraph: {
    title: "Tierra de Agua – Waterfront Homes & Condos in Rosarito, Baja California",
    description:
      "Tierra de Agua Residencial features waterfront homes and condominiums in the Rosarito coastal corridor. Enjoy direct water access and a relaxed Baja California lifestyle on Mexico's Pacific coast.",
    url: "https://propertydreamz.com/properties/tierra-de-agua",
  },
};

export default function TierraDeAguaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
