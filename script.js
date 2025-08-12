
// Year stamp if present
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if(menuBtn && nav){ menuBtn.addEventListener('click', ()=> nav.classList.toggle('open')); }
