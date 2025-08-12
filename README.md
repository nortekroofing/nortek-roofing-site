# Nortek Roofing — Complete Static Website

Multi‑page, responsive site inspired by premium builder aesthetics (original design). Ready for GitHub Pages.

## Publish (GitHub Pages)
1. Create a **public** repo and upload all files from this folder.
2. Repo → **Settings → Pages** → Source = `Deploy from a branch` → `main` → `/ (root)` → **Save**.
3. Add your custom domain in Pages (e.g. `www.nortekroofing.ca`) and tick **Enforce HTTPS** after DNS is verified.

## DNS (Namecheap → GitHub Pages)
- **CNAME**: `www` → `nortekroofing.github.io`
- **Root** (`@`): either **URL Redirect (301)** to `https://www.nortekroofing.ca` or add A records to:
  185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

## Customize
- Replace the placeholder images (`hero-*.jpg`, `proj-*.jpg`) with your photos (keep filenames or update HTML).
- Update colors in `style.css` (`--brand`).

## Contact form
- Uses **mailto** by default.
- To use **Formspree**, set `data-form-endpoint="https://formspree.io/f/XXXXXXX"` on the `<form id="contactForm">` element in `contact.html`.
