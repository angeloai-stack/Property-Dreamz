import { cn } from "@/lib/utils";

// Card wrapper for surface panels, feature tiles, and grouped content.
// Applies rounded corners, border, translucency, and a soft drop shadow.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "w-full min-w-0 break-words bg-[var(--color-brand-paper)] border border-[var(--border-color-ink)] p-[var(--space-4)] text-[var(--color-brand-ink)]",
        "rounded-[var(--radius-card)]",
        "shadow-subtle",
        className
      )}
      {...props}
    />
  );
}
