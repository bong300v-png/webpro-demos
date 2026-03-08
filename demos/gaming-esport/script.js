/* ArenaX — Script: modal, toast, scroll reveal */

// Modal — mở/đóng form đăng ký
function openModal(t) { document.getElementById('authModal').classList.add('open'); switchTab(t || 'login') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function switchTab(t) { document.querySelectorAll('.modal__tab').forEach((b, i) => b.classList.toggle('active', (t === 'login' && i === 0) || (t === 'register' && i === 1))); document.getElementById('loginForm').classList.toggle('hidden', t !== 'login'); document.getElementById('registerForm').classList.toggle('hidden', t !== 'register') }
document.getElementById('authModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });

// Toast — thông báo tạm
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

// Scroll reveal — hiệu ứng xuất hiện khi cuộn
document.querySelectorAll('.tour-card,.game-card,.team-card').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));


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