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
  const first = 'made for the island.';
  const replace = 'the island.';
  const second = 'you.';
  const min = 75;
  const max = 175;
  const delay = () => Math.random() * (max - min) + min;
  const btnDelay = 1500;
  heroText.textContent = '';

  const type = (text, cb) => {
    let i = 0;
    const step = () => {
      if (i < text.length) {
        heroText.textContent += text[i++];
        setTimeout(step, delay());
      } else if (cb) cb();
    };
    step();
  };

  const del = (count, cb) => {
    const step = () => {
      if (count > 0) {
        heroText.textContent = heroText.textContent.slice(0, -1);
        count--;
        setTimeout(step, delay());
      } else if (cb) cb();
    };
    step();
  };

  const run = () => {
    setTimeout(() => {
      type(first, () => {
        setTimeout(() => {
          del(replace.length, () => {
            type(second, () => setTimeout(() => exploreBtn.classList.add('show'), btnDelay));
          });
        }, 1000);
      });
    }, 500);
  };

  if (v) {
    if (!v.paused && v.currentTime > 0) {
      run();
    } else {
      v.addEventListener('playing', run, { once: true });
    }
  } else {
    run();
  }
}

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
