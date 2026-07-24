"use client";
// Numbered pagination — Figma: "Pagination — optimizada", circular pills with ellipsis for long runs.
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

// Builds a page-number sequence with ellipses — always shows first, last, current, and its neighbors.
function buildPageList(page: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const pages = new Set([1, 2, totalPages - 1, totalPages, page - 1, page, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push("ellipsis");
    result.push(p);
  });
  return result;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const t = useTranslations("blog.pagination");
  if (totalPages <= 1) return null;
  const pageList = buildPageList(page, totalPages);

  return (
    <nav aria-label={t("ariaLabel")} className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label={t("previousPage")}
        className="flex h-11 w-11 items-center justify-center rounded-[22px] border-[1.5px] border-white/22 text-[20px] text-white transition disabled:opacity-50 enabled:hover:border-white/40"
      >
        ‹
      </button>

      {pageList.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e${i}`} className="flex h-11 w-7 items-center justify-center font-ewangi text-[15px] font-semibold text-[#9ea3ab]">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-[22px] font-ewangi text-[15px] font-bold transition",
              p === page ? "bg-brand-teal text-brand-pine" : "text-[#9ea3ab] hover:text-white"
            )}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label={t("nextPage")}
        className="flex h-11 w-11 items-center justify-center rounded-[22px] border-[1.5px] border-white/22 text-[20px] text-white transition disabled:opacity-50 enabled:hover:border-white/40"
      >
        ›
      </button>
    </nav>
  );
}
