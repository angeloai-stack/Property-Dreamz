import { cn } from "@/lib/utils";
import { typography } from "@/constants/typography";

// Ewangi label for metadata, tags, and microcopy (e.g. "Precios en MXN y USD").
interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Label({ className, ...props }: LabelProps) {
  return <span className={cn(typography.label, "font-semibold", className)} {...props} />;
}
