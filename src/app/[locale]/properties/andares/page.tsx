"use client";
// Andares Santa Fe property page — hero with stats, lot explorer with Panoraven 360°, security and community sections.
import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui";
import { cn } from "@/lib/utils";

// Cloudinary delivery base — format and quality negotiated per-browser by Cloudinary.
const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO  = `${CLD}/hf_20260615_235527_0660507b-9010-447b-97cc-19d1ebca9800_rmqmxw.png`;
const IMG_SEC   = `${CLD}/Captura_de_pantalla_2026-06-15_a_las_4.50.14_p.m._k6wpgu.png`;
const IMG_BUILD = `${CLD}/Captura_de_pantalla_2026-06-15_a_las_4.51.21_p.m._esuqwr.png`;
const IMG_LOGO  = `${CLD}/Logo-lgo-andares_ybdmku.png`;

const stats = [
  { value: "300",  label: "Lots" },
  { value: "10",   label: "Condos" },
  { value: "2",    label: "Models" },
  { value: "45",   label: "Houses" },
  { value: "82%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = [
  "Legal reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

type Tab = "Lots" | "Club" | "Houses";

const lots = [
  { id: "Lot 12", area: "180 m²" },
  { id: "Lot 13", area: "120 m²" },
  { id: "Lot 14", area: "140 m²" },
  { id: "Lot 15", area: "115 m²" },
  { id: "Lot 16", area: "105 m²" },
];

export default function AndaresPage() {
  const [tab, setTab] = useState<Tab>("Lots");
  const [activeLot, setActiveLot] = useState("Lot 12");

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        {/* Background image */}
        <Image
          src={IMG_HERO}
          alt="Andares development aerial view"
          fill
          priority
          className="object-cover animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />

        {/* Dark gradient overlay — left dominant */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 5%, transparent 50%)" }}
        />

        {/* Logo — mobile only, absolute centered top */}
        <div className="absolute left-1/2 top-[38%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 lg:hidden">
          <Image
            src={IMG_LOGO}
            alt="Andares Santa Fe logo"
            width={145}
            height={114}
            className="w-24 brightness-0 invert"
          />
          <Image
            src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-04_yjsknz.png"
            alt="CMRE Certified"
            width={204}
            height={48}
            className="w-32"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-10 lg:px-20 lg:pt-10 lg:pb-12">

          {/* Stats bar — 3-col grid on mobile, inline row on larger screens; sizes scale up */}
          <div className="mb-auto grid grid-cols-3 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8 lg:gap-x-10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="font-ewangi text-xl leading-none text-white sm:text-3xl lg:text-[2.25rem]">{s.value}</span>
                <span className="font-ewangi text-xs text-white/80 sm:text-base lg:text-[1.25rem]">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Main content row */}
          <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            {/* Left — Andares logo + CMRE — desktop only */}
            <RevealOnScroll direction="left">
            <div className="hidden flex-col gap-6 lg:flex">
              <Image
                src={IMG_LOGO}
                alt="Andares Santa Fe logo"
                width={145}
                height={114}
                className="w-28 brightness-0 invert lg:w-36"
              />
              <Image
                src="https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-04_yjsknz.png"
                alt="CMRE Certified"
                width={204}
                height={48}
                className="w-40"
              />
            </div>
            </RevealOnScroll>

            {/* Right — headline + trust badges */}
            <div className="flex flex-col items-start gap-6 lg:items-end">
              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-x-6 gap-y-4 lg:flex lg:justify-end lg:gap-6">
                {trustBadges.map((b, i) => (
                  <div key={b} className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                    <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                  </div>
                ))}
              </div>

              {/* Headline */}
              <div className="lg:text-right">
                <h1 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-white animate-[fade-right_0.9s_ease-out_both]">
                  Own your<br />next chapter.
                </h1>
                <RevealOnScroll direction="up" delay={350}>
                <p className="mt-4 font-ewangi text-[1.25rem] text-white/80">
                  Land, Homes, and Opportunities That Last.
                </p>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOT EXPLORER ────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-10 lg:px-20">
        <RevealOnScroll direction="center" duration={1100}>
        <div className="mx-auto" style={{ maxWidth: "1318px" }}>
          <div className="flex flex-col lg:h-134.25 lg:flex-row">

            {/* Left panel — Figma: Rectangle 106, 482×537, #1E1E1E, radius 27.
                Full width on mobile; the map stacks below it. */}
            <div
              className="flex w-full flex-col bg-[#1E1E1E] p-7 lg:w-120.5 lg:shrink-0"
              style={{ borderRadius: "27px" }}
            >
              <p className="font-ewangi text-[1.1rem] text-white mb-4">
                Explore the development
              </p>

              {/* Tabs — active: teal bg, inactive: #EAEDF0, all dark text, 72×28 radius 4 */}
              <div className="flex gap-1.5 mb-4">
                {(["Lots", "Club", "Houses"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{ width: "72px", height: "28px", borderRadius: "4px" }}
                    className={cn(
                      "font-ewangi text-[13px] font-medium transition",
                      tab === t
                        ? "bg-brand-teal text-brand-ink"
                        : "bg-[#EAEDF0] text-brand-ink hover:bg-brand-teal/80"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <p className="font-ewangi text-[13px] text-white/50 mb-3">
                Select a lot to see details
              </p>

              {/* Lot rows — active: teal bg radius 4, height 40 */}
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

              {/* View all lots — Figma: 184×44, radius 5, outlined */}
              <div className="mt-5 flex justify-center">
                <button
                  style={{ width: "184px", height: "44px", borderRadius: "5px" }}
                  className="border border-white/40 font-ewangi text-[13px] text-white transition hover:bg-white hover:text-brand-ink"
                >
                  View all lots
                </button>
              </div>
            </div>

            {/* Map — 360° panorama embed */}
            <div
              className="relative mt-2 h-72 overflow-hidden lg:ml-2 lg:mt-0 lg:h-auto lg:flex-1"
              style={{ borderRadius: "27px" }}
            >
              <iframe
                src="https://panoraven.com/es/embed/E1mS8MSsQq"
                width="100%"
                height="100%"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                allow="fullscreen; gyroscope; accelerometer"
                title="Andares 360° virtual tour"
              />
            </div>

          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ── SECURITY ────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left */}
          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[45%]">
            <h2 className="font-ewangi text-[clamp(2.5rem,5vw,3.9375rem)] leading-tight text-white">
              Designed with Your<br />Safety in Mind
            </h2>
            <p className="mt-8 font-ewangi text-[1.375rem] leading-relaxed text-white/80">
              Our security gatehouse is designed to provide controlled access and enhance the safety of the entire community. By helping regulate entry and maintain a secure environment, it offers residents the confidence and peace of mind that come from knowing their families are protected in a thoughtfully planned neighborhood.
            </p>
          </div>
          </RevealOnScroll>

          {/* Right — security image */}
          <RevealOnScroll direction="right" delay={150} duration={1100}>
          <div className="flex-1">
            <div className="relative aspect-video overflow-hidden rounded-[15px]">
              <Image
                src={IMG_SEC}
                alt="Security gatehouse"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── BUILD / LIVE / GROW ──────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">

        {/* Testimonial / header row */}
        <RevealOnScroll direction="center">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={1.5} />
            <span className="font-ewangi text-[2.1875rem] text-brand-teal">
              Trusted by + 100 Families
            </span>
          </div>
          <div className="hidden h-px flex-1 bg-white/30 lg:block" />
          <div className="rounded-[18px] bg-white px-8 py-5">
            <span className="font-ewangi text-[2.25rem] text-brand-ink">
              Hear From Our Residents
            </span>
          </div>
        </div>
        </RevealOnScroll>

        {/* Main two-column */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* Left — image */}
          <RevealOnScroll direction="left" duration={1100}>
          <div className="lg:w-[55%]">
            <div className="relative aspect-video overflow-hidden rounded-[15px]">
              <Image
                src={IMG_BUILD}
                alt="Build, Live, and Grow at Andares"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
            </div>
          </div>
          </RevealOnScroll>

          {/* Right — headline + body + CTA */}
          <RevealOnScroll direction="right" delay={150} duration={1100}>
          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <h2 className="font-ewangi text-[clamp(2.5rem,5vw,3.9375rem)] leading-tight text-white">
              Build, Live,<br />and Grow
            </h2>
            <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-115">
              Whether you&apos;re looking for the perfect lot to build your dream home or a move-in-ready residence, Andares offers a community designed for those who value quality, security, and lasting value. Every detail has been carefully planned so you and your family can thrive.
            </p>
            <button className="mt-2 rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
              Talk to an expert
            </button>
          </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
