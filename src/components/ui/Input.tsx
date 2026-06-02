import { cn } from "@/lib/utils";

// Input primitive for forms and data entry fields.
// Includes default focus ring, border, and placeholder styling.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-gray outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20",
        className
      )}
      {...props}
    />
  );
}
