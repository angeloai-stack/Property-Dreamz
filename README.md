# Property Dreamz

Luxury real estate landing page for verified Mexican properties. This repo includes a Next.js 14 App Router implementation with Tailwind CSS v4, reusable UI primitives, and a layout scaffold for agency-style marketing pages.

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS v4
- `next/font` for optimized Google fonts
- `lucide-react` for iconography

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Production

Build the app for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Code quality

Run lint checks:

```bash
npm run lint
```

Apply automatic ESLint fixes:

```bash
npm run lint:fix
```

## Environment variables

Create a `.env.local` file with the following values:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=
HUBSPOT_API_KEY=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

## Project structure

- `src/app/` — App Router pages and root layout
- `src/components/ui/` — reusable UI primitives (`Button`, `Card`, `Heading`, `Section`, etc.)
- `src/components/layout/` — page layout components (`Navbar`, `Footer`, `WhatsAppButton`)
- `src/lib/` — shared utilities and font configuration

## Notes

This project is ready for the next step: wiring actual property data, form handling, and marketing copy into the landing page.
