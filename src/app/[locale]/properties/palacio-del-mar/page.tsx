"use client";
// Palacio del Mar page — hero uses a background video; move-in-ready luxury condos in Rosarito.
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_LOGO      = `${CLD}/palacio-del-mar/logo`;
const IMG_AMENITIES = `${CLD}/palacio-del-mar/amenities`;
const IMG_FLOOR     = `${CLD}/palacio-del-mar/floor-plan`;
const IMG_EXTERIOR  = `${CLD}/palacio-del-mar/exterior`;
const IMG_CMRE      = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type Stat = { value: string; label: string };
type Rooms = { livingRoom: string; bedroom: string; bathroom: string; kitchen: string; terrace: string };

export default function PalacioDelMarPage() {
  const t = useTranslations("propertyPalacioDelMar");
  const stats = t.raw("stats") as Stat[];
  const trustBadges = t.raw("trustBadges") as string[];
  const rooms = t.raw("amenities.rooms") as Rooms;
  const amenityRooms = [rooms.livingRoom, rooms.bedroom, rooms.bathroom, rooms.kitchen, rooms.terrace];
  const modelFeatures = t.raw("models.features") as string[];

  const [activeRoom, setActiveRoom] = useState(amenityRooms[0]);

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        {/* Background video hosted on developer's own CDN — autoplay+muted satisfies browser autoplay policy. */}
        <video
          src="https://palaciodelmar.com/wp-content/uploads/2025/06/palacio-del-mar-home-page-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover animate-[ken-burns_18s_ease-in-out_infinite_alternate]"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 5%, transparent 50%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-10 lg:pb-12">

          <div className="mb-auto flex flex-wrap gap-x-10 gap-y-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col animate-[fade-up_0.7s_ease-out_both]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-ewangi text-xl leading-none text-white sm:text-3xl lg:text-[2.25rem]">{s.value}</span>
                <span className="font-ewangi text-xs text-white/80 sm:text-base lg:text-[1.25rem]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <RevealOnScroll direction="left" className="absolute left-1/2 top-[38%] z-20 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
              <div className="flex flex-col items-center gap-6 lg:items-start">
                <Image
                  src={IMG_LOGO}
                  alt={t("hero.logoAlt")}
                  width={269}
                  height={130}
                  className="w-48 lg:w-64"
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
              <div className="flex w-full gap-2 lg:flex-wrap lg:gap-6 lg:justify-end">
                {trustBadges.map((b, i) => (
                  <div
                    key={b}
                    className="flex flex-1 flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                    style={{ animationDelay: `${250 + i * 150}ms` }}
                  >
                    <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                  </div>
                ))}
              </div>

              <div className="lg:text-right">
                <h1 className="font-ewangi text-[clamp(2.5rem,6vw,6rem)] leading-[0.92] text-white animate-[fade-right_0.9s_ease-out_0.15s_both]">
                  {t("hero.headlineLine1")}<br />{t("hero.headlineLine2")}
                </h1>
                <RevealOnScroll direction="up" delay={350}>
                  <p className="mt-4 font-ewangi text-[1.1rem] text-white/80 lg:max-w-140">
                    {t("hero.subheadline")}
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ─────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="center">
          <h2 className="mb-10 text-center font-ewangi text-[clamp(1.5rem,3vw,2.25rem)] text-white">
            {t("amenities.heading")}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" duration={1100}>

          {/* Mobile layout */}
          <div className="flex flex-col gap-5 lg:hidden">
            <div className="relative h-65 overflow-hidden rounded-3xl">
              <Image
                src={IMG_AMENITIES}
                alt={t("amenities.imageAlt")}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(23,23,23,0.85) 0%, transparent 60%)" }}
              />
              <p className="absolute bottom-4 left-5 font-ewangi text-[1.25rem] text-brand-teal">
                {activeRoom}
              </p>
            </div>
            <p className="font-ewangi text-[1rem] leading-relaxed text-white/80">
              {t("amenities.body1")}
            </p>
            <p className="font-ewangi text-[0.9rem] text-white/60">
              {t("amenities.body2")}
            </p>
            <div className="flex flex-wrap gap-2">
              {amenityRooms.map((room) => (
                <button
                  key={room}
                  onClick={() => setActiveRoom(room)}
                  className={cn(
                    "rounded-[5px] px-4 py-2 font-ewangi text-[0.9rem] transition",
                    activeRoom === room
                      ? "bg-brand-teal text-brand-ink"
                      : "bg-[#1e1e1e] text-white hover:bg-white/10"
                  )}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="relative hidden min-h-130 overflow-hidden rounded-[30px] lg:block">
            <Image
              src={IMG_AMENITIES}
              alt={t("amenities.imageAlt")}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
            <div className="absolute inset-0 flex flex-col justify-center p-12 lg:w-[58%]">
              <p className="max-w-130 font-ewangi text-[1.25rem] leading-relaxed text-white">
                {t("amenities.body1")}
              </p>
              <p className="mt-4 max-w-130 font-ewangi text-[1rem] text-white/80">
                {t("amenities.body2")}
              </p>
            </div>
            <div
              className="absolute inset-y-0 right-0 flex w-[38%] flex-col justify-center gap-2 p-10"
              style={{ background: "linear-gradient(to left, rgba(23,23,23,0.92) 55%, transparent 100%)" }}
            >
              {amenityRooms.map((room) => (
                <button
                  key={room}
                  onClick={() => setActiveRoom(room)}
                  className={cn(
                    "rounded-[5px] px-5 py-3 text-left font-ewangi text-[1.1rem] transition",
                    activeRoom === room
                      ? "bg-brand-teal text-brand-ink"
                      : "bg-[#1e1e1e] text-white hover:bg-white/10"
                  )}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

        </RevealOnScroll>
      </section>

      {/* ── MODELS + FINISHED RESIDENCES (light bg) ───────────────────── */}
      <section className="rounded-tl-[50px] rounded-tr-[50px] bg-[#d9d9d9] px-8 pt-16 pb-20 lg:px-20">

        {/* Models */}
        <div className="mb-16">
          <RevealOnScroll direction="left">
            <div className="mb-8 flex items-center gap-4">
              <p className="font-ewangi text-[1.25rem] text-brand-ink">{t("models.heading")}</p>
              <button className="flex h-10 w-10 items-center justify-center rounded-[13px] border-2 border-brand-ink transition hover:bg-brand-ink/10">
                <ChevronLeft className="h-5 w-5 text-brand-ink" strokeWidth={2.5} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-[13px] border-2 border-brand-ink transition hover:bg-brand-ink/10">
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

            <RevealOnScroll direction="right" delay={100} duration={1100}>
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

        {/* Finished residences */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[46%]">
              <div className="relative aspect-video overflow-hidden rounded-[26px]">
                <Image
                  src={IMG_EXTERIOR}
                  alt={t("finishedResidences.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 46vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1 lg:items-end lg:text-right">
              <h2 className="font-ewangi text-[clamp(2.5rem,4vw,3.75rem)] leading-tight text-brand-ink">
                {t("finishedResidences.headingLine1")}<br />{t("finishedResidences.headingLine2")}
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-brand-ink/80 lg:max-w-130">
                {t("finishedResidences.body")}
              </p>
              <button className="mt-2 rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
                {t("finishedResidences.button")}
              </button>
            </div>
          </RevealOnScroll>
        </div>

      </section>

    </div>
  );
}
