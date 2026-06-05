import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "default" | "premium" | "accent" | "outline" | "ghost";
  href?: string;
  className?: string;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

// Button primitive with flat, editorial styling and clear variant semantics.
// Default buttons use emerald (#026559); gold is reserved for high-value accent actions.
export function Button({ href, className, variant = "default", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-emerald/30 disabled:pointer-events-none disabled:opacity-50",
    variant === "default"
      ? "bg-brand-emerald text-brand-paper hover:bg-[#013F37] active:bg-[#012B24] disabled:bg-brand-emerald/40"
      : variant === "premium"
      ? "bg-brand-pine text-brand-paper hover:bg-[#013F37] active:bg-[#012B24]"
      : variant === "accent"
      ? "bg-brand-gold text-brand-ink hover:bg-[#a0772e] active:bg-[#8f6d2e]"
      : variant === "outline"
      ? "border border-brand-emerald bg-transparent text-brand-emerald hover:bg-brand-emerald/5 active:bg-brand-emerald/10"
      : "bg-transparent text-brand-ink hover:bg-brand-paper/90 active:bg-brand-paper",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
