"use client";
// Del Mar property detail page — hero, 360° lot explorer, carousel of house models, and Ocean View Lots section.
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, BedDouble, Bath } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui";

// Cloudinary folder for this development — all image keys are relative to this base URL.
/* Figma "Fracc 3 Negative" — node 194:2107. Photos from Cloudinary "Del Mar" folder. */
const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO_BG      = `${CLD}/Render_Del_Mar_aynv6k.png`;
const IMG_CMRE         = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto/CMRE_Logo-04_yjsknz.png";
const IMG_LOTS_SHOT    = `${CLD}/Captura_de_pantalla_2026-06-11_a_las_2.26.09_p_fu9htp.png`;

/* Shield-checkmark — Figma: stroke #3AD3C1 sw=3 */
function TrustIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M10 1L2 4.5V12C2 16 5.5 20 10 22.5C14.5 20 18 16 18 12V4.5L10 1Z"
            stroke="#3AD3C1" strokeWidth="2.2" fill="none" />
      <path d="M6.5 12L9 14.5L13.5 9.5"
            stroke="#3AD3C1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const trustLabels = [
  "Legal reviewed",
  "Regulatory compliance",
  "Infrastructure validated",
];

const stats = [
  { value: "120",  label: "Lots" },
  { value: "25",   label: "Condos" },
  { value: "5",    label: "Models" },
  { value: "80",   label: "Houses" },
  { value: "70%",  label: "Available" },
  { value: "100%", label: "Verified" },
];

const lots = [
  { id: "12", area: "300 m²" },
  { id: "13", area: "300 m²" },
  { id: "14", area: "320 m²" },
  { id: "15", area: "315 m²" },
  { id: "16", area: "305 m²" },
];

type Tab = "Lots" | "Condos" | "Houses";

// Del Mar house models — Cloudinary "Modelos Del Mar" (top-down floor-plan renders).
// NOTE: m²/bed/bath specs are placeholders — confirm with real figures.
const models = [
  {
    name: "PERLA",
    sqm: "180 m²",
    beds: "3 Bedrooms",
    baths: "2 Bathrooms",
    image: `${CLD}/Perla_hfejm4.png`,
  },
  {
    name: "BAHÍA",
    sqm: "210 m²",
    beds: "3 Bedrooms",
    baths: "3 Bathrooms",
    image: `${CLD}/Bahia_hrdwpf.png`,
  },
  {
    name: "VIENTO",
    sqm: "55 m²",
    beds: "1 Bedroom",
    baths: "1 Bathroom",
    image: `${CLD}/Modelo_Viento_jvujul.png`,
  },
  {
    name: "CORONADO",
    sqm: "240 m²",
    beds: "4 Bedrooms",
    baths: "3 Bathrooms",
    image: `${CLD}/Coronado_jsbriw.png`,
  },
  {
    name: "MAREA",
    sqm: "120 m²",
    beds: "2 Bedrooms",
    baths: "2 Bathrooms",
    image: `${CLD}/Marea_tlqs8n.png`,
  },
];

export default function FraccPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Lots");
  const [activeLot, setActiveLot] = useState("12");
  const [modelIdx, setModelIdx] = useState(0);

  const prev = () => setModelIdx((i) => (i - 1 + models.length) % models.length);
  const next = () => setModelIdx((i) => (i + 1) % models.length);
  const model = models[modelIdx];

  return (
    <main className="overflow-x-hidden bg-brand-ink">

      {/* ══════════════════════════════════════════════════════
          HERO — Figma: y=117-1005, 888px
          Photo bg + secondary overlay + left gradient + text
          Stats bar overlaid at y=726 (transparent)
          ══════════════════════════════════════════════════════ */}

      {/* ── MOBILE HERO ── */}
      <div className="lg:hidden">
        <div className="relative h-64 overflow-hidden">
          <Image src={IMG_HERO_BG} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #1E1E1E 22%, transparent 100%)" }} />
        </div>
        <div className="px-6 py-8">
          <span className="font-ewangi font-bold text-white text-[clamp(1.4rem,6vw,2rem)]">Del Mar</span>
          <h1 className="mt-3 font-ewangi leading-tight text-white text-[clamp(2rem,9vw,3rem)]">
            Build with confidence.
          </h1>
          <p className="mt-3 font-ewangi text-white/85 text-[clamp(0.95rem,4vw,1.1rem)]">
            A verified and secure development for your next project.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {trustLabels.map((l) => (
              <div key={l} className="flex items-center gap-2">
                <TrustIcon />
                <span className="font-ewangi text-[0.9rem] text-white">{l}</span>
              </div>
            ))}
          </div>
          <Image src={IMG_CMRE} alt="CMRE Certified" width={2373} height={562} className="mt-5 h-9 w-auto object-contain" />
          <div className="mt-6 grid grid-cols-3 gap-y-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-ewangi text-[1.5rem] leading-none text-white">{value}</span>
                <span className="font-ewangi text-[0.8rem] text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (≥ lg) — responsive flow layout so the logo + titles scale fluidly ── */}
      <section className="relative hidden overflow-hidden lg:block">

        {/* Hero photo — full-bleed */}
        <Image
          src={IMG_HERO_BG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover animate-[ken-burns_14s_ease-in-out_infinite_alternate]"
        />

        {/* Left gradient for text legibility */}
        <div
          className="absolute inset-0 z-1"
          style={{ background: "linear-gradient(to right, #1E1E1E 28%, transparent 88%)" }}
        />

        {/* 360° view affordance — anchored right, vertically centered */}
        <div className="absolute right-10 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center leading-none">
          <span className="font-ewangi text-[1.25rem] text-white">360°</span>
          <span className="font-ewangi text-[0.9rem] text-white/80">view</span>
        </div>

        {/* Content — normal flow; fluid type scales the Del Mar logo + titles together */}
        <div className="relative z-10 mx-auto flex min-h-180 w-full max-w-360 flex-col px-16 py-14 2xl:min-h-222">

          {/* Del Mar logo (wordmark) */}
          <span className="font-ewangi font-bold leading-none tracking-[0.06em] text-white text-[clamp(2rem,2.6vw,2.6rem)]">
            Del Mar
          </span>

          {/* "Build with confidence." */}
          <h1 className="mt-6 max-w-136 font-ewangi leading-[1.08] text-white text-[clamp(3rem,5.6vw,6rem)] animate-[fade-left_0.9s_ease-out_both]">
            Build with confidence.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-sm font-ewangi text-white text-[clamp(1.1rem,1.4vw,1.25rem)] animate-[fade-up_0.8s_ease-out_0.3s_both]">
            A verified and secure development for your next project.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustLabels.map((label, i) => (
              <div key={label} className="flex items-center gap-2 animate-[fade-up_0.8s_ease-out_both]" style={{ animationDelay: `${250 + i * 150}ms` }}>
                <TrustIcon />
                <span className="font-ewangi text-[1rem] text-white">{label}</span>
              </div>
            ))}
          </div>

          {/* CMRE */}
          <Image
            src={IMG_CMRE}
            alt="CMRE Certified Mexico Real Estate"
            width={2373}
            height={562}
            className="mt-8 h-12 w-auto object-contain"
          />

          {/* Stats bar — pushed to the bottom, wraps fluidly */}
          <div className="mt-auto flex flex-wrap gap-x-10 gap-y-4 pt-12 xl:gap-x-16">
            {stats.map(({ value, label }, i) => (
              <div key={label} className="flex flex-col animate-[fade-up_0.7s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="font-ewangi leading-none text-white text-[clamp(1.75rem,2.2vw,2.25rem)]">
                  {value}
                </span>
                <span className="font-ewangi leading-none text-white text-[clamp(1rem,1.4vw,1.25rem)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LOT EXPLORER — Figma: card x=62 y=1044 (39px below hero)
          1317×537 r=27 aerial photo bg | left dark panel + tabs
          ══════════════════════════════════════════════════════ */}

      {/* ── MOBILE LOT EXPLORER ── */}
      <div className="px-4 pb-8 pt-6 lg:hidden">
        <p className="mb-3 font-ewangi text-[1.1rem] text-white">Explore the development</p>

        {/* Tabs */}
        <div className="mb-4 flex gap-2">
          {(["Lots", "Condos", "Houses"] as Tab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "rounded px-4 py-1.5 font-ewangi text-[0.9rem] transition",
                activeTab === tab ? "bg-brand-teal text-black" : "bg-[#EAEDF0] text-black"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 360° map embed */}
        <div className="overflow-hidden rounded-2xl" style={{ height: 300 }}>
          <iframe
            src="https://my.matterport.com/show/?m=yD8wTRwFeSv"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            allow="vr; gyroscope; accelerometer; fullscreen"
            title="Del Mar 360° virtual tour"
          />
        </div>

        {/* Lot list */}
        <div className="mt-5">
          <p className="mb-2 font-ewangi text-[0.85rem] text-white/60">Select a lot to see details</p>
          {lots.map((lot, i) => (
            <button
              key={lot.id}
              type="button"
              onClick={() => setActiveLot(lot.id)}
              className={cn(
                "flex w-full items-center justify-between px-3 py-2.5 font-ewangi text-[0.95rem] transition",
                activeLot === lot.id ? "rounded bg-brand-teal text-black" : "text-white",
                i > 0 && activeLot !== lot.id && "border-t border-white/15"
              )}
            >
              <span>Lot {lot.id}</span>
              <span>{lot.area}</span>
            </button>
          ))}
        </div>

        {/* Lot detail card */}
        {activeLot && (
          <div
            className="mt-4 rounded-[9px] border-2 border-brand-teal bg-[#1E1E1E] px-4 py-3"
          >
            <p className="font-ewangi text-[1rem] text-white">Lot {activeLot}</p>
            <div className="mt-1 space-y-0.5">
              <p className="font-ewangi text-[0.85rem] text-white/70">
                {lots.find((l) => l.id === activeLot)?.area}
              </p>
              <p className="font-ewangi text-[0.85rem] text-white/70">Residential</p>
              <p className="font-ewangi text-[0.85rem] text-brand-teal">Available</p>
            </div>
          </div>
        )}

        <button
          type="button"
          className="mt-4 w-full rounded border border-white py-3 font-ewangi text-[0.95rem] text-white transition hover:bg-white/10"
        >
          View all lots
        </button>
      </div>

      {/* ── DESKTOP LOT EXPLORER (≥ lg) ── */}
      <div className="hidden lg:block" style={{ paddingTop: 39, paddingLeft: 62, paddingRight: 61 }}>
        {/* Card — Figma: 1317×537 r=27 #D9D9D9 clipping mask */}
        <div
          className="relative overflow-hidden"
          style={{ height: 537, borderRadius: 27, background: "#D9D9D9" }}
        >
          {/* 360° map embed — fills the whole card */}
          <iframe
            src="https://my.matterport.com/show/?m=yD8wTRwFeSv"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            allow="vr; gyroscope; accelerometer; fullscreen"
            title="Del Mar 360° virtual tour"
          />

          {/* Left panel dark overlay — Figma: x=0 y=0 482×537 #1E1E1E@20% r=27 */}
          <div
            className="absolute inset-y-0 left-0 z-10"
            style={{ width: 482, background: "rgba(30,30,30,0.72)", borderRadius: "27px 0 0 27px" }}
          />

          {/* "Explore the development" — Figma: x=41 y=39 Ewangi 20px white */}
          <p
            className="absolute z-20 font-ewangi text-[1.25rem] text-white"
            style={{ left: 41, top: 39 }}
          >
            Explore the development
          </p>

          {/* Tabs — Figma: y=83 Lots/Condos/Houses 72×28 r=4 */}
          <div className="absolute z-20 flex gap-3" style={{ left: 41, top: 83 }}>
            {(["Lots", "Condos", "Houses"] as Tab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="flex items-center justify-center font-ewangi text-[1rem] text-black transition"
                style={{
                  width: 72, height: 28, borderRadius: 4,
                  background: activeTab === tab ? "#3AD3C1" : "#EAEDF0",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* "Select a lot..." — Figma: x=41 y=155 Ewangi 16px white */}
          <p
            className="absolute z-20 font-ewangi text-[1rem] text-white"
            style={{ left: 41, top: 155 }}
          >
            Select a lot to see details
          </p>

          {/* Lot rows — Figma: active row teal 322×40 r=4 */}
          {lots.map((lot, i) => (
            <button
              key={lot.id}
              type="button"
              onClick={() => setActiveLot(lot.id)}
              className={cn(
                "absolute z-20 flex w-80.5 items-center justify-between px-3 font-ewangi text-[1rem] transition",
                activeLot === lot.id ? "text-black" : "text-white"
              )}
              style={{
                left: 41,
                top: 193 + i * 49,
                height: 40,
                borderRadius: 4,
                background: activeLot === lot.id ? "#3AD3C1" : "transparent",
              }}
            >
              <span>Lot {lot.id}</span>
              <span>{lot.area}</span>
            </button>
          ))}

          {/* Divider lines between non-active rows */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute z-20 bg-white/30"
              style={{ left: 41, top: 193 + i * 49, width: 322, height: 1 }}
            />
          ))}

          {/* "View all lots" button — Figma: x=41 y=433 184×44 border white r=5 */}
          <button
            type="button"
            className="absolute z-20 flex items-center justify-center font-ewangi text-[1.25rem] text-white transition hover:bg-white/10"
            style={{ left: 41, top: 433, width: 184, height: 44, borderRadius: 5, border: "1px solid #FFFFFF" }}
          >
            View all lots
          </button>

          {/* Lot popup (when lot selected) — Figma: x=627 y=137 187×179 #1E1E1E border #3AD3C1 r=9 */}
          {activeLot && (
            <div
              className="absolute z-30"
              style={{ left: 627, top: 137 }}
            >
              {/* Popup body */}
              <div
                className="relative px-5 py-4"
                style={{
                  width: 187, height: 170,
                  background: "#1E1E1E",
                  borderRadius: 9,
                  border: "2px solid #3AD3C1",
                }}
              >
                <p className="font-ewangi text-[1.25rem] text-white">Lot {activeLot}</p>
                <div className="mt-2 space-y-1">
                  <p className="font-ewangi text-[0.9rem] text-white/80">
                    {lots.find((l) => l.id === activeLot)?.area}
                  </p>
                  <p className="font-ewangi text-[0.9rem] text-white/80">Residential</p>
                  <p className="font-ewangi text-[0.9rem] text-brand-teal">Available</p>
                </div>
              </div>
              {/* Arrow pointer */}
              <div
                className="mx-auto"
                style={{
                  width: 0, height: 0,
                  borderLeft: "9px solid transparent",
                  borderRight: "9px solid transparent",
                  borderTop: "11px solid #3AD3C1",
                  marginTop: -1,
                  marginLeft: 18,
                }}
              />
            </div>
          )}

          {/* 360° icon — Figma: x=1202 y=454 */}
          <div
            className="absolute z-20 flex flex-col items-center leading-none text-white"
            style={{ left: 1202, top: 454 }}
          >
            <span className="font-ewangi text-[1.1rem]">360°</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          HOUSE MODELS — Figma: y=1648-1993, 345px
          67px gap after lot explorer
          Photo right (634,0) 730×345 | text left
          Arrows: EAEDF0 border | spec badges below name
          ══════════════════════════════════════════════════════ */}

      {/* ── MOBILE MODELS ── */}
      <div className="px-6 py-10 lg:hidden">
        <div className="flex items-center justify-between">
          <h2 className="font-ewangi text-[1.5rem] text-white">House models</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous model"
              className="flex items-center justify-center text-[#eaedf0] transition hover:bg-[#eaedf0]/10"
              style={{ width: 40, height: 40, borderRadius: 11, border: "3px solid #EAEDF0" }}
            >
              <ChevronLeft style={{ width: 10, height: 14 }} strokeWidth={3} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next model"
              className="flex items-center justify-center text-[#eaedf0] transition hover:bg-[#eaedf0]/10"
              style={{ width: 40, height: 40, borderRadius: 11, border: "3px solid #EAEDF0" }}
            >
              <ChevronRight style={{ width: 10, height: 14 }} strokeWidth={3} />
            </button>
          </div>
        </div>

        <h3 className="mt-2 font-ewangi text-[2.25rem] leading-none text-white">{model.name}</h3>

        <div className="mt-3 flex gap-6">
          {[
            { Icon: Maximize, val: model.sqm },
            { Icon: BedDouble, val: model.beds },
            { Icon: Bath, val: model.baths },
          ].map(({ Icon, val }) => (
            <span key={val} className="flex flex-col items-center gap-1 font-ewangi text-[0.85rem] text-white/80">
              <Icon className="h-4 w-4 shrink-0 text-brand-teal" strokeWidth={2} />
              {val}
            </span>
          ))}
        </div>

        <div className="relative mt-4 w-full overflow-hidden rounded-2xl bg-[#1E1E1E]" style={{ height: 260 }}>
          <Image key={model.name} src={model.image} alt={model.name} fill sizes="100vw" className="object-contain p-4" />
        </div>

        <div className="mt-4 flex gap-3">
          {models.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setModelIdx(i)}
              className={cn("rounded-full transition-colors", i === modelIdx ? "bg-brand-teal" : "bg-[#D9D9D9]")}
              style={{ width: 14, height: 14 }}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP MODELS (≥ lg) — height 345px, mt=67px ── */}
      <div className="relative hidden overflow-hidden lg:block" style={{ height: 345, marginTop: 67 }}>

        {/* House photo — Figma: x=634 y=0 730×345 */}
        <div className="absolute overflow-hidden" style={{ left: 634, top: 0, width: 730, height: 345 }}>
          <Image key={model.name} src={model.image} alt={model.name} fill sizes="730px" className="object-contain" />
        </div>

        {/* "House models" — Figma: x=103 y=9 36px white */}
        <h2 className="absolute font-ewangi text-[2.25rem] text-white" style={{ left: 103, top: 9 }}>
          House models
        </h2>

        {/* "VIENTO" name — Figma: x=103 y=111 64px white */}
        <h3 className="absolute font-ewangi text-[4rem] leading-none text-white" style={{ left: 103, top: 111 }}>
          {model.name}
        </h3>

        {/* Left arrow — Figma: x=417 y=129 43×43 r=13 border #EAEDF0 sw=3 */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous model"
          className="absolute flex items-center justify-center text-[#eaedf0] transition hover:bg-[#eaedf0]/10"
          style={{ left: 417, top: 129, width: 43, height: 43, borderRadius: 13, border: "3px solid #EAEDF0" }}
        >
          <ChevronLeft style={{ width: 10, height: 15 }} strokeWidth={3} />
        </button>

        {/* Right arrow — Figma: x=476 y=129 */}
        <button
          type="button"
          onClick={next}
          aria-label="Next model"
          className="absolute flex items-center justify-center text-[#eaedf0] transition hover:bg-[#eaedf0]/10"
          style={{ left: 476, top: 129, width: 43, height: 43, borderRadius: 13, border: "3px solid #EAEDF0" }}
        >
          <ChevronRight style={{ width: 10, height: 15 }} strokeWidth={3} />
        </button>

        {/* Spec badges with icons — Figma: Ewangi 24px white y=286 x=97/209/368 */}
        <span className="absolute flex flex-col items-center gap-1.5 font-ewangi text-[1.5rem] text-white" style={{ left: 97, top: 286 }}>
          <Maximize className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={2} />
          {model.sqm}
        </span>
        <span className="absolute flex flex-col items-center gap-1.5 font-ewangi text-[1.5rem] text-white" style={{ left: 209, top: 286 }}>
          <BedDouble className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={2} />
          {model.beds}
        </span>
        <span className="absolute flex flex-col items-center gap-1.5 font-ewangi text-[1.5rem] text-white" style={{ left: 368, top: 286 }}>
          <Bath className="h-6 w-6 shrink-0 text-brand-teal" strokeWidth={2} />
          {model.baths}
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════
          OCEAN VIEW LOTS — Figma: y=2050-2747 (~57px after models)
          "Ocean View Lots" teal 96px | screenshot right | body text | white CTA
          ══════════════════════════════════════════════════════ */}

      {/* ── MOBILE OCEAN LOTS ── */}
      <div className="px-6 pb-12 pt-8 lg:hidden">
        <h2 className="font-ewangi leading-tight text-brand-teal text-[clamp(2rem,8vw,2.75rem)]">
          Ocean View Lots
        </h2>
        <div className="relative mt-4 w-full overflow-hidden rounded-xl" style={{ height: 240 }}>
          <Image src={IMG_LOTS_SHOT} alt="Ocean view lots" fill sizes="100vw" className="object-cover" />
        </div>
        <p className="mt-5 font-ewangi text-[0.95rem] leading-relaxed text-white/85">
          Explore premium ocean-view lots for sale, each offering a unique opportunity to build your
          dream home with stunning vistas of the Coronado Islands. Enjoy the tranquility of coastal
          living, where every sunrise and sunset transforms the horizon into a masterpiece.
        </p>
        <div className="mt-6 rounded-[10px] bg-white px-6 py-4">
          <p className="font-ewangi text-brand-ink text-[clamp(1rem,4vw,1.3rem)]">
            We certify so you can build your future
          </p>
        </div>
      </div>

      {/* ── DESKTOP OCEAN LOTS (≥ lg) — responsive flow, fluid text ── */}
      <div className="relative hidden px-16 py-16 lg:block">
        <div className="mx-auto max-w-360">

          {/* Heading + body (left) | screenshot (right) */}
          <div className="flex items-start gap-12">
            <RevealOnScroll direction="left" duration={1100}>
              <div className="w-[45%] shrink-0">
                <h2 className="font-ewangi leading-[1.05] text-brand-teal text-[clamp(3rem,5.5vw,6rem)]">
                  Ocean View Lots
                </h2>
                <p className="mt-8 max-w-150 font-ewangi leading-[1.4] text-white text-[clamp(1.1rem,1.5vw,1.5rem)]">
                  Explore premium ocean-view lots for sale, each offering a unique opportunity to build
                  your dream home with stunning vistas of the Coronado Islands. Enjoy the tranquility of
                  coastal living, where every sunrise and sunset transforms the horizon into a masterpiece.
                  Our selection includes expansive lots with various square footage options to suit your vision.
                </p>
              </div>
            </RevealOnScroll>

            {/* Development screenshot */}
            <RevealOnScroll direction="right" delay={150} duration={1100}>
              <div className="flex-1">
                <Image
                  src={IMG_LOTS_SHOT}
                  alt="Ocean view lots development"
                  width={1890}
                  height={1148}
                  className="h-auto w-full rounded-[10px] object-cover"
                  style={{ boxShadow: "-26px 24px 49px rgba(0,0,0,0.26)" }}
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* White CTA banner — full width, fluid text */}
          <RevealOnScroll direction="center">
            <div className="mt-12 flex items-center rounded-[10px] bg-white px-10 py-6">
              <p className="font-ewangi text-brand-ink text-[clamp(1.5rem,3vw,3rem)]">
                We certify so you can build your future
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom padding before footer */}
      <div style={{ height: 80 }} />

    </main>
  );
}
