"use client";

import Link from "next/link";
import { Heart, Home, MapPin, MessageCircle } from "lucide-react";

const items = [
  { icon: Home,          label: "Home",    href: "/",                           external: false },
  { icon: MapPin,        label: "Map",     href: "/explore-map",                external: false },
  { icon: Heart,         label: "Saved",   href: "/saved",                      external: false },
  { icon: MessageCircle, label: "WhatsApp",href: "https://wa.me/5210000000000", external: true  },
];

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed bottom-4 left-1/2 z-9999 -translate-x-1/2 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 shadow-lg backdrop-blur-md">
        {items.map(({ icon: Icon, label, href, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition hover:bg-white/20 hover:text-white"
            >
              <Icon size={22} strokeWidth={1.5} />
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition hover:bg-white/20 hover:text-white"
            >
              <Icon size={22} strokeWidth={1.5} />
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
