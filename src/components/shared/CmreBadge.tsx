// Inline CMRE trust badge in dark (pine) or light (white) variants — used on cards and footers.
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type CmreBadgeProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function CmreBadge({ className, variant = "dark" }: CmreBadgeProps) {
  const t = useTranslations("site.cmreBadge");
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-(--radius-card) px-2 py-1.5 shadow-subtle",
        isDark ? "bg-brand-pine text-brand-paper" : "bg-white/95 text-brand-ink",
        className
      )}
      aria-label={t("ariaLabel")}
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded text-[8px] font-bold leading-none",
          isDark ? "bg-brand-paper/10" : "bg-brand-pine text-brand-paper"
        )}
      >
        CM
        <br />
        RE
      </span>
      <span className="text-[9px] font-semibold leading-tight">
        {t("line1")}
        <br />
        {t("line2")}
      </span>
    </div>
  );
}
