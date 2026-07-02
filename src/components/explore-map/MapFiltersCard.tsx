"use client";
// "Show only" quick-filter overlay for the map panel — Figma: white card, r=10, top-left of the map.
import { Check, Search } from "lucide-react";
import { CONSTRUCTION_STATUSES, type ConstructionStatus } from "@/app/explore-map/data";
import { cn } from "@/lib/utils";

type MapFiltersCardProps = {
  activeStatuses: Set<ConstructionStatus>;
  onToggleStatus: (status: ConstructionStatus) => void;
  financingOnly: boolean;
  onToggleFinancing: (value: boolean) => void;
  onSearchArea: () => void;
};

function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <span
        onClick={onChange}
        className={cn(
          "flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[4px] border-2 transition",
          checked ? "border-brand-teal bg-brand-teal" : "border-brand-ink/25 bg-white"
        )}
      >
        {checked && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
      </span>
      <span className="font-ewangi text-[13px] text-brand-pine">{label}</span>
    </label>
  );
}

export function MapFiltersCard({
  activeStatuses,
  onToggleStatus,
  financingOnly,
  onToggleFinancing,
  onSearchArea,
}: MapFiltersCardProps) {
  return (
    <div className="absolute left-3 top-3 z-10 w-52 rounded-[10px] bg-white p-4 shadow-[3px_2px_10px_rgba(0,0,0,0.25)] sm:left-4 sm:top-4">
      <p className="mb-2.5 font-ewangi text-[16px] font-bold text-brand-pine">Show only:</p>

      <div className="space-y-2">
        {CONSTRUCTION_STATUSES.map((status) => (
          <CheckboxRow
            key={status}
            label={status}
            checked={activeStatuses.has(status)}
            onChange={() => onToggleStatus(status)}
          />
        ))}
      </div>

      <hr className="my-2.5 border-brand-ink/10" />

      <CheckboxRow label="Financing available" checked={financingOnly} onChange={() => onToggleFinancing(!financingOnly)} />

      <button
        type="button"
        onClick={onSearchArea}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand-pine px-4 py-2.5 font-ewangi text-[13px] font-semibold text-white transition hover:bg-black"
      >
        Search this area
        <Search className="h-3.5 w-3.5" strokeWidth={2} />
      </button>
    </div>
  );
}
