"use client";
// Baja California regional landing page — Figma: "Baja California Real Estate".
// Reuses homepage sections where content matches (Verify, top developers, certified banner, FAQ, campaign
// form) and adds Baja-specific sections (hero copy, properties-by-city carousel, SEO block, guide carousel).
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
// than the homepage's FeatureCards default — passed in via the `features` override prop.
const bajaFeatures = [
  {
    title: "Title clean before you wire a dollar",
    body: "Trust starts with transparency. Our certification process includes a thorough review of judicial records to help clients identify developers who meet high standards of professionalism and integrity. This additional layer of verification helps build confidence and strengthen client-developer relationships.",
  },
  {
    title: "Regulatory Compliance",
    body: "We verify that certified developers meet relevant legal, regulatory, and professional standards. This review helps ensure adherence to industry requirements and best practices, providing clients with greater confidence when selecting trusted professionals for their projects.",
  },
  {
    title: "Property Security Assessment",
    body: "A secure operation reflects a reliable organization. Our certification includes an evaluation of property security measures to help confirm that developers maintain safe, well-managed facilities, reinforcing trust and confidence among clients and partners.",
  },
] as const;

export default function BajaCaliforniaRealEstatePage() {
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
