# Nortek Roofing — Static Site

This is a simple, fast, one‑page website for a roofing company. Edit text in `index.html`, styles in `assets/style.css`, and replace images in `assets/images/`.

## Quick Start (local preview)
1. Just open `index.html` in a browser, or use a simple http server:
   ```bash
   python3 -m http.server 5173
   ```

## Publish with GitHub Pages (free)
1. Create a new public repo on GitHub and upload all files.
2. In the repo: **Settings → Pages**.
3. Source: **Deploy from a branch** → `main` branch → `/ (root)` folder → **Save**.
4. Wait a minute for your site to appear at `https://<username>.github.io/<repo>/`.

## Use your Namecheap domain
In Namecheap → Domain → **Advanced DNS** add:
- **CNAME** for `www` → `YOUR_GITHUB_USERNAME.github.io`
- (Optional) A Records for `@` (root) → GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

Then in GitHub Pages settings add your custom domain (e.g. `www.example.com`) and enable **Enforce HTTPS**.

## Replace placeholders
- Update email/phone and domain references in `index.html` (search `YOURDOMAIN.com` and phone placeholder).
- Replace images in `assets/images/` with your own. Keep names or update the `<img>` `src` paths.
