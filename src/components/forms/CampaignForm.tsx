"use client";
// Lead-capture form for marketing campaigns — posts to /api/contact with source:"campaign".
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container, RevealOnScroll } from "@/components/ui";

// Shared input class string — avoids repeating Tailwind across every field.
const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = { name: string; phone: string; email: string; budget: string; region: string };
const INIT: Fields = { name: "", phone: "", email: "", budget: "", region: "" };

export function CampaignForm() {
  const t = useTranslations("forms.campaign");
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
        body: JSON.stringify({ ...fields, source: "campaign" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-brand-ink py-14 md:py-16" id="connect">
      <Container>
        {/* Card — Formulario V on mobile, Formulario H on md+ */}
        <RevealOnScroll direction="center" duration={1000}>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[42px] shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row">

            {/* Image panel (left on desktop, top on mobile) */}
            <div className="relative min-h-52 shrink-0 md:min-h-0 md:w-80 lg:w-96">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=75"
                alt="Luxury property in Mexico"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-pine/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8 text-center">
                <p className="font-ewangi text-[2rem] leading-none text-brand-paper tracking-wide">
                  {t("brandLine1")}<br />{t("brandLine2")}
                </p>
                <p className="font-ewangi text-label uppercase tracking-widest text-brand-paper/60">
                  {t("certifiedRealEstate")}
                </p>
              </div>
            </div>

            {/* Form panel */}
            <div className="flex-1 bg-brand-ink p-8 md:p-10">
              <div className="mb-6 space-y-1">
                <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-teal">
                  {t("eyebrow")}
                </p>
                <h2 className="font-ewangi text-[clamp(1.5rem,3vw,2rem)] leading-tight text-brand-paper">
                  {t("heading")}
                </h2>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <CheckCircle2 className="h-14 w-14 text-brand-teal" aria-hidden="true" />
                  <p className="font-ewangi text-subtitle text-brand-paper">{t("successTitle")}</p>
                  <p className="font-body text-body text-brand-paper/60">{t("successBody")}</p>
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
                        {t("budgetOptional")}
                      </span>
                      <select
                        name="budget"
                        value={fields.budget}
                        onChange={set("budget")}
                        className={F}
                      >
                        <option value="">{tc("selectRange")}</option>
                        <option value="under150k">{tc("budgetOptions.under150k")}</option>
                        <option value="150k-300k">{tc("budgetOptions.150k-300k")}</option>
                        <option value="300k-500k">{tc("budgetOptions.300k-500k")}</option>
                        <option value="over500k">{tc("budgetOptions.over500k")}</option>
                        <option value="unsure">{tc("budgetOptions.unsure")}</option>
                      </select>
                    </label>
                    <label className="space-y-1.5">
                      <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                        {t("regionOptional")}
                      </span>
                      <select
                        name="region"
                        value={fields.region}
                        onChange={set("region")}
                        className={F}
                      >
                        <option value="">{tc("anyRegion")}</option>
                        <option value="baja">{tc("regionOptions.baja")}</option>
                        <option value="riviera">{tc("regionOptions.riviera")}</option>
                        <option value="nayarit">{tc("regionOptions.nayarit")}</option>
                        <option value="yucatan">{tc("regionOptions.yucatan")}</option>
                        <option value="cdmx">{tc("regionOptions.cdmx")}</option>
                        <option value="other">{tc("regionOptions.other")}</option>
                      </select>
                    </label>
                  </div>

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
                    <p className="text-sm text-red-400">{tc("errorGeneric")}</p>
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
          </div>
        </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
