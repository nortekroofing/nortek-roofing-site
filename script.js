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

// Subtle scroll cue
const cue = document.querySelector('.glass-cue');
if (cue) {
  setTimeout(() => cue.classList.add('show'), 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  const grid = document.querySelector('.showcase-grid');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (grid && lb && lbImg) {
    grid.addEventListener('click', e => {
      const a = e.target.closest('a.project-tile');
      if (!a) return;
      e.preventDefault();
      lbImg.src = a.href;
      lb.classList.add('open');
    });
    lb.addEventListener('click', () => lb.classList.remove('open'));
  }
});
