"use client";
// Social share row — Figma: small outlined circles in the byline, larger filled circles in the Share section.
import { useState } from "react";
import { cn } from "@/lib/utils";

const NETWORKS = ["X", "f", "in", "WA"] as const;

type ShareButtonsProps = {
  size?: "sm" | "lg";
  showCopyLink?: boolean;
  className?: string;
};

export function ShareButtons({ size = "sm", showCopyLink = false, className }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const large = size === "lg";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore, the button just won't confirm.
    }
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {NETWORKS.map((label) => (
        <button
          key={label}
          type="button"
          aria-label={`Share on ${label}`}
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full font-bold transition",
            large
              ? "h-11.5 w-11.5 bg-brand-pine text-white text-[15px] hover:bg-black"
              : "h-9 w-9 border-[1.5px] border-[#dee5e3] text-brand-pine text-[13px] hover:border-brand-teal"
          )}
        >
          {label}
        </button>
      ))}

      {showCopyLink && (
        <button
          type="button"
          onClick={copyLink}
          className="rounded-full border-[1.5px] border-[#dee5e3] px-5 py-3.5 font-ewangi text-[14px] font-semibold text-brand-pine transition hover:border-brand-teal"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      )}
    </div>
  );
}
