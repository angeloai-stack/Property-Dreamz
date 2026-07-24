"use client";
// Tierra de Agua page — residential lots in Rosarito with a lazy-loaded YouVisit 360° tour.
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO      = `${CLD}/tierra-de-agua/tierra-de-agua/hero`;
const IMG_LOGO      = `${CLD}/tierra-de-agua/tierra-de-agua/logo`;
const IMG_AMENITIES = `${CLD}/tierra-de-agua/tierra-de-agua/amenities`;
const IMG_PLAN      = `${CLD}/tierra-de-agua/tierra-de-agua/site-plan-2`;
const IMG_CMRE      = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Stat = { value: string; label: string };
type Lot = { id: string; area: string };

export default function TierraDeAguaPage() {
  const t = useTranslations("propertyTierraDeAgua");
  const stats = t.raw("stats") as Stat[];
  const trustBadges = t.raw("trustBadges") as string[];
  const lots = t.raw("lotExplorer.lots") as Lot[];
  const tabs = t.raw("lotExplorer.tabs") as { lots: string; condos: string; houses: string };
  const tabOptions = [tabs.lots, tabs.condos, tabs.houses];

  const [tab, setTab] = useState<string>(tabs.lots);
  const [activeLot, setActiveLot] = useState(lots[0]?.id);
  const [tourStarted, setTourStarted] = useState(false);

  // Scroll to top on mount — prevents landing mid-page when navigating from the map.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt={t("hero.heroImageAlt")}
          fill
          priority
          className="object-cover animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 5%, transparent 50%)" }}
        />

        {/* Logo — mobile only, absolute centered */}
        <div className="absolute left-1/2 top-[30%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 lg:hidden">
          <Image
            src={IMG_LOGO}
            alt={t("hero.logoAlt")}
            width={200}
            height={89}
            className="w-40"
          />
          <Image
            src={IMG_CMRE}
            alt={t("hero.cmreAlt")}
            width={204}
            height={48}
            className="w-32"
          />
        </div>

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-10 lg:pb-12">

          <div className="mb-auto grid grid-cols-3 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8 lg:gap-x-10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="font-ewangi text-xl leading-none text-white sm:text-3xl lg:text-[2.25rem]">{s.value}</span>
                <span className="font-ewangi text-xs text-white/80 sm:text-base lg:text-[1.25rem]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <RevealOnScroll direction="left">
            <div className="hidden flex-col gap-6 lg:flex">
              <Image
                src={IMG_LOGO}
                alt={t("hero.logoAlt")}
                width={200}
                height={89}
                className="w-40 lg:w-48"
              />
              <Image
                src={IMG_CMRE}
                alt={t("hero.cmreAlt")}
                width={204}
                height={48}
                className="w-44"
              />
            </div>
            </RevealOnScroll>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div className="grid grid-cols-3 gap-x-6 gap-y-4 lg:flex lg:justify-end lg:gap-6">
                {trustBadges.map((b, i) => (
                  <div key={b} className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                    <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                  </div>
                ))}
              </div>

              <div className="lg:text-right">
                <h1 className="font-ewangi text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] text-white animate-[fade-right_0.9s_ease-out_both]">
                  {t("hero.headlineLine1")}<br />{t("hero.headlineLine2")}
                </h1>
                <RevealOnScroll direction="up" delay={350}>
                <p className="mt-4 font-ewangi text-[1.1rem] text-white/80 lg:max-w-140">
                  {t("hero.description")}
                </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOT EXPLORER ──────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-10 lg:px-20">
        <RevealOnScroll direction="center" duration={1100}>
        <div className="mx-auto" style={{ maxWidth: "1318px" }}>
          <div className="flex flex-col lg:h-134.25 lg:flex-row">

            <div
              className="flex w-full flex-col bg-[#1E1E1E] p-7 lg:w-120.5 lg:shrink-0"
              style={{ borderRadius: "27px" }}
            >
              <p className="font-ewangi text-[1.1rem] text-white mb-4">
                {t("lotExplorer.exploreLabel")}
              </p>

              <div className="flex gap-1.5 mb-4">
                {tabOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setTab(option)}
                    style={{ width: "72px", height: "28px", borderRadius: "4px" }}
                    className={cn(
                      "font-ewangi text-[13px] font-medium transition",
                      tab === option
                        ? "bg-brand-teal text-brand-ink"
                        : "bg-[#EAEDF0] text-brand-ink hover:bg-brand-teal/80"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <p className="font-ewangi text-[13px] text-white/50 mb-3">
                {t("lotExplorer.selectLotHint")}
              </p>

              <div className="flex-1 overflow-y-auto">
                {lots.map((lot, i) => (
                  <button
                    key={lot.id}
                    onClick={() => setActiveLot(lot.id)}
                    style={{
                      height: "40px",
                      borderRadius: activeLot === lot.id ? "4px" : undefined,
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-2 font-ewangi text-[13px] transition",
                      activeLot === lot.id
                        ? "bg-brand-teal text-brand-ink"
                        : "text-white hover:bg-white/10",
                      i > 0 && "border-t border-white/10"
                    )}
                  >
                    <span>{lot.id}</span>
                    <span>{lot.area}</span>
                  </button>
                ))}
              </div>

              <div className="mt-5 flex justify-center">
                <button
                  style={{ width: "184px", height: "44px", borderRadius: "5px" }}
                  className="border border-white/40 font-ewangi text-[13px] text-white transition hover:bg-white hover:text-brand-ink"
                >
                  {t("lotExplorer.viewAllLots")}
                </button>
              </div>
            </div>

            {/* Tour is lazy-loaded behind a click to avoid an autoplay iframe blocking page load. */}
            <div
              className="relative mt-2 h-72 overflow-hidden lg:ml-2 lg:mt-0 lg:h-auto lg:flex-1"
              style={{ borderRadius: "27px" }}
            >
              {tourStarted ? (
                <iframe
                  src="https://ai.youvisit.app/mx/tour/f11pngptp7?pano=ajcm42xg7y&play=1"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  allow="fullscreen; gyroscope; accelerometer"
                  title={t("lotExplorer.iframeTitle")}
                />
              ) : (
                <button
                  onClick={() => setTourStarted(true)}
                  className="absolute inset-0 flex w-full flex-col items-center justify-center gap-4 bg-[#111] transition hover:bg-[#1a1a1a]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5 text-brand-ink">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-ewangi text-[1.1rem] text-white/80">{t("lotExplorer.startTourLabel")}</span>
                </button>
              )}

              <div className="absolute left-3 top-3 w-44 rounded-[9px] bg-[#1E1E1E]/90 p-3 lg:left-auto lg:right-4 lg:top-4 lg:w-46.75">
                <p className="font-ewangi text-[1rem] font-medium text-white mb-1">{activeLot}</p>
                <p className="font-ewangi text-[12px] text-white/70">
                  {lots.find((l) => l.id === activeLot)?.area}
                </p>
                <p className="font-ewangi text-[12px] text-white/70">{t("lotExplorer.residentialLabel")}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-brand-teal" />
                  <span className="font-ewangi text-[12px] text-brand-teal">{t("lotExplorer.availableLabel")}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ── COASTAL SANCTUARY ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[45%]">
            <h2 className="font-ewangi text-[clamp(2.5rem,5vw,3.9375rem)] leading-tight text-white">
              {t("coastalSanctuary.headingLine1")}<br />{t("coastalSanctuary.headingLine2")}
            </h2>
            <p className="mt-8 font-ewangi text-[1.375rem] leading-relaxed text-white/80">
              {t("coastalSanctuary.body")}
            </p>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
          <div className="flex-1">
            <div className="relative aspect-video overflow-hidden rounded-[15px]">
              <Image
                src={IMG_AMENITIES}
                alt={t("coastalSanctuary.amenitiesImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── YOUR NEW HOME IN BAJA ─────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">

        <RevealOnScroll direction="center">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={1.5} />
            <span className="font-ewangi text-[2.1875rem] text-brand-teal">
              {t("trustedSection.trustedLabel")}
            </span>
          </div>
          <div className="hidden h-px flex-1 bg-white/30 lg:block" />
          <a
            href="https://www.facebook.com/reel/1517193329340563"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[18px] bg-white px-8 py-5 transition hover:bg-white/90"
          >
            <span className="font-ewangi text-[2.25rem] text-brand-ink">
              {t("trustedSection.residentsLinkLabel")}
            </span>
          </a>
        </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[45%]">
            <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "1 / 1" }}>
              <Image
                src={IMG_PLAN}
                alt={t("newHome.planImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
            </div>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <h2 className="font-ewangi text-[clamp(2.5rem,5vw,3.9375rem)] leading-tight text-white">
              {t("newHome.headingLine1")}<br />{t("newHome.headingLine2")}
            </h2>
            <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-115">
              {t("newHome.body")}
            </p>
            <button className="mt-2 rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
              {t("newHome.button")}
            </button>
          </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
