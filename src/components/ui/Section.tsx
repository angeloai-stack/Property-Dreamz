import { cn } from "@/lib/utils";

// Section wrapper used to create vertical page sections with default spacing.
// The `as` prop allows rendering as any element (e.g. <div>, <article>) while keeping the padding contract.
type SectionProps<T extends React.ElementType = "section"> = {
  as?: T;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Section<T extends React.ElementType = "section">({
  as,
  className,
  ...props
}: SectionProps<T>) {
  const Component = as || "section";

  return <Component className={cn("py-12 md:py-16", className)} {...props} />;
}
