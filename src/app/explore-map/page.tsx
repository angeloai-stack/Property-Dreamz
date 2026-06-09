"use client";

import { useState } from "react";

/* ─── DESIGN TOKENS (VoltLab Style Guide) ─────────────────────────────── */
const T = {
  verde: "#024139",
  esmeralda: "#026559",
  esmeraldaHover: "#013F37",
  esmeraldaPressed: "#012B24",
  oro: "#B98A3E",
  ink: "#191919",
  papel: "#F4F1EA",
  papelDark: "#E8E3D8",
  border: "1px solid #191919",
  radius: { card: 4, input: 8, btn: 999 },
  shadow: "0 1px 3px rgba(25,25,25,0.08)",
};

const listings = [
  {
    id: 1,
    status: "verified",
    title: "Residencial Altamar",
    zone: "Zona Río, Tijuana",
    priceMXN: 4250000,
    priceUSD: 250000,
    beds: 3,
    baths: 2,
    sqft: 180,
    rating: 4.8,
    reviews: 124,
    type: "Condo",
    borderMiles: 5,
    sdSavings: 68,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 2,
    status: "preventa",
    title: "Torres Pacífico",
    zone: "Playas de Rosarito, BC",
    priceMXN: 3100000,
    priceUSD: 182000,
    beds: 2,
    baths: 2,
    sqft: 130,
    rating: 4.6,
    reviews: 89,
    type: "Condo",
    borderMiles: 18,
    sdSavings: 71,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
  {
    id: 3,
    status: "destacado",
    title: "Hacienda Valle",
    zone: "Valle de Guadalupe, BC",
    priceMXN: 12800000,
    priceUSD: 750000,
    beds: 5,
    baths: 4,
    sqft: 420,
    rating: 5.0,
    reviews: 41,
    type: "House",
    borderMiles: 55,
    sdSavings: 69,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    id: 4,
    status: "verified",
    title: "Punta Mita Reserve",
    zone: "Punta Mita, Nayarit",
    priceMXN: 21250000,
    priceUSD: 1250000,
    beds: 5,
    baths: 5,
    sqft: 540,
    rating: 4.9,
    reviews: 37,
    type: "House",
    borderMiles: 1100,
    sdSavings: 67,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
  {
    id: 5,
    status: "vendido",
    title: "Tulum Nah Kin",
    zone: "Tulum, Quintana Roo",
    priceMXN: 5440000,
    priceUSD: 320000,
    beds: 3,
    baths: 2,
    sqft: 195,
    rating: 4.7,
    reviews: 58,
    type: "Condo",
    borderMiles: 1650,
    sdSavings: 71,
    image:
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=600&q=80",
  },
  {
    id: 6,
    status: "verified",
    title: "Ensenada Marina",
    zone: "Ensenada, Baja California",
    priceMXN: 4165000,
    priceUSD: 245000,
    beds: 3,
    baths: 2,
    sqft: 150,
    rating: 4.5,
    reviews: 102,
    type: "Condo",
    borderMiles: 68,
    sdSavings: 70,
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80",
  },
];

const pins = [
  { id: 1, x: 9, y: 67 },
  { id: 2, x: 8, y: 70 },
  { id: 3, x: 11, y: 65 },
  { id: 4, x: 42, y: 50 },
  { id: 5, x: 78, y: 62 },
  { id: 6, x: 10, y: 72 },
] as const;

type Listing = typeof listings[number];
type Pin = typeof pins[number];

const statusCfg = {
  verified: { label: "Verified", bg: T.esmeralda, color: T.papel },
  preventa: { label: "Presale", bg: T.verde, color: T.papel },
  destacado: { label: "Featured", bg: T.oro, color: T.papel },
  vendido: { label: "Sold", bg: "#888", color: "#fff" },
};

const fmtMXN = (n: number) => `$${(n / 1000000).toFixed(2).replace(/\.?0+$/, "")}M MXN`;
const fmtUSD = (n: number) =>
  n >= 1000000
    ? `USD $${(n / 1000000).toFixed(2)}M`
    : `USD $${(n / 1000).toFixed(0)}K`;

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ display: "inline-flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1l1.2 3.6H11L8.4 6.8l.9 3.6L6 8.5l-3.3 1.9.9-3.6L1 4.6h3.8z"
            fill={i <= Math.round(rating) ? T.oro : T.papelDark}
            stroke={i <= Math.round(rating) ? T.oro : T.papelDark}
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </span>
  );
}

function IconBed() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.verde}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9V6a1 1 0 011-1h18a1 1 0 011 1v3" />
      <path d="M2 20v-5a2 2 0 012-2h16a2 2 0 012 2v5" />
      <path d="M2 13h20" />
      <path d="M6 13V9" />
    </svg>
  );
}

function IconBath() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.verde}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6V3a1 1 0 011-1h4a1 1 0 011 1v3" />
      <rect x="2" y="6" width="20" height="8" rx="2" />
      <path d="M4 14v4" />
      <path d="M20 14v4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function IconArea() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.verde}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M9 3v18" />
      <path d="M3 9h6" />
      <path d="M3 15h6" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.verde}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={T.verde}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconVerified() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={T.oro} stroke={T.oro} strokeWidth="1.5">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" />
    </svg>
  );
}

function ListingCard({
  listing,
  active,
  onClick,
}: {
  listing: Listing;
  active: boolean;
  onClick: () => void;
}) {
  const [hov, setHov] = useState(false);
  const st = statusCfg[listing.status as keyof typeof statusCfg];
  const sold = listing.status === "vendido";

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.papel,
        border: `1px solid ${active ? T.esmeralda : T.ink}`,
        borderRadius: T.radius.card,
        overflow: "hidden",
        cursor: "pointer",
        opacity: sold ? 0.7 : 1,
        outline: active ? `2px solid ${T.esmeralda}` : "none",
        outlineOffset: 2,
        transition: "outline 0.15s ease, transform 0.15s ease",
        transform: hov && !sold ? "translateY(-2px)" : "none",
        boxShadow: hov ? T.shadow : "none",
      }}
    >
      <div style={{ position: "relative", height: 176, overflow: "hidden", background: T.papelDark }}>
        <img
          src={listing.image}
          alt={listing.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: sold ? "grayscale(100%)" : "none",
            transition: "transform 0.4s ease",
            transform: hov && !sold ? "scale(1.04)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: st.bg,
            color: st.color,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            padding: "3px 10px",
            borderRadius: T.radius.btn,
            textTransform: "uppercase",
            fontFamily: "'Overpass Mono', monospace",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          {listing.status === "verified" && <IconVerified />}
          {st.label}
        </div>
        {!sold && (
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: T.papel,
              border: `1px solid ${T.ink}`,
              color: T.ink,
              fontSize: 10,
              padding: "3px 8px",
              borderRadius: T.radius.btn,
              fontFamily: "'Overpass Mono', monospace",
            }}
          >
            {listing.sdSavings}% vs SD
          </div>
        )}
      </div>

      <div style={{ padding: "14px 16px 16px" }}>
        <div
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 20,
            color: T.ink,
            lineHeight: 1.1,
            marginBottom: 2,
          }}
        >
          {fmtMXN(listing.priceMXN)}
        </div>
        <div
          style={{
            fontFamily: "'Overpass Mono', monospace",
            fontSize: 11,
            color: T.esmeralda,
            marginBottom: 10,
          }}
        >
          {fmtUSD(listing.priceUSD)}
        </div>

        <div
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 16,
            color: T.ink,
            marginBottom: 3,
            lineHeight: 1.2,
          }}
        >
          {listing.title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontFamily: "'Lora', Georgia, serif",
            fontSize: 12,
            color: "#555",
            marginBottom: 12,
          }}
        >
          <IconPin />
          {listing.zone} · {listing.borderMiles}mi from the border
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginBottom: 12,
            fontFamily: "'Overpass Mono', monospace",
            fontSize: 11,
            color: T.ink,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconBed />
            {listing.beds}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconBath />
            {listing.baths}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconArea />
            {listing.sqft} m²
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
          <Stars rating={listing.rating} />
          <span
            style={{
              fontFamily: "'Overpass Mono', monospace",
              fontSize: 11,
              color: T.ink,
            }}
          >
            {listing.rating} · {listing.reviews} reviews
          </span>
        </div>

        <div style={{ borderTop: T.border, marginBottom: 12 }} />

        {sold ? (
          <div
            style={{
              fontFamily: "'Overpass Mono', monospace",
              fontSize: 12,
              color: "#888",
              textAlign: "center",
              padding: "8px 0",
            }}
          >
            Sold
          </div>
        ) : (
          <button
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              background: T.esmeralda,
              color: T.papel,
              border: "none",
              borderRadius: T.radius.btn,
              padding: "9px 0",
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 14,
              cursor: "pointer",
              transition: "background 0.15s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = T.esmeraldaHover;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = T.esmeralda;
            }}
          >
            View project
          </button>
        )}
      </div>
    </article>
  );
}

function MapPanel({
  pins,
  listings,
  activePin,
  onPinClick,
  filtered,
}: {
  pins: readonly Pin[];
  listings: readonly Listing[];
  activePin: number | null;
  onPinClick: (id: number) => void;
  filtered: readonly Listing[];
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#D6E8C8",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
        preserveAspectRatio="none"
      >
        <rect width="100" height="100" fill="#D6E8C8" />
        <path d="M0,40 Q10,35 15,50 Q12,70 0,80 Z" fill="#B8D4E8" opacity="0.6" />
        <path d="M100,30 Q90,40 85,60 Q88,80 100,85 Z" fill="#B8D4E8" opacity="0.6" />
        <path d="M15,10 Q30,8 50,12 Q70,16 85,10 Q90,20 88,35 Q82,55 75,70 Q65,82 55,88 Q45,90 35,82 Q25,72 20,60 Q12,45 15,30 Z" fill="#C8DEB8" />
        {[20, 40, 60, 80].map((v) => (
          <g key={v}>
            <line x1="0" y1={v} x2="100" y2={v} stroke="#B5C9A8" strokeWidth="0.4" />
            <line x1={v} y1="0" x2={v} y2="100" stroke="#B5C9A8" strokeWidth="0.4" />
          </g>
        ))}
        <path d="M14,28 Q13,40 12,55 Q11,68 13,78" stroke="#A8C498" strokeWidth="1.5" fill="none" />
      </svg>

      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: T.papel,
          border: T.border,
          borderRadius: T.radius.input,
          padding: "6px 12px",
          fontFamily: "'Overpass Mono', monospace",
          fontSize: 10,
          color: T.ink,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ color: T.esmeralda, fontWeight: 700 }}>●</span>
        Mexico · {filtered.length} projects
      </div>

      {pins.map((pin) => {
        const listing = listings.find((l) => l.id === pin.id)!;
        const isActive = activePin === pin.id;
        const isVisible = filtered.find((l) => l.id === pin.id);

        return (
          <div
            key={pin.id}
            onClick={() => onPinClick(pin.id)}
            style={{
              position: "absolute",
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              transform: "translate(-50%, -100%)",
              cursor: "pointer",
              opacity: isVisible ? 1 : 0.25,
              transition: "all 0.2s ease",
              zIndex: isActive ? 10 : 1,
            }}
          >
            <div
              style={{
                background: isActive ? T.ink : T.papel,
                border: `1px solid ${T.ink}`,
                color: isActive ? T.papel : T.ink,
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 11,
                fontWeight: 700,
                padding: "4px 9px",
                borderRadius: T.radius.btn,
                whiteSpace: "nowrap",
                transform: isActive ? "scale(1.1)" : "scale(1)",
                transition: "all 0.2s ease",
                boxShadow: isActive ? T.shadow : "none",
              }}
            >
              {fmtUSD(listing.priceUSD)}
            </div>
            <div style={{ width: 2, height: 7, background: T.ink, margin: "0 auto" }} />
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: isActive ? T.oro : T.ink,
                margin: "0 auto",
                border: isActive ? `1.5px solid ${T.ink}` : "none",
              }}
            />
          </div>
        );
      })}

      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 12,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {['+', '−'].map((c) => (
          <button
            key={c}
            style={{
              width: 30,
              height: 30,
              background: T.papel,
              border: T.border,
              borderRadius: T.radius.card,
              fontSize: 16,
              fontWeight: 300,
              cursor: "pointer",
              color: T.ink,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SearchPageV2() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [currency, setCurrency] = useState("USD");
  const [sortBy, setSortBy] = useState("rec");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const types = ["All", "House", "Condo", "Land"];

  const filtered = listings
    .filter((l) => {
      if (typeFilter !== "All" && l.type !== typeFilter) return false;
      if (verifiedOnly && l.status !== "verified") return false;
      if (
        searchVal &&
        !l.title.toLowerCase().includes(searchVal.toLowerCase()) &&
        !l.zone.toLowerCase().includes(searchVal.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.priceUSD - b.priceUSD;
      if (sortBy === "price-desc") return b.priceUSD - a.priceUSD;
      return 0;
    });

  const handlePin = (id: number) => setActivePin((prev) => (prev === id ? null : id));

  return (
    <div
      style={{
        fontFamily: "'Lora', Georgia, serif",
        background: T.papel,
        minHeight: "100vh",
        color: T.ink,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Lora:wght@400;500&family=Overpass+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <header
        style={{
          background: T.verde,
          borderBottom: "none",
          padding: "0 28px",
          height: 54,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 200,
        }}
      >
        <img
          src="/brand/property-dreamz-logo-horizontal.png"
          alt="Property Dreamz"
          style={{
            width: 188,
            height: "auto",
            display: "block",
            filter: "brightness(0) invert(1)",
          }}
        />
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {['Projects', 'Buyer Guide', 'How It Works'].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "'Overpass Mono', monospace",
                fontSize: 11,
                color: T.papelDark,
                cursor: "pointer",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
          ))}
          <button
            style={{
              background: T.oro,
              color: T.papel,
              border: "none",
              borderRadius: T.radius.btn,
              padding: "7px 18px",
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Talk to an Advisor
          </button>
        </nav>
      </header>

      <div
        style={{
          background: T.esmeralda,
          padding: "12px 28px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          borderBottom: "none",
          position: "sticky",
          top: 54,
          zIndex: 190,
        }}
      >
        <div
          style={{
            flex: "1 1 220px",
            background: T.papel,
            border: T.border,
            borderRadius: T.radius.input,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "7px 14px",
            maxWidth: 360,
          }}
        >
          <IconSearch />
          <input
            type="text"
            placeholder="City, area, or development..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 13,
              color: T.ink,
              width: "100%",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 0,
            background: T.verde,
            border: `1px solid ${T.papel}44`,
            borderRadius: T.radius.btn,
            overflow: "hidden",
          }}
        >
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              style={{
                background: typeFilter === t ? T.papel : "transparent",
                color: typeFilter === t ? T.verde : T.papelDark,
                border: "none",
                padding: "7px 14px",
                fontFamily: "'Overpass Mono', monospace",
                fontSize: 11,
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "all 0.15s ease",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 0,
            background: T.verde,
            border: `1px solid ${T.papel}44`,
            borderRadius: T.radius.btn,
            overflow: "hidden",
          }}
        >
          {['USD', 'MXN'].map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              style={{
                background: currency === c ? T.oro : "transparent",
                color: currency === c ? T.papel : T.papelDark,
                border: "none",
                padding: "7px 14px",
                fontFamily: "'Overpass Mono', monospace",
                fontSize: 11,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            cursor: "pointer",
            fontFamily: "'Overpass Mono', monospace",
            fontSize: 11,
            color: T.papelDark,
            userSelect: "none",
          }}
        >
          <div
            onClick={() => setVerifiedOnly(!verifiedOnly)}
            style={{
              width: 16,
              height: 16,
              borderRadius: 3,
              background: verifiedOnly ? T.oro : "transparent",
              border: `1.5px solid ${verifiedOnly ? T.oro : T.papelDark}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s ease",
            }}
          >
            {verifiedOnly && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 3" stroke={T.papel} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </div>
          Verified only
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            background: T.verde,
            border: `1px solid ${T.papel}44`,
            color: T.papelDark,
            borderRadius: T.radius.btn,
            padding: "7px 12px",
            fontFamily: "'Overpass Mono', monospace",
            fontSize: 11,
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="rec">Relevance</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>

        <div
          style={{
            marginLeft: "auto",
            fontFamily: "'Overpass Mono', monospace",
            fontSize: 11,
            color: T.papelDark,
          }}
        >
          <span style={{ color: T.papel, fontWeight: 700 }}>{filtered.length}</span> projects
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 110px)" }}>
        <div
          style={{
            width: "44%",
            minWidth: 300,
            position: "sticky",
            top: 110,
            height: "calc(100vh - 110px)",
            flexShrink: 0,
            borderRight: T.border,
          }}
        >
          <MapPanel pins={pins} listings={listings} activePin={activePin} onPinClick={handlePin} filtered={filtered} />
        </div>

        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 24px",
            scrollbarWidth: "thin",
            scrollbarColor: `${T.papelDark} ${T.papel}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 18,
              borderBottom: T.border,
              paddingBottom: 12,
            }}
          >
            <h1
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 22,
                fontWeight: 400,
                color: T.ink,
                margin: 0,
              }}
            >
              Projects in Mexico
            </h1>
            <span
              style={{
                fontFamily: "'Overpass Mono', monospace",
                fontSize: 11,
                color: "#666",
              }}
            >
              Prices in {currency} · Verified by PropertyDreamz
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
              gap: 16,
            }}
          >
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} active={activePin === listing.id} onClick={() => handlePin(listing.id)} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "64px 20px",
                fontFamily: "'Lora', Georgia, serif",
                color: "#888",
                fontSize: 15,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 12 }}>🏖️</div>
              No results. Adjust the filters.
            </div>
          )}

          {filtered.length > 0 && (
            <div style={{ textAlign: "center", marginTop: 28, paddingBottom: 28 }}>
              <button
                style={{
                  background: "transparent",
                  border: T.border,
                  borderRadius: T.radius.btn,
                  padding: "10px 32px",
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 14,
                  cursor: "pointer",
                  color: T.ink,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = T.ink;
                  (e.currentTarget as HTMLButtonElement).style.color = T.papel;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = T.ink;
                }}
              >
                View more projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
