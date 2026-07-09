# Property Dreamz

Verified Mexican real estate portal for international buyers. Every property title-searched, developer-reviewed, and HOA-audited before listing.

> **Status:** Frontend complete — 17 property detail pages, 4 regional landing pages (Baja California, Tijuana, Rosarito, Ensenada), blog, interactive Mapbox map, cross-page saved-properties store, and sitewide SEO from the approved SEO content document. Unit test suite live (66 tests, 9 suites). Coming-soon gate active in production. n8n webhook live. Several integrations still scaffolded — see [Known limitations](#known-limitations).

---

## Tech Stack

**Core**

- Next.js 14 (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`)
- `next/font/local` — Ewangi only, no Google Fonts · `next/image` with domain allowlist (Cloudinary, Unsplash)

**UI / interaction**

- `mapbox-gl` — interactive explore map (real markers, fit-to-results, pin popups)
- `@radix-ui/react-dialog`, `@radix-ui/react-select` — accessible primitives
- `framer-motion` — animations
- `lucide-react` / `react-icons` — iconography
- `clsx` + `tailwind-merge` — the `cn()` helper (`src/lib/utils.ts`)

**Forms & validation**

- `react-hook-form` + `@hookform/resolvers` + `zod` — form state & validation

**Media**

- Cloudinary (`next-cloudinary`) — all project imagery under cloud `dserzvrwe`, delivery base `f_auto,q_auto`

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
npm run build        # production build
npm run start        # production server
npm run lint         # ESLint check
npm run test         # unit tests (Jest)
npm run test:watch   # watch mode
npm run test:coverage  # coverage report
```

---

## Testing

**Stack:** Jest 30 · jest-environment-jsdom · @testing-library/react 16 · @testing-library/user-event 14 · @testing-library/jest-dom 6

**Config:** `jest.config.js` uses `next/jest` (SWC transform, `@/` alias resolution). `jest.setup.ts` provides global mocks for `IntersectionObserver` and `fetch`.

| Suite | File | Tests |
|---|---|---|
| `cn()` utility | `src/lib/utils.test.ts` | 9 |
| Price formatters | `src/app/explore-map/utils.test.ts` | 12 |
| Button | `src/components/ui/Button.test.tsx` | 7 |
| Input | `src/components/ui/Input.test.tsx` | 7 |
| ContactForm | `src/components/forms/ContactForm.test.tsx` | 7 |
| CampaignForm | `src/components/forms/CampaignForm.test.tsx` | 5 |
| GuideDownloadForm | `src/components/forms/GuideDownloadForm.test.tsx` | 6 |
| PropertyInquiryForm | `src/components/forms/PropertyInquiryForm.test.tsx` | 7 |
| DeveloperListingForm | `src/components/forms/DeveloperListingForm.test.tsx` | 6 |

**Total: 66 tests — 9 suites — all passing.**

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
NEXT_PUBLIC_MAPBOX_TOKEN=           # consumed by /explore-map (mapbox-gl)

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

Sets a `preview_access` cookie. To disable the gate, remove `src/middleware.ts`.

---

## SEO

The approved **SEO content document** is the source of truth (as of Jul 2026) for meta tags, city assignments, per-development titles/descriptions, "Why Us?" copy, and FAQs.

- **Meta tags** — home title `Mexico Real Estate | Verified Properties | Property Dreamz` + description from the document (`src/app/layout.tsx`, `src/app/page.tsx`).
- **Per-property metadata** — each of the 16 document-covered detail pages has a thin `layout.tsx` exporting its exact SEO title/description + Open Graph.
- **Regional landing pages** — `/baja-california-real-estate`, `/tijuana-real-estate`, `/rosarito-real-estate`, `/ensenada-real-estate`, each with hero, SEO text block, city-filtered listings grid, and curated related-blog posts.
- **JSON-LD** — `Organization` + `WebSite` (sitelinks searchbox) + `FAQPage` on the home page; `FAQPage` on buyers-guide.
- **`sitemap.ts` / `robots.ts`** — sitemap includes static routes, all available property pages, and every blog post (42 URLs).

---

## Saved properties

Cross-page favorites store: `src/hooks/useSavedProperties.tsx` (`SavedPropertiesProvider` mounted in the root layout, persisted to `localStorage` under `pd-saved-properties`).

Every heart button on the site is wired to it — explore-map cards and map-pin popups, `/properties` grid, the home "Properties by City" carousel, Top Developers cards, and the three city landing grids. Saves use canonical `catalog-<slug>` ids, so hearting the same development anywhere toggles a single entry, and everything shows up on `/saved` (sortable grid with unsave).

---

## Project Structure

```
src/
├─ app/
│  ├─ api/                  Route handlers (contact, property-inquiry,
│  │                        developer-listing, guide-download, coming-soon)
│  ├─ baja-california-real-estate/  Regional landing page
│  ├─ tijuana-real-estate/          Regional landing page
│  ├─ rosarito-real-estate/         Regional landing page
│  ├─ ensenada-real-estate/         Regional landing page
│  ├─ blog/                 Blog index + [slug] article pages (data.ts catalogue)
│  ├─ coming-soon/          Gated launch page with n8n form
│  ├─ explore-map/          Interactive Mapbox map + synced listing cards
│  ├─ properties/           Listings index + 17 detail pages (data.ts catalogue
│  │                        with regions per the SEO document + saved-store adapter)
│  ├─ portal/               Developer portal (login)
│  ├─ about, buyers-guide, contact, for-developers, saved
│  ├─ layout.tsx            Root layout — metadata, SavedPropertiesProvider,
│  │                        conditional Navbar/Footer via x-pathname header
│  ├─ page.tsx              Homepage (+ Organization/WebSite/FAQPage JSON-LD)
│  ├─ globals.css           Tailwind @theme tokens + keyframes
│  └─ sitemap.ts, robots.ts SEO endpoints
├─ components/
│  ├─ home/                 Homepage sections (+ faq-data.ts shared with JSON-LD)
│  ├─ baja/                 Baja California landing sections + PropertiesByCity
│  ├─ tijuana/, rosarito/, ensenada/   City landing sections
│  ├─ blog/                 BlogCard and article components
│  ├─ layout/               Navbar (Properties mega-menu by city), Footer, …
│  ├─ forms/                CampaignForm, ContactForm, PropertyInquiryForm, …
│  ├─ explore-map/          MapPanel (mapbox-gl), ExploreListingCard, filters
│  ├─ shared/               CmreBadge, VerifyFeatures
│  └─ ui/                   Design system primitives
├─ hooks/
│  └─ useSavedProperties.tsx  localStorage-backed favorites store (context)
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
| `/` | Homepage — hero, verify, Why Us?, top developers, Baja SEO block, properties by city, buyer steps, certified banner, FAQ (9 Q&As + FAQPage schema), campaign form |
| `/baja-california-real-estate` | Regional landing — Baja California |
| `/tijuana-real-estate` | Regional landing — Tijuana |
| `/rosarito-real-estate` | Regional landing — Rosarito |
| `/ensenada-real-estate` | Regional landing — Ensenada |
| `/properties` | Browse all listings (filter/search over the catalogue) |
| `/properties/<slug>` | 17 development detail pages — Tijuana: costa-baja, costa-real, delmar, andares · Ensenada: cibola-del-mar, encanto-del-valle, pacifica, punta-piedra · Rosarito: alimar, costa-bella, laguna-bay, loma-serena, naos, palacio-del-mar, tierra-de-agua, torre51, the-wave |
| `/explore-map` | Interactive Mapbox map with filters, synced cards, save hearts |
| `/blog` | Blog index + 13 article pages (`/blog/<slug>`) |
| `/buyers-guide` | 5-step buying guide + PDF download |
| `/contact` | Contact form |
| `/about` | About / mission |
| `/for-developers` | Developer listing portal with pricing tiers |
| `/portal` | Developer portal (login) |
| `/saved` | Saved properties — localStorage store, sort + unsave |
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
| 1 | `HeroSection` | Ken Burns effect, rotating headline carousel (first slide "Mexico Real Estate:"), static SEO subtitle, search bar |
| 2 | `VerifySection` | "The only portal…" trust copy + CMRE logo |
| 3 | `FeatureCards` | 3 "Why Us?" cards — extended copy from the SEO document |
| 4 | `TopDevelopers` | Property carousel (save hearts) + destination grid |
| 5 | `BajaSeoBlock` | "Baja California Real Estate" SEO text + stats + internal links |
| 6 | `PropertiesByCity` | Tabbed carousel: Tijuana / Ensenada / Rosarito (save hearts) |
| 7 | `BuyersGuideSteps` | 3-step buyer journey, alternating layout |
| 8 | `CertifiedBanner` | CMRE badge + "Browse 47" CTA |
| 9 | `FaqSection` | 9-question accordion — content in `faq-data.ts`, mirrored as FAQPage JSON-LD |
| 10 | `CampaignForm` | Lead capture form (stub — see limitations) |

---

## Known Limitations

- **Most API routes are stubs.** Only `/api/coming-soon` is live. The rest log the body and return `{ success: true }` — leads are not persisted.
- **Forms lack server-side validation** and rate limiting.
- **Content is hardcoded.** Listings, blog posts, and developers use inline mock data; Sanity is not connected. Catalogue prices/sqm for Costa Bella, Cíbola del Mar, and The Wavve are placeholders.
- **Three SEO-document developments have no detail page yet:** Alma Nova, Divino, Quinta Misión (excluded from nav/catalogue until built).
- **Saved properties are device-local** (localStorage) — no account sync.
- **Analytics not wired** (GA / Meta Pixel env vars defined but unused).
- **Missing routes:** `/privacy`, `not-found.tsx`, `error.tsx`.
- **No security headers** in `next.config.mjs`.
- **No CI pipeline** (GitHub Actions not configured).

---

## Roadmap

1. Wire remaining API routes — Zod validation + HubSpot lead sync + Resend emails.
2. Add rate limiting, honeypot, and security headers.
3. Connect Sanity CMS for listings and content.
4. Build detail pages for Alma Nova, Divino, and Quinta Misión; replace placeholder catalogue prices.
5. Inject GA4 + Meta Pixel scripts in root layout.
6. Add `/privacy`, `not-found.tsx`, `error.tsx`.
7. Add E2E tests (Playwright) for critical form submission flows and the saved-properties flow.
8. Set up CI pipeline (GitHub Actions) to run `npm test` and `npm run build` on every PR.
