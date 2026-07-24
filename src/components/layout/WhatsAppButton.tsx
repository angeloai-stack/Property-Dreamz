"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

// Floating WhatsApp action button for direct chat support.
// Keep this fixed to the bottom-right corner across pages.
export function WhatsAppButton() {
  const t = useTranslations("nav");
  const [animating, setAnimating] = useState(false);

  function trigger() {
    setAnimating(false);
    // Double rAF forces a paint between false→true so the CSS animation always restarts.
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimating(true)));
  }

  return (
    <div className="fixed bottom-6 right-6 z-9999 hidden pb-[env(safe-area-inset-bottom,0px)] lg:block">
      <a
        // Replace with the real business WhatsApp number before going live.
        href="https://wa.me/5210000000000"
        target="_blank"
        rel="noreferrer"
        aria-label={t("whatsapp")}
        onMouseEnter={trigger}
        onTouchStart={trigger}
        onAnimationEnd={() => setAnimating(false)}
        className={`relative inline-flex items-center justify-center rounded-full bg-brand-teal p-4 text-white shadow-[0_6px_12px_rgba(58,211,193,0.30)] transition hover:bg-brand-emerald${animating ? " animate-[wiggle_0.45s_ease-in-out]" : ""}`}
      >
        <Icon as={MessageCircle} size={20} />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
