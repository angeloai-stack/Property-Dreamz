"use client";
// Costa Real page — Pacific coast community with lot explorer, Viento condo model, 360° tour, and The Estates section.
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO       = `${CLD}/costa-real/hero`;
const IMG_MAP        = `${CLD}/costa-real/map`;
const IMG_MODEL      = `${CLD}/costa-real/model-house`;
const IMG_INTERIOR   = `${CLD}/costa-real/interior`;
const IMG_ESTATES    = `${CLD}/costa-real/estates`;
const IMG_CMRE       = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Stat = { value: string; label: string };
type Lot = { id: string; size: string };
type ModelFeature = { icon: string; label: string };

export default function CostaRealPage() {
  const t = useTranslations("propertyCostaReal");
  const stats = t.raw("stats") as Stat[];
  const trustBadges = t.raw("trustBadges") as string[];
  const lotTabs = t.raw("lotExplorer.tabs") as string[];
  const lots = t.raw("lotExplorer.lots") as Lot[];
  const modelFeatures = t.raw("models.features") as ModelFeature[];

  const [activeTab, setActiveTab] = useState<string>(lotTabs[0]);
  const [selectedLot, setSelectedLot] = useState(lots[0]?.id);

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt={t("hero.heroImageAlt")}
          fill
          priority
          className="object-cover object-center animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 0%, rgba(23,23,23,0.55) 55%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-0 lg:px-20 lg:pt-12">

          {/* Real del Mar wordmark — top left */}
          <RevealOnScroll direction="left">
            <span className="font-ewangi text-[clamp(1.75rem,2.8vw,2.5rem)] tracking-wide text-white drop-shadow-md">
              Real del Mar
            </span>
          </RevealOnScroll>

          {/* Title + subtitle + badges */}
          <div className="mt-8 flex flex-col gap-5 lg:mt-10 lg:max-w-[58%]">
            <h1
              className="font-ewangi text-[clamp(2.5rem,7vw,6rem)] leading-none text-white animate-[fade-left_0.9s_ease-out_both]"
              style={{ textShadow: "10px 4px 11px rgba(0,0,0,0.61)" }}
            >
              {t("hero.headlineLine1")}<br />{t("hero.headlineLine2")}
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p
                className="font-ewangi text-[1.1rem] leading-relaxed text-white/80"
                style={{ textShadow: "12px 4px 9px rgba(0,0,0,0.58)" }}
              >
                {t("hero.subtitle")}
              </p>
            </RevealOnScroll>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              {trustBadges.map((b, i) => (
                <div key={b} className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CMRE left + 360° badge right */}
          <RevealOnScroll direction="up" delay={350}>
          <div className="mt-6 flex items-center justify-between">
            <Image
              src={IMG_CMRE}
              alt={t("hero.cmreAlt")}
              width={204}
              height={48}
              className="w-40 lg:w-48"
            />
            <div
              className="hidden flex-col items-center justify-center rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm lg:flex"
              style={{ width: "82px", height: "82px" }}
            >
              <span className="font-ewangi text-[1.1rem] text-white">{t("hero.tourBadgeValue")}</span>
              <span className="font-ewangi text-[0.75rem] text-white/70">{t("hero.tourBadgeLabel")}</span>
            </div>
          </div>
          </RevealOnScroll>

          {/* Stats banner — full-width strip at bottom */}
          <div className="mt-auto -mx-6 lg:-mx-20">
            <div className="flex flex-wrap items-center justify-around gap-x-4 gap-y-4 bg-black/30 px-6 py-6 backdrop-blur-sm lg:flex-nowrap lg:justify-between lg:px-20">
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center gap-1 animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="font-ewangi text-[1.75rem] leading-none text-white lg:text-[2.25rem]">{s.value}</span>
                  <span className="font-ewangi text-[0.9rem] text-white/80 lg:text-[1.1rem]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── EXPLORE DEVELOPMENT ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="left">
          <p className="mb-6 font-ewangi text-[1.25rem] text-white">
            {t("lotExplorer.sectionLabel")}
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="center" duration={1100}>

          {/* Mobile layout */}
          <div className="flex flex-col gap-5 lg:hidden">
            <div className="relative h-52 overflow-hidden rounded-3xl">
              <Image
                src={IMG_MAP}
                alt={t("lotExplorer.mapAlt")}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="flex gap-2">
              {lotTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-1 px-4 py-1.5 font-ewangi text-[0.9rem] transition",
                    tab === activeTab
                      ? "bg-brand-teal text-brand-ink"
                      : "bg-[#eaedf0] text-brand-ink hover:bg-brand-teal/70"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="font-ewangi text-[0.875rem] text-white/60">{t("lotExplorer.selectPrompt")}</p>
            <div className="flex flex-col overflow-hidden rounded-1">
              {lots.map((lot) => (
                <button
                  key={lot.id}
                  type="button"
                  onClick={() => setSelectedLot(lot.id)}
                  className={cn(
                    "flex items-center justify-between border-b border-white/10 px-3 py-2.5 text-left transition last:border-b-0",
                    lot.id === selectedLot ? "bg-brand-teal" : "hover:bg-white/10"
                  )}
                >
                  <span className={cn("font-ewangi text-[1rem]", lot.id === selectedLot ? "text-brand-ink" : "text-white")}>
                    {lot.id}
                  </span>
                  <span className={cn("font-ewangi text-[1rem]", lot.id === selectedLot ? "text-brand-ink" : "text-white/70")}>
                    {lot.size}
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="rounded-1.25 border border-white px-6 py-2.5 font-ewangi text-[1.1rem] text-white transition hover:bg-white/10"
            >
              {t("lotExplorer.viewAllButton")}
            </button>
          </div>

          {/* Desktop layout */}
          <div className="relative hidden overflow-hidden rounded-6.75 min-h-134.25 lg:block">
            <Image
              src={IMG_MAP}
              alt={t("lotExplorer.mapAlt")}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-y-0 left-0 z-10 flex w-[38%] flex-col gap-4 p-8"
              style={{ background: "rgba(30,30,30,0.85)", backdropFilter: "blur(2px)" }}
            >
              <div className="flex gap-2">
                {lotTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-1 px-4 py-1.5 font-ewangi text-[0.9rem] transition",
                      tab === activeTab
                        ? "bg-brand-teal text-brand-ink"
                        : "bg-[#eaedf0] text-brand-ink hover:bg-brand-teal/70"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <p className="font-ewangi text-[0.875rem] text-white/60">{t("lotExplorer.selectPrompt")}</p>
              <div className="flex flex-col overflow-hidden rounded-1">
                {lots.map((lot) => (
                  <button
                    key={lot.id}
                    type="button"
                    onClick={() => setSelectedLot(lot.id)}
                    className={cn(
                      "flex items-center justify-between border-b border-white/10 px-3 py-2.5 text-left transition last:border-b-0",
                      lot.id === selectedLot ? "bg-brand-teal" : "hover:bg-white/10"
                    )}
                  >
                    <span className={cn("font-ewangi text-[1rem]", lot.id === selectedLot ? "text-brand-ink" : "text-white")}>
                      {lot.id}
                    </span>
                    <span className={cn("font-ewangi text-[1rem]", lot.id === selectedLot ? "text-brand-ink" : "text-white/70")}>
                      {lot.size}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-auto">
                <button
                  type="button"
                  className="rounded-1.25 border border-white px-6 py-2.5 font-ewangi text-[1.1rem] text-white transition hover:bg-white/10"
                >
                  {t("lotExplorer.viewAllButton")}
                </button>
              </div>
            </div>
          </div>

        </RevealOnScroll>
      </section>

      {/* ── MODELS ────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <p className="mb-2 font-ewangi text-[1.5rem] text-white/70">Candé</p>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1">
              {/* Model name + nav arrows */}
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-ewangi text-[clamp(3rem,6vw,5rem)] leading-none text-white">Viento</p>
                  <p className="font-ewangi text-[1.25rem] text-white/60">{t("models.typeLabel")}</p>
                </div>
                <div className="ml-4 flex gap-2">
                  <button
                    type="button"
                    className="flex h-10.75 w-10.75 items-center justify-center rounded-3.25 border-[3px] border-white/40 transition hover:border-white"
                  >
                    <ChevronLeft className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    className="flex h-10.75 w-10.75 items-center justify-center rounded-3.25 border-[3px] border-white/40 transition hover:border-white"
                  >
                    <ChevronRight className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Specs */}
              <div className="flex gap-8">
                {modelFeatures.map((f) => (
                  <div key={f.label} className="flex flex-col items-center gap-1">
                    <span className="text-2xl text-brand-teal">{f.icon}</span>
                    <span className="font-ewangi text-[1.1rem] text-white">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="lg:w-[50%]">
              <div className="relative overflow-hidden rounded-3.75 aspect-465/310">
                <Image
                  src={IMG_MODEL}
                  alt={t("models.modelAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── 360 TOUR ──────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 pb-20 lg:px-20">
        <RevealOnScroll direction="center" duration={1100}>
        <div className="relative overflow-hidden rounded-6.5 aspect-1265/460">
          <Image
            src={IMG_INTERIOR}
            alt={t("tour.interiorAlt")}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-y-0 right-0 flex flex-col items-end justify-center gap-6 p-8 lg:w-[40%] lg:p-12"
            style={{ background: "linear-gradient(to left, rgba(30,30,30,0.92) 55%, transparent 100%)" }}
          >
            <h2 className="text-right font-ewangi text-[clamp(1.5rem,3vw,3.25rem)] leading-tight text-white">
              {t("tour.headingLine1")}<br />{t("tour.headingLine2")}<br />
              <span className="text-[#1e1e1e]" style={{ WebkitTextStroke: "1.5px white" }}>{t("tour.headingLine3")}</span>
            </h2>
            <Link
              href="https://my.matterport.com/show/?m=yD8wTRwFeSv"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2 bg-[#1e1e1e] px-10 py-4 font-ewangi text-[2rem] text-brand-teal transition hover:bg-[#2e2e2e]"
            >
              {t("tour.button")}
            </Link>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ── THE ESTATES ───────────────────────────────────────────────────── */}
      <section className="rounded-tl-12.5 rounded-tr-12.5 bg-white px-6 py-16 lg:px-20 lg:py-20">

        <RevealOnScroll direction="center">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-14">
            <div className="lg:flex-1">
              <h2 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-none text-brand-teal">
                The Estates
              </h2>
            </div>
            <div className="lg:w-[50%]">
              <div className="relative overflow-hidden rounded-3.75 aspect-1920/528">
                <Image
                  src={IMG_ESTATES}
                  alt={t("estates.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up">
          <p className="font-ewangi text-[1.25rem] leading-relaxed text-brand-ink/80 lg:max-w-[55%] whitespace-pre-line">
            {t("estates.body")}
          </p>
        </RevealOnScroll>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 pb-20 pt-4 lg:px-20 lg:pb-24">
        <RevealOnScroll direction="center">
          <div className="mx-auto flex max-w-5xl items-center justify-center rounded-2.5 bg-white px-8 py-6 shadow-[0_2px_32px_rgba(0,0,0,0.1)] lg:py-8">
            <p className="text-center font-ewangi text-[clamp(1.5rem,3.5vw,3rem)] text-brand-ink">
              {t("cta.text")}
            </p>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
