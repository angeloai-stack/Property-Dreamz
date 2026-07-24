// About / Mission page — Figma: "About US" (node 1359:17511).
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutCta } from "@/components/about/AboutCta";
import { CertificationSection } from "@/components/about/CertificationSection";
import { DifferentiatorsGrid } from "@/components/about/DifferentiatorsGrid";
import { MissionSection } from "@/components/about/MissionSection";
import { WhyDifferent } from "@/components/about/WhyDifferent";

export const metadata: Metadata = {
  title: "The Mission",
  description:
    "Property Dreamz is on a mission to make buying real estate in Mexico safe, transparent, and accessible for international buyers. Learn who we are and why we built this.",
  openGraph: {
    title: "The Mission — Property Dreamz",
    description:
      "Safe, transparent, and accessible Mexican real estate for international buyers.",
    url: "https://propertydreamz.com/about",
  },
};

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
