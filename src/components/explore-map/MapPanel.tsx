"use client";
// Interactive Mapbox GL map — renders a real marker per listing at its lat/lng, auto-fits the
// viewport to whatever is currently filtered, and opens a mini property card (with a save
// heart) when a pin is clicked.
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Listing } from "@/app/[locale]/explore-map/data";
import { formatShortPrice, toSavedProperty } from "@/app/[locale]/explore-map/utils";
import { useSavedProperties } from "@/hooks/useSavedProperties";

// Labels for the popup DOM built via buildPopupContent() below — this markup is assembled with
// plain innerHTML (not JSX), so translated strings are threaded in as plain arguments.
type PopupLabels = {
  bd: string;
  ba: string;
  cta: string;
  save: string;
  removeSaved: string;
};

type MapPanelProps = {
  listings: Listing[];
  activeId: number | null;
  onMarkerClick: (id: number) => void;
  className?: string;
};

// Baja California — where most current listings sit — keeps the initial paint useful
// before the first fitBounds() call runs.
const DEFAULT_CENTER: [number, number] = [-115.5, 27];
const DEFAULT_ZOOM = 4.3;

const AREAS_SOURCE_ID = "listing-areas";
const AREAS_LAYER_ID = "listing-areas-fill";
const AREAS_OUTLINE_LAYER_ID = "listing-areas-outline";

const HEART_PATH =
  "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z";

function heartSvg(saved: boolean) {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="${saved ? "#3AD3C1" : "none"}" stroke="${saved ? "#3AD3C1" : "#1e1e1e"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${HEART_PATH}"/></svg>`;
}

function buildPopupContent(
  listing: Listing,
  saved: boolean,
  onToggleSave: (heartBtn: HTMLButtonElement) => void,
  labels: PopupLabels,
  contactHref: string
) {
  const el = document.createElement("div");
  el.className = "w-56 overflow-hidden rounded-2xl bg-white";
  const price = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    listing.priceUSD
  );

  el.innerHTML = `
    <div class="relative h-28 w-full">
      <img src="${listing.image}" alt="${listing.title}" class="h-full w-full object-cover" />
      <button type="button" class="js-save-btn absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-md" aria-label="${saved ? labels.removeSaved : labels.save}">
        ${heartSvg(saved)}
      </button>
    </div>
    <div class="p-3">
      <p class="truncate font-ewangi text-[14px] font-bold text-brand-pine">${listing.title}</p>
      <p class="mt-0.5 truncate font-ewangi text-[11px] text-brand-pine/60">${listing.zone}</p>
      <div class="mt-1.5 flex items-center gap-2.5 font-ewangi text-[11px] text-[#1e1e1e]">
        <span>${listing.beds} ${labels.bd}</span>
        <span>${listing.baths} ${labels.ba}</span>
        <span>${listing.sqft} m²</span>
      </div>
      <p class="mt-2 font-ewangi text-[15px] font-bold text-[#00c9a7]">${price}</p>
      <a href="${contactHref}" class="mt-2 block rounded-md bg-brand-teal py-1.5 text-center font-ewangi text-[12px] font-bold text-white transition hover:bg-brand-teal-dark">${labels.cta}</a>
    </div>
  `;

  const heartBtn = el.querySelector<HTMLButtonElement>(".js-save-btn");
  heartBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    onToggleSave(heartBtn);
  });

  return el;
}

export function MapPanel({ listings, activeId, onMarkerClick, className }: MapPanelProps) {
  const t = useTranslations("exploreMap");
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markerRefs = useRef<Map<number, mapboxgl.Marker>>(new Map());
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const { isSaved, toggleSaved } = useSavedProperties();

  const popupLabels: PopupLabels = {
    bd: t("mapPanel.bd"),
    ba: t("mapPanel.ba"),
    cta: t("mapPanel.cta"),
    save: t("mapPanel.save"),
    removeSaved: t("mapPanel.removeSaved"),
  };
  const contactHref = getPathname({ href: "/contact", locale });

  // Refs keep the DOM-based marker/popup click handlers (created once per rebuild) closing
  // over fresh callbacks and store state without needing to recreate markers on every render.
  const onMarkerClickRef = useRef(onMarkerClick);
  onMarkerClickRef.current = onMarkerClick;
  const isSavedRef = useRef(isSaved);
  isSavedRef.current = isSaved;
  const toggleSavedRef = useRef(toggleSaved);
  toggleSavedRef.current = toggleSaved;
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;
  const popupLabelsRef = useRef(popupLabels);
  popupLabelsRef.current = popupLabels;
  const contactHrefRef = useRef(contactHref);
  contactHrefRef.current = contactHref;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      console.error("NEXT_PUBLIC_MAPBOX_TOKEN is not set — map cannot load.");
      return;
    }
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    });
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;

    // The mobile map/list toggle hides this container with display:none — Mapbox caches
    // canvas size at the moment it goes hidden, so it needs an explicit resize() once visible again.
    const resizeObserver = new ResizeObserver(() => map.resize());
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Rebuild markers whenever the filtered set changes, then fit the map to show all of them.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const render = () => {
      // Soft, fixed-radius circle around each pin — a rough visual sense of "the area",
      // not a survey boundary. We have no real parcel geometry to draw an actual property line.
      const geojson: GeoJSON.FeatureCollection<GeoJSON.Point> = {
        type: "FeatureCollection",
        features: listings.map((l) => ({
          type: "Feature",
          geometry: { type: "Point", coordinates: [l.lng, l.lat] },
          properties: { id: l.id },
        })),
      };

      const existingSource = map.getSource(AREAS_SOURCE_ID) as mapboxgl.GeoJSONSource | undefined;
      if (existingSource) {
        existingSource.setData(geojson);
      } else {
        map.addSource(AREAS_SOURCE_ID, { type: "geojson", data: geojson });
        map.addLayer({
          id: AREAS_LAYER_ID,
          type: "circle",
          source: AREAS_SOURCE_ID,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 4, 8, 10, 34, 16, 90],
            "circle-color": "#3AD3C1",
            "circle-opacity": 0.18,
          },
        });
        map.addLayer({
          id: AREAS_OUTLINE_LAYER_ID,
          type: "circle",
          source: AREAS_SOURCE_ID,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 4, 8, 10, 34, 16, 90],
            "circle-color": "transparent",
            "circle-stroke-width": 1.5,
            "circle-stroke-color": "#026559",
            "circle-stroke-opacity": 0.6,
          },
        });
      }

      popupRef.current?.remove();
      markerRefs.current.forEach((marker) => marker.remove());
      markerRefs.current.clear();

      listings.forEach((listing) => {
        const el = document.createElement("button");
        el.type = "button";
        const shortPrice = formatShortPrice(listing.priceUSD, t("listingCard.from"));
        el.setAttribute("aria-label", t("mapPanel.markerAriaLabel", { price: shortPrice }));
        el.className = "flex flex-col items-center gap-1 cursor-pointer border-0 bg-transparent p-0";
        el.innerHTML = `
          <span class="flex h-8.5 w-8.5 items-center justify-center rounded-full border-2 border-white shadow-md" style="background:${listing.id === activeIdRef.current ? "#024139" : "#026559"}"></span>
          <span class="whitespace-nowrap rounded-[7px] border border-white bg-brand-emerald px-2.5 py-1 font-ewangi text-[11px] font-bold text-white shadow-md">${shortPrice}</span>
        `;
        el.addEventListener("click", (e) => {
          // Without this, the click bubbles to the map's own canvas listener, which fires
          // "preclick" and — since Popup defaults to closeOnClick: true — closes the popup
          // we're about to open in the very same tick it opens.
          e.stopPropagation();
          onMarkerClickRef.current(listing.id);

          const savedProperty = toSavedProperty(listing);
          popupRef.current?.remove();

          const content = buildPopupContent(
            listing,
            isSavedRef.current(savedProperty.id),
            (heartBtn) => {
              // Compute the next state before toggling — the store update is async, so reading
              // isSaved() right after calling toggleSaved() would still return the stale value.
              const willBeSaved = !isSavedRef.current(savedProperty.id);
              toggleSavedRef.current(savedProperty);
              heartBtn.innerHTML = heartSvg(willBeSaved);
              heartBtn.setAttribute(
                "aria-label",
                willBeSaved ? popupLabelsRef.current.removeSaved : popupLabelsRef.current.save
              );
            },
            popupLabelsRef.current,
            contactHrefRef.current
          );

          popupRef.current = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: false,
            maxWidth: "none",
            offset: 20,
            className: "pd-map-popup",
          })
            .setLngLat([listing.lng, listing.lat])
            .setDOMContent(content)
            .addTo(map);
        });

        const marker = new mapboxgl.Marker({ element: el, anchor: "bottom" })
          .setLngLat([listing.lng, listing.lat])
          .addTo(map);
        markerRefs.current.set(listing.id, marker);
      });

      if (listings.length > 0) {
        const bounds = new mapboxgl.LngLatBounds();
        listings.forEach((l) => bounds.extend([l.lng, l.lat]));
        map.fitBounds(bounds, { padding: 64, maxZoom: 12, duration: 600 });
      }
    };

    if (map.isStyleLoaded()) render();
    else map.once("load", render);
    // Deliberately excludes activeId — recoloring the active pin is handled by the effect
    // below without touching markers/popup, so clicking a pin doesn't blow away its own popup.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings]);

  // Recolor the active/inactive pin in place — no marker rebuild, so an open popup survives.
  useEffect(() => {
    markerRefs.current.forEach((marker, id) => {
      const circle = marker.getElement().firstElementChild as HTMLElement | null;
      if (circle) circle.style.background = id === activeId ? "#024139" : "#026559";
    });
  }, [activeId]);

  return <div ref={containerRef} className={cn("h-full w-full", className)} />;
}
