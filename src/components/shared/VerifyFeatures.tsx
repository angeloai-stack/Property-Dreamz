// Shared 4-column "Verify Developments / Best Prices / Secure Purchase / Expert Guidance" checklist.
// Figma: appears identically on the Saved and Explore Map pages, always on a teal background.
import { Check } from "lucide-react";

const verifyFeatures = [
  { title: "Verify Developments", subtitle: "Certified Listings Only" },
  { title: "Best Prices", subtitle: "Direct from Developers" },
  { title: "Secure Purchase", subtitle: "Transparency Every Step" },
  { title: "Expert Guidance", subtitle: "We're Here to Help" },
] as const;

export function VerifyFeatures({ className }: { className?: string }) {
  return (
    <div className={className ?? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
      {verifyFeatures.map((feature) => (
        <div key={feature.title} className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/70 text-white">
            <Check className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <div>
            <p className="font-ewangi text-[15px] font-bold leading-snug text-white">{feature.title}</p>
            <p className="font-ewangi text-[13px] text-white/75">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
