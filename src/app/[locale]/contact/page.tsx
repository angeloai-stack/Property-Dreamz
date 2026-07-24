// Contact page — Figma: "Contact us" (node 1425:20299).
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactClosingCta } from "@/components/contact/ContactClosingCta";
import { ContactHero } from "@/components/contact/ContactHero";
import { WhyContactUs } from "@/components/contact/WhyContactUs";

type Props = { params: Promise<{ locale: string }> };

// Title/description come from the "contact.metadata" translation namespace.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://propertydreamz.com/contact",
    },
    robots: { index: true, follow: true },
  };
}

export default function ContactPage() {
  return (
    <main className="flex-1 overflow-x-hidden bg-white">
      <ContactHero />
      <WhyContactUs />
      <ContactClosingCta />
    </main>
  );
}
