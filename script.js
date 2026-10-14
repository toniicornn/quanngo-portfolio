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
