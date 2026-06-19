"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";
const IMG_HERO  = `${CLD}/hf_20260615_235527_0660507b-9010-447b-97cc-19d1ebca9800_rmqmxw.png`;
const IMG_MAP   = `${CLD}/Captura_de_pantalla_2026-06-15_a_las_4.49.40_p.m._jsj34s.png`;
const IMG_SEC   = `${CLD}/Captura_de_pantalla_2026-06-15_a_las_4.50.14_p.m._k6wpgu.png`;
const IMG_BUILD = `${CLD}/torre51/build-live`;
const IMG_LOGO  = `${CLD}/torre51/logo`;
const IMG_CMRE  = `${CLD}/CMRE_Logo-04_yjsknz.png`;

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

export default function Torre51Page() {
  const [tab, setTab] = useState<Tab>("Lots");
  const [activeLot, setActiveLot] = useState("Lot 12");

  return (
    <div className="bg-[#171717] text-white">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-205 overflow-hidden bg-brand-ink">
        <Image
          src={IMG_HERO}
          alt="Torre 51 Negativo development aerial view"
          fill
          priority
          className="object-cover"
          sizes="100vw"
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

          <div className="mb-auto grid grid-cols-3 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8 lg:gap-x-10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-ewangi text-xl leading-none text-white sm:text-3xl lg:text-[2.25rem]">{s.value}</span>
                <span className="font-ewangi text-xs text-white/80 sm:text-base lg:text-[1.25rem]">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="flex flex-col gap-6">
              <Image
                src={IMG_LOGO}
                alt="Torre 51 Negativo"
                width={143}
                height={43}
                className="w-36"
              />
              <Image
                src={IMG_CMRE}
                alt="CMRE Certified"
                width={204}
                height={48}
                className="w-44"
              />
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div className="flex flex-wrap gap-6 lg:justify-end">
                {trustBadges.map((b) => (
                  <div key={b} className="flex flex-col items-center gap-1.5">
                    <CheckCircle2 className="h-7 w-7 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-center font-ewangi text-[14px] leading-tight text-white">{b}</span>
                  </div>
                ))}
              </div>

              <div className="lg:text-right">
                <h1 className="font-ewangi text-[clamp(3rem,7vw,6rem)] leading-[0.92] text-white">
                  Own your<br />next chapter.
                </h1>
                <p className="mt-4 font-ewangi text-[1.25rem] text-white/80">
                  Land, Homes, and Opportunities That Last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOT EXPLORER ────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-10 lg:px-20">
        <div className="mx-auto" style={{ maxWidth: "1318px" }}>
          <div className="flex flex-col lg:h-134.25 lg:flex-row">

            <div
              className="flex w-full flex-col bg-[#1E1E1E] p-7 lg:w-120.5 lg:shrink-0"
              style={{ borderRadius: "27px" }}
            >
              <p className="font-ewangi text-[1.1rem] text-white mb-4">
                Explore the development
              </p>

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
                  View all lots
                </button>
              </div>
            </div>

            <div
              className="relative mt-2 h-72 overflow-hidden lg:ml-2 lg:mt-0 lg:h-auto lg:flex-1"
              style={{ borderRadius: "27px" }}
            >
              <Image
                src={IMG_MAP}
                alt="Torre 51 Negativo aerial map"
                fill
                className="object-cover"
                sizes="836px"
              />

              <div className="absolute top-[33%] left-[22%] flex items-center gap-1.5 rounded-full bg-brand-teal px-3 py-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-ink" />
                <span className="font-ewangi text-[12px] font-medium text-brand-ink">Clubhouse</span>
              </div>
              <div
                className="absolute top-[18%] left-[50%] flex items-center gap-1.5 rounded-full px-3 py-1.5"
                style={{ background: "rgb(246,181,60)" }}
              >
                <div className="h-2.5 w-2.5 rounded-full bg-brand-ink" />
                <span className="font-ewangi text-[12px] font-medium text-brand-ink">Houses</span>
              </div>
              <div className="absolute top-[52%] left-[38%] flex items-center gap-1.5 rounded-full bg-[#171717] px-3 py-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="font-ewangi text-[12px] font-medium text-white">Lots</span>
              </div>

              <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
                <span className="font-ewangi text-[11px] font-bold text-white">360°</span>
              </div>

              <div className="absolute left-3 top-3 w-44 rounded-[9px] bg-[#1E1E1E] p-3 lg:left-[51%] lg:top-[47%] lg:w-46.75">
                <p className="font-ewangi text-[1rem] font-medium text-white mb-1">{activeLot}</p>
                <p className="font-ewangi text-[12px] text-white/70">
                  {lots.find((l) => l.id === activeLot)?.area}
                </p>
                <p className="font-ewangi text-[12px] text-white/70">Residential</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-brand-teal" />
                  <span className="font-ewangi text-[12px] text-brand-teal">Available</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECURITY ────────────────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-[45%]">
            <h2 className="font-ewangi text-[clamp(2.5rem,5vw,3.9375rem)] leading-tight text-white">
              Designed with Your<br />Safety in Mind
            </h2>
            <p className="mt-8 font-ewangi text-[1.375rem] leading-relaxed text-white/80">
              Our security gatehouse is designed to provide controlled access and enhance the safety of the entire community. By helping regulate entry and maintain a secure environment, it offers residents the confidence and peace of mind that come from knowing their families are protected in a thoughtfully planned neighborhood.
            </p>
          </div>

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
        </div>
      </section>

      {/* ── BUILD / LIVE / GROW ──────────────────────────────────────── */}
      <section className="bg-[#171717] px-8 py-16 lg:px-20 lg:py-20">

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

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div className="lg:w-[55%]">
            <div className="relative aspect-video overflow-hidden rounded-[15px]">
              <Image
                src={IMG_BUILD}
                alt="Build, Live, and Grow at Torre 51 Negativo"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-end lg:text-right">
            <h2 className="font-ewangi text-[clamp(2.5rem,5vw,3.9375rem)] leading-tight text-white">
              Build, Live,<br />and Grow
            </h2>
            <p className="font-ewangi text-[1.375rem] leading-relaxed text-white/80 lg:max-w-115">
              Whether you&apos;re looking for the perfect lot to build your dream home or a move-in-ready residence, we offer options tailored to your lifestyle and goals. Discover a community designed for growth, comfort, and long-term value. Contact us today to learn more, schedule a visit, and find the opportunity that&apos;s right for you.
            </p>
            <button className="mt-2 rounded-[10px] bg-brand-teal px-10 py-5 font-ewangi text-[2.1875rem] text-brand-ink transition hover:bg-brand-teal/90">
              Talk to an expert
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
