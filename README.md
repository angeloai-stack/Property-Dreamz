# Property Dreamz

Real estate portal for verified Mexican properties marketed to U.S. buyers. Built with Next.js 14 (App Router) and Tailwind CSS v4, with reusable UI primitives, marketing pages, an explore-map view, and lead-capture forms.

> **Status:** the frontend is complete and styled, but several integrations are scaffolded only. See [Known limitations](#known-limitations) before deploying.

## Tech stack

**Core**

- Next.js 14 (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/forms`, `@tailwindcss/typography`)
- `next/font` for optimized fonts · `next/image` with a domain allowlist

**UI / interaction**

- `@radix-ui/react-dialog`, `@radix-ui/react-select` — accessible primitives
- `framer-motion` — animations
- `lucide-react` / `react-icons` — iconography
- `clsx` + `tailwind-merge` — the `cn()` class helper (`src/lib/utils.ts`)

**Installed but not yet wired** (intended integrations)

- `react-hook-form` + `@hookform/resolvers` + `zod` — form state & validation
- `@sanity/client` + `@sanity/image-url` — CMS for listings/content
- `@hubspot/api-client` — CRM lead sync

## Development

```bash
npm install   # install dependencies
npm run dev   # start the dev server
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Production

```bash
npm run build   # build for production
npm run start   # start the production server
```

## Code quality

```bash
npm run lint       # ESLint
npm run lint:fix   # ESLint with autofix
```

Linting uses the classic `.eslintrc.json` (extends `next/core-web-vitals` and
`next/typescript`), matching ESLint 8 / Next 14. `npm run lint`,
`npx tsc --noEmit`, and `npm run build` all pass cleanly with no warnings.

## Environment variables

Create a `.env.local` from the keys below. Items marked _(not yet consumed)_ exist for planned integrations but are not read by the code yet.

```env
NEXT_PUBLIC_SITE_URL=               # canonical site URL (not yet consumed)
NEXT_PUBLIC_MAPBOX_TOKEN=           # (not yet consumed — map uses Google Maps embeds)
NEXT_PUBLIC_SANITY_PROJECT_ID=      # (not yet consumed)
NEXT_PUBLIC_SANITY_DATASET=         # (not yet consumed)
SANITY_API_TOKEN=                   # server-side (not yet consumed)
HUBSPOT_API_KEY=                    # server-side (not yet consumed)
NEXT_PUBLIC_GA_ID=                  # (not yet consumed — analytics not wired)
NEXT_PUBLIC_META_PIXEL_ID=          # (not yet consumed — pixel not wired)
```

## Project structure

```
src/
├─ app/                     App Router pages, layout, sitemap, robots
│  ├─ api/                  Lead-capture routes (contact, property-inquiry,
│  │                        developer-listing, guide-download) — see limitations
│  ├─ explore-map/          Interactive listings + map view
│  ├─ properties/           Property detail pages (andares, fracc)
│  ├─ about, buyers-guide, contact, for-developers, saved
│  ├─ layout.tsx            Root layout, fonts, SEO metadata
│  ├─ sitemap.ts, robots.ts SEO endpoints
│  └─ globals.css
├─ components/
│  ├─ ui/                   Primitives (Button, Card, Heading, Section, Input, …)
│  ├─ layout/               Navbar, Footer, Main, WhatsAppButton
│  ├─ home/                 Landing sections (Hero, FeaturedDevelopments, …)
│  ├─ forms/                Lead-capture forms
│  ├─ explore-map/          MapPanel, ListingCard, ExploreFilters
│  └─ shared/               Cross-cutting components (CmreBadge)
├─ constants/               theme.ts, typography.ts (design tokens)
├─ lib/                     utils.ts (cn helper), fonts.ts
└─ styles/                  globals.css
```

## Known limitations

These are scaffolded and need work before production:

- **API routes are stubs.** The four routes under `src/app/api/` only
  `console.log` the request body and return `{ success: true }` — submitted
  leads are **not** persisted or emailed. They also lack input validation,
  rate limiting, and spam protection.
- **Forms are not validated server-side** and use raw `useState` rather than
  the installed `react-hook-form` + `zod`.
- **Content is hardcoded.** Listings, developers, and the "Saved" page use
  inline mock data; Sanity is not yet connected and "Saved" does not persist.
- **The map is not interactive.** `explore-map` embeds static Google Maps
  iframes per state; there are no property pins (Mapbox is unused).
- **Analytics are not wired** (GA / Meta Pixel env vars are unused).
- **Missing pages/handlers:** `/privacy` (linked from form consent checkboxes),
  `not-found.tsx`, and `error.tsx`.
- **No security headers** are configured in `next.config.mjs`.
- **No tests and no CI.**

## Roadmap

1. Implement the API routes: `zod` validation + HubSpot lead sync; remove PII logging.
2. Harden lead capture: honeypot + rate limiting + security headers.
3. Migrate forms to `react-hook-form` + `zod` with a shared schema.
4. Add the missing `/privacy`, `not-found.tsx`, and `error.tsx`.
5. Wire content (Sanity), analytics, and an interactive map.
