"use client";
// Loma Serena page — hero uses a Vimeo background video; gated ocean-view community in Rosarito.
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_LOGO       = `${CLD}/loma-serena/logo`;
const IMG_MODEL      = `${CLD}/loma-serena/model-house`;
const IMG_AMENITIES  = `${CLD}/loma-serena/amenities`;
const IMG_CTA        = `${CLD}/loma-serena/cta`;
const IMG_CMRE       = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Stat = { value: string; label: string };

export default function LomaSerenaPage() {
  const t = useTranslations("propertyLomaSerena");
  const stats = t.raw("stats") as Stat[];
  const trustBadges = t.raw("trustBadges") as string[];
  const modelFeatures = t.raw("models.features") as string[];
  const amenityItems = t.raw("amenities.items") as string[];

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">

        {/* Vimeo embed sized to always cover the section regardless of viewport ratio. */}
        {/* Vimeo background video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1199500340?h=b0bc3a3922&autoplay=1&loop=1&muted=1&background=1"
            className="absolute border-0"
            style={{
              top: "50%",
              left: "50%",
              width: "177.78vh",
              height: "56.25vw",
              minWidth: "100%",
              minHeight: "100%",
              transform: "translate(-50%, -50%)",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            title="Loma Serena"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 3%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-12 lg:pb-14">

          {/* Logo + CMRE — top right */}
          <RevealOnScroll direction="right">
            <div className="flex justify-end">
              <div className="flex flex-col items-end gap-2">
                <Image
                  src={IMG_LOGO}
                  alt={t("hero.logoAlt")}
                  width={204}
                  height={54}
                  className="w-44 lg:w-52"
                />
                <Image
                  src={IMG_CMRE}
                  alt={t("hero.cmreAlt")}
                  width={135}
                  height={32}
                  className="w-36"
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* Title + subtitle — left */}
          <div className="mt-6 flex flex-col gap-5 lg:mt-10 lg:max-w-[45%]">
            <h1
              className="font-ewangi text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.05] text-white animate-[fade-left_0.9s_ease-out_both]"
              style={{ textShadow: "10px 4px 11px rgba(0,0,0,0.61)" }}
            >
              {t("hero.headlineLine1")}<br />{t("hero.headlineLine2")}
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p
                className="font-ewangi text-[1.1rem] leading-relaxed text-white/80"
                style={{ textShadow: "12px 4px 9px rgba(0,0,0,0.58)" }}
              >
                {t("hero.subheadline")}
              </p>
            </RevealOnScroll>
          </div>

          {/* Badges — mobile only, right after title */}
          <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-4 lg:hidden">
            {trustBadges.map((b, i) => (
              <div
                key={b}
                className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                style={{ animationDelay: `${350 + i * 150}ms` }}
              >
                <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
              </div>
            ))}
          </div>

          {/* Bottom row: badges left (desktop), stats right */}
          <div className="mt-auto flex items-end justify-between gap-8 pt-8">
            <div className="hidden flex-wrap gap-x-10 gap-y-4 lg:flex">
              {trustBadges.map((b, i) => (
                <div
                  key={b}
                  className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                  style={{ animationDelay: `${350 + i * 150}ms` }}
                >
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-14">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-1 animate-[fade-up_0.7s_ease-out_both]"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="font-ewangi text-[2.25rem] leading-none text-white">{s.value}</span>
                  <span className="font-ewangi text-[1.1rem] text-white/80">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────────── */}
      <div className="bg-[#171717] px-8 py-8 lg:px-20">
        <RevealOnScroll direction="left">
          <div className="flex items-center gap-6">
            <div className="h-px w-44 shrink-0 bg-white/30" />
            <p className="font-ewangi text-[clamp(1.25rem,2.5vw,2.25rem)] capitalize text-white">
              {t("divider.text")}
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* ── MODELS ────────────────────────────────────────────────────── */}
      <section className="rounded-tl-[50px] rounded-tr-[50px] bg-[#d9d9d9] px-8 pt-12 pb-16 lg:px-20 lg:pt-14">

        <RevealOnScroll direction="left">
          <div className="mb-8 flex items-center gap-4">
            <p className="font-ewangi text-[1.875rem] text-brand-ink">{t("models.heading")}</p>
            <button
              style={{ width: "43px", height: "43px", borderRadius: "13px" }}
              className="flex items-center justify-center border-[3px] border-brand-ink transition hover:bg-brand-ink/10"
            >
              <ChevronLeft className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
            </button>
            <button
              style={{ width: "43px", height: "43px", borderRadius: "13px" }}
              className="flex items-center justify-center border-[3px] border-brand-ink transition hover:bg-brand-ink/10"
            >
              <ChevronRight className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
            </button>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">

          <RevealOnScroll direction="left" delay={100} duration={1100}>
            <div className="lg:w-[43%]">
              <div className="flex flex-col">
                <h2 className="font-ewangi text-[clamp(3rem,6vw,5.625rem)] leading-none text-brand-ink">
                  {t("models.modelName")}
                </h2>
                <p className="font-ewangi text-[clamp(2.5rem,5vw,5.625rem)] leading-none text-brand-teal">
                  {t("models.modelSize")}
                </p>
              </div>
              <ul className="mt-6 space-y-1 list-disc pl-5">
                {modelFeatures.map((f) => (
                  <li key={f} className="font-ewangi text-[1.25rem] text-brand-ink">{f}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100} duration={1100}>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "530/353" }}>
                <Image
                  src={IMG_MODEL}
                  alt={t("models.modelImageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 57vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── AMENITIES ─────────────────────────────────────────────────── */}
      <section className="bg-[#d9d9d9] px-8 py-16 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[38%]">
              <h2 className="font-ewangi text-[clamp(2.5rem,4vw,3.75rem)] text-brand-ink">
                {t("amenities.heading")}
              </h2>
              <ul className="mt-6 space-y-2">
                {amenityItems.map((a) => (
                  <li key={a} className="font-ewangi text-[1.375rem] text-brand-ink">{a}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[26px]" style={{ aspectRatio: "2724/1052" }}>
                <Image
                  src={IMG_AMENITIES}
                  alt={t("amenities.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 62vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#d9d9d9] px-8 pb-20 pt-4 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[42%]">
              <div className="relative overflow-hidden rounded-[50px]" style={{ aspectRatio: "604/523" }}>
                <Image
                  src={IMG_CTA}
                  alt={t("cta.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
          <div className="flex flex-col gap-6 lg:flex-1 lg:items-end lg:text-right">
            <h2 className="font-ewangi text-[clamp(2.5rem,4vw,3.75rem)] leading-tight text-brand-ink">
              {t("cta.headingLine1")}<br />{t("cta.headingLine2")}
            </h2>
            <p className="font-ewangi text-[1.375rem] leading-relaxed text-brand-ink/80 lg:max-w-130">
              {t("cta.body")}
            </p>
            <button className="mt-2 rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
              {t("cta.button")}
            </button>
          </div>
          </RevealOnScroll>

        </div>
      </section>

    </div>
  );
}
