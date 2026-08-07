"use client";
// 360° panorama viewer for property virtual tours, built on Photo Sphere Viewer.
// Scenes share a single Viewer instance — switching scenes calls setPanorama() instead of
// remounting, so the drag/zoom state and loading spinner stay smooth between panoramas.
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@photo-sphere-viewer/core/index.css";

export type TourScene = { id: string; label: string; url: string };

export function PhotoSphereTour({ scenes }: { scenes: TourScene[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<import("@photo-sphere-viewer/core").Viewer | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    import("@photo-sphere-viewer/core").then(({ Viewer }) => {
      if (cancelled || !containerRef.current) return;
      viewerRef.current = new Viewer({
        container: containerRef.current,
        panorama: scenes[0].url,
        navbar: ["zoom", "caption", "fullscreen"],
        caption: scenes[0].label,
        defaultZoomLvl: 0,
      });
    });

    return () => {
      cancelled = true;
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
    // scenes are fixed for the lifetime of this component; only the active one changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const scene = scenes[activeIndex];
    viewerRef.current?.setPanorama(scene.url, { caption: scene.label });
  }, [activeIndex, scenes]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-72 w-full overflow-hidden rounded-6 sm:h-100 lg:h-134.5">
        <div ref={containerRef} className="absolute inset-0" />

        <button
          type="button"
          aria-label="Previous scene"
          onClick={() => setActiveIndex((i) => (i - 1 + scenes.length) % scenes.length)}
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next scene"
          onClick={() => setActiveIndex((i) => (i + 1) % scenes.length)}
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {scenes.map((scene, i) => (
          <button
            key={scene.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`shrink-0 rounded-1.25 px-4 py-2 font-ewangi text-[0.85rem] whitespace-nowrap transition ${
              i === activeIndex
                ? "bg-brand-teal text-brand-ink"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {scene.label}
          </button>
        ))}
      </div>
    </div>
  );
}
