"use client";
// Punta Piedra Misión page — Ensenada coastal lots, Santo Tomás house model, 360° Matterport tour, and location map.
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Maximize2, BedDouble, Bath } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO     = `${CLD}/punta-piedra/punta-piedra/hero`;
const IMG_LOGO     = `${CLD}/punta-piedra/punta-piedra/logo`;
const IMG_MAP      = `${CLD}/punta-piedra/punta-piedra/explore-aerial`;
const IMG_MODEL    = `${CLD}/punta-piedra/punta-piedra/model-santo-tomas`;
const IMG_TOUR     = `${CLD}/punta-piedra/punta-piedra/tour-interior`;
const IMG_LOCATION = `${CLD}/punta-piedra/punta-piedra/location-map`;
const IMG_CMRE     = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Tab = "lots" | "condos" | "houses";
const tabKeys: Tab[] = ["lots", "condos", "houses"];

export default function PuntaPiedraPage() {
  const t = useTranslations("propertyPuntaPiedra");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const trustBadges = t.raw("trustBadges") as string[];
  const lots = t.raw("lotExplorer.lots") as { id: string; area: string }[];

  const [tab, setTab] = useState<Tab>("lots");
  const [activeLot, setActiveLot] = useState(lots[0]?.id ?? "");

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
          style={{ background: "linear-gradient(to right, #171717 35%, transparent 70%)" }}
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
            height={55}
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

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-32 lg:px-20 lg:pt-10 lg:pb-12">

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
                  height={55}
                  className="w-44 lg:w-56"
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
                {tabKeys.map((k) => (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    style={{ width: "72px", height: "28px", borderRadius: "4px" }}
                    className={cn(
                      "font-ewangi text-[13px] font-medium transition",
                      tab === k
                        ? "bg-brand-teal text-brand-ink"
                        : "bg-[#EAEDF0] text-brand-ink hover:bg-brand-teal/80"
                    )}
                  >
                    {t(`lotExplorer.tabs.${k}`)}
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

            <div
              className="relative mt-2 h-72 overflow-hidden lg:ml-2 lg:mt-0 lg:h-auto lg:flex-1"
              style={{ borderRadius: "27px" }}
            >
              <Image
                src={IMG_MAP}
                alt={t("lotExplorer.mapImageAlt")}
                fill
                className="object-cover"
                sizes="836px"
              />

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

      {/* ── HOUSE MODELS ──────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1">
              <p className="font-ewangi text-[1.375rem] text-white/60">{t("houseModels.label")}</p>
              <h2 className="font-ewangi text-[clamp(3rem,5vw,4rem)] leading-tight text-white">
                {t("houseModels.name")}
              </h2>
              <div className="flex flex-wrap items-start gap-8 pt-2">
                <div className="flex flex-col gap-2">
                  <Maximize2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[1.375rem] text-white">{t("houseModels.areaValue")}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <BedDouble className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[1.375rem] text-white">{t("houseModels.bedroomLabel")}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Bath className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[1.375rem] text-white">{t("houseModels.bathroomLabel")}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="w-full lg:w-[38%]">
              <div className="relative mx-auto overflow-hidden rounded-[15px]" style={{ maxWidth: "340px", aspectRatio: "441/839" }}>
                <Image
                  src={IMG_MODEL}
                  alt={t("houseModels.modelImageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 80vw, 38vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── 360 TOUR ──────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 pb-16 lg:px-20 lg:pb-20">
        <RevealOnScroll direction="up" duration={1100}>
        <div className="relative overflow-hidden rounded-[26px]" style={{ minHeight: "460px" }}>
          <Image
            src={IMG_TOUR}
            alt={t("tour.tourImageAlt")}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-y-0 right-0 flex w-full flex-col items-end justify-center gap-6 p-8 lg:w-[42%] lg:p-12"
            style={{ background: "linear-gradient(to left, rgba(0,0,0,0.82) 55%, transparent 100%)" }}
          >
            <h2 className="font-ewangi text-[clamp(2rem,3.5vw,3.4375rem)] leading-tight text-white text-right">
              {t("tour.headingLine1")}<br />{t("tour.headingLine2")}<br />{t("tour.headingLine3")}
            </h2>
            <a
              href="https://my.matterport.com/show/?m=yD8wTRwFeSv"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2 bg-[#1e1e1e] px-8 py-4 font-ewangi text-[2.25rem] text-brand-teal transition hover:bg-brand-teal hover:text-brand-ink"
            >
              {t("tour.cta")}
            </a>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ── YOUR DREAM HOME / LOCATION ────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[45%]">
              <h2 className="font-ewangi text-[clamp(3rem,6vw,6rem)] leading-tight text-brand-teal">
                {t("dreamHome.headingLine1")}<br />{t("dreamHome.headingLine2")}
              </h2>
              <p className="mt-8 font-ewangi text-[1.375rem] leading-relaxed text-white/80">
                {t("dreamHome.body")}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex-1">
              <div className="relative aspect-video overflow-hidden rounded-[15px]">
                <Image
                  src={IMG_LOCATION}
                  alt={t("dreamHome.locationImageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── CERTIFY BANNER ────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 pb-20 lg:px-20">
        <RevealOnScroll direction="center">
          <div className="flex items-center justify-center rounded-[18px] bg-brand-teal px-8 py-8">
            <p className="font-ewangi text-center text-[clamp(1.5rem,3vw,2.5rem)] text-brand-ink">
              {t("certifyBanner.text")}
            </p>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
