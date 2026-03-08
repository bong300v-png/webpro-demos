/** Proxy Tool — ProxyNet: Auth + toast + reveal */
function openModal() { document.getElementById('authModal').classList.add('open') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
document.getElementById('authModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }
document.querySelectorAll('.prod-card,.price-card,.code-block').forEach(el => { el.classList.add('reveal'); new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el) });
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