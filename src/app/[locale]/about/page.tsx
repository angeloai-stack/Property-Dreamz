// About / Mission page — Figma: "About US" (node 1359:17511).
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutCta } from "@/components/about/AboutCta";
import { CertificationSection } from "@/components/about/CertificationSection";
import { DifferentiatorsGrid } from "@/components/about/DifferentiatorsGrid";
import { MissionSection } from "@/components/about/MissionSection";
import { WhyDifferent } from "@/components/about/WhyDifferent";

type Props = { params: Promise<{ locale: string }> };

// Title/description come from the "about.metadata" translation namespace.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://propertydreamz.com/about",
    },
  };
}

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <AboutHero />
      <WhyDifferent />
      <DifferentiatorsGrid />
      <CertificationSection />
      <MissionSection />
      <AboutCta />
    </main>
  );
}
