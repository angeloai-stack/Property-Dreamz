import { cn } from "@/lib/utils";

// Card wrapper for surface panels, feature tiles, and grouped content.
// Applies rounded corners, border, translucency, and a soft drop shadow.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(10,22,40,0.25)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
