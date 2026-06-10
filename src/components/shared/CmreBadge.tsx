import { cn } from "@/lib/utils";

type CmreBadgeProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function CmreBadge({ className, variant = "dark" }: CmreBadgeProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-card)] px-2 py-1.5 shadow-subtle",
        isDark ? "bg-brand-pine text-brand-paper" : "bg-white/95 text-brand-ink",
        className
      )}
      aria-label="CMRE Certified Mexico Real Estate"
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
        Certified
        <br />
        Mexico Real Estate
      </span>
    </div>
  );
}
