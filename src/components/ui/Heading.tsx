import { cn } from "@/lib/utils";
import { typography } from "@/constants/typography";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingTag = `h${HeadingLevel}`;

// Headings use Ibrand: display (46), title (30), subtitle (21).
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: cn(typography.display, "max-w-3xl"),
  2: typography.title,
  3: typography.subtitle,
  4: cn(typography.subtitle, "text-[1.125rem]"),
  5: cn(typography.subtitle, "text-base"),
  6: cn(typography.subtitle, "text-sm"),
};

export function Heading({ level = 1, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as HeadingTag;

  return <Tag className={cn(levelStyles[level], className)} {...props} />;
}
