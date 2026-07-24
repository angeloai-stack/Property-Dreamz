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

export function SideNavRail() {
  const t = useTranslations("nav");
  const labels: Record<string, string> = {
    home: t("items.home"),
    map: t("exploreTheMap"),
    saved: t("saved"),
    login: t("login"),
  };

  return (
    <aside
      aria-label={t("sideNav")}
      className="fixed left-4 top-4 bottom-4 z-40 hidden flex-col items-center justify-center gap-10 py-10 lg:flex"
    >
      <div className="flex flex-col items-center justify-center gap-10 rounded-full bg-black/50 px-1 py-8 backdrop-blur-md">
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
    </aside>
  );
}
