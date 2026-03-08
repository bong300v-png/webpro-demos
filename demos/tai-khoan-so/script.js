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