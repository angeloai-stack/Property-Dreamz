// For Developers page — Figma: "For developers" (node 1423:19365).
import type { Metadata } from "next";
import { CertificationTrust } from "@/components/for-developers/CertificationTrust";
import { DevClosingCta } from "@/components/for-developers/DevClosingCta";
import { DevHero } from "@/components/for-developers/DevHero";
import { DevSteps } from "@/components/for-developers/DevSteps";
import { PlatformTools } from "@/components/for-developers/PlatformTools";
import { ShowcaseSection } from "@/components/for-developers/ShowcaseSection";

export const metadata: Metadata = {
  title: "For Developers",
  description:
    "List your Mexico development on Property Dreamz and reach thousands of pre-qualified international buyers. Get CM RE certified and access the developer portal.",
  openGraph: {
    title: "List Your Development — Property Dreamz",
    description:
      "Reach thousands of pre-qualified international buyers. Get CM RE certified and list your Mexico development.",
    url: "https://propertydreamz.com/for-developers",
  },
};

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
