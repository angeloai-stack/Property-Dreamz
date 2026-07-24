"use client";
// NAOS beachfront condos page — interior room explorer, floor plan carousel, and CTA section on a light background.
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO     = `${CLD}/naos/hero`;
const IMG_LOGO     = `${CLD}/naos/logo`;
const IMG_INTERIOR = `${CLD}/naos/interior`;
const IMG_FLOOR    = `${CLD}/naos/floor-plan`;
const IMG_CTA      = `${CLD}/naos/cta`;
const IMG_CMRE     = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Stat = { value: string; label: string };
type RoomKey = "livingRoom" | "bedroom" | "bathroom" | "kitchen" | "terrace";
type Room = { description: string; sub: string };

const ROOM_ORDER: RoomKey[] = ["livingRoom", "bedroom", "bathroom", "kitchen", "terrace"];

export default function NaosPage() {
  const t = useTranslations("propertyNaos");
  const stats = t.raw("stats") as Stat[];
  const trustBadges = t.raw("trustBadges") as string[];
  const tabs = t.raw("interiorExplorer.tabs") as Record<RoomKey, string>;
  const rooms = t.raw("interiorExplorer.rooms") as Record<RoomKey, Room>;
  const modelFeatures = t.raw("models.features") as string[];

  const [activeRoom, setActiveRoom] = useState<RoomKey>("livingRoom");

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt="NAOS beachfront development"
          fill
          priority
          className="object-cover object-center animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 3%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-12 lg:pb-14">

          {/* Title + description + badges */}
          <div className="flex flex-col gap-7 lg:max-w-[56%]">
            <h1
              className="font-ewangi text-[clamp(2.5rem,6.5vw,6rem)] leading-none text-white animate-[fade-left_0.9s_ease-out_both]"
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
            {/* Trust badges — staggered */}
            <div className="flex w-full gap-2">
              {trustBadges.map((b, i) => (
                <div
                  key={b}
                  className="flex flex-1 flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                  style={{ animationDelay: `${420 + i * 150}ms` }}
                >
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                </div>
              ))}
            </div>

            {/* NAOS logo — mobile only, below badges */}
            <div className="flex justify-center lg:hidden">
              <Image
                src={IMG_LOGO}
                alt={t("hero.logoAlt")}
                width={132}
                height={58}
                className="w-32 brightness-0 invert"
              />
            </div>
          </div>

          {/* Bottom row: stats left + logo/CMRE right */}
          <div className="mt-auto flex items-end justify-between gap-8">

            <div className="flex flex-wrap gap-x-10 gap-y-3 sm:gap-x-14">
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

            {/* Logo + CMRE — bottom right */}
            <RevealOnScroll direction="right" delay={150}>
            <div className="hidden shrink-0 flex-col items-end gap-3 lg:flex">
              <Image
                src={IMG_LOGO}
                alt={t("hero.logoAlt")}
                width={132}
                height={58}
                className="w-36 brightness-0 invert"
              />
              <Image
                src={IMG_CMRE}
                alt={t("hero.cmreAlt")}
                width={135}
                height={32}
                className="w-36"
              />
            </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── INTERIOR EXPLORER ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">

        <RevealOnScroll direction="center">
        <div className="mb-10 flex items-center gap-6">
          <div className="hidden h-px flex-1 bg-white/30 lg:block" />
          <h2 className="text-center font-ewangi text-[clamp(1.25rem,2.5vw,2.25rem)] text-white">
            {t("interiorExplorer.heading")}
          </h2>
          <div className="hidden h-px flex-1 bg-white/30 lg:block" />
        </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" duration={1100}>

          {/* Mobile layout */}
          <div className="flex flex-col gap-5 lg:hidden">
            <div className="relative h-65 overflow-hidden rounded-3xl">
              <Image
                src={IMG_INTERIOR}
                alt={t("interiorExplorer.imageAlt")}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(23,23,23,0.85) 0%, transparent 60%)" }}
              />
              <p className="absolute bottom-4 left-5 font-ewangi text-[1.25rem] text-brand-teal">
                {tabs[activeRoom]}
              </p>
            </div>
            <p className="font-ewangi text-[1rem] leading-relaxed text-white/80">
              {rooms[activeRoom].description}
            </p>
            <p className="font-ewangi text-[0.9rem] text-white/60">
              {rooms[activeRoom].sub}
            </p>
            <div className="flex flex-wrap gap-2">
              {ROOM_ORDER.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveRoom(key)}
                  className={cn(
                    "rounded-[5px] px-4 py-2 font-ewangi text-[0.9rem] transition",
                    key === activeRoom
                      ? "bg-[#1e1e1e] text-brand-teal"
                      : "border border-white/40 bg-white text-brand-ink hover:bg-white/90"
                  )}
                >
                  {tabs[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop layout */}
          <div
            className="relative mx-auto hidden overflow-hidden rounded-[60px] lg:block"
            style={{ maxWidth: "1283px", minHeight: "524px" }}
          >
            <Image
              src={IMG_INTERIOR}
              alt={t("interiorExplorer.imageAlt")}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 rounded-[60px]"
              style={{ background: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(30,30,30,0.62) 100%)" }}
            />
            <div className="absolute inset-0 flex flex-col justify-center p-10 lg:left-[56.66%]">
              <div className="rounded-[20px] bg-white/10 p-6 backdrop-blur-sm">
                <p className="font-ewangi text-[1.375rem] leading-relaxed text-white">
                  {rooms[activeRoom].description}
                </p>
                <p className="mt-4 font-ewangi text-[1rem] text-white/80">
                  {rooms[activeRoom].sub}
                </p>
                <div className="mt-6 flex flex-col items-start gap-1.5">
                  {ROOM_ORDER.map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveRoom(key)}
                      style={{ width: "152px", height: "36px", borderRadius: "5px" }}
                      className={cn(
                        "font-ewangi text-[1rem] text-center transition",
                        key === activeRoom
                          ? "bg-[#1e1e1e] text-brand-teal"
                          : "border border-white/40 bg-white text-brand-ink hover:bg-white/90"
                      )}
                    >
                      {tabs[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </RevealOnScroll>
      </section>

      {/* ── MODELS + CTA (light bg) ────────────────────────────────────── */}
      <section className="rounded-tl-[50px] rounded-tr-[50px] bg-[#d9d9d9] px-8 pt-16 pb-20 lg:px-20">

        {/* Models */}
        <div className="mb-16">
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

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <RevealOnScroll direction="left" delay={100} duration={1100}>
            <div className="lg:w-[42%]">
              <h2 className="font-ewangi text-[clamp(2rem,3.5vw,3.25rem)] leading-tight text-brand-ink">
                {t("models.layoutLabel")} —{" "}
                <span className="text-brand-teal">{t("models.layoutSize")}</span>
              </h2>
              <ul className="mt-6 space-y-1.5">
                {modelFeatures.map((f) => (
                  <li key={f} className="font-ewangi text-[1.25rem] text-brand-ink">{f}</li>
                ))}
              </ul>
            </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100} duration={1100} className="flex-1">
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "4096/2845" }}>
                <Image
                  src={IMG_FLOOR}
                  alt={t("models.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
              </div>
            </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[46%]">
            <div className="relative overflow-hidden rounded-[26px]" style={{ aspectRatio: "663/370" }}>
              <Image
                src={IMG_CTA}
                alt={t("cta.imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 46vw"
              />
            </div>
          </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100} className="lg:flex-1">
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
