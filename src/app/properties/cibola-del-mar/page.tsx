"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Maximize2, BedDouble, Bath } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO     = `${CLD}/cibola-del-mar/hero`;
const IMG_LOGO     = `${CLD}/cibola-del-mar/logo`;
const IMG_MAP      = `${CLD}/cibola-del-mar/map`;
const IMG_MODELS   = `${CLD}/cibola-del-mar/unit-models`;
const IMG_TOUR     = `${CLD}/cibola-del-mar/tour-bg`;
const IMG_SITEPLAN = `${CLD}/cibola-del-mar/site-plan`;
const IMG_CMRE     = `${CLD}/CMRE_Logo-04_yjsknz.png`;

const stats = [
  { value: "120",  label: "Lots" },
  { value: "25",   label: "Condos" },
  { value: "5",    label: "Models" },
  { value: "80",   label: "Houses" },
  { value: "70%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = [
  "Title reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

type LotTab = "Lots" | "Condos" | "Houses";

const lots = [
  { id: "Lot A-1", area: "320 m²" },
  { id: "Lot A-2", area: "290 m²" },
  { id: "Lot A-3", area: "350 m²" },
  { id: "Lot B-1", area: "410 m²" },
  { id: "Lot B-2", area: "285 m²" },
];

const unitModels = [
  { name: "Quintas II", area: "78 m²", bedrooms: 2, bathrooms: 2 },
];

export default function CibolaDelMarPage() {
  const [lotTab, setLotTab] = useState<LotTab>("Lots");
  const [activeLot, setActiveLot] = useState("Lot A-1");
  const [modelIndex, setModelIndex] = useState(0);

  const currentModel = unitModels[modelIndex];
  const selectedLot = lots.find(l => l.id === activeLot);

  return (
    <div className="overflow-x-hidden bg-[#171717] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt="Cíbola del Mar aerial coastal view"
          fill
          priority
          className="object-cover object-center animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #171717 30%, transparent 75%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 5%, transparent 50%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col justify-between px-6 pt-8 pb-10 lg:px-20 lg:pt-10 lg:pb-12">

          {/* Logo — top */}
          <div>
            <Image
              src={IMG_LOGO}
              alt="Cíbola del Mar"
              width={200}
              height={100}
              className="w-36 lg:w-44 animate-[fade-left_0.6s_ease-out_both]"
            />
          </div>

          {/* Title block — middle */}
          <div className="flex flex-col gap-5 lg:max-w-[55%]">
            <h1 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-[0.93] text-white animate-[fade-left_0.9s_ease-out_both]">
              Build on the<br />Pacific Edge.
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p className="font-ewangi text-[1.1rem] leading-relaxed text-white/80">
                Oceanfront residences in Ensenada,<br className="hidden sm:block" /> Baja California.
              </p>
            </RevealOnScroll>
            <div className="mt-2 flex w-full gap-2">
              {trustBadges.map((b, i) => (
                <div
                  key={b}
                  className="flex flex-1 flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                  style={{ animationDelay: `${350 + i * 150}ms` }}
                >
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: CMRE + 360° + stats */}
          <div className="flex flex-col gap-5">
            <div className="flex items-end justify-between">
              <Image
                src={IMG_CMRE}
                alt="CMRE Certified"
                width={204}
                height={48}
                className="w-44 animate-[fade-up_0.8s_ease-out_0.5s_both]"
              />
              <button className="hidden lg:flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30 transition hover:bg-white/25">
                <span className="font-ewangi text-[1.125rem] leading-none text-white">360°</span>
                <span className="font-ewangi text-[0.8rem] text-white/70">view</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 lg:gap-x-14">
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
          </div>

        </div>
      </section>

      {/* ── LOT EXPLORER ──────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-10 lg:px-20">
        <RevealOnScroll direction="center" duration={1100}>

          {/* Mobile layout */}
          <div className="flex flex-col gap-5 lg:hidden">
            <div className="relative h-52 overflow-hidden rounded-3xl">
              <Image
                src={IMG_MAP}
                alt="Cíbola del Mar development map"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <p className="font-ewangi text-[1.1rem] text-white">Explore the development</p>
            <div className="flex gap-1.5">
              {(["Lots", "Condos", "Houses"] as LotTab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setLotTab(t)}
                  className={cn(
                    "rounded-sm px-4 py-1.5 font-ewangi text-[13px] font-medium transition",
                    lotTab === t
                      ? "bg-brand-teal text-brand-ink"
                      : "bg-[#EAEDF0] text-brand-ink hover:bg-brand-teal/80"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="font-ewangi text-[13px] text-white/50">Select a lot to see details</p>
            <div className="flex flex-col overflow-hidden rounded-sm">
              {lots.map((lot, i) => (
                <button
                  key={lot.id}
                  onClick={() => setActiveLot(lot.id)}
                  className={cn(
                    "flex w-full items-center justify-between px-2 py-2.5 font-ewangi text-[13px] transition",
                    activeLot === lot.id
                      ? "rounded-sm bg-brand-teal text-brand-ink"
                      : "text-white hover:bg-white/10",
                    i > 0 && "border-t border-white/10"
                  )}
                >
                  <span>{lot.id}</span>
                  <span>{lot.area}</span>
                </button>
              ))}
            </div>
            <button className="w-full rounded-[5px] border border-white/40 py-3 font-ewangi text-[13px] text-white transition hover:bg-white hover:text-brand-ink">
              View all lots
            </button>
          </div>

          {/* Desktop layout */}
          <div className="mx-auto hidden overflow-hidden rounded-[27px] lg:block" style={{ maxWidth: "1318px" }}>
            <div className="relative flex" style={{ minHeight: "537px" }}>
              <div className="absolute inset-0">
                <Image
                  src={IMG_MAP}
                  alt="Cíbola del Mar development map"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
              <div
                className="relative z-10 flex w-[36%] shrink-0 flex-col p-7"
                style={{ background: "rgba(23,23,23,0.9)", minHeight: "537px" }}
              >
                <p className="font-ewangi text-[1.1rem] text-white mb-4">Explore the development</p>
                <div className="flex gap-1.5 mb-4">
                  {(["Lots", "Condos", "Houses"] as LotTab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setLotTab(t)}
                      className={cn(
                        "rounded-sm px-4 py-1.5 font-ewangi text-[13px] font-medium transition",
                        lotTab === t
                          ? "bg-brand-teal text-brand-ink"
                          : "bg-[#EAEDF0] text-brand-ink hover:bg-brand-teal/80"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="font-ewangi text-[13px] text-white/50 mb-3">Select a lot to see details</p>
                <div className="flex-1">
                  {lots.map((lot, i) => (
                    <button
                      key={lot.id}
                      onClick={() => setActiveLot(lot.id)}
                      className={cn(
                        "flex w-full items-center justify-between px-2 py-2.5 font-ewangi text-[13px] transition",
                        activeLot === lot.id
                          ? "rounded-sm bg-brand-teal text-brand-ink"
                          : "text-white hover:bg-white/10",
                        i > 0 && "border-t border-white/10"
                      )}
                    >
                      <span>{lot.id}</span>
                      <span>{lot.area}</span>
                    </button>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-[5px] border border-white/40 py-3 font-ewangi text-[13px] text-white transition hover:bg-white hover:text-brand-ink">
                  View all lots
                </button>
              </div>
              {selectedLot && (
                <div className="absolute" style={{ top: "28%", left: "42%" }}>
                  <div className="min-w-[160px] rounded-[14px] bg-[#1e1e1e]/90 p-4 backdrop-blur-sm">
                    <p className="font-ewangi text-[1.1rem] text-white mb-1">{selectedLot.id}</p>
                    <p className="font-ewangi text-[12px] text-white/70">{selectedLot.area}</p>
                    <p className="font-ewangi text-[12px] text-white/70">Ocean view</p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-brand-teal" />
                      <span className="font-ewangi text-[12px] text-brand-teal">Available</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </RevealOnScroll>
      </section>

      {/* ── UNIT MODELS ────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="flex flex-col gap-8 lg:w-[46%]">
              <div>
                <p className="font-ewangi text-[1.125rem] text-white/50 mb-3">Unit models</p>
                <div className="flex items-center gap-4">
                  <h2 className="font-ewangi text-[clamp(2rem,3.5vw,3rem)] text-white">
                    {currentModel.name}
                  </h2>
                  <button
                    onClick={() => setModelIndex(i => Math.max(0, i - 1))}
                    disabled={modelIndex === 0}
                    className="flex h-10 w-10 items-center justify-center rounded-[13px] border-2 border-white/30 transition disabled:opacity-30 hover:bg-white/10"
                  >
                    <ChevronLeft className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </button>
                  <button
                    onClick={() => setModelIndex(i => Math.min(unitModels.length - 1, i + 1))}
                    disabled={modelIndex === unitModels.length - 1}
                    className="flex h-10 w-10 items-center justify-center rounded-[13px] border-2 border-white/30 transition disabled:opacity-30 hover:bg-white/10"
                  >
                    <ChevronRight className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col items-start gap-2">
                  <Maximize2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[1.375rem] text-white">{currentModel.area}</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <BedDouble className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[1.375rem] text-white">{currentModel.bedrooms} Bedrooms</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Bath className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[1.375rem] text-white">{currentModel.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "980/646" }}>
                <Image
                  src={IMG_MODELS}
                  alt="Cíbola del Mar Quintas II aerial view"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 54vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── 360° TOUR ──────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 pb-16 lg:px-20">
        <RevealOnScroll direction="center" duration={1100}>
          <div className="relative overflow-hidden rounded-[20px]" style={{ minHeight: "460px" }}>
            <Image
              src={IMG_TOUR}
              alt="Cíbola del Mar community view"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-y-0 right-0 flex w-full flex-col items-end justify-center p-10 lg:w-[42%]"
              style={{ background: "linear-gradient(to left, rgba(0,0,0,0.88) 55%, transparent 100%)" }}
            >
              <h2 className="font-ewangi text-[clamp(2rem,3vw,3rem)] leading-tight text-white text-right mb-8">
                Step inside your<br />future home<br />by the sea.
              </h2>
              <a
                href="https://my.matterport.com/show/?m=yD8wTRwFeSv"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[8px] bg-[#1e1e1e] px-10 py-4 font-ewangi text-[2rem] text-brand-teal transition hover:bg-[#2a2a2a]"
              >
                360° tour
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── OCEANFRONT VIEW LOTS ───────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">

          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[46%]">
              <h2 className="font-ewangi text-[clamp(2.5rem,5vw,4rem)] leading-tight text-brand-teal mb-8">
                Oceanfront<br />View Lots
              </h2>
              <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80">
                Discover premium oceanfront lots at Cíbola del Mar — one of Ensenada&apos;s most exclusive coastal communities. Every lot faces the Pacific Ocean directly, offering sweeping panoramic views of the Coronado Islands and Baja&apos;s dramatic coastline.
              </p>
              <p className="mt-6 font-ewangi text-[1.375rem] leading-relaxed text-white/80">
                With lot sizes ranging from 280 to 450 m², each parcel gives you the freedom to design and build the coastal home you&apos;ve always envisioned. Surrounded by natural beauty and certified infrastructure, this is where your investment and lifestyle meet.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[20px]" style={{ aspectRatio: "980/646" }}>
                <Image
                  src={IMG_SITEPLAN}
                  alt="Cíbola del Mar site plan"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 54vw"
                />
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-6 pb-20 lg:px-20">
        <RevealOnScroll direction="center">
          <div className="mx-auto max-w-[945px] rounded-[10px] bg-white px-10 py-6 text-center">
            <p className="font-ewangi text-[clamp(1.25rem,2vw,2rem)] text-brand-ink">
              Certified land. Verified title. Your Pacific home starts here.
            </p>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
