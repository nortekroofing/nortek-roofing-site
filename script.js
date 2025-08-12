// Year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if(menuBtn && nav){ menuBtn.addEventListener('click', ()=> nav.classList.toggle('open')); }

// Contact form: try Formspree endpoint if provided, else fallback to mailto
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = form.getAttribute('data-form-endpoint') || "";
    if(endpoint) {
      try {
        const res = await fetch(endpoint, { method:'POST', headers:{'Accept':'application/json'}, body: new FormData(form)});
        if(res.ok){ status.textContent = "Thanks! We’ll be in touch shortly."; form.reset(); }
        else { status.textContent = "Something went wrong. Please email us at info@nortekexteriors.com."; }
      } catch(err) {
        status.textContent = "Network error. Please email us at info@nortekexteriors.com.";
      }
    } else {
      // mailto fallback
      const subject = encodeURIComponent("Quote request from " + (data.name||"Website"));
      const body = encodeURIComponent(
        "Name: " + (data.name||"") + "\n" +
        "Email: " + (data.email||"") + "\n" +
        "Phone: " + (data.phone||"") + "\n\n" +
        "Project Details:\n" + (data.message||"")
      );
      window.location.href = "mailto:info@nortekexteriors.com?subject=" + subject + "&body=" + body;
    }
  });
}
