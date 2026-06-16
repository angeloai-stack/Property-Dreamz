"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui";

const F =
  "w-full rounded-(--radius-input) border-0 bg-[#d9d9d9] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/50 outline-none transition focus:ring-2 focus:ring-[#39d3c0]/50";

type Fields = { name: string; email: string; nationality: string };
const INIT: Fields = { name: "", email: "", nationality: "" };

export function GuideDownloadForm() {
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
      const res = await fetch("/api/guide-download", {
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
    <section className="w-full bg-brand-pine py-14 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 space-y-3 md:max-w-xs">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#39d3c0]/20 text-[#39d3c0]">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="font-ewangi text-title leading-tight text-brand-paper">
                Get the full buyer&apos;s guide
              </h2>
              <p className="font-body text-body text-brand-paper/70">
                A concise PDF covering fideicomiso, due diligence, financing, and closing —
                sent directly to your inbox.
              </p>
            </div>

            {status === "success" ? (
              <div className="flex flex-1 flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#39d3c0]" aria-hidden="true" />
                <p className="font-ewangi text-subtitle text-brand-paper">Check your inbox!</p>
                <p className="font-body text-body text-brand-paper/60">
                  Your guide has been sent to{" "}
                  <span className="font-semibold text-brand-paper">{fields.email}</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-1.5">
                    <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                      Full name *
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      value={fields.name}
                      onChange={set("name")}
                      className={F}
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                      Email *
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      required
                      value={fields.email}
                      onChange={set("email")}
                      className={F}
                    />
                  </label>
                </div>

                <label className="block space-y-1.5">
                  <span className="font-ewangi text-label font-semibold text-brand-paper/70">
                    Nationality (optional)
                  </span>
                  <select
                    name="nationality"
                    value={fields.nationality}
                    onChange={set("nationality")}
                    className={F}
                  >
                    <option value="">Select country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="mx">Mexico</option>
                    <option value="other">Other</option>
                  </select>
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
                    <a href="/privacy" className="underline hover:text-brand-paper">
                      privacy policy
                    </a>
                    . *
                  </span>
                </label>

                {status === "error" && (
                  <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#39d3c0] px-6 py-3 font-ewangi text-label font-semibold text-brand-ink transition hover:bg-[#2bbba8] disabled:opacity-60"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  Get my free guide
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
