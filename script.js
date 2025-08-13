
// Year stamp
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if(menuBtn && nav){ menuBtn.addEventListener('click', ()=> nav.classList.toggle('open')); }
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
