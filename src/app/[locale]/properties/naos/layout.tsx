// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Naos Baja – Modern Condominiums for Sale in Rosarito, Baja California" },
  description:
    "Naos Baja offers sleek, modern condominiums along the Baja California coast in Rosarito. Contemporary design meets coastal living in this stylish new development.",
  openGraph: {
    title: "Naos Baja – Modern Condominiums for Sale in Rosarito, Baja California",
    description:
      "Naos Baja offers sleek, modern condominiums along the Baja California coast in Rosarito. Contemporary design meets coastal living in this stylish new development.",
    url: "https://propertydreamz.com/properties/naos",
  },
};

export default function NaosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
