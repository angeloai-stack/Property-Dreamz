// "Send us a message" dark form card — Figma "Questionary contact us", node 1425:20371.
"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2, Loader2, Lock } from "lucide-react";

const F =
  "w-full rounded-lg border-0 bg-white/10 px-4 py-2.5 font-ewangi text-[13px] text-white placeholder:text-white/40 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = { fullName: string; email: string; phone: string; interest: string; message: string };
const INIT: Fields = { fullName: "", email: "", phone: "", interest: "", message: "" };

export function ContactQuickForm() {
  const t = useTranslations("contact.quickForm");
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
      const res = await fetch("/api/contact", {
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
      <div id="message-form" className="flex flex-col items-center gap-3 rounded-3xl bg-brand-ink p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
        <CheckCircle2 className="h-10 w-10 text-brand-teal" aria-hidden="true" />
        <p className="font-ewangi text-[1.1rem] font-bold text-white">{t("successTitle")}</p>
        <p className="max-w-xs font-ewangi text-[13px] text-white/60">
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <form
      id="message-form"
      onSubmit={handleSubmit}
      className="rounded-3xl bg-brand-ink p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-10"
    >
      <p className="font-ewangi text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
        {t("eyebrow")}
      </p>
      <h2 className="mt-2 font-ewangi text-[1.5rem] font-bold leading-tight text-brand-teal">
        {t("heading")}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="text" placeholder={t("fullNamePlaceholder")} required value={fields.fullName} onChange={set("fullName")} className={F} />
        <input type="email" placeholder={t("emailPlaceholder")} required value={fields.email} onChange={set("email")} className={F} />
        <input type="tel" placeholder={t("phonePlaceholder")} value={fields.phone} onChange={set("phone")} className={F} />
        <input type="text" placeholder={t("interestPlaceholder")} value={fields.interest} onChange={set("interest")} className={F} />
      </div>

      <textarea
        placeholder={t("messagePlaceholder")}
        rows={4}
        required
        value={fields.message}
        onChange={set("message")}
        className={`${F} mt-4 resize-none`}
      />

      {status === "error" && (
        <p className="mt-3 font-ewangi text-[12px] text-red-400">
          {tc("errorGeneric")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-teal px-5 py-3.5 font-ewangi text-[15px] font-semibold text-brand-ink transition hover:bg-brand-teal-dark disabled:opacity-60"
      >
        {t("submit")}
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 font-ewangi text-[12px] text-white/45">
        <Lock className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
        {t("privacyNote")}
      </p>
    </form>
  );
}
