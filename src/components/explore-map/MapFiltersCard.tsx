"use client";
// "Show only" quick-filter overlay for the map panel — Figma: white card, r=10, top-left of the map.
import { useTranslations } from "next-intl";
import { Check, Search } from "lucide-react";
import { CONSTRUCTION_STATUSES, type ConstructionStatus } from "@/app/[locale]/explore-map/data";
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
    <label className="flex cursor-pointer items-center gap-2">
      <span
        onClick={onChange}
        className={cn(
          "flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border-2 transition",
          checked ? "border-brand-teal bg-brand-teal" : "border-brand-ink/25 bg-white"
        )}
      >
        {checked && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
      </span>
      <span className="font-ewangi text-[11px] text-brand-pine">{label}</span>
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
  const t = useTranslations("exploreMap");

  return (
    <div className="absolute left-3 top-3 z-10 w-38 rounded-lg bg-white p-2.5 shadow-[3px_2px_10px_rgba(0,0,0,0.25)] sm:left-4 sm:top-4">
      <p className="mb-1.5 font-ewangi text-[12px] font-bold text-brand-pine">{t("mapFiltersCard.showOnly")}</p>

      <div className="space-y-1.5">
        {CONSTRUCTION_STATUSES.map((status) => (
          <CheckboxRow
            key={status}
            label={t(`constructionStatusLabels.${status}`)}
            checked={activeStatuses.has(status)}
            onChange={() => onToggleStatus(status)}
          />
        ))}
      </div>

      <hr className="my-1.5 border-brand-ink/10" />

      <CheckboxRow
        label={t("mapFiltersCard.financingAvailable")}
        checked={financingOnly}
        onChange={() => onToggleFinancing(!financingOnly)}
      />

      <button
        type="button"
        onClick={onSearchArea}
        className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-pine px-2.5 py-1.5 font-ewangi text-[11px] font-semibold text-white transition hover:bg-black"
      >
        {t("mapFiltersCard.searchThisArea")}
        <Search className="h-3 w-3" strokeWidth={2} />
      </button>
    </div>
  );
}
