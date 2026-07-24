"use client";
// Baja California regional landing page — Figma: "Baja California Real Estate".
// Reuses homepage sections where content matches (Verify, top developers, certified banner, FAQ, campaign
// form) and adds Baja-specific sections (hero copy, properties-by-city carousel, SEO block, guide carousel).
import { useTranslations } from "next-intl";
import { CertifiedBanner } from "@/components/home/CertifiedBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { TopDevelopersCards } from "@/components/home/TopDevelopersCards";
import { VerifySection } from "@/components/home/VerifySection";
import { CampaignForm } from "@/components/forms";
import { Container } from "@/components/ui";
import { BajaHero } from "@/components/baja/BajaHero";
import { BajaRelatedBlog } from "@/components/baja/BajaRelatedBlog";
import { BajaSeoBlock } from "@/components/baja/BajaSeoBlock";
import { BuyersGuideCarousel } from "@/components/baja/BuyersGuideCarousel";
import { PropertiesByCity } from "@/components/baja/PropertiesByCity";

// Figma's "Verify — Certification (versión alterna compacta)" cards carry slightly longer body copy
// than the homepage's FeatureCards default — sourced from the "baja.features" translation key.
type Feature = { title: string; body: string };

export default function BajaCaliforniaRealEstatePage() {
  const t = useTranslations("baja");
  const bajaFeatures = t.raw("features") as Feature[];

  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <BajaHero />
      <VerifySection />
      <FeatureCards features={bajaFeatures} />

      <section className="w-full bg-brand-paper py-8 md:py-16">
        <Container>
          <TopDevelopersCards />
        </Container>
      </section>

      <BajaSeoBlock />
      <PropertiesByCity />
      <BuyersGuideCarousel />
      <CertifiedBanner />
      <BajaRelatedBlog />
      <FaqSection />
      <CampaignForm />
    </main>
  );
}
