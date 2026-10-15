const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.style.display = 'none');
});

const cursor = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const revealTargets = document.querySelectorAll('.project-card, .technical-intro, .detail-drawing, .cad-tools, .process-grid > div, .about-copy');
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:600, easing:'cubic-bezier(.2,.7,.2,1)', fill:'both'}
      );
      obs.unobserve(entry.target);
    }
  });
},{threshold:.1});
revealTargets.forEach(el => obs.observe(el));

// Project 01 — Sealy Showroom
const firstProject = document.querySelector('.project-card');
if (firstProject) {
  firstProject.style.cursor = 'pointer';
  firstProject.setAttribute('role', 'link');
  firstProject.setAttribute('tabindex', '0');
  const title = firstProject.querySelector('h3');
  const image = firstProject.querySelector('img');
  if (title) title.textContent = 'SEALY SHOWROOM';
  if (image) image.alt = 'Sealy Showroom — Shopdrawing Project';
  const openProject = () => window.location.href = 'sealy.html';
  firstProject.addEventListener('click', openProject);
  firstProject.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openProject();
  });
}
