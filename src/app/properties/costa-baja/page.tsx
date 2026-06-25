"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Maximize2, BedDouble, Bath } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO = `${CLD}/costa-baja/hero`;
const IMG_LOGO = `${CLD}/costa-baja/logo`;
const IMG_MAP  = `${CLD}/costa-baja/dev-map`;
const IMG_TOUR = `${CLD}/costa-baja/tour-bg`;
const IMG_PLAN = `${CLD}/costa-baja/site-plan`;
const IMG_CMRE = `${CLD}/CMRE_Logo-04_yjsknz.png`;

type ModelKey = "Ibiza" | "Mikonos" | "Santorini" | "Mallorca" | "Monaco";

const MODELS_IMG: Record<ModelKey, string> = {
  Ibiza:     `${CLD}/costa-baja/model-ibiza`,
  Mikonos:   `${CLD}/costa-baja/model-mikonos`,
  Santorini: `${CLD}/costa-baja/model-mikonos`,
  Mallorca:  `${CLD}/costa-baja/model-mallorca`,
  Monaco:    `${CLD}/costa-baja/model-monaco`,
};

const stats = [
  { value: "4",    label: "Models" },
  { value: "2",    label: "Types" },
  { value: "4",    label: "Bedrooms" },
  { value: "18",   label: "Golf holes" },
  { value: "70%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const trustBadges = ["Title reviewed", "Regulatory compliance", "Infrastructure validated"];

type UnitTab = "Condos" | "Houses" | "Models";

interface Unit { id: string; area: string; bedrooms: number; bathrooms: number }

const condos: Unit[] = [
  { id: "Condo Ibiza",     area: "130 m²", bedrooms: 3, bathrooms: 2 },
  { id: "Condo Mikonos",   area: "95 m²",  bedrooms: 2, bathrooms: 2 },
  { id: "Condo Santorini", area: "95 m²",  bedrooms: 2, bathrooms: 2 },
];
const houses: Unit[] = [
  { id: "Casa Mallorca", area: "280 m²", bedrooms: 4, bathrooms: 3 },
  { id: "Casa Monaco",   area: "280 m²", bedrooms: 4, bathrooms: 3 },
];
const allUnits = [...condos, ...houses];

interface UnitModel { key: ModelKey; label: string; type: string; area: string; bedrooms: number; bathrooms: number }

const unitModels: UnitModel[] = [
  { key: "Ibiza",     label: "Condominio B — Modelo Ibiza",     type: "Condo models", area: "130 m²", bedrooms: 3, bathrooms: 2 },
  { key: "Mikonos",   label: "Condominio C — Modelo Mikonos",   type: "Condo models", area: "95 m²",  bedrooms: 2, bathrooms: 2 },
  { key: "Santorini", label: "Condominio D — Modelo Santorini", type: "Condo models", area: "95 m²",  bedrooms: 2, bathrooms: 2 },
  { key: "Mallorca",  label: "Casa Mallorca",                    type: "House models", area: "280 m²", bedrooms: 4, bathrooms: 3 },
  { key: "Monaco",    label: "Casa Monaco",                      type: "House models", area: "280 m²", bedrooms: 4, bathrooms: 3 },
];

export default function CostaBajaPage() {
  const [videoOpen, setVideoOpen]   = useState(false);
  const [unitTab, setUnitTab]       = useState<UnitTab>("Condos");
  const [activeUnit, setActiveUnit] = useState("Condo Ibiza");
  const [modelIndex, setModelIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const currentUnits  = unitTab === "Condos" ? condos : unitTab === "Houses" ? houses : allUnits;
  const activeUnitData = allUnits.find((u) => u.id === activeUnit);
  const currentModel   = unitModels[modelIndex];

  return (
    <div className="bg-[#171717] text-white">

      {/* YouTube video modal — iframe only injected after user click */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl px-4"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/tGShxDkmvoM?autoplay=1&rel=0"
              className="absolute inset-0 h-full w-full rounded-2xl border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Costa Baja — Luxury Living By the Sea"
              tabIndex={-1}
            />
          </div>
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-[#171717]">
        <Image
          src={IMG_HERO}
          alt="Costa Baja aerial view — Real del Mar golf course"
          fill
          priority
          className="object-cover animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1e1e1e 28%, rgba(30,30,30,0.55) 60%, transparent 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #171717 6%, transparent 50%)" }}
        />

        <div className="relative z-10 flex min-h-205 flex-col px-6 pt-10 pb-12 lg:px-20">

          {/* Logo + CMRE */}
          <div className="flex items-start justify-between">
            <Image
              src={IMG_LOGO}
              alt="Costa Baja"
              width={180}
              height={100}
              className="w-28 lg:w-36 animate-[fade-left_0.8s_ease-out_both]"
            />
            <Image
              src={IMG_CMRE}
              alt="CMRE Certified"
              width={135}
              height={32}
              className="w-28 lg:w-32"
            />
          </div>

          {/* Headline + tagline + badges */}
          <div className="mt-auto max-w-3xl">
            <h1 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-white animate-[fade-left_0.9s_ease-out_both]">
              Luxury Living<br />By the Sea.
            </h1>
            <RevealOnScroll direction="up" delay={200}>
              <p className="mt-5 font-ewangi text-[1.125rem] leading-relaxed text-white/75">
                Condos &amp; houses with sea views<br />in Real del Mar, Tijuana.
              </p>
            </RevealOnScroll>

            <div className="mt-8 flex flex-wrap gap-8">
              {trustBadges.map((badge, i) => (
                <div
                  key={badge}
                  className="flex flex-col items-center gap-1.5 animate-[fade-up_0.8s_ease-out_both]"
                  style={{ animationDelay: `${420 + i * 150}ms` }}
                >
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                  <span className="font-ewangi text-[13px] leading-tight text-white text-center">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Play button — opens YouTube modal; iframe not in DOM until clicked */}
          <button
            onClick={() => setVideoOpen(true)}
            aria-label="Watch Costa Baja video"
            className="absolute right-10 bottom-44 hidden lg:flex lg:right-20 flex-col items-center gap-1 group"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal/90 shadow-xl transition group-hover:bg-brand-teal">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5 text-brand-ink">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-ewangi text-xs text-white/70">Watch video</span>
          </button>

          {/* Stats bar */}
          <RevealOnScroll direction="up" delay={200} className="mt-8 flex flex-wrap rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 gap-4 lg:gap-0 max-w-5xl">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col items-center min-w-[70px] animate-[fade-up_0.6s_ease-out_both]"
                style={{ animationDelay: `${300 + i * 80}ms` }}
              >
                <span className="font-ewangi text-[clamp(1.6rem,3vw,2.25rem)] leading-none text-white">{s.value}</span>
                <span className="font-ewangi text-sm text-white/70 mt-1">{s.label}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ── UNIT EXPLORER ─────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-10 lg:px-20">
        <RevealOnScroll direction="center" duration={1100}>
          <div className="mx-auto" style={{ maxWidth: "1318px" }}>
            <div className="flex flex-col lg:h-134.25 lg:flex-row">

              {/* Left panel */}
              <div
                className="flex w-full flex-col bg-[#1E1E1E] p-7 lg:w-120.5 lg:shrink-0"
                style={{ borderRadius: "27px" }}
              >
                <p className="font-ewangi text-[1.1rem] text-white mb-4">
                  Explore the development
                </p>

                <div className="flex gap-1.5 mb-4">
                  {(["Condos", "Houses", "Models"] as UnitTab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setUnitTab(t);
                        setActiveUnit(t === "Houses" ? "Casa Mallorca" : "Condo Ibiza");
                      }}
                      style={{ width: "72px", height: "28px", borderRadius: "4px" }}
                      className={cn(
                        "font-ewangi text-[13px] font-medium transition",
                        unitTab === t
                          ? "bg-brand-teal text-brand-ink"
                          : "bg-[#EAEDF0] text-brand-ink hover:bg-brand-teal/80"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <p className="font-ewangi text-[13px] text-white/50 mb-3">
                  Select a unit to see details
                </p>

                <div className="flex-1 overflow-y-auto">
                  {currentUnits.map((unit, i) => (
                    <button
                      key={unit.id}
                      onClick={() => setActiveUnit(unit.id)}
                      style={{
                        height: "40px",
                        borderRadius: activeUnit === unit.id ? "4px" : undefined,
                      }}
                      className={cn(
                        "flex w-full items-center justify-between px-2 font-ewangi text-[13px] transition",
                        activeUnit === unit.id
                          ? "bg-brand-teal text-brand-ink"
                          : "text-white hover:bg-white/10",
                        i > 0 && "border-t border-white/10"
                      )}
                    >
                      <span>{unit.id}</span>
                      <span>{unit.area}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex justify-center">
                  <button
                    style={{ width: "184px", height: "44px", borderRadius: "5px" }}
                    className="border border-white/40 font-ewangi text-[13px] text-white transition hover:bg-white hover:text-brand-ink"
                  >
                    View all units
                  </button>
                </div>
              </div>

              {/* Right — dev map */}
              <div
                className="relative mt-2 h-72 overflow-hidden lg:ml-2 lg:mt-0 lg:h-auto lg:flex-1"
                style={{ borderRadius: "27px" }}
              >
                <Image
                  src={IMG_MAP}
                  alt="Costa Baja development map"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 60vw"
                />

                {activeUnitData && (
                  <div className="absolute left-3 top-3 w-44 rounded-[9px] bg-[#1E1E1E]/90 p-3 lg:left-auto lg:right-4 lg:top-4 lg:w-46.75">
                    <p className="font-ewangi text-[1rem] font-medium text-white mb-1">{activeUnitData.id}</p>
                    <p className="font-ewangi text-[12px] text-white/70">{activeUnitData.area}</p>
                    <p className="font-ewangi text-[12px] text-white/70">{activeUnitData.bedrooms} Bedrooms</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-brand-teal" />
                      <span className="font-ewangi text-[12px] text-brand-teal">Available</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── MODELS CAROUSEL ───────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-10 lg:px-20 lg:py-16">
        <RevealOnScroll direction="center" duration={1100}>
          <div className="mx-auto max-w-[1318px]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

              <div className="lg:w-[42%]">
                <p className="font-ewangi text-[1.5rem] text-white/70 mb-2">{currentModel.type}</p>

                <div className="flex items-center gap-3 mb-8">
                  <h3 className="font-ewangi text-[clamp(1.4rem,2.5vw,2rem)] text-white leading-tight flex-1">
                    {currentModel.label}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setModelIndex((i) => Math.max(0, i - 1))}
                      disabled={modelIndex === 0}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 transition disabled:opacity-30 hover:border-brand-teal hover:text-brand-teal"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setModelIndex((i) => Math.min(unitModels.length - 1, i + 1))}
                      disabled={modelIndex === unitModels.length - 1}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 transition disabled:opacity-30 hover:border-brand-teal hover:text-brand-teal"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <Maximize2 className="h-6 w-6 text-brand-teal" strokeWidth={1.5} />
                    <span className="font-ewangi text-[1.25rem] text-white">{currentModel.area}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BedDouble className="h-6 w-6 text-brand-teal" strokeWidth={1.5} />
                    <span className="font-ewangi text-[1.25rem] text-white">{currentModel.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Bath className="h-6 w-6 text-brand-teal" strokeWidth={1.5} />
                    <span className="font-ewangi text-[1.25rem] text-white">{currentModel.bathrooms} Bathrooms</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative aspect-video overflow-hidden rounded-[20px]">
                  <Image
                    key={currentModel.key}
                    src={MODELS_IMG[currentModel.key]}
                    alt={currentModel.label}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 55vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── 360° TOUR ─────────────────────────────────────────────────────── */}
      <section className="bg-[#191919] px-8 py-10 lg:px-20 lg:py-14">
        <RevealOnScroll direction="center" duration={1100}>
          <div className="mx-auto max-w-[1318px]">
            <div className="relative overflow-hidden rounded-[26px]" style={{ aspectRatio: "1265/460" }}>
              <Image
                src={IMG_TOUR}
                alt="Costa Baja interior living room"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute right-0 top-0 h-full w-full lg:w-[40%] flex flex-col items-end justify-center px-8 lg:px-12"
                style={{ background: "linear-gradient(to left, rgba(0,0,0,0.85) 55%, transparent 100%)" }}
              >
                <h2 className="font-ewangi text-[clamp(1.8rem,3.5vw,3rem)] leading-tight text-white text-right">
                  Fall in love<br />with your home<br />by the sea.
                </h2>
                <a
                  href="https://my.matterport.com/show/?m=yD8wTRwFeSv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 rounded-[8px] bg-[#1e1e1e] px-8 py-4 transition hover:bg-[#2a2a2a]"
                >
                  <span className="font-ewangi text-[2rem] text-brand-teal">360° tour</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── SEA VIEW CONDOS & HOUSES ──────────────────────────────────────── */}
      <section className="bg-[#191919] px-8 py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1318px] flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <RevealOnScroll direction="left" duration={1100}>
            <div className="lg:w-[45%]">
              <h2 className="font-ewangi text-[clamp(2.5rem,5vw,4rem)] leading-tight text-brand-teal">
                Sea View<br />Condos &amp;<br />Houses
              </h2>
              <p className="mt-8 font-ewangi text-[1.125rem] leading-relaxed text-white/80">
                Costa Baja Residential is the leading luxury development in Real del Mar, Tijuana — a private gated community with a Resort Living concept where every property enjoys panoramic sea views of the Pacific coast.
              </p>
              <p className="mt-4 font-ewangi text-[1.125rem] leading-relaxed text-white/80">
                Choose from exclusive condominiums with 2 or 3 bedrooms starting from $427,000 USD, or 4-bedroom luxury houses on oversized lots from $720,500 USD. Private balconies, walk-in closets, golf course access at Real del Mar, rooftop pool, and a full gym — every detail is designed for the lifestyle you deserve.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={150} duration={1100}>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-[15px]" style={{ aspectRatio: "927/563" }}>
                <Image
                  src={IMG_PLAN}
                  alt="Costa Baja site plan"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="bg-[#191919] px-8 py-12 lg:px-20 lg:py-16">
        <RevealOnScroll direction="center">
          <div className="flex justify-center">
            <div className="rounded-[10px] bg-white px-10 py-6 text-center max-w-4xl">
              <p className="font-ewangi text-[clamp(1.1rem,2.5vw,2rem)] text-brand-ink">
                Resort living with sea views — certified, verified, ready for you.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}
