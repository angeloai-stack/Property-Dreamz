"use client";
// "On this page" sidebar — Figma: TOC, bg #f4f8f6 r=16, 260px wide. Highlights the section in view.
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; label: string };

export function ArticleToc({ items }: { items: readonly TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 hidden w-65 shrink-0 flex-col items-start gap-3.5 rounded-2xl bg-[#f4f8f6] px-6 py-6.5 lg:flex"
    >
      <p className="font-ewangi text-[11px] font-bold tracking-[0.11em] text-brand-teal">ON THIS PAGE</p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "font-ewangi text-[15px] leading-snug transition",
            activeId === item.id ? "font-bold text-brand-pine" : "text-[#5c6978] hover:text-brand-pine"
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
