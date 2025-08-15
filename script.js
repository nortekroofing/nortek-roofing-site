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

// Hero text typewriter effect
const heroText = document.getElementById('heroText');
const exploreBtn = document.getElementById('exploreBtn');
if (heroText && exploreBtn) {
  const first = 'Built for the West Coast.';
  const replace = 'West Coast.';
  const second = 'Island.';
  const speed = 175;
  heroText.textContent = '';

  const type = (text, cb) => {
    let i = 0;
    const step = () => {
      if (i < text.length) {
        heroText.textContent += text[i++];
        setTimeout(step, speed);
      } else if (cb) cb();
    };
    step();
  };

  const del = (count, cb) => {
    const step = () => {
      if (count > 0) {
        heroText.textContent = heroText.textContent.slice(0, -1);
        count--;
        setTimeout(step, speed);
      } else if (cb) cb();
    };
    step();
  };

  setTimeout(() => type(first), 3000);
  setTimeout(() => {
    del(replace.length, () => {
        type(second, () => setTimeout(() => exploreBtn.classList.add('show'), 100));
    });
  }, 7000);
}

// Subtle scroll cue
const cue = document.querySelector('.glass-cue');
if (cue) {
  setTimeout(() => cue.classList.add('show'), 5000);
}
