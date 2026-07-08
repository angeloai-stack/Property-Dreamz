// Shared 3-item "More visibility / More trust / More sales" checklist.
// Figma: appears identically on the For Developers and Contact Us pages, always over a dark/photo background.
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { title: "More visibility", subtitle: "Reach serious buyers" },
  { title: "More trust", subtitle: "With verification" },
  { title: "More sales", subtitle: "Close faster" },
] as const;

export function TrustChecklist({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-x-8 gap-y-3", className)}>
      {items.map((item) => (
        <div key={item.title} className="flex items-center gap-2">
          <Check className="h-5 w-5 shrink-0 text-brand-teal" strokeWidth={2.5} />
          <span>
            <span className="block font-ewangi text-[16px] font-bold leading-tight text-white">{item.title}</span>
            <span className="block font-ewangi text-[12px] leading-tight text-white/70">{item.subtitle}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
