/** Tài Khoản Số — DigiPay: Auth modal, toast, scroll reveal */

// ── Auth Modal ──
function openModal(tab) {
    document.getElementById('authModal').classList.add('open');
    switchTab(tab || 'login');
}
function closeModal() {
    document.getElementById('authModal').classList.remove('open');
}
function switchTab(tab) {
    document.querySelectorAll('.modal__tab').forEach((t, i) => {
        t.classList.toggle('active', (tab === 'login' && i === 0) || (tab === 'register' && i === 1));
    });
    document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
    document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
}
// Click overlay để đóng
document.getElementById('authModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
});

// ── Toast notification ──
function showToast() {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
    return false; // prevent form submit
}

// ── Scroll reveal ──
document.querySelectorAll('.feat-card,.price-card,.shield-card,.cta-box').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); }, { threshold: .15 }).observe(el);
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
}));
