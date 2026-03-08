/**
 * DEMO: Doanh Nghiep — Stellar Corp
 * Script rieng: Navbar scroll, scroll reveal, counter animation
 */

// Modal functions
function openModal(t) { document.getElementById('authModal').classList.add('open'); switchTab(t || 'login') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function switchTab(t) { document.querySelectorAll('.exec-seg').forEach((b, i) => b.classList.toggle('active', (t === 'login' && i === 0) || (t === 'register' && i === 1))); var lf = document.getElementById('loginForm'); var rf = document.getElementById('registerForm'); if (lf) lf.classList.toggle('hidden', t !== 'login'); if (rf) rf.classList.toggle('hidden', t !== 'register') }
document.getElementById('authModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

// NAVBAR — Solid background khi scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) { navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
});

// MOBILE MENU
const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav__links');
if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burger.classList.toggle('active');
    });
}

// SCROLL REVEAL
const revealElements = document.querySelectorAll('.about__grid, .service-card, .stat-item, .testimonial-card, .cta__content');
revealElements.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// COUNTER
const counterElements = document.querySelectorAll('[data-target]');
let counterStarted = false;
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
    }
    requestAnimationFrame(update);
}
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting && !counterStarted) { counterStarted = true; counterElements.forEach(animateCounter); } });
}, { threshold: 0.3 });
const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (navLinks) navLinks.classList.remove('open');
            if (burger) burger.classList.remove('active');
        }
    });
});

// Auto-fill demo credentials
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('authModal');
    if (!modal) return;
    function fill() { var f = document.getElementById('loginForm'); if (f && !f.classList.contains('hidden')) { var inp = f.querySelectorAll('.exec-input'); if (inp.length >= 2) { inp[0].value = 'demo@16pa.us'; inp[1].value = 'Demo@16pa'; } } }
    new MutationObserver(function () { if (modal.classList.contains('open')) fill(); }).observe(modal, { attributes: true, attributeFilter: ['class'] });
    document.querySelectorAll('.exec-seg').forEach(function (t) { t.addEventListener('click', function () { setTimeout(fill, 100); }); });
});

window.openModal = openModal; window.closeModal = closeModal; window.switchTab = switchTab; window.showToast = showToast;