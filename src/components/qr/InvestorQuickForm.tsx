"use client";
// Compact investor consultation form — used on the investor QR landing page. Posts to the
// same webhook as the contact form, tagged source:"investor-links".
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const F =
  "w-full rounded-lg border-0 bg-brand-ink/5 px-4 py-2.5 font-ewangi text-[13px] text-brand-ink placeholder:text-brand-ink/40 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = { fullName: string; phone: string; email: string; business: string; nationality: string; region: string };
const INIT: Fields = { fullName: "", phone: "", email: "", business: "", nationality: "", region: "" };

export function InvestorQuickForm() {
  const t = useTranslations("investorLinks.quickForm");
  const tc = useTranslations("forms.common");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source: "investor-links" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id="investor-inquiry" className="flex flex-col items-center gap-3 rounded-2xl bg-white/95 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <CheckCircle2 className="h-10 w-10 text-brand-teal-dark" aria-hidden="true" />
        <p className="font-ewangi text-[1.1rem] font-bold text-brand-ink">{t("successTitle")}</p>
        <p className="max-w-xs font-ewangi text-[13px] text-brand-ink/60">
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <form
      id="investor-inquiry"
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white/95 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm"
    >
      <span className="font-ewangi text-[11px] font-semibold uppercase tracking-wide text-brand-teal-dark">
        {t("eyebrow")}
      </span>
      <h2 className="mt-1 whitespace-pre-line font-ewangi text-[1.4rem] font-bold leading-[1.1] text-brand-ink">
        {t("heading")}
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder={t("fullNamePlaceholder")}
          required
          value={fields.fullName}
          onChange={set("fullName")}
          className={F}
        />
        <input
          type="tel"
          placeholder={t("phonePlaceholder")}
          required
          value={fields.phone}
          onChange={set("phone")}
          className={F}
        />
      </div>

      <input
        type="email"
        placeholder={t("emailPlaceholder")}
        required
        value={fields.email}
        onChange={set("email")}
        className={`${F} mt-3`}
      />

      <div className="mt-3 grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder={t("businessPlaceholder")}
          required
          value={fields.business}
          onChange={set("business")}
          className={F}
        />
        <input
          type="text"
          placeholder={t("nationalityPlaceholder")}
          required
          value={fields.nationality}
          onChange={set("nationality")}
          className={F}
        />
      </div>

      <input
        type="text"
        placeholder={t("regionPlaceholder")}
        required
        value={fields.region}
        onChange={set("region")}
        className={`${F} mt-3`}
      />

      <label className="mt-4 flex items-start gap-2.5 font-ewangi text-[12px] leading-snug text-brand-ink/55">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-brand-teal" />
        <span>
          {tc("consentPrefix")}{" "}
          <a href="/privacy" className="font-semibold text-brand-teal-dark underline hover:text-brand-ink">
            {tc("consentLink")}
          </a>{" "}
          {t("consentSuffix")}
        </span>
      </label>

      {status === "error" && (
        <p className="mt-3 font-ewangi text-[12px] text-red-600">
          {tc("errorGeneric")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-teal px-5 py-3 font-ewangi text-[14px] font-semibold text-brand-ink transition hover:bg-brand-teal-dark disabled:opacity-60"
      >
        {t("submit")}
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        )}
      </button>
    </form>
  );
}
