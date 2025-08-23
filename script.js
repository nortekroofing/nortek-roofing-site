// script.js
// Hero autoplay nudge
const v = document.getElementById('heroVideo');
if (v){
  v.muted = true; v.playsInline = true;
  const play = () => v.play().catch(()=>{});
  if (v.readyState >= 2) play(); else v.addEventListener('canplay', play, { once:true });
  document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) play(); });
  const kick = ()=>{ play(); window.removeEventListener('touchstart',kick); window.removeEventListener('scroll',kick); };
  window.addEventListener('touchstart', kick, { passive:true });
  window.addEventListener('scroll', kick, { passive:true });
}

// (Typewriter effect removed; hero text is now static)

// Subtle scroll cue
const cue = document.querySelector('.glass-cue');
if (cue) {
  setTimeout(() => cue.classList.add('show'), 5000);
}

// Reveal on scroll & lightbox
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${i * 60}ms`;
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  const lb = document.getElementById('lightbox');
  if (lb) {
    const lbImg = document.getElementById('lightbox-img');
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-lightbox]');
      if (!a) return;
      e.preventDefault();
      lbImg.src = a.dataset.lightbox || a.href;
      lb.classList.add('open');
    });
    lb.addEventListener('click', () => lb.classList.remove('open'));
  }
});
