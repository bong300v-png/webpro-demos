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


// â”€â”€ Auto-fill demo credentials â€” TK/MK sáºµn Ä‘á»ƒ login â”€â”€
document.addEventListener('DOMContentLoaded', function() {
    // Theo dÃµi khi modal má»Ÿ â†’ fill credentials vÃ o loginForm
    const authModal = document.getElementById('authModal');
    if (!authModal) return;
    const observer = new MutationObserver(function() {
        if (authModal.classList.contains('open')) {
            const loginForm = document.getElementById('loginForm');
            if (loginForm && !loginForm.classList.contains('hidden')) {
                const inputs = loginForm.querySelectorAll('.modal__input');
                if (inputs.length >= 2 && !inputs[0].value) {
                    inputs[0].value = 'demo@16pa.us';
                    inputs[1].value = 'Demo@16pa';
                }
            }
        }
    });
    observer.observe(authModal, { attributes: true, attributeFilter: ['class'] });
    // CÅ©ng fill khi switchTab vá» login 
    document.querySelectorAll('.modal__tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            setTimeout(function() {
                const loginForm = document.getElementById('loginForm');
                if (loginForm && !loginForm.classList.contains('hidden')) {
                    const inputs = loginForm.querySelectorAll('.modal__input');
                    if (inputs.length >= 2) {
                        inputs[0].value = 'demo@16pa.us';
                        inputs[1].value = 'Demo@16pa';
                    }
                }
            }, 100);
        });
    });
});