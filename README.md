# Property Dreamz

Verified Mexican real estate portal for international buyers. Every property title-searched, developer-reviewed, and HOA-audited before listing.

> **Status:** Frontend complete. Coming-soon gate active in production. n8n webhook live. Several integrations still scaffolded — see [Known limitations](#known-limitations).

---

## Tech Stack

**Core**

- Next.js 14 (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`)
- `next/font/local` — Ewangi only, no Google Fonts · `next/image` with domain allowlist

**UI / interaction**

- `@radix-ui/react-dialog`, `@radix-ui/react-select` — accessible primitives
- `framer-motion` — animations
- `lucide-react` / `react-icons` — iconography
- `clsx` + `tailwind-merge` — the `cn()` helper (`src/lib/utils.ts`)

**Forms & validation**

- `react-hook-form` + `@hookform/resolvers` + `zod` — form state & validation

**Installed but not yet wired** (intended integrations)

- `@sanity/client` + `@sanity/image-url` — CMS for listings/content
- `@hubspot/api-client` — CRM lead sync

---

## Development

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # production server
npm run lint    # ESLint check
```

---

## Environment Variables

```env
# Site
NEXT_PUBLIC_SITE_URL=

# Coming-soon gate
PREVIEW_TOKEN=                      # secret token — share with team for preview access

# Automations
WEBHOOK_COMING_SOON_URL=            # n8n webhook — active

# Maps
NEXT_PUBLIC_MAPBOX_TOKEN=           # (not yet consumed — map uses static embeds)

# CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=      # (not yet consumed)
NEXT_PUBLIC_SANITY_DATASET=         # (not yet consumed)
SANITY_API_TOKEN=                   # server-side (not yet consumed)

# CRM
HUBSPOT_API_KEY=                    # server-side (not yet consumed)

# Analytics
NEXT_PUBLIC_GA_ID=                  # (not yet consumed — analytics not wired)
NEXT_PUBLIC_META_PIXEL_ID=          # (not yet consumed — pixel not wired)
```

---

## Coming-soon mode

All production traffic redirects to `/coming-soon`. The middleware passes through in development, so no bypass is needed locally.

**Preview full site in production:**

```
https://yoursite.com/?preview=<PREVIEW_TOKEN>
```

Sets a 7-day `preview_access` cookie. To disable the gate, remove `src/middleware.ts`.

---

## Project Structure

```
src/
├─ app/
│  ├─ api/                  Route handlers (contact, property-inquiry,
│  │                        developer-listing, guide-download, coming-soon)
│  ├─ coming-soon/          Gated launch page with n8n form
│  ├─ explore-map/          Interactive listings + map view
│  ├─ properties/           Listings: andares, delmar, torre51
│  ├─ about, buyers-guide, contact, for-developers, saved
│  ├─ layout.tsx            Root layout — conditional Navbar/Footer via x-pathname header
│  ├─ page.tsx              Homepage
│  ├─ globals.css           Tailwind @theme tokens + keyframes
│  └─ sitemap.ts, robots.ts SEO endpoints
├─ components/
│  ├─ home/                 Homepage sections
│  ├─ layout/               Navbar, Footer, Main, WhatsAppButton
│  ├─ forms/                CampaignForm, ContactForm, PropertyInquiryForm, …
│  ├─ explore-map/          MapPanel, ListingCard, ExploreFilters
│  ├─ shared/               CmreBadge
│  └─ ui/                   Design system primitives
├─ fonts/
│  └─ Ewangi.ttf            Brand typeface (required)
├─ constants/               theme.ts, typography.ts
├─ lib/
│  ├─ fonts.ts              next/font declarations
│  └─ utils.ts              cn() helper
└─ middleware.ts             Coming-soon gate + preview token bypass
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, featured developments, trust signals, FAQ |
| `/properties` | Browse all listings |
| `/properties/delmar` | Del Mar development detail |
| `/properties/andares` | Andares development detail |
| `/properties/torre51` | Torre 51 development detail |
| `/explore-map` | Interactive map with filters |
| `/buyers-guide` | 5-step buying guide + PDF download |
| `/contact` | Contact form |
| `/about` | About / mission |
| `/for-developers` | Developer listing portal with pricing tiers |
| `/saved` | Saved properties (client-side) |
| `/coming-soon` | Gated launch page (active in production) |

---

## API Routes

| Route | Status | Description |
|---|---|---|
| `POST /api/coming-soon` | ✅ Live | Forwards to n8n webhook |
| `POST /api/contact` | 🔧 Stub | Needs HubSpot + Resend |
| `POST /api/property-inquiry` | 🔧 Stub | Needs HubSpot + Resend |
| `POST /api/developer-listing` | 🔧 Stub | Needs HubSpot + Resend |
| `POST /api/guide-download` | 🔧 Stub | Needs email list + PDF delivery |

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `brand-pine` | `#024139` | Primary dark green — CTAs, footer |
| `brand-emerald` | `#026559` | Hover states, badges, price strips |
| `brand-teal` | `#3AD3C1` | Accents, active states, WhatsApp button |
| `brand-ink` | `#191919` | Body text, dark section backgrounds |
| `brand-paper` | `#F4F1EA` | Light backgrounds |
| `brand-muted` | `#6F7669` | Secondary/caption text |

### Typography

All text uses **Ewangi** — loaded from `src/fonts/Ewangi.ttf` via `next/font/local`. The root layout applies `ewangi.variable` to `<html>`, injecting `--font-ewangi`. Use `font-ewangi` for headings/UI and `font-body` for paragraph copy.

| Class | Size | Usage |
|---|---|---|
| `text-display` | 2.875rem | Hero headlines |
| `text-title` | 1.875rem | Section titles |
| `text-subtitle` | 1.3125rem | Card headings |
| `text-body` | 1.0625rem | Body copy |
| `text-label` | 0.8125rem | Badges, captions |

### Animations

Keyframes in `src/app/globals.css`: `ken-burns` (hero), `fade-up` (staggered headlines), `wiggle` (WhatsApp button).

`RevealOnScroll` uses `IntersectionObserver` to fade-up + scale-in elements as they enter the viewport.

---

## Homepage Sections

Rendered in order in `src/app/page.tsx`:

| # | Component | Notes |
|---|---|---|
| 1 | `HeroSection` | Ken Burns effect, fade-up headline, search bar, social icon sidebar |
| 2 | `VerifySection` | "The only portal…" trust copy |
| 3 | `FeatureCards` | 3 certification benefit cards |
| 4 | `TopDevelopers` | Property carousel + destination grid |
| 5 | `BuyersGuideSteps` | 3-step buyer journey, alternating layout |
| 6 | `CertifiedBanner` | CMRE badge + "Browse 47" CTA |
| 7 | `CampaignForm` | Lead capture form (stub — see limitations) |
| 8 | `FaqSection` | 6-question accordion |

---

## Known Limitations

- **Most API routes are stubs.** Only `/api/coming-soon` is live. The rest log the body and return `{ success: true }` — leads are not persisted.
- **Forms lack server-side validation** and rate limiting.
- **Content is hardcoded.** Listings and developers use inline mock data; Sanity is not connected.
- **Map is not interactive.** `explore-map` embeds static iframes; Mapbox token unused.
- **Analytics not wired** (GA / Meta Pixel env vars defined but unused).
- **Missing routes:** `/privacy`, `not-found.tsx`, `error.tsx`.
- **No security headers** in `next.config.mjs`.
- **No tests, no CI.**

---

## Roadmap

1. Wire remaining API routes — Zod validation + HubSpot lead sync + Resend emails.
2. Add rate limiting, honeypot, and security headers.
3. Connect Sanity CMS for listings and content.
4. Inject GA4 + Meta Pixel scripts in root layout.
5. Implement interactive Mapbox map in `/explore-map`.
6. Add `/privacy`, `not-found.tsx`, `error.tsx`.
