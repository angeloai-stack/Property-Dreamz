import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingTag = `h${HeadingLevel}`;

// Reusable heading component that normalizes H1-H6 styles.
// Uses the brand serif font for headings and preserves flexibility for markup.
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

export function Heading({ level = 1, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag
      className={cn(
        level === 1
          ? "text-5xl font-serif leading-tight"
          : level === 2
          ? "text-4xl font-serif leading-tight"
          : "font-serif",
        className
      )}
      {...props}
    />
  );
}
