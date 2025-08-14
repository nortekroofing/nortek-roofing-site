// includes.js
async function injectInclude(targetId, file) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const html = await fetch(file).then((r) => r.text());
  el.innerHTML = html;
}

async function applyConfig() {
  const cfg = await fetch("data/site-config.json")
    .then((r) => r.json())
    .catch(() => null);
  if (!cfg) return;
  // header
  const logos = document.querySelectorAll(".site-logo");
  if (cfg.logo) logos.forEach((l) => (l.src = cfg.logo));
  const brand = document.getElementById("brand-name");
  if (brand && cfg.company) brand.textContent = cfg.company;

  // footer
  const footBrand = document.getElementById("footer-brand");
  const footBrandInline = document.getElementById("footer-brand-inline");
  if (footBrand) footBrand.textContent = cfg.company;
  if (footBrandInline) footBrandInline.textContent = cfg.company;
  const areas = document.getElementById("service-areas");
  if (areas && cfg.service_areas) areas.textContent = cfg.service_areas;
  const ph = document.getElementById("footer-phone");
  if (ph) {
    ph.textContent = cfg.phone_display;
    ph.href = cfg.phone_href;
  }
  const em = document.getElementById("footer-email");
  if (em) {
    em.textContent = cfg.email;
    em.href = `mailto:${cfg.email}`;
  }
  const year = document.getElementById("year");
  if (year)
    year.textContent = String(cfg.copyright_year || new Date().getFullYear());
}

// init after both includes are fetched
(async function () {
  await injectInclude("site-header", "header.html");
  await injectInclude("site-footer", "footer.html");
  applyConfig().then(() => {
    // Mobile nav toggle
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    }

    // Dropdown menus
    document.querySelectorAll(".dropdown > .dropbtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        btn.parentElement.classList.toggle("open");
      });
    });
    document.addEventListener("click", () => {
      document.querySelectorAll(".dropdown.open").forEach((d) => {
        d.classList.remove("open");
        const b = d.querySelector(".dropbtn");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    });
  });
})();
