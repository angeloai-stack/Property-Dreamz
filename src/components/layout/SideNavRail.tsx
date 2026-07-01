"use client";

import Link from "next/link";
import { Heart, Home, MapPin, UserCircle } from "lucide-react";

const items = [
  { icon: Home,   label: "Home",            href: "/",           external: false },
  { icon: MapPin, label: "Explore the map", href: "/explore-map", external: false },
  { icon: Heart,  label: "Saved",           href: "/saved",       external: false },
  { icon: UserCircle, label: "Login",        href: "/login",       external: false },
];

export function SideNavRail() {
  return (
    <aside
      aria-label="Side navigation"
      className="fixed left-4 top-4 bottom-4 z-40 hidden flex-col items-center justify-center gap-10 py-10 lg:flex"
    >
      <div className="flex flex-col items-center justify-center gap-10 rounded-full bg-black/50 px-1 py-8 backdrop-blur-md">
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
    </aside>
  );
}
