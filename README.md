# Property Dreamz

Verified Mexican real estate portal for American buyers. Every property title-searched, developer-reviewed, and HOA-audited before listing.

> **Status:** frontend complete and styled; several integrations are scaffolded only. See [Known limitations](#known-limitations) before deploying.

---

## Tech Stack

**Core**

- Next.js 15 (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`)
- `next/font/local` — Ewangi only, no Google Fonts · `next/image` with domain allowlist

**UI / interaction**

- `@radix-ui/react-dialog`, `@radix-ui/react-select` — accessible primitives
- `lucide-react` / `react-icons` — iconography
- `clsx` + `tailwind-merge` — the `cn()` helper (`src/lib/utils.ts`)

**Installed but not yet wired** (intended integrations)

- `react-hook-form` + `@hookform/resolvers` + `zod` — form state & validation
- `@sanity/client` + `@sanity/image-url` — CMS for listings/content
- `@hubspot/api-client` — CRM lead sync

---

## Development

```bash
npm install   # install dependencies
npm run dev   # start the dev server on http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # start the production server
npm run lint    # ESLint check
```

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `brand-pine` | `#024139` | Primary dark green — CTAs, footer |
| `brand-emerald` | `#026559` | Hover states, badges, price strips |
| `brand-teal` | `#3AD3C1` | Accents, active states, WhatsApp button |
| `brand-ink` | `#191919` | Body text, dark section backgrounds |
| `brand-paper` | `#F4F1EA` | Light backgrounds, footer |
| `brand-muted` | `#6F7669` | Secondary/caption text |

### Typography

All text uses **Ewangi** — loaded from `src/fonts/Ewangi.ttf` via `next/font/local`. No Google Fonts are loaded.

`src/lib/fonts.ts` exports only `ewangi`. The root layout applies `ewangi.variable` to `<html>`, injecting `--font-ewangi` as a CSS custom property. Tailwind's `font-ewangi` and `font-body` classes both resolve to this variable. Use `font-ewangi` for headings/UI and `font-body` for paragraph copy.

| Class | Size | Usage |
|---|---|---|
| `text-display` | 2.875rem | Hero headlines |
| `text-title` | 1.875rem | Section titles |
| `text-subtitle` | 1.3125rem | Card headings |
| `text-body` | 1.0625rem | Body copy |
| `text-label` | 0.8125rem | Badges, captions |

### Animations

Defined in `src/app/globals.css`:

| Keyframe | Usage |
|---|---|
| `ken-burns` | Hero background — slow scale 1 → 1.07, infinite alternate |
| `fade-up` | Hero headline spans — staggered at 0s / 0.15s / 0.35s |
| `wiggle` | WhatsApp button — fires on `onMouseEnter` + `onTouchStart` |

`RevealOnScroll` (`src/components/ui/RevealOnScroll.tsx`) uses `IntersectionObserver` to fade-up + scale-in elements as they enter the viewport. Applied to every homepage section with an optional `delay` prop for staggering.

---

## Project Structure

```
src/
├─ app/
│  ├─ api/                  Lead-capture routes (contact, property-inquiry,
│  │                        developer-listing, guide-download) — see limitations
│  ├─ explore-map/          Interactive listings + map view
│  ├─ properties/           Property detail pages (andares, fracc)
│  ├─ about, buyers-guide, contact, for-developers, saved
│  ├─ layout.tsx            Root layout — Navbar, Footer, WhatsAppButton, fonts
│  ├─ page.tsx              Homepage — section order
│  ├─ globals.css           Tailwind @theme tokens + keyframes
│  └─ sitemap.ts, robots.ts SEO endpoints
├─ components/
│  ├─ home/                 Homepage sections (see below)
│  ├─ layout/               Navbar, Footer, Main, WhatsAppButton
│  ├─ forms/                CampaignForm, ContactForm, PropertyInquiryForm, …
│  ├─ explore-map/          MapPanel, ListingCard, ExploreFilters
│  ├─ shared/               CmreBadge
│  └─ ui/                   Design system primitives
├─ fonts/
│  └─ Ewangi.ttf            Brand typeface (local file — required)
├─ constants/               theme.ts, typography.ts (design tokens)
└─ lib/
   ├─ fonts.ts              next/font declarations
   └─ utils.ts              cn() helper
```

---

## Homepage Sections

Rendered in order in `src/app/page.tsx`:

| # | Component | Background | Notes |
|---|---|---|---|
| 1 | `HeroSection` | Full-bleed image | Ken Burns effect, fade-up headline, in-flow search bar at `mt-[15vh]`, slim pill sidebar with social icons |
| 2 | `VerifySection` | `brand-ink` | "The only portal…" trust copy |
| 3 | `FeatureCards` | `brand-ink` | 3 certification benefit cards with `BadgeCheck` icons |
| 4 | `TopDevelopers` | `brand-paper` | Property carousel + 6-card destination grid + Popular Cities + Real Estate Markets link lists |
| 5 | `BuyersGuideSteps` | `#1e1e1e` | 3-step buyer journey, alternating layout, BrandMark accent per card |
| 6 | `CertifiedBanner` | `brand-pine` | CMRE badge + MedalBadge (visible on all breakpoints), "Browse 47" CTA |
| 7 | `CampaignForm` | `brand-ink` | Lead capture form (stub — see limitations) |
| 8 | `FaqSection` | `brand-paper` | 6-question accordion, split layout, CSS grid-rows height animation |

---

## Environment Variables

Create a `.env.local` from the keys below. Items marked _(not yet consumed)_ are planned integrations.

```env
NEXT_PUBLIC_SITE_URL=               # canonical site URL (not yet consumed)
NEXT_PUBLIC_MAPBOX_TOKEN=           # (not yet consumed — map uses static embeds)
NEXT_PUBLIC_SANITY_PROJECT_ID=      # (not yet consumed)
NEXT_PUBLIC_SANITY_DATASET=         # (not yet consumed)
SANITY_API_TOKEN=                   # server-side (not yet consumed)
HUBSPOT_API_KEY=                    # server-side (not yet consumed)
NEXT_PUBLIC_GA_ID=                  # (not yet consumed — analytics not wired)
NEXT_PUBLIC_META_PIXEL_ID=          # (not yet consumed — pixel not wired)
```

---

## Known Limitations

- **API routes are stubs.** The four routes under `src/app/api/` only `console.log` the request body and return `{ success: true }` — leads are **not** persisted or emailed. They also lack input validation, rate limiting, and spam protection.
- **Forms are not validated server-side** and use raw `useState` rather than the installed `react-hook-form` + `zod`.
- **Content is hardcoded.** Listings, developers, and the "Saved" page use inline mock data; Sanity is not connected.
- **The map is not interactive.** `explore-map` embeds static Google Maps iframes; no property pins (Mapbox unused).
- **Analytics are not wired** (GA / Meta Pixel env vars are unused).
- **Missing pages/handlers:** `/privacy`, `not-found.tsx`, and `error.tsx`.
- **No security headers** configured in `next.config.mjs`.
- **No tests and no CI.**

---

## Roadmap

1. Implement API routes — `zod` validation + HubSpot lead sync; remove PII logging.
2. Harden lead capture — honeypot + rate limiting + security headers.
3. Migrate forms to `react-hook-form` + `zod` with a shared schema.
4. Add `/privacy`, `not-found.tsx`, and `error.tsx`.
5. Wire Sanity CMS, analytics, and an interactive Mapbox map.
