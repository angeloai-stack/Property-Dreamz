import { cn } from "@/lib/utils";

// Card wrapper for surface panels, feature tiles, and grouped content.
// Applies rounded corners, border, translucency, and a soft drop shadow.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-ink/10 bg-brand-paper p-6 text-brand-ink",
        className
      )}
      {...props}
    />
  );
}
