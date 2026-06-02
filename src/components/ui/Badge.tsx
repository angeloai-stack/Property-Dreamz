import { cn } from "@/lib/utils";

// Badge component used for inline metadata labels and status indicators.
// Supports brand color variants and accepts any native span attributes.
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        variant === "success"
          ? "bg-brand-green text-white"
          : "bg-white/10 text-white",
        className
      )}
      {...props}
    />
  );
}
