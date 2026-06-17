"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Heart, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui";

const developers = [
  {
    id: 1,
    name: "Boga Telchac",
    location: "Yucatán",
    price: "$285,000",
    beds: 2,
    baths: 2,
    sqft: 85,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    href: "/properties",
  },
  {
    id: 2,
    name: "Marietta",
    location: "Nayarit",
    price: "$450,000",
    beds: 3,
    baths: 2,
    sqft: 140,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
    href: "/properties",
  },
  {
    id: 3,
    name: "Punta de Mita",
    location: "Nayarit",
    price: "$895,000",
    beds: 4,
    baths: 3,
    sqft: 220,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    href: "/properties",
  },
  {
    id: 4,
    name: "Lemuria",
    location: "Isla Mujeres",
    price: "$320,000",
    beds: 2,
    baths: 2,
    sqft: 90,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    href: "/properties",
  },
] as const;

export function TopDevelopers() {
  return (
    <section className="w-full bg-brand-paper py-14 md:py-16">
      <Container>
        {/* Centered badge heading — matches Figma Group 24 "Our top's developers" pill */}
        <div className="mb-10 flex justify-center">
          <span className="rounded-full bg-brand-emerald px-7 py-2.5 font-ewangi text-label font-semibold text-brand-paper shadow-subtle">
            Our top&apos;s developers
          </span>
        </div>

        {/* Horizontal scroll row of 4 portrait cards */}
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden lg:gap-5">
          {developers.map((dev) => (
            <Link
              key={dev.id}
              href={dev.href}
              aria-label={`${dev.name}, ${dev.location} — ${dev.price}`}
              className="relative shrink-0 w-65 overflow-hidden rounded-3xl block"
              style={{ height: 420 }}
            >
              {/* Property photo — fills full card */}
              <Image
                src={dev.image}
                alt={dev.name}
                fill
                sizes="260px"
                className="object-cover transition duration-300 hover:scale-105"
              />

              {/* Bottom gradient so price badge text reads clearly */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              {/* Save/heart button — top right */}
              <button
                type="button"
                aria-label={`Save ${dev.name}`}
                onClick={(e) => e.preventDefault()}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-ink shadow-subtle backdrop-blur-sm transition hover:bg-white"
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
              </button>

              {/* Spec chips — stacked on the left, vertically centered */}
              <div className="absolute left-3 top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
                <span className="flex items-center gap-1 rounded-full bg-brand-emerald px-2.5 py-1 text-[10px] font-bold text-brand-paper">
                  <Bed className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.beds}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-emerald px-2.5 py-1 text-[10px] font-bold text-brand-paper">
                  <Bath className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.baths}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-emerald px-2.5 py-1 text-[10px] font-bold text-brand-paper">
                  <LayoutGrid className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {dev.sqft} m²
                </span>
              </div>

              {/* Price badge — full-width strip at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-brand-emerald px-4 py-3">
                <p className="font-ewangi text-subtitle font-bold text-brand-paper">
                  {dev.price}
                </p>
                <p className="font-ewangi text-[10px] font-semibold uppercase tracking-widest text-brand-paper/70">
                  {dev.location}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Social proof — matches Figma Group 25 "+2369 people purchasing" */}
        <p className="mt-8 text-center font-ewangi text-label text-brand-muted">
          +2,369 people purchasing properties right now
        </p>
      </Container>
    </section>
  );
}
