"use client";
// Buyer advisor request form — posts to /api/property-inquiry when no suitable listing is found.
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui";

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = {
  name: string;
  phone: string;
  email: string;
  timeline: string;
  financing: string;
  contactMethod: string;
  message: string;
};

const INIT: Fields = {
  name: "",
  phone: "",
  email: "",
  timeline: "",
  financing: "",
  contactMethod: "whatsapp",
  message: "",
};

export function PropertyInquiryForm() {
  const t = useTranslations("forms.propertyInquiry");
  const tc = useTranslations("forms.common");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState<Fields>(INIT);
  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/property-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-brand-pine py-14 md:py-16" id="inquire">
      <Container>
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-teal">
              {t("eyebrow")}
            </p>
            <h2 className="font-ewangi text-[clamp(1.75rem,4vw,2.5rem)] leading-tight text-brand-paper">
              {t("heading")}
            </h2>
            <p className="font-body text-body text-brand-paper/60">
              {t("subheading")}
            </p>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-brand-teal" aria-hidden="true" />
              <p className="font-ewangi text-subtitle text-brand-paper">{t("successTitle")}</p>
              <p className="font-body text-body text-brand-paper/60">
                {t("successBody")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
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
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    {t("phoneWhatsapp")}
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("phonePlaceholder")}
                    required
                    value={fields.phone}
                    onChange={set("phone")}
                    className={F}
                  />
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                  {t("email")}
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  value={fields.email}
                  onChange={set("email")}
                  className={F}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    {t("timeline")}
                  </span>
                  <select
                    name="timeline"
                    required
                    value={fields.timeline}
                    onChange={set("timeline")}
                    className={F}
                  >
                    <option value="">{t("selectTimeline")}</option>
                    <option value="now">{t("timelineOptions.now")}</option>
                    <option value="3mo">{t("timelineOptions.3mo")}</option>
                    <option value="6mo">{t("timelineOptions.6mo")}</option>
                    <option value="12mo">{t("timelineOptions.12mo")}</option>
                    <option value="browsing">{t("timelineOptions.browsing")}</option>
                  </select>
                </label>
                <label className="space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    {t("financing")}
                  </span>
                  <select
                    name="financing"
                    required
                    value={fields.financing}
                    onChange={set("financing")}
                    className={F}
                  >
                    <option value="">{t("selectFinancing")}</option>
                    <option value="cash">{t("financingOptions.cash")}</option>
                    <option value="us-mortgage">{t("financingOptions.usMortgage")}</option>
                    <option value="developer">{t("financingOptions.developer")}</option>
                    <option value="unsure">{t("financingOptions.unsure")}</option>
                  </select>
                </label>
              </div>

              <fieldset className="space-y-2">
                <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                  {t("preferredContact")}
                </span>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    { value: "whatsapp", label: t("contactMethods.whatsapp") },
                    { value: "call", label: t("contactMethods.call") },
                    { value: "email", label: t("contactMethods.email") },
                  ].map(({ value, label }) => (
                    <label
                      key={value}
                      className="flex cursor-pointer items-center gap-3 rounded-(--radius-input) border border-[#d9d9d9]/30 bg-[#d9d9d9]/10 px-3 py-2"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={value}
                        checked={fields.contactMethod === value}
                        onChange={set("contactMethod")}
                        className="h-4 w-4 cursor-pointer accent-brand-teal"
                      />
                      <span className="font-ewangi text-label text-brand-paper/80">{label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block space-y-1.5">
                <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                  {t("messageLabel")}
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={t("messagePlaceholder")}
                  value={fields.message}
                  onChange={set("message")}
                  className={`${F} resize-none`}
                />
              </label>

              <label className="flex items-start gap-3 text-sm text-brand-paper/70">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 cursor-pointer accent-brand-teal"
                />
                <span>
                  {tc("consentPrefix")}{" "}
                  <a href="/privacy" className="underline hover:text-brand-paper">
                    {tc("consentLink")}
                  </a>
                  . *
                </span>
              </label>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  {tc("errorGeneric")}
                </p>
              )}

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
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
