import { cn } from "@/lib/utils";

// Input primitive for forms and data entry fields.
// Includes default focus ring, border, and placeholder styling.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-(--space-4) py-(--space-3) font-body text-body outline-none transition",
        "bg-brand-paper border border-(--border-color-ink) text-brand-ink",
        "rounded-(--radius-input) focus:border-(--btn-primary-bg) focus:ring-2 focus:ring-(--btn-primary-bg)/20",
        className
      )}
      {...props}
    />
  );
}
