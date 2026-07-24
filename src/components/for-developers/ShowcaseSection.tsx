// "Showcase your development like never before." — Figma nodes 1424:20176-20177 + laptop mockup.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

export function ShowcaseSection() {
  const t = useTranslations("forDevelopers.showcase");
  const checklist = t.raw("checklist") as string[];

  return (
    <section className="w-full bg-brand-ink py-14 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <RevealOnScroll direction="left">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 font-ewangi text-label font-semibold text-white/80">
            {t("badge")}
          </span>
          <h2 className="font-ewangi text-[clamp(1.7rem,3.2vw,2.25rem)] font-bold leading-tight text-brand-teal">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-md font-ewangi text-[15px] leading-relaxed text-white/70">
            {t("description")}
          </p>

          <ul className="mt-6 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check className="h-4.5 w-4.5 shrink-0 text-brand-teal" strokeWidth={2.5} />
                <span className="font-ewangi text-[14px] text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Laptop mockup showing a sample listing page */}
        <RevealOnScroll direction="right" delay={120} className="mx-auto w-full max-w-lg">
          <div className="rounded-t-xl border-4 border-b-0 border-[#2a2a2a] bg-[#111]">
            <div className="relative aspect-16/10 overflow-hidden rounded-t-[6px]">
              <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80"
                alt={t("mockupAlt")}
                fill
                sizes="(max-width: 1024px) 90vw, 512px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-5 left-6 font-ewangi text-[1.3rem] font-bold leading-tight text-white sm:text-[1.6rem]">
                {t("mockupCaptionLine1")}
                <br />
                {t("mockupCaptionLine2")}
              </p>
            </div>
          </div>
          <div className="h-3 rounded-b-xl bg-[#2a2a2a]" />
          <div className="mx-auto h-1.5 w-24 rounded-b-md bg-[#1a1a1a]" />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
