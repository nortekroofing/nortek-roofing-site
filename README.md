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

## Clock-In Kiosk

### Environment variables
Set the following in Vercel project settings:

```
SUPABASE_URL
SUPABASE_ANON_KEY
```

### Supabase table

```sql
create table punches (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  employee_id text not null,
  action text not null,
  job_code text,
  device_id text,
  status text default 'synced'
);
```

### Offline queue
Punches are stored in IndexedDB when offline and automatically synced when the device reconnects.

### iPad setup
1. Open `https://www.nortekroofing.ca/clockin` in Safari.
2. Share → **Add to Home Screen**.
3. Launch the app and enable **Guided Access** to lock the kiosk.
