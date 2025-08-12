# Nortek Roofing — Full Static Website

Multi‑page, responsive site inspired by premium builder aesthetics (original design). Great for GitHub Pages or Netlify.

## Pages
- `/index.html` — Home
- `/projects.html` — Project grid
- `/project.html` — Project detail template
- `/services.html` — Services + Process
- `/about.html` — About
- `/contact.html` — Contact form (mailto)

## Quick Publish: GitHub Pages
1. Create a **public** repo and upload everything.
2. In the repo: **Settings → Pages → Source** = `Deploy from a branch` → `main` → `/ (root)` → **Save**.
3. Your site appears at `https://<username>.github.io/<repo>/`.
4. To use your domain (`www.nortekroofing.ca`), set:
   - **CNAME** for `www` → `<username>.github.io`
   - (Optional) A records for root `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Then add `www.nortekroofing.ca` in GitHub Pages custom domain + **Enforce HTTPS**.

## Customize
- Replace images in `assets/images/` with your photos.
- Update phone/email/domain in HTML (search `nortekroofing.ca` and the phone number).
- Adjust brand color in `assets/style.css` under `--brand`.
