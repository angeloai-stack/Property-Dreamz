// Closing CTA with photo background — Figma nodes 1425:20272-20298.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container, RevealOnScroll } from "@/components/ui";
import { TrustChecklist } from "@/components/shared/TrustChecklist";

export function DevClosingCta() {
  const t = useTranslations("forDevelopers.closingCta");
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <Image
        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&q=80"
        alt="Sunset over a certified development in Baja California"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-ink/55" />

      <Container className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <RevealOnScroll direction="left">
          <h2 className="max-w-md font-ewangi text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight text-white">
            {t("heading")}
          </h2>
          <TrustChecklist className="mt-5" />
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={120} className="flex flex-col items-start gap-2 sm:items-end">
          <a
            href="#dev-inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-8 py-3 font-ewangi text-[15px] font-semibold text-brand-ink transition hover:bg-brand-teal-dark"
          >
            {t("cta")} <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
          <Link href="/contact" className="font-ewangi text-[13px] text-white/70 underline-offset-2 hover:text-white hover:underline">
            {t("scheduleCall")}
          </Link>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
