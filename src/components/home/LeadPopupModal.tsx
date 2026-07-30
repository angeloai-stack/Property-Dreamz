"use client";
// First-visit lead capture modal — shown once per browser on the homepage, dismissible without submitting.
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2, X } from "lucide-react";

const STORAGE_KEY = "pd-lead-popup-dismissed";
const OPEN_DELAY_MS = 600;

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = { name: string; location: string; range: string };
const INIT: Fields = { name: "", location: "", range: "" };

export function LeadPopupModal() {
  const t = useTranslations("home.popup");
  const tc = useTranslations("forms.common");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Inaccessible storage — falls back to showing the popup once for this tab.
    }
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore — worst case the popup reappears next visit.
    }
  }

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "homepage-popup" }),
      });
      if (res.ok) {
        setStatus("success");
        try {
          window.localStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // Ignore — worst case the popup reappears next visit.
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={(next) => (next ? setOpen(true) : dismiss())}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-100 max-h-[90vh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-brand-ink p-8 shadow-[0_8px_48px_rgba(0,0,0,0.5)] transition-all duration-300 focus:outline-none data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100">
          <Dialog.Close
            aria-label={t("close")}
            className="absolute top-5 right-5 text-brand-paper/50 transition hover:text-brand-paper"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand-teal" aria-hidden="true" />
              <Dialog.Title className="font-ewangi text-subtitle text-brand-paper">
                {t("successTitle")}
              </Dialog.Title>
              <Dialog.Description className="font-body text-body text-brand-paper/60">
                {t("successBody")}
              </Dialog.Description>
            </div>
          ) : (
            <>
              <div className="mb-6 space-y-1 pr-6">
                <p className="font-ewangi text-label font-semibold tracking-widest text-brand-teal uppercase">
                  {t("eyebrow")}
                </p>
                <Dialog.Title className="font-ewangi text-[clamp(1.4rem,3vw,1.75rem)] leading-tight text-brand-paper">
                  {t("heading")}
                </Dialog.Title>
                <Dialog.Description className="font-body text-sm text-brand-paper/60">
                  {t("subheading")}
                </Dialog.Description>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    {t("fullName")}
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("namePlaceholder")}
                    required
                    value={fields.name}
                    onChange={set("name")}
                    className={F}
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    {t("location")}
                  </span>
                  <select
                    name="location"
                    required
                    value={fields.location}
                    onChange={set("location")}
                    className={F}
                  >
                    <option value="" disabled>
                      {t("selectLocation")}
                    </option>
                    <option value="baja">{tc("regionOptions.baja")}</option>
                    <option value="riviera">{tc("regionOptions.riviera")}</option>
                    <option value="nayarit">{tc("regionOptions.nayarit")}</option>
                    <option value="yucatan">{tc("regionOptions.yucatan")}</option>
                    <option value="cdmx">{tc("regionOptions.cdmx")}</option>
                    <option value="other">{tc("regionOptions.other")}</option>
                  </select>
                </label>

                <label className="block space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    {t("investmentRange")}
                  </span>
                  <select
                    name="range"
                    required
                    value={fields.range}
                    onChange={set("range")}
                    className={F}
                  >
                    <option value="" disabled>
                      {t("selectInvestmentRange")}
                    </option>
                    <option value="50k-100k">{t("rangeOptions.r50to100")}</option>
                    <option value="100k-200k">{t("rangeOptions.r100to200")}</option>
                    <option value="200k-300k">{t("rangeOptions.r200to300")}</option>
                    <option value="300k-plus">{t("rangeOptions.r300plus")}</option>
                  </select>
                </label>

                {status === "error" && <p className="text-sm text-red-400">{tc("errorGeneric")}</p>}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-teal px-6 py-3.5 font-ewangi text-label font-semibold text-brand-ink transition hover:bg-brand-teal-dark disabled:opacity-60"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  {t("submit")}
                </button>

                <button
                  type="button"
                  onClick={dismiss}
                  className="w-full text-center text-sm text-brand-paper/50 underline-offset-2 transition hover:text-brand-paper/80 hover:underline"
                >
                  {t("skip")}
                </button>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
