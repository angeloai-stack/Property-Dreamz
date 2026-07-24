// For Developers page — Figma: "For developers" (node 1423:19365).
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CertificationTrust } from "@/components/for-developers/CertificationTrust";
import { DevClosingCta } from "@/components/for-developers/DevClosingCta";
import { DevHero } from "@/components/for-developers/DevHero";
import { DevSteps } from "@/components/for-developers/DevSteps";
import { PlatformTools } from "@/components/for-developers/PlatformTools";
import { ShowcaseSection } from "@/components/for-developers/ShowcaseSection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "forDevelopers.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://propertydreamz.com/for-developers",
    },
  };
}

export default function ForDevelopersPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <DevHero />
      <PlatformTools />
      <DevSteps />
      <ShowcaseSection />
      <CertificationTrust />
      <DevClosingCta />
    </main>
  );
}
