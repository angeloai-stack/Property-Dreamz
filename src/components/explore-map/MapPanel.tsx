"use client";

import { cn } from "@/lib/utils";

const STATE_EMBED_URLS: Record<string, string> = {
  All: "https://maps.google.com/maps?q=Baja+California,+Mexico&z=7&ie=UTF8&iwloc=&output=embed",
  "Baja California":
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526284.407177217!2d-117.97157442791178!3d30.332838154445874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7700ca877ddd3%3A0xfca4fd9f0318de8e!2sBaja%20California!5e0!3m2!1ses-419!2smx!4v1781407328402!5m2!1ses-419!2smx",
  "Baja California Sur":
    "https://maps.google.com/maps?q=Baja+California+Sur,Mexico&z=7&ie=UTF8&iwloc=&output=embed",
  Nayarit:
    "https://maps.google.com/maps?q=Nayarit,Mexico&z=8&ie=UTF8&iwloc=&output=embed",
  "Quintana Roo":
    "https://maps.google.com/maps?q=Quintana+Roo,Mexico&z=8&ie=UTF8&iwloc=&output=embed",
  Jalisco:
    "https://maps.google.com/maps?q=Jalisco,Mexico&z=8&ie=UTF8&iwloc=&output=embed",
  "Yucatán":
    "https://maps.google.com/maps?q=Yucatan,Mexico&z=8&ie=UTF8&iwloc=&output=embed",
  Oaxaca:
    "https://maps.google.com/maps?q=Oaxaca,Mexico&z=8&ie=UTF8&iwloc=&output=embed",
  Sonora:
    "https://maps.google.com/maps?q=Sonora,Mexico&z=7&ie=UTF8&iwloc=&output=embed",
};

type MapPanelProps = {
  selectedState: string;
  filteredCount: number;
  className?: string;
};

export function MapPanel({ selectedState, filteredCount, className }: MapPanelProps) {
  const src = STATE_EMBED_URLS[selectedState] ?? STATE_EMBED_URLS.All;
  const label = selectedState === "All" ? "Baja California" : selectedState;

  return (
    <div
      className={cn(
        "relative h-full min-h-55 w-full overflow-hidden rounded-2xl lg:rounded-none sm:min-h-70 lg:min-h-0",
        className
      )}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mexico real estate map"
        className="absolute inset-0 h-full w-full"
      />

      <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-lg border border-white/10 bg-[#1e1e1e]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80 shadow-lg backdrop-blur-sm">
        <span className="text-[#39d3c0]">●</span>
        {label} · {filteredCount} projects
      </div>
    </div>
  );
}
