"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Calendar, Heart, MessageCircle, Search } from "lucide-react";
import { CmreBadge } from "@/components/shared/CmreBadge";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80";

const quickActions = [
  { label: "Search", href: "/explore-map", icon: Search },
  { label: "Saved", href: "/saved", icon: Heart },
  { label: "Contact", href: "/contact", icon: MessageCircle },
  { label: "Schedule", href: "/contact", icon: Calendar },
] as const;

export function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    router.push(`/explore-map${params}`);
  };

  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />

      <div className="absolute bottom-6 right-4 z-10 hidden sm:block">
        <CmreBadge variant="light" />
      </div>

      <aside
        aria-label="Quick actions"
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 rounded-2xl border border-white/25 bg-white/15 p-2 backdrop-blur-md md:left-5 md:flex lg:left-8"
      >
        {quickActions.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/20"
          >
            <Icon as={icon} size={20} color="currentColor" strokeWidth={1.8} />
          </Link>
        ))}
      </aside>

      <div className="relative z-10 flex min-h-[min(92vh,820px)] flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-4xl space-y-8 text-center md:text-left">
          <h1 className="font-ibrand text-[clamp(2.25rem,6vw,2.875rem)] leading-[1.05] tracking-[-0.02em]">
            <span className="block font-normal text-white drop-shadow-sm">Find your</span>
            <span className="block font-bold text-brand-ink">Piece of Mexico</span>
          </h1>

          <form
            onSubmit={handleSearch}
            role="search"
            className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-md sm:px-5 sm:py-4 md:mx-0"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tijuana, Rosarito, Pto. Nuevo..."
              aria-label="Search locations"
              className="min-w-0 flex-1 bg-transparent font-body text-body text-white outline-none placeholder:text-white/75"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/35 bg-white/10 text-white transition hover:bg-white/20"
            >
              <Icon as={Search} size={22} color="currentColor" strokeWidth={1.8} />
            </button>
          </form>

          <div className="flex justify-center gap-2 md:hidden">
            {quickActions.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md"
                )}
              >
                <Icon as={icon} size={18} color="currentColor" strokeWidth={1.8} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
