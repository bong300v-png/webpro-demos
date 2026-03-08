/**
 * DEMO: Doanh Nghiệp — Stellar Corp
 * Script riêng: Navbar scroll, scroll reveal, counter animation
 */

// ═══════════════════════════════════════════
// NAVBAR — Solid background khi scroll
// ═══════════════════════════════════════════
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ═══════════════════════════════════════════
// MOBILE MENU — Toggle hamburger
// ═══════════════════════════════════════════
const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav__links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burger.classList.toggle('active');
    });
}

// ═══════════════════════════════════════════
// SCROLL REVEAL — Phần tử trượt vào khi vào viewport
// ═══════════════════════════════════════════
const revealElements = document.querySelectorAll(
    '.about__grid, .service-card, .stat-item, .testimonial-card, .cta__content'
);

// Thêm class reveal cho tất cả elements cần animate
revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

// ═══════════════════════════════════════════
// COUNTER — Số đếm lên trong section Stats
// ═══════════════════════════════════════════
const counterElements = document.querySelectorAll('[data-target]');
let counterStarted = false;

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic cho natural feel
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
    }
    requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !counterStarted) {
                counterStarted = true;
                counterElements.forEach(animateCounter);
            }
        });
    },
    { threshold: 0.3 }
);

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// ═══════════════════════════════════════════
// SMOOTH SCROLL — Cho anchor links
// ═══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Đóng mobile menu nếu đang mở
            if (navLinks) navLinks.classList.remove('open');
            if (burger) burger.classList.remove('active');
        }
    });
});


// Auto-fill demo credentials
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('authModal');
    if (!modal) return;
    function fill() {
        var f = document.getElementById('loginForm');
        if (f && !f.classList.contains('hidden')) {
            var inp = f.querySelectorAll('.modal__input');
            if (inp.length >= 2) { inp[0].value = 'demo@16pa.us'; inp[1].value = 'Demo@16pa'; }
        }
    }
    new MutationObserver(function () { if (modal.classList.contains('open')) fill(); }).observe(modal, { attributes: true, attributeFilter: ['class'] });
    document.querySelectorAll('.modal__tab').forEach(function (t) { t.addEventListener('click', function () { setTimeout(fill, 100); }); });
});