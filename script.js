// year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
// mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if(menuBtn && nav){
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}
