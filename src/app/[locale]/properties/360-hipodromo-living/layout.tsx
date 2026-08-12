// Thin layout wrapper whose sole purpose is exporting metadata for this "use client" route.
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "property360Hipodromo.metadata" });

  return {
    title: { absolute: t("title") },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://propertydreamz.com/properties/360-hipodromo-living",
    },
  };
}

export default function HipodromoLiving360Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
