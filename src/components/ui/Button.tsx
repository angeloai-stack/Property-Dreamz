import { cn } from "@/lib/utils";

// Button primitive for primary and secondary calls to action.
// Uses the brand palette and includes hover/focus styling for accessibility.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-brand-gold text-brand-navy hover:bg-brand-lightBlue"
          : "border border-brand-white bg-transparent text-white hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
