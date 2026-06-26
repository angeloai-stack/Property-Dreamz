"use client";
// Properties listing page — client-side filter/search over a hardcoded property catalogue.
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, MapPin, ChevronDown, ArrowRight, Search, CheckCircle2, X } from "lucide-react";
import { RevealOnScroll, TiltCard } from "@/components/ui";
import { cn } from "@/lib/utils";

// Cloudinary base URL — f_auto,q_auto picks the best format and quality per browser.
const CLD = "https://res.cloudinary.com/dserzvrwe/image/upload/f_auto,q_auto";

type PropertyType = "Lots" | "Condos" | "Mixed";

type Property = {
  id: string;
  title: string;
  zone: string;
  region: string;
  sqmMin: number;
  priceUSD: number;
  availability: "Available" | "Coming Soon";
  type: PropertyType;
  href: string;
  image: string;
  certified: boolean;
};

const properties: Property[] = [
  {
    id: "delmar",
    title: "Del Mar",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 250,
    priceUSD: 320000,
    availability: "Available",
    type: "Mixed",
    href: "/properties/delmar",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    certified: true,
  },
  {
    id: "andares",
    title: "Andares",
    zone: "Tijuana, BC",
    region: "Tijuana",
    sqmMin: 85,
    priceUSD: 185000,
    availability: "Available",
    type: "Condos",
    href: "/properties/andares",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    certified: true,
  },
  {
    id: "alimar",
    title: "Alimar",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 140,
    priceUSD: 195000,
    availability: "Available",
    type: "Condos",
    href: "/properties/alimar",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80",
    certified: true,
  },
  {
    id: "torre51",
    title: "Torre 51",
    zone: "Tijuana, BC",
    region: "Tijuana",
    sqmMin: 72,
    priceUSD: 165000,
    availability: "Available",
    type: "Condos",
    href: "/properties/torre51",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    certified: true,
  },
  {
    id: "tierra-de-agua",
    title: "Tierra de Agua",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 300,
    priceUSD: 280000,
    availability: "Available",
    type: "Lots",
    href: "/properties/tierra-de-agua",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    certified: true,
  },
  {
    id: "punta-piedra",
    title: "Punta Piedra",
    zone: "Ensenada, BC",
    region: "Ensenada",
    sqmMin: 350,
    priceUSD: 125000,
    availability: "Available",
    type: "Lots",
    href: "/properties/punta-piedra",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    certified: true,
  },
  {
    id: "palacio-del-mar",
    title: "Palacio del Mar",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 180,
    priceUSD: 520000,
    availability: "Available",
    type: "Mixed",
    href: "/properties/palacio-del-mar",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    certified: true,
  },
  {
    id: "naos",
    title: "Naos",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 200,
    priceUSD: 155000,
    availability: "Available",
    type: "Lots",
    href: "/properties/naos",
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&q=80",
    certified: false,
  },
  {
    id: "loma-serena",
    title: "Loma Serena",
    zone: "Ensenada, BC",
    region: "Ensenada",
    sqmMin: 400,
    priceUSD: 145000,
    availability: "Available",
    type: "Lots",
    href: "/properties/loma-serena",
    image: "https://images.unsplash.com/photo-1439405328-8e6e24c98c0e?w=800&q=80",
    certified: true,
  },
  {
    id: "pacifica",
    title: "Pacifica",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 300,
    priceUSD: 180000,
    availability: "Available",
    type: "Mixed",
    href: "/properties/pacifica",
    image: `${CLD}/pacifica/hero`,
    certified: true,
  },
  {
    id: "encanto-del-valle",
    title: "Encanto del Valle",
    zone: "Valle de Guadalupe, BC",
    region: "Valle de Guadalupe",
    sqmMin: 450,
    priceUSD: 95000,
    availability: "Available",
    type: "Lots",
    href: "/properties/encanto-del-valle",
    image: `${CLD}/encanto-del-valle/safety`,
    certified: true,
  },
  {
    id: "laguna-bay",
    title: "Laguna Bay",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 180,
    priceUSD: 145000,
    availability: "Available",
    type: "Mixed",
    href: "/properties/laguna-bay",
    image: `${CLD}/laguna-bay/laguna-bay/lake`,
    certified: true,
  },
  {
    id: "costa-real",
    title: "Costa Real",
    zone: "Rosarito, BC",
    region: "Rosarito",
    sqmMin: 300,
    priceUSD: 220000,
    availability: "Available",
    type: "Mixed",
    href: "/properties/costa-real",
    image: `${CLD}/costa-real/hero`,
    certified: true,
  },
  {
    id: "valle",
    title: "Valle Dorado",
    zone: "Valle de Guadalupe, BC",
    region: "Valle de Guadalupe",
    sqmMin: 500,
    priceUSD: 110000,
    availability: "Coming Soon",
    type: "Lots",
    href: "/properties/valle",
    image: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800&q=80",
    certified: false,
  },
];

function formatPrice(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${Math.round(n / 1_000)}K`;
}

type FilterState = {
  region: string;
  price: string;
  availability: string;
  search: string;
};

const REGIONS = ["All", "Rosarito", "Valle de Guadalupe", "Tijuana", "Ensenada"];
const PRICES  = ["All prices", "Under $200K", "$200K – $500K", "Over $500K"];
const AVAIL   = ["All", "Available", "Coming Soon"];

// All filtering runs on the client — no API call needed while the catalogue is static.
function applyFilters(list: Property[], f: FilterState): Property[] {
  return list.filter((p) => {
    if (f.region !== "All" && p.region !== f.region) return false;
    if (f.availability !== "All" && p.availability !== f.availability) return false;
    if (f.price === "Under $200K"     && p.priceUSD >= 200_000) return false;
    if (f.price === "$200K – $500K"   && (p.priceUSD < 200_000 || p.priceUSD > 500_000)) return false;
    if (f.price === "Over $500K"      && p.priceUSD <= 500_000) return false;
    if (f.search && !p.title.toLowerCase().includes(f.search.toLowerCase())) return false;
    return true;
  });
}

// ── FilterPill ────────────────────────────────────────────────────────────────

function FilterPill({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const active = value !== options[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-[14px] px-5 py-3 font-ewangi text-[1rem] transition",
          active
            ? "bg-white text-[#028e7f]"
            : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
        )}
      >
        <span>{active ? value : label}</span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          strokeWidth={2}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-48" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-49 mt-2 min-w-47.5 max-w-[calc(100vw-1rem)] overflow-hidden rounded-[14px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={cn(
                  "w-full px-5 py-3 text-left font-ewangi text-[0.95rem] transition hover:bg-[#eaedf0]",
                  opt === value ? "bg-[#028e7f]/10 text-[#028e7f]" : "text-brand-ink"
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── PropertyCard ──────────────────────────────────────────────────────────────

function PropertyCard({ property }: { property: Property }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="relative">
      {/* Left badges — type + CMRE, same position as beds/baths in saved page */}
      <div className="absolute left-3 top-24 z-20 flex flex-col gap-1.5">
        <div className="flex items-center gap-1 rounded-[3px] bg-brand-teal px-2 py-1 shadow-sm">
          <span className="font-ewangi text-[11px] font-semibold text-white">{property.type}</span>
        </div>
        {property.certified && (
          <div className="flex items-center gap-1 rounded-[3px] bg-[#028e7f] px-2 py-1 shadow-sm">
            <CheckCircle2 className="h-3 w-3 text-white" strokeWidth={2} />
            <span className="font-ewangi text-[11px] font-semibold text-white">CMRE</span>
          </div>
        )}
      </div>

      <Link href={property.href}>
        <article className="rounded-[43px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
          {/* Image — same dimensions as saved card */}
          <div className="relative mx-3 mt-3 overflow-hidden rounded-[37px]" style={{ height: 259 }}>
            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 50vw, 320px"
              className="object-cover transition duration-500 hover:scale-105"
            />

            {/* Heart — empty by default, fills on click */}
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setSaved((s) => !s); }}
              aria-label={saved ? "Remove from saved" : "Save property"}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm transition hover:bg-white/50"
            >
              <Heart
                className={cn(
                  "h-5 w-5 transition",
                  saved ? "fill-brand-teal text-brand-teal" : "fill-transparent text-white"
                )}
                strokeWidth={saved ? 0 : 2}
              />
            </button>

            {/* Price badge */}
            <div className="absolute bottom-3 left-3 rounded-[9px] bg-[#028e7f] px-3 py-2 shadow-md">
              <span className="font-ewangi text-[17px] leading-none text-white">
                From {formatPrice(property.priceUSD)}
              </span>
            </div>

            {/* Coming Soon overlay */}
            {property.availability === "Coming Soon" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="rounded-full bg-white/90 px-5 py-1.5 font-ewangi text-[0.9rem] text-brand-ink">
                  Coming Soon
                </span>
              </div>
            )}
          </div>

          {/* Card body — title + zone + arrow */}
          <div className="flex items-end justify-between px-5 pb-5 pt-3">
            <div className="min-w-0">
              <p className="font-ewangi text-[20px] leading-snug text-black">{property.title}</p>
              <p className="mt-0.5 flex items-center gap-1 font-ewangi text-[13px] text-black/45">
                <MapPin className="h-3 w-3 shrink-0" />
                <span className="truncate">{property.zone}</span>
              </p>
              <p className="mt-0.5 font-ewangi text-[13px] text-black/40">From {property.sqmMin} m²</p>
            </div>
            <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#028e7f]/10 transition group-hover:bg-[#028e7f]/20">
              <ArrowRight className="h-4 w-4 text-[#028e7f]" strokeWidth={2} />
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PropertiesPage() {
  const [filters, setFilters] = useState<FilterState>({
    region: "All",
    price: "All prices",
    availability: "All",
    search: "",
  });

  const filtered = applyFilters(properties, filters);
  const hasActive =
    filters.region !== "All" ||
    filters.price !== "All prices" ||
    filters.availability !== "All" ||
    filters.search !== "";

  function set<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function clear() {
    setFilters({ region: "All", price: "All prices", availability: "All", search: "" });
  }

  return (
    <main className="flex-1">

      {/* ── Header + filter bar ─────────────────────────────────── */}
      <div className="relative z-20 bg-[#028e7f] px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-30">

        <div className="mb-8">
          <h1 className="font-ewangi text-[clamp(2.5rem,5vw,4rem)] leading-none text-[#eaedf0] animate-[fade-left_0.8s_ease-out_both]">
            Properties
          </h1>
          <p className="mt-2 font-ewangi text-[1.1rem] text-white/55">
            {filtered.length} {filtered.length === 1 ? "development" : "developments"} found
          </p>
        </div>

        <RevealOnScroll direction="up" delay={150}>
        <div className="flex flex-wrap items-center gap-3">

          {/* Search input */}
          <div className="flex w-full items-center gap-2.5 rounded-[14px] bg-white/15 px-5 py-3 backdrop-blur-sm sm:w-auto">
            <Search className="h-4 w-4 shrink-0 text-white/60" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search..."
              value={filters.search}
              onChange={(e) => set("search", e.target.value)}
              className="min-w-0 flex-1 bg-transparent font-ewangi text-[1rem] text-white outline-none placeholder:text-white/40 sm:w-28 sm:flex-none"
            />
            {filters.search && (
              <button type="button" onClick={() => set("search", "")} className="text-white/50 hover:text-white">
                <X className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            )}
          </div>

          <FilterPill label="Zone"         options={REGIONS} value={filters.region}       onChange={(v) => set("region", v)} />
          <FilterPill label="Price"        options={PRICES}  value={filters.price}        onChange={(v) => set("price", v)} />
          <FilterPill label="Availability" options={AVAIL}   value={filters.availability} onChange={(v) => set("availability", v)} />

          {hasActive && (
            <button
              type="button"
              onClick={clear}
              className="flex items-center gap-2 rounded-[14px] border border-white/25 px-5 py-3 font-ewangi text-[1rem] text-white/70 transition hover:text-white"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
              Clear
            </button>
          )}
        </div>
        </RevealOnScroll>
      </div>

      {/* ── Card grid ───────────────────────────────────────────── */}
      <div className="relative z-0 bg-brand-paper px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-30">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[clamp(2rem,7vw,6rem)] perspective-[1400px]">
            {filtered.map((property, i) => (
              <RevealOnScroll key={property.id} delay={Math.min(i, 5) * 80}>
                <TiltCard intensity={5}>
                  <PropertyCard property={property} />
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-16 text-center sm:py-24 lg:py-32">
            <Search className="h-16 w-16 text-brand-ink/15" strokeWidth={1} />
            <h2 className="font-ewangi text-[2rem] text-brand-ink/50">No properties found</h2>
            <p className="font-ewangi text-[1.1rem] text-brand-ink/40">
              Try adjusting your filters.
            </p>
            <button
              type="button"
              onClick={clear}
              className="mt-2 inline-flex rounded-full border-2 border-brand-ink/20 px-8 py-3 font-ewangi text-brand-ink/60 transition hover:border-brand-ink/40"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

    </main>
  );
}
