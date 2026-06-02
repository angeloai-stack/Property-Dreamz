import { cn } from "@/lib/utils";

// Responsive page container that centers content and constrains max width.
// Provides consistent horizontal padding across screen sizes.
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
