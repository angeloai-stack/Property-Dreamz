// Compact hero consultation form — Figma "Questionary fro developers", posts to the same
// webhook as the full DeveloperListingForm but with the reduced field set Figma specifies.
"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const F =
  "w-full rounded-lg border-0 bg-brand-ink/5 px-4 py-2.5 font-ewangi text-[13px] text-brand-ink placeholder:text-brand-ink/40 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = { fullName: string; email: string; company: string; message: string };
const INIT: Fields = { fullName: "", email: "", company: "", message: "" };

export function DevQuickForm() {
  const t = useTranslations("forDevelopers.quickForm");
  const tc = useTranslations("forms.common");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/developer-listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id="dev-inquiry" className="flex flex-col items-center gap-3 rounded-2xl bg-white/95 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
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
      id="dev-inquiry"
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
          placeholder={t("fullNamePlaceholder")}
          required
          value={fields.fullName}
          onChange={set("fullName")}
          className={F}
        />
        <input
          type="email"
          placeholder={t("emailPlaceholder")}
          required
          value={fields.email}
          onChange={set("email")}
          className={F}
        />
      </div>

      <input
        type="text"
        placeholder={t("companyPlaceholder")}
        required
        value={fields.company}
        onChange={set("company")}
        className={`${F} mt-3`}
      />

      <textarea
        placeholder={t("messagePlaceholder")}
        rows={3}
        value={fields.message}
        onChange={set("message")}
        className={`${F} mt-3 resize-none`}
      />

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
