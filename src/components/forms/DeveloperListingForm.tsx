"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-[#39d3c0]/50";

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
        <CheckCircle2 className="h-14 w-14 text-[#39d3c0]" aria-hidden="true" />
        <p className="font-ewangi text-subtitle text-brand-paper">Application received!</p>
        <p className="max-w-md font-body text-body text-brand-paper/60">
          Our team will review your submission and contact you within 3 business days to discuss
          next steps.
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
          <span className="font-semibold">Contact name *</span>
          <input
            type="text"
            name="contactName"
            placeholder="Your name"
            required
            value={fields.contactName}
            onChange={set("contactName")}
            className={F}
          />
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">Development / company name *</span>
          <input
            type="text"
            name="companyName"
            placeholder="e.g. Grupo Inmobiliario XYZ"
            required
            value={fields.companyName}
            onChange={set("companyName")}
            className={F}
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">Email *</span>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            value={fields.email}
            onChange={set("email")}
            className={F}
          />
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">Phone *</span>
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
              placeholder="55 1234 5678"
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
          <span className="font-semibold">State / region *</span>
          <select
            name="region"
            required
            value={fields.region}
            onChange={set("region")}
            className={F}
          >
            <option value="">Select state</option>
            <option value="baja-california">Baja California</option>
            <option value="baja-california-sur">Baja California Sur</option>
            <option value="quintana-roo">Quintana Roo</option>
            <option value="yucatan">Yucatán</option>
            <option value="jalisco">Jalisco</option>
            <option value="nayarit">Nayarit</option>
            <option value="oaxaca">Oaxaca</option>
            <option value="cdmx">Mexico City (CDMX)</option>
            <option value="nuevo-leon">Nuevo León</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">Number of units *</span>
          <input
            type="number"
            name="units"
            placeholder="e.g. 48"
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
          <span className="font-semibold">Min price per unit (USD)</span>
          <input
            type="text"
            name="priceMin"
            placeholder="e.g. $150,000"
            value={fields.priceMin}
            onChange={set("priceMin")}
            className={F}
          />
        </label>
        <label className="space-y-2 text-sm text-brand-paper/70">
          <span className="font-semibold">Max price per unit (USD)</span>
          <input
            type="text"
            name="priceMax"
            placeholder="e.g. $500,000"
            value={fields.priceMax}
            onChange={set("priceMax")}
            className={F}
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-brand-paper/70">
        <span className="font-semibold">Development status *</span>
        <select
          name="devStatus"
          required
          value={fields.devStatus}
          onChange={set("devStatus")}
          className={F}
        >
          <option value="">Select status</option>
          <option value="presale">Pre-sale</option>
          <option value="construction">Under construction</option>
          <option value="ready">Ready to deliver</option>
        </select>
      </label>

      <label className="space-y-2 text-sm text-brand-paper/70">
        <span className="font-semibold">Tell us about your project (optional)</span>
        <textarea
          name="description"
          rows={4}
          placeholder="Describe the development, amenities, certifications, or any relevant details..."
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
          className="mt-1 h-4 w-4 cursor-pointer accent-[#39d3c0]"
        />
        <span>
          I agree to the{" "}
          <a href="/privacy" className="font-semibold underline hover:text-brand-paper">
            privacy policy
          </a>{" "}
          and authorize Property Dreamz to contact me regarding this application. *
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email hello@propertydreamz.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center gap-2 rounded-lg bg-[#39d3c0] px-6 py-3.5 font-ewangi text-label font-semibold text-brand-ink transition hover:bg-[#2bbba8] disabled:opacity-60"
      >
        {status === "submitting" && (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        Submit application
      </button>
    </form>
  );
}
