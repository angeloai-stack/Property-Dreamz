"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart, Home, MapPin, UserCircle } from "lucide-react";

const items = [
  { icon: Home,       key: "home",  href: "/",            external: false },
  { icon: MapPin,     key: "map",   href: "/explore-map", external: false },
  { icon: Heart,      key: "saved", href: "/saved",       external: false },
  { icon: UserCircle, key: "login", href: "/login",       external: false },
];

export function MobileBottomNav() {
  const t = useTranslations("nav");
  const labels: Record<string, string> = {
    home: t("items.home"),
    map: t("items.map"),
    saved: t("saved"),
    login: t("login"),
  };

  return (
    <nav
      aria-label={t("mobileBottomNav")}
      className="fixed bottom-4 left-1/2 z-9999 -translate-x-1/2 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 shadow-lg backdrop-blur-md">
        {items.map(({ icon: Icon, key, href, external }) =>
          external ? (
            <a
              key={key}
              href={href}
              aria-label={labels[key]}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition hover:bg-white/20 hover:text-white"
            >
              <Icon size={22} strokeWidth={1.5} />
            </a>
          ) : (
            <Link
              key={key}
              href={href}
              aria-label={labels[key]}
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
