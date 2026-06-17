import { cn } from "@/lib/utils";

// Card wrapper for surface panels, feature tiles, and grouped content.
// Applies rounded corners, border, translucency, and a soft drop shadow.
type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "w-full min-w-0 wrap-break-word bg-brand-paper border border-(--border-color-ink) p-(--space-4) text-brand-ink",
        "rounded-(--radius-card)",
        "shadow-subtle",
        className
      )}
      {...props}
    />
  );
}
