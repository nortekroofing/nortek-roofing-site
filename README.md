# Nortek Roofing

Production-ready Next.js + Tailwind site with Sanity Studio.

## Setup

1. Install dependencies: `npm i`
2. Start local dev: `npm run dev`
3. Sanity Studio:
   ```
   cd studio
   npm i
   npm run dev
   ```
4. Create `.env.local` from `.env.example` and fill values:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Replace `/public/hero.mp4` and `/public/hero-poster.jpg` with final media.
6. Deploy via Vercel (already linked) and add env vars in Project Settings.
7. DNS: point Namecheap to Vercel per dashboard instructions.
