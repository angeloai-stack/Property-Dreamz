"use client";
// Compact investor consultation form for the QR landing page — same field set and webhook
// as CampaignForm (fullName, phone, email, budget, region) but posts source:"investor-links".
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const F =
  "w-full rounded-lg border-0 bg-brand-ink/5 px-4 py-2.5 font-ewangi text-[13px] text-brand-ink placeholder:text-brand-ink/40 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = { name: string; phone: string; email: string; budget: string; region: string };
const INIT: Fields = { name: "", phone: "", email: "", budget: "", region: "" };

export function InvestorQuickForm() {
  const t = useTranslations("investorLinks.quickForm");
  const tf = useTranslations("forms.campaign");
  const tc = useTranslations("forms.common");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
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
      <h2 className="font-ewangi text-[1.3rem] font-bold leading-tight text-brand-teal-dark">
        {t("heading")}
      </h2>
      <p className="mt-2 font-ewangi text-[13px] leading-snug text-brand-ink/55">
        {t("subheading")}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder={tf("namePlaceholder")}
          required
          value={fields.name}
          onChange={set("name")}
          className={F}
        />
        <input
          type="tel"
          placeholder={tf("phonePlaceholder")}
          required
          value={fields.phone}
          onChange={set("phone")}
          className={F}
        />
      </div>

      <input
        type="email"
        placeholder={tf("emailPlaceholder")}
        required
        value={fields.email}
        onChange={set("email")}
        className={`${F} mt-3`}
      />

      <div className="mt-3 grid grid-cols-2 gap-3">
        <select value={fields.budget} onChange={set("budget")} className={F}>
          <option value="">{tc("selectRange")}</option>
          <option value="under150k">{tc("budgetOptions.under150k")}</option>
          <option value="150k-300k">{tc("budgetOptions.150k-300k")}</option>
          <option value="300k-500k">{tc("budgetOptions.300k-500k")}</option>
          <option value="over500k">{tc("budgetOptions.over500k")}</option>
          <option value="unsure">{tc("budgetOptions.unsure")}</option>
        </select>
        <select value={fields.region} onChange={set("region")} className={F}>
          <option value="">{tc("anyRegion")}</option>
          <option value="baja">{tc("regionOptions.baja")}</option>
          <option value="riviera">{tc("regionOptions.riviera")}</option>
          <option value="nayarit">{tc("regionOptions.nayarit")}</option>
          <option value="yucatan">{tc("regionOptions.yucatan")}</option>
          <option value="cdmx">{tc("regionOptions.cdmx")}</option>
          <option value="other">{tc("regionOptions.other")}</option>
        </select>
      </div>

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
        {tf("submit")}
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        )}
      </button>
    </form>
  );
}
