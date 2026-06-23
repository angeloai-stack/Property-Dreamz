"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO       = `${CLD}/costa-real/hero`;
const IMG_LOGO       = `${CLD}/costa-real/logo`;
const IMG_MAP        = `${CLD}/costa-real/map`;
const IMG_MODEL      = `${CLD}/costa-real/model-house`;
const IMG_INTERIOR   = `${CLD}/costa-real/interior`;
const IMG_ESTATES    = `${CLD}/costa-real/estates`;
const IMG_CMRE       = `${CLD}/CMRE_Logo-04_yjsknz.png`;

const stats = [
  { value: "120",  label: "Lots" },
  { value: "25",   label: "Condos" },
  { value: "5",    label: "Models" },
  { value: "80",   label: "Houses" },
  { value: "70%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = [
  "Legal reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

type LotTab = "Lots" | "Condos" | "Houses";

const lots = [
  { id: "Lot 12", size: "300 m²" },
  { id: "Lot 13", size: "300 m²" },
  { id: "Lot 14", size: "320 m²" },
  { id: "Lot 15", size: "315 m²" },
  { id: "Lot 16", size: "305 m²" },
];

const modelFeatures = [
  { icon: "📐", label: "55 m²" },
  { icon: "🛏", label: "1 Bedroom" },
  { icon: "🚿", label: "1 Bathroom" },
];

export default function CostaRealPage() {
  const [activeTab, setActiveTab] = useState<LotTab>("Lots");
  const [selectedLot, setSelectedLot] = useState("Lot 12");

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt="Costa Real coastal development"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(23,23,23,0.15) 0%, rgba(23,23,23,0.55) 55%, #171717 100%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-8 pb-0 lg:px-20 lg:pt-12">

          {/* Costa Real wordmark — top left */}
          <div>
            <Image
              src={IMG_LOGO}
              alt="Costa Real"
              width={319}
              height={24}
              className="h-auto w-52 lg:w-64 brightness-0 invert"
            />
          </div>

          {/* Title + subtitle + badges */}
          <div className="mt-8 flex flex-col gap-5 lg:mt-10 lg:max-w-[58%]">
            <h1
              className="font-ewangi text-[clamp(2.5rem,7vw,6rem)] leading-[1.0] text-white"
              style={{ textShadow: "10px 4px 11px rgba(0,0,0,0.61)" }}
            >
              Live Beyond<br />the Ordinary
            </h1>
            <p
              className="font-ewangi text-[1.1rem] leading-relaxed text-white/80"
              style={{ textShadow: "12px 4px 9px rgba(0,0,0,0.58)" }}
            >
              A private coastal community on the shores of the Pacific, designed for those who live with intention.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {trustBadges.map((b) => (
                <div key={b} className="flex flex-col items-center gap-1.5">
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CMRE left + 360° badge right */}
          <div className="mt-6 flex items-center justify-between">
            <Image
              src={IMG_CMRE}
              alt="CMRE Certified"
              width={204}
              height={48}
              className="w-40 lg:w-48"
            />
            <div
              className="hidden flex-col items-center justify-center rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm lg:flex"
              style={{ width: "82px", height: "82px" }}
            >
              <span className="font-ewangi text-[1.1rem] text-white">360°</span>
              <span className="font-ewangi text-[0.75rem] text-white/70">view</span>
            </div>
          </div>

          {/* Stats banner — full-width strip at bottom */}
          <div className="mt-auto -mx-6 lg:-mx-20">
            <div className="flex flex-wrap items-center justify-around gap-x-4 gap-y-4 bg-black/30 px-6 py-6 backdrop-blur-sm lg:flex-nowrap lg:justify-between lg:px-20">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
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
        <p className="mb-6 font-ewangi text-[1.25rem] text-white">
          Explore the development
        </p>

        <div className="relative overflow-hidden rounded-[27px]" style={{ minHeight: "537px" }}>
          <Image
            src={IMG_MAP}
            alt="Costa Real development map"
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
              {(["Lots", "Condos", "Houses"] as LotTab[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTab(t)}
                  className={cn(
                    "rounded-[4px] px-4 py-1.5 font-ewangi text-[0.9rem] transition",
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

            <div className="flex flex-col overflow-hidden rounded-[4px]">
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
                className="rounded-[5px] border border-white px-6 py-2.5 font-ewangi text-[1.1rem] text-white transition hover:bg-white/10"
              >
                View all lots
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODELS ────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <p className="mb-2 font-ewangi text-[1.5rem] text-white/70">Candé</p>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">

          <div className="flex flex-col gap-6 lg:flex-1">
            {/* Model name + nav arrows */}
            <div className="flex items-center gap-4">
              <div>
                <p className="font-ewangi text-[clamp(3rem,6vw,5rem)] leading-none text-white">Viento</p>
                <p className="font-ewangi text-[1.25rem] text-white/60">Condo</p>
              </div>
              <div className="ml-4 flex gap-2">
                <button
                  type="button"
                  style={{ width: "43px", height: "43px", borderRadius: "13px" }}
                  className="flex items-center justify-center border-[3px] border-white/40 transition hover:border-white"
                >
                  <ChevronLeft className="h-5 w-5 text-white" strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  style={{ width: "43px", height: "43px", borderRadius: "13px" }}
                  className="flex items-center justify-center border-[3px] border-white/40 transition hover:border-white"
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

          <div className="lg:w-[50%]">
            <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "465/310" }}>
              <Image
                src={IMG_MODEL}
                alt="Viento Condo model"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 360 TOUR ──────────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 pb-20 lg:px-20">
        <div className="relative overflow-hidden rounded-[26px]" style={{ aspectRatio: "1265/460" }}>
          <Image
            src={IMG_INTERIOR}
            alt="Costa Real interior living room"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-y-0 right-0 flex flex-col items-end justify-center gap-6 p-8 lg:w-[40%] lg:p-12"
            style={{ background: "linear-gradient(to left, rgba(30,30,30,0.92) 55%, transparent 100%)" }}
          >
            <h2 className="text-right font-ewangi text-[clamp(1.5rem,3vw,3.25rem)] leading-tight text-white">
              {"Let's take a "}<br />look from your<br />
              <span className="text-[#1e1e1e]" style={{ WebkitTextStroke: "1.5px white" }}>next home.</span>
            </h2>
            <Link
              href="https://my.matterport.com/show/?m=yD8wTRwFeSv"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[8px] bg-[#1e1e1e] px-10 py-4 font-ewangi text-[2rem] text-brand-teal transition hover:bg-[#2e2e2e]"
            >
              360 tour
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE ESTATES ───────────────────────────────────────────────────── */}
      <section className="rounded-tl-[50px] rounded-tr-[50px] bg-white px-6 py-16 lg:px-20 lg:py-20">

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:flex-1">
            <h2 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-none text-brand-teal">
              The Estates
            </h2>
          </div>
          <div className="lg:w-[50%]">
            <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "1920/528" }}>
              <Image
                src={IMG_ESTATES}
                alt="The Estates aerial view"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <p className="font-ewangi text-[1.25rem] leading-relaxed text-brand-ink/80 lg:max-w-[55%]">
          The Estates is a residential development spanning approximately 34 hectares, featuring 123 ranch-style lots with an average area of 2,000 m² each. Designed to preserve the balance between built space and open land, each lot includes intentional setback restrictions — ensuring that nature remains the backdrop, not an afterthought.
          <br /><br />
          The main circuit, secondary streets, and pedestrian pathways follow the natural topography in graceful curves, guiding residents through a landscape that reveals new views and quiet moments at every turn.
        </p>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 pb-20 pt-4 lg:px-20 lg:pb-24">
        <div className="mx-auto flex max-w-5xl items-center justify-center rounded-[10px] bg-white px-8 py-6 shadow-[0_2px_32px_rgba(0,0,0,0.1)] lg:py-8">
          <p className="text-center font-ewangi text-[clamp(1.5rem,3.5vw,3rem)] text-brand-ink">
            We certify so you can build your future
          </p>
        </div>
      </section>

    </div>
  );
}
