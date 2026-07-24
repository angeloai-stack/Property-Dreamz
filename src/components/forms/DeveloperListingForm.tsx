"use client";
// Developer application form for listing a project — posts to /api/developer-listing.
import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2 } from "lucide-react";

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-brand-teal/50";

type Fields = {
  contactName: string;
  companyName: string;
  email: string;
  phoneCode: string;
  phone: string;
  region: string;
  units: string;
  priceMin: string;
  priceMax: string;
  devStatus: string;
  description: string;
};

const INIT: Fields = {
  contactName: "",
  companyName: "",
  email: "",
  phoneCode: "+52",
  phone: "",
  region: "",
  units: "",
  priceMin: "",
  priceMax: "",
  devStatus: "",
  description: "",
};

export function DeveloperListingForm() {
  const t = useTranslations("forms.developerListing");
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
      <div className="flex flex-col items-center gap-4 rounded-[42px] bg-brand-ink p-12 text-center shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
        <CheckCircle2 className="h-14 w-14 text-brand-teal" aria-hidden="true" />
        <p className="font-ewangi text-subtitle text-brand-paper">{t("successTitle")}</p>
        <p className="max-w-md font-body text-body text-brand-paper/60">
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[42px] bg-brand-ink p-8 shadow-[0_8px_48px_rgba(0,0,0,0.5)] space-y-6 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("contactName")}</span>
          <input
            type="text"
            name="contactName"
            placeholder={t("namePlaceholder")}
            required
            value={fields.contactName}
            onChange={set("contactName")}
            className={F}
          />
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("companyName")}</span>
          <input
            type="text"
            name="companyName"
            placeholder={t("companyPlaceholder")}
            required
            value={fields.companyName}
            onChange={set("companyName")}
            className={F}
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("email")}</span>
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
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("phone")}</span>
          <div className="grid gap-2 grid-cols-[90px_1fr]">
            <select
              name="phoneCode"
              value={fields.phoneCode}
              onChange={set("phoneCode")}
              className={F}
            >
              <option value="+52">+52</option>
              <option value="+1">+1</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder={t("phonePlaceholder")}
              required
              value={fields.phone}
              onChange={set("phone")}
              className={F}
            />
          </div>
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("region")}</span>
          <select
            name="region"
            required
            value={fields.region}
            onChange={set("region")}
            className={F}
          >
            <option value="">{t("selectState")}</option>
            <option value="baja-california">{t("regionOptions.bajaCalifornia")}</option>
            <option value="baja-california-sur">{t("regionOptions.bajaCaliforniaSur")}</option>
            <option value="quintana-roo">{t("regionOptions.quintanaRoo")}</option>
            <option value="yucatan">{t("regionOptions.yucatan")}</option>
            <option value="jalisco">{t("regionOptions.jalisco")}</option>
            <option value="nayarit">{t("regionOptions.nayarit")}</option>
            <option value="oaxaca">{t("regionOptions.oaxaca")}</option>
            <option value="cdmx">{t("regionOptions.cdmx")}</option>
            <option value="nuevo-leon">{t("regionOptions.nuevoLeon")}</option>
            <option value="other">{t("regionOptions.other")}</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("units")}</span>
          <input
            type="number"
            name="units"
            placeholder={t("unitsPlaceholder")}
            required
            min="1"
            value={fields.units}
            onChange={set("units")}
            className={F}
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("priceMin")}</span>
          <input
            type="text"
            name="priceMin"
            placeholder={t("priceMinPlaceholder")}
            value={fields.priceMin}
            onChange={set("priceMin")}
            className={F}
          />
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">{t("priceMax")}</span>
          <input
            type="text"
            name="priceMax"
            placeholder={t("priceMaxPlaceholder")}
            value={fields.priceMax}
            onChange={set("priceMax")}
            className={F}
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-brand-paper/70">
        <span className="font-semibold">{t("devStatus")}</span>
        <select
          name="devStatus"
          required
          value={fields.devStatus}
          onChange={set("devStatus")}
          className={F}
        >
          <option value="">{t("selectStatus")}</option>
          <option value="presale">{t("statusOptions.presale")}</option>
          <option value="construction">{t("statusOptions.construction")}</option>
          <option value="ready">{t("statusOptions.ready")}</option>
        </select>
      </label>

      <label className="space-y-2 text-sm text-brand-paper/70">
        <span className="font-semibold">{t("description")}</span>
        <textarea
          name="description"
          rows={4}
          placeholder={t("descriptionPlaceholder")}
          value={fields.description}
          onChange={set("description")}
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
          <a href="/privacy" className="font-semibold underline hover:text-brand-paper">
            {tc("consentLink")}
          </a>{" "}
          {t("consentSuffix")}
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
        className="flex items-center gap-2 rounded-lg bg-brand-teal px-6 py-3.5 font-ewangi text-label font-semibold text-brand-ink transition hover:bg-brand-teal-dark disabled:opacity-60"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {t("submit")}
      </button>
    </form>
  );
}
