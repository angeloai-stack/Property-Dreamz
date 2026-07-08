// Contact page — Figma: "Contact us" (node 1425:20299).
import type { Metadata } from "next";
import { ContactClosingCta } from "@/components/contact/ContactClosingCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { WhyContactUs } from "@/components/contact/WhyContactUs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Property Dreamz team. Reach verified buyers, request a callback, or start your property search in Mexico today.",
  openGraph: {
    title: "Contact Property Dreamz",
    description:
      "Talk to our bilingual team about buying or listing real estate in Mexico.",
    url: "https://propertydreamz.com/contact",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <ContactHero />
      <WhyContactUs />
      <ContactClosingCta />
    </main>
  );
}
