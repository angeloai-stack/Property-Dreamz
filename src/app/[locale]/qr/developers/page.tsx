import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DeveloperQrLanding } from "@/components/qr/DeveloperQrLanding";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "developerLinks.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://propertydreamz.com/qr/developers",
    },
  };
}

export default function DeveloperQrPage() {
  return <DeveloperQrLanding />;
}
