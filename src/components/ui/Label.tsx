import { cn } from "@/lib/utils";
import { typography } from "@/constants/typography";

// Ewangi label for metadata, tags, and microcopy (e.g. currency disclaimers, field hints).
type LabelProps = React.HTMLAttributes<HTMLSpanElement>;

export function Label({ className, ...props }: LabelProps) {
  return <span className={cn(typography.label, "font-semibold", className)} {...props} />;
}
