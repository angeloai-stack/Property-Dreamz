"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Home, MapPin, MessageCircle } from "lucide-react";
import { CmreBadge } from "@/components/shared/CmreBadge";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80";

const iconRail = [
  { icon: Home, label: "Home", href: "/" },
  { icon: MapPin, label: "Explore map", href: "/explore-map" },
  { icon: Heart, label: "Saved", href: "/saved" },
  { icon: MessageCircle, label: "Contact", href: "/contact" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#eaedf0] min-h-[min(88vh,820px)]">
      {/* Full-bleed hero image */}
      <Image
        src={heroImage}
        alt="Modern luxury residence in Mexico"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />


      {/* Left icon rail — matches Figma sidebar vectors at x≈20, y=199/308/412/516 */}
      <aside
        aria-label="Quick navigation"
        className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-7 lg:flex"
      >
        {iconRail.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="flex h-7 w-7 items-center justify-center text-white/80 transition hover:text-white"
          >
            <Icon size={17} strokeWidth={1.5} />
          </Link>
        ))}
      </aside>

      {/* Headline — Figma: Ewangi 120px, fill=#eaedf0, x=43, y=192 */}
      <div className="relative z-10 flex min-h-[min(88vh,820px)] flex-col justify-center px-10 pb-28 pt-16 lg:px-20">
        <h1 className="font-ewangi text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.88] tracking-tight text-[#eaedf0]">
          Find your
          <br />
          Piece of Mexico
        </h1>
      </div>

      {/* Location badge — Figma: Group 23, y=556, glass pill r=74, Ewangi 34px white */}
      <div className="absolute bottom-16 left-10 z-10 lg:left-20">
        <Link
          href="/explore-map"
          className="flex items-center gap-3 rounded-full bg-[rgba(217,217,217,0.21)] px-6 py-3 backdrop-blur-sm transition hover:bg-[rgba(217,217,217,0.35)]"
        >
          <MapPin className="h-5 w-5 shrink-0 text-white" strokeWidth={1.5} />
          <span className="font-ewangi text-[clamp(1rem,2.2vw,1.4rem)] text-white">
            Tijuana, Rosarito, Pto. Nuevo
          </span>
        </Link>
      </div>

      {/* CMRE badge — Figma: CMRE Logo-02 1 at x=1194, y=779 (bottom-right) */}
      <div className="absolute bottom-14 right-6 z-10">
        <CmreBadge variant="light" />
      </div>

      {/* Turquoise bottom strip — Figma: Rectangle 9, y=874, fill=#39d3c0 */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-[#39d3c0]" />
    </section>
  );
}
