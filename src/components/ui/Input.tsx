import { cn } from "@/lib/utils";

// Input primitive for forms and data entry fields.
// Includes default focus ring, border, and placeholder styling.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-[var(--space-4)] py-[var(--space-3)] text-sm outline-none transition",
        "bg-[var(--color-brand-paper)] border border-[var(--border-color-ink)] text-[var(--color-brand-ink)]",
        "rounded-[var(--radius-input)] focus:border-[var(--btn-primary-bg)] focus:ring-2 focus:ring-[var(--btn-primary-bg)]/20",
        className
      )}
      {...props}
    />
  );
}
