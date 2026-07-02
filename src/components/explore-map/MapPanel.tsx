"use client";
// Google Maps embed panel that updates its src based on the currently selected Mexican state.
import { cn } from "@/lib/utils";

const STATE_EMBED_URLS: Record<string, string> = {
  All: "https://maps.google.com/maps?q=Baja+California+Mexico&output=embed&z=7",
  "Baja California": "https://maps.google.com/maps?q=Tijuana+Baja+California+Mexico&output=embed&z=9",
  "Baja California Sur": "https://maps.google.com/maps?q=Los+Cabos+Baja+California+Sur+Mexico&output=embed&z=9",
  Nayarit: "https://maps.google.com/maps?q=Punta+Mita+Nayarit+Mexico&output=embed&z=10",
  "Quintana Roo": "https://maps.google.com/maps?q=Tulum+Quintana+Roo+Mexico&output=embed&z=10",
  Jalisco: "https://maps.google.com/maps?q=Puerto+Vallarta+Jalisco+Mexico&output=embed&z=10",
  "Yucatán": "https://maps.google.com/maps?q=Merida+Yucatan+Mexico&output=embed&z=10",
  Oaxaca: "https://maps.google.com/maps?q=Huatulco+Oaxaca+Mexico&output=embed&z=10",
  Sonora: "https://maps.google.com/maps?q=Rocky+Point+Sonora+Mexico&output=embed&z=10",
};

type MapPanelProps = {
  selectedState: string;
  filteredCount: number;
  className?: string;
};

export function MapPanel({ selectedState, filteredCount, className }: MapPanelProps) {
  // Fall back to the national "All" view if the state has no specific embed URL yet.
  const src = STATE_EMBED_URLS[selectedState] ?? STATE_EMBED_URLS["All"];
  const label = selectedState === "All" ? "México" : selectedState;

  return (
    <div className={cn("relative h-full min-h-55 w-full overflow-hidden rounded-2xl lg:rounded-none sm:min-h-70 lg:min-h-0", className)}>
      <iframe
        src={src}
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${label}`}
      />

      <div className="pointer-events-none absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-pine shadow-lg backdrop-blur-sm">
        <span className="text-brand-teal">●</span>
        {label} · {filteredCount} projects
      </div>
    </div>
  );
}
