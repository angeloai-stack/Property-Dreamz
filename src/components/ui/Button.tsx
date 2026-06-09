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
  const base = "inline-flex items-center justify-center rounded-[var(--radius-btn)] px-[var(--space-5)] py-[var(--space-3)] text-sm font-semibold transition duration-200 focus:outline-none disabled:pointer-events-none disabled:bg-brand-paper/70 disabled:text-brand-gray disabled:shadow-none";

  const variantClasses =
    variant === "default"
      ? "bg-[var(--btn-primary-bg)] text-brand-paper hover:bg-[var(--btn-primary-hover)] active:bg-[var(--btn-primary-active)]"
      : variant === "premium"
      ? "bg-[var(--color-brand-gold)] text-[var(--color-brand-ink)] hover:brightness-95 active:brightness-90"
      : variant === "accent"
      ? "bg-[var(--color-brand-pine)] text-[var(--color-brand-gold)] hover:bg-[rgba(2,65,57,0.92)] active:bg-[rgba(2,65,57,0.84)]"
      : variant === "outline"
      ? "border border-[var(--btn-primary-bg)] bg-transparent text-[var(--btn-primary-bg)] hover:bg-[rgba(2,101,89,0.08)] active:bg-[rgba(2,101,89,0.14)]"
      : "bg-transparent text-[var(--color-brand-ink)] hover:bg-[rgba(25,25,25,0.08)] active:bg-[rgba(25,25,25,0.12)]";

  const classes = cn(base, variantClasses, className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
    );
  }

  return <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
