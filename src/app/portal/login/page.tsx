"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Loader2, ArrowRight, ShieldCheck } from "lucide-react";

type Portal = "buyer" | "developer";

const PANELS = {
  buyer: {
    tag: "Buyers & Investors",
    headline: "Your Mexico real estate journey, organized.",
    sub: "Track verified developments, message your advisor, and manage every document from one secure portal.",
    s1n: "47+", s1l: "Verified developments",
    s2n: "100%", s2l: "Title-searched listings",
  },
  developer: {
    tag: "Developers & Builders",
    headline: "Reach certified buyers across North America.",
    sub: "Manage listings, review qualified leads, upload assets, and track performance — all in one dashboard.",
    s1n: "5k+", s1l: "Monthly buyer visits",
    s2n: "CMRE", s2l: "Certified partner network",
  },
};

const FORMS = {
  buyer: {
    eyebrow: "Client Portal",
    heading: "Welcome back",
    sub: "Access your saved properties, documents, and advisor messages.",
    cta: "Sign in to your account",
    portalUrl: "https://app.propertydreamz.com/portal",
    footerText: "Don't have an account?",
    footerLabel: "Request buyer access",
    footerHref: "/contact",
  },
  developer: {
    eyebrow: "Developer Portal",
    heading: "Welcome back",
    sub: "Manage your listings, review inquiries, and update project assets.",
    cta: "Sign in to your dashboard",
    portalUrl: "https://app.propertydreamz.com/portal/developer/dashboard",
    footerText: "Want to list your development?",
    footerLabel: "Apply for partnership",
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
  const [portal, setPortal] = useState<Portal>("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
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

  const panel = PANELS[portal];
  const form = FORMS[portal];

  const INPUT =
    "w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-brand-paper placeholder:text-brand-paper/30 outline-none transition-all duration-200 focus:border-brand-teal/50 focus:ring-2 focus:ring-brand-teal/15";

  return (
    <main className={`flex min-h-screen transition-colors duration-500 ${portal === "buyer" ? "bg-brand-ink" : "bg-brand-pine"}`}>
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
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#B98A3E]/45 to-transparent" />

        {/* Teal ambient glow */}
        <div
          className="pointer-events-none absolute -bottom-56 -left-56 w-[560px] h-[560px] rounded-full"
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
                <div className="font-body text-label text-brand-paper/40 mt-1.5">{panel.s1l}</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="font-ewangi text-[2rem] font-bold leading-none text-[#B98A3E]">
                  {panel.s2n}
                </div>
                <div className="font-body text-label text-brand-paper/40 mt-1.5">{panel.s2l}</div>
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
            aria-label="Select portal type"
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
                {p === "buyer" ? "Buyers & Clients" : "Developers"}
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
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={INPUT}
                />
              </label>

              <label className="block space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-ewangi text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(244,241,234,0.42)" }}>
                    Password
                  </span>
                  <Link
                    href="/portal/forgot-password"
                    className="font-body text-xs transition-colors hover:text-brand-teal"
                    style={{ color: "rgba(58,211,193,0.58)" }}
                  >
                    Forgot password?
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
                    aria-label={showPw ? "Hide password" : "Show password"}
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
                  Incorrect email or password. Please try again.
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
