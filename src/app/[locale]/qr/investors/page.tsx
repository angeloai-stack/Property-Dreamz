import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InvestorQrLanding } from "@/components/qr/InvestorQrLanding";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "investorLinks.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://propertydreamz.com/qr/investors",
    },
  };
}

export default function InvestorQrPage() {
  return <InvestorQrLanding />;
}
