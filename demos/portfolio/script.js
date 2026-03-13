/**
 * DEMO: Portfolio — minh.dev
 */
function openModal(t) { document.getElementById('authModal').classList.add('open'); }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function switchTab() {}
document.getElementById('authModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60) });
const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav__links');
if (burger) burger.addEventListener('click', () => { navLinks.classList.toggle('open'); burger.classList.toggle('active') });

const revealEls = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .cta__content, .about__grid');
revealEls.forEach(el => el.classList.add('reveal'));
const revealObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }) }, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) { t.scrollIntoView({ behavior: 'smooth' }); if (navLinks) navLinks.classList.remove('open'); if (burger) burger.classList.remove('active') } }) });

window.openModal = openModal; window.closeModal = closeModal; window.switchTab = switchTab; window.showToast = showToast;
