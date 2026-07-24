"use client";
// Laguna Bay page — oceanfront lots with two artificial lakes; hero uses a YouTube background video.
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_LOGO       = `${CLD}/laguna-bay/laguna-bay/logo`;
const IMG_MAP        = `${CLD}/laguna-bay/map`;
const IMG_LAKE       = `${CLD}/laguna-bay/laguna-bay/lake`;
const IMG_MASTERPLAN = `${CLD}/laguna-bay/laguna-bay/masterplan`;
const IMG_CMRE       = `${CLD}/CMRE_Logo-04_yjsknz.png`;

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

type LotTab = "Lots" | "Club" | "Houses";

const lots = [
  { id: "Lot 12", size: "180 m²" },
  { id: "Lot 13", size: "120 m²" },
  { id: "Lot 14", size: "140 m²" },
  { id: "Lot 15", size: "115 m²" },
  { id: "Lot 16", size: "105 m²" },
];

export default function LagunaBayPage() {
  const [activeTab, setActiveTab] = useState<LotTab>("Lots");
  const [selectedLot, setSelectedLot] = useState("Lot 12");

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-ink">

        {/* YouTube iframe sized to always cover the section — same cover technique as the Vimeo embeds. */}
        {/* YouTube background video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/z6-s4QiYlIA?autoplay=1&mute=1&loop=1&playlist=z6-s4QiYlIA&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
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
            allow="autoplay; fullscreen"
            title="Laguna Bay"
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.25) 0%, rgba(23,23,23,0.5) 55%, #171717 100%)" }}
        />

        {/* Logo — mobile only, absolute centered */}
        <div className="absolute left-1/2 top-[30%] z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 lg:hidden">
          <Image
            src={IMG_LOGO}
            alt="Laguna Bay"
            width={214}
            height={150}
            className="w-36"
          />
          <Image
            src={IMG_CMRE}
            alt="CMRE Certified"
            width={204}
            height={48}
            className="w-32"
          />
        </div>

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-0 pb-0 lg:px-20">

          {/* Stats banner — top */}
          <div className="-mx-6 lg:-mx-20 bg-black/30 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-around gap-x-4 gap-y-3 px-6 py-5 lg:flex-nowrap lg:justify-between lg:px-20">
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5 animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="font-ewangi text-[1.625rem] leading-none text-white lg:text-[2.25rem]">{s.value}</span>
                  <span className="font-ewangi text-[0.875rem] text-white/80 lg:text-[1.1rem]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom: logo+CMRE left — badges+title+subtitle right */}
          <div className="flex items-end justify-between gap-6 pb-10 lg:pb-14">

            {/* Left: Logo + CMRE */}
            <RevealOnScroll direction="left">
              <div className="hidden flex-col gap-3 lg:flex">
                <Image
                  src={IMG_LOGO}
                  alt="Laguna Bay"
                  width={214}
                  height={150}
                  className="w-36 lg:w-44"
                />
                <Image
                  src={IMG_CMRE}
                  alt="CMRE Certified"
                  width={204}
                  height={48}
                  className="w-40 lg:w-48"
                />
              </div>
            </RevealOnScroll>

            {/* Right: badges + title + subtitle */}
            <div className="flex flex-col items-start gap-5 lg:items-end lg:max-w-[62%]">

              <div className="grid grid-cols-3 gap-x-6 gap-y-4 lg:flex lg:justify-end lg:gap-x-10">
                {trustBadges.map((b, i) => (
                  <div key={b} className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                    <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                  </div>
                ))}
              </div>

              <h1
                className="font-ewangi text-[clamp(2.5rem,5.5vw,5rem)] leading-none text-white lg:text-right animate-[fade-right_0.9s_ease-out_0.1s_both]"
                style={{ textShadow: "10px 4px 11px rgba(0,0,0,0.61)" }}
              >
                Exclusive oceanfront<br />horizontal development
              </h1>

              <RevealOnScroll direction="up" delay={350}>
                <p
                  className="font-ewangi text-[1.1rem] leading-relaxed text-white/80 lg:text-right"
                  style={{ textShadow: "12px 4px 9px rgba(0,0,0,0.58)" }}
                >
                  The most exclusive oceanfront horizontal development in Rosarito, offering the best quality of life in Baja with a wide range of amenities and two impressive lakes by the sea.
                </p>
              </RevealOnScroll>

            </div>
          </div>

        </div>
      </section>

      {/* ── EXPLORE DEVELOPMENT ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll direction="left">
          <p className="mb-6 font-ewangi text-[1.25rem] text-white">
            Explore the development
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="center" duration={1100}>
        <div className="relative overflow-hidden rounded-6.75 min-h-134.25">
          <Image
            src={IMG_MAP}
            alt="Laguna Bay development map"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Left panel */}
          <div
            className="absolute inset-y-0 left-0 z-10 flex w-full flex-col gap-4 p-8 lg:w-[38%]"
            style={{ background: "rgba(30,30,30,0.85)", backdropFilter: "blur(2px)" }}
          >
            {/* Tabs */}
            <div className="flex gap-2">
              {(["Lots", "Club", "Houses"] as LotTab[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTab(t)}
                  className={cn(
                    "rounded-1 px-4 py-1.5 font-ewangi text-[0.9rem] transition",
                    t === activeTab
                      ? "bg-brand-teal text-brand-ink"
                      : "bg-[#eaedf0] text-brand-ink hover:bg-brand-teal/70"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            <p className="font-ewangi text-[0.875rem] text-white/60">Select a lot to see details</p>

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
                View all lots
              </button>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* ── IMPRESSIVE LAKE ───────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1">
              <h2 className="font-ewangi text-[clamp(2.5rem,4.5vw,3.875rem)] leading-tight text-white">
                Impressive lake
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-120">
                At Laguna Bay, you can enjoy various outdoor activities, including the opportunity to explore an impressive lake where you can fish, kayak, paddleboard, and more. It also features a pier and a beautiful viewpoint where you can relax.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="lg:w-[45%]">
              <div className="relative overflow-hidden rounded-3.75 aspect-square">
                <Image
                  src={IMG_LAKE}
                  alt="Laguna Bay lake and pier"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-10 lg:px-20">
        <RevealOnScroll direction="center">
        <div className="flex items-center gap-6 lg:gap-10">

          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={2} />
            <span className="font-ewangi text-[1.5rem] text-brand-teal lg:text-[2.1875rem]">
              Trusted by + 100 Families
            </span>
          </div>

          <div className="hidden h-px flex-1 bg-white/20 lg:block" />

          <Link
            href="https://www.facebook.com/reel/1517193329340563"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center justify-center rounded-4.5 bg-white px-8 py-5 font-ewangi text-[1.5rem] text-brand-ink transition hover:bg-white/90 lg:flex"
          >
            Hear From Our Residents
          </Link>

        </div>
        </RevealOnScroll>
      </section>

      {/* ── BUILD, LIVE, AND GROW ─────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[46%]">
              <div className="relative overflow-hidden rounded-6.5 aspect-1024/689">
                <Image
                  src={IMG_MASTERPLAN}
                  alt="Laguna Bay masterplan"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 46vw"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex flex-col gap-6 lg:flex-1 lg:items-end lg:text-right">
              <h2 className="font-ewangi text-[clamp(2rem,4.5vw,3.875rem)] leading-tight text-white">
                Build, Live, and Grow
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-130">
                {`Whether you're looking for the perfect lot to build your dream home or a move-in-ready residence, we offer options tailored to your lifestyle and goals. Discover a community designed for growth, comfort, and long-term value. Contact us today to learn more, schedule a visit, and find the opportunity that's right for you.`}
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] flex justify-center px-6 pb-20 lg:px-20 lg:pb-24">
        <RevealOnScroll direction="up">
          <button
            type="button"
            className="rounded-2.5 bg-brand-teal px-14 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90"
          >
            Talk to an expert
          </button>
        </RevealOnScroll>
      </section>

    </div>
  );
}
