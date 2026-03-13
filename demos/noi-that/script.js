/**
 * DEMO: Noi That — ArtSpace
 */
function openModal(t) { document.getElementById('authModal').classList.add('open'); switchTab(t || 'login') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function switchTab(t) { document.querySelectorAll('.interior-tab').forEach((b, i) => b.classList.toggle('active', (t === 'login' && i === 0) || (t === 'register' && i === 1))); var lf = document.getElementById('loginForm'); var rf = document.getElementById('registerForm'); if (lf) lf.classList.toggle('hidden', t !== 'login'); if (rf) rf.classList.toggle('hidden', t !== 'register') }
document.getElementById('authModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60) });
const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav__links');
if (burger) burger.addEventListener('click', () => { navLinks.classList.toggle('open'); burger.classList.toggle('active') });

const revealEls = document.querySelectorAll('.project-card, .service-card, .process-step, .about__content, .cta__content');
revealEls.forEach(el => el.classList.add('reveal'));
const revealObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }) }, { threshold: 0.15 });
revealEls.forEach(el => revealObs.observe(el));

const counterEls = document.querySelectorAll('[data-target]');
let counterStarted = false;
function animateCounter(el) { const target = parseInt(el.dataset.target); const duration = 2000; const start = performance.now(); function update(now) { const p = Math.min((now - start) / duration, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(update); else el.textContent = target; } requestAnimationFrame(update) }
const statsObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting && !counterStarted) { counterStarted = true; counterEls.forEach(animateCounter) } }) }, { threshold: 0.3 });
const aboutEl = document.getElementById('about');
if (aboutEl) statsObs.observe(aboutEl);

document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) { t.scrollIntoView({ behavior: 'smooth' }); if (navLinks) navLinks.classList.remove('open'); if (burger) burger.classList.remove('active') } }) });

window.openModal = openModal; window.closeModal = closeModal; window.switchTab = switchTab; window.showToast = showToast;
