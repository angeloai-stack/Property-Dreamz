"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Eye, EyeOff, Loader2, ArrowRight, ShieldCheck, ArrowLeft, Home } from "lucide-react";

type Portal = "buyer" | "developer";

// Non-translatable per-portal data (stats, URLs, hrefs) — copy comes from the "misc.portalLogin"
// translation namespace and is merged in at render time.
const PANEL_META = {
  buyer: { s1n: "47+", s2n: "100%" },
  developer: { s1n: "5k+", s2n: "CMRE" },
};

const FORM_META = {
  buyer: { portalUrl: "https://app.propertydreamz.com/portal", footerHref: "/contact" },
  developer: {
    portalUrl: "https://app.propertydreamz.com/portal/developer/dashboard",
    footerHref: "/for-developers",
  },
};

function fadeIn(mounted: boolean, delay = 0) {
  return {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(14px)",
    transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
  };
}

export default function PortalLoginPage() {
  const t = useTranslations("misc.portalLogin");
  const [portal, setPortal] = useState<Portal>("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(id);
  }, []);

  function switchPortal(p: Portal) {
    setPortal(p);
    setStatus("idle");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    window.location.href = form.portalUrl;
  }

  const panel = { ...PANEL_META[portal], ...t.raw(`panels.${portal}`) };
  const form = { ...FORM_META[portal], ...t.raw(`forms.${portal}`) };

  const INPUT =
    "w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-brand-paper placeholder:text-brand-paper/30 outline-none transition-all duration-200 focus:border-brand-teal/50 focus:ring-2 focus:ring-brand-teal/15";

  return (
    <main className={`relative flex min-h-screen transition-colors duration-500 ${portal === "buyer" ? "bg-brand-ink" : "bg-brand-pine"}`}>

      {/* Back to home */}
      <Link
        href="/"
        aria-label={t("backToHome")}
        className="group absolute left-3 top-3 z-20 flex items-center gap-2 sm:left-5 sm:top-5 lg:left-auto lg:right-5 lg:top-5"
      >
        <ArrowLeft
          className="h-3.5 w-3.5 text-brand-paper/50 transition-colors group-hover:text-brand-paper/90"
          aria-hidden="true"
        />
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white/80 backdrop-blur-md transition hover:bg-white/20 hover:text-white">
          <Home size={20} strokeWidth={1.5} aria-hidden="true" />
        </div>
      </Link>
      <style>{`
        @keyframes panel-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .panel-animate { animation: panel-in 0.4s ease both; }
      `}</style>

      {/* LEFT — brand atmosphere panel */}
      <aside className={`hidden lg:flex lg:w-[42%] relative flex-col overflow-hidden transition-colors duration-500 ${portal === "buyer" ? "bg-brand-pine" : "bg-brand-ink"}`}>

        {/* Blueprint grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,241,234,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,234,0.9) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Gold separator on right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#B98A3E]/45 to-transparent" />

        {/* Teal ambient glow */}
        <div
          className="pointer-events-none absolute -bottom-56 -left-56 w-140 h-140 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(58,211,193,0.09) 0%, transparent 65%)" }}
        />

        <div className="relative z-10 flex flex-col h-full p-12 xl:p-16">

          {/* Logo */}
          <div style={fadeIn(mounted, 0)}>
            <Image
              src="/brand/property-dreamz-logo-horizontal.png"
              alt="Property Dreamz"
              width={200}
              height={56}
              style={{ filter: "brightness(0) invert(1)", height: "auto" }}
            />
          </div>

          {/* Panel content — re-animates on portal switch */}
          <div key={portal} className="panel-animate flex-1 flex flex-col justify-center mt-14">
            <span className="inline-flex items-center gap-2 font-ewangi text-label font-semibold uppercase tracking-widest text-brand-teal mb-5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              {panel.tag}
            </span>

            <h2
              className="font-ewangi text-[2.1rem] xl:text-[2.55rem] leading-[1.08] text-brand-paper"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              {panel.headline}
            </h2>

            <p className="mt-4 font-body text-body text-brand-paper/50 max-w-xs leading-relaxed">
              {panel.sub}
            </p>

            {/* Gold stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="font-ewangi text-[2rem] font-bold leading-none text-[#B98A3E]">
                  {panel.s1n}
                </div>
                <div className="font-body text-label text-brand-paper/40 mt-1.5">{panel.stat1Label}</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-ewangi text-[2rem] font-bold leading-none text-[#B98A3E]">
                  {panel.s2n}
                </div>
                <div className="font-body text-label text-brand-paper/40 mt-1.5">{panel.stat2Label}</div>
              </div>
            </div>
          </div>

        </div>
      </aside>

      {/* RIGHT — form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 sm:px-12">

        {/* Mobile logo */}
        <div className="lg:hidden mb-10" style={fadeIn(mounted, 0)}>
          <Image
            src="/brand/property-dreamz-logo-horizontal.png"
            alt="Property Dreamz"
            width={180}
            height={50}
            style={{ filter: "brightness(0) invert(1)", height: "auto" }}
          />
        </div>

        <div className="w-full max-w-105">

          {/* Portal type toggle */}
          <div
            className="flex border border-white/10 rounded-xl p-1 mb-8"
            style={fadeIn(mounted, 60)}
            role="group"
            aria-label={t("toggle.ariaLabel")}
          >
            {(["buyer", "developer"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => switchPortal(p)}
                className={[
                  "flex-1 rounded-lg py-2.5 px-4 font-ewangi text-label font-semibold transition-colors duration-200",
                  portal === p
                    ? "bg-white/10 text-brand-paper"
                    : "text-brand-paper/38 hover:text-brand-paper/62",
                ].join(" ")}
              >
                {t(`toggle.${p}`)}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-7" style={fadeIn(mounted, 120)}>
            <p className="font-ewangi text-label font-semibold uppercase tracking-widest text-brand-teal mb-1">
              {form.eyebrow}
            </p>
            <h1 className="font-ewangi text-title text-brand-paper leading-tight">
              {form.heading}
            </h1>
            <p className="font-body text-label mt-1.5 leading-snug" style={{ color: "rgba(244,241,234,0.42)" }}>
              {form.sub}
            </p>
          </div>

          {/* Form card */}
          <div
            className="rounded-2xl border border-white/9 bg-white/3 p-6 sm:p-8 backdrop-blur-sm"
            style={fadeIn(mounted, 200)}
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              <label className="block space-y-1.5">
                <span className="font-ewangi text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(244,241,234,0.42)" }}>
                  {t("emailLabel")}
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={INPUT}
                />
              </label>

              <label className="block space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-ewangi text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(244,241,234,0.42)" }}>
                    {t("passwordLabel")}
                  </span>
                  <Link
                    href="/portal/forgot-password"
                    className="font-body text-xs transition-colors hover:text-brand-teal"
                    style={{ color: "rgba(58,211,193,0.58)" }}
                  >
                    {t("forgotPassword")}
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${INPUT} pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors hover:text-brand-paper/60"
                    style={{ color: "rgba(244,241,234,0.32)" }}
                    aria-label={showPw ? t("hidePassword") : t("showPassword")}
                  >
                    {showPw
                      ? <EyeOff className="w-4 h-4" aria-hidden="true" />
                      : <Eye className="w-4 h-4" aria-hidden="true" />
                    }
                  </button>
                </div>
              </label>

              {status === "error" && (
                <p role="alert" className="text-sm text-red-400 leading-snug">
                  {t("errorMessage")}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-teal px-6 py-3.5 font-ewangi text-label font-semibold text-brand-ink transition-all hover:bg-brand-teal-dark hover:scale-[1.015] active:scale-[0.985] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  : <ArrowRight className="w-4 h-4" aria-hidden="true" />
                }
                {form.cta}
              </button>
            </form>
          </div>

          {/* Footer link */}
          <p
            className="mt-6 text-center font-body text-label"
            style={{ ...fadeIn(mounted, 300), color: "rgba(244,241,234,0.32)" }}
          >
            {form.footerText}{" "}
            <Link
              href={form.footerHref}
              className="underline underline-offset-2 transition-colors hover:text-brand-teal"
              style={{ color: "rgba(58,211,193,0.65)" }}
            >
              {form.footerLabel}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
