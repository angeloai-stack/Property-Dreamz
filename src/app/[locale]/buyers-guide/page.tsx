// Buyer's Guide — Figma: "Buyers" (node 1377:18059).
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BuyersHero } from "@/components/buyers-guide/BuyersHero";
import { HowWeHelp } from "@/components/buyers-guide/HowWeHelp";
import { PlatformFeatures } from "@/components/buyers-guide/PlatformFeatures";
import { TopDestinations } from "@/components/buyers-guide/TopDestinations";

type Props = { params: Promise<{ locale: string }> };

// Title/description come from the "buyersGuide.metadata" translation namespace.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "buyersGuide.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://propertydreamz.com/buyers-guide",
    },
  };
}

export default function BuyersGuidePage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <BuyersHero />
      <HowWeHelp />
      <PlatformFeatures />
      <TopDestinations />
    </main>
  );
}
