// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
// Title/description from the SEO content document (source of truth as of Jul 2026).
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Costa Real at Real del Mar – Ocean-View Homes & Condos in Tijuana" },
  description:
    "Costa Real is part of the prestigious Real del Mar complex near Tijuana. Choose from ocean-view homes and condominiums in a master-planned gated community on the Baja California coast.",
  openGraph: {
    title: "Costa Real at Real del Mar – Ocean-View Homes & Condos in Tijuana",
    description:
      "Costa Real is part of the prestigious Real del Mar complex near Tijuana. Choose from ocean-view homes and condominiums in a master-planned gated community on the Baja California coast.",
    url: "https://propertydreamz.com/properties/costa-real",
  },
};

export default function CostaRealLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
