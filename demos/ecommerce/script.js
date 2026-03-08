/** E-Commerce — VivaMart: Countdown timer + scroll reveal */
function openModal(t) { document.getElementById('authModal').classList.add('open'); switchTab(t || 'login') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function switchTab(t) { document.querySelectorAll('.shop-pill').forEach((b, i) => b.classList.toggle('active', (t === 'login' && i === 0) || (t === 'register' && i === 1))); var lf = document.getElementById('loginForm'); var rf = document.getElementById('registerForm'); if (lf) lf.classList.toggle('hidden', t !== 'login'); if (rf) rf.classList.toggle('hidden', t !== 'register') }
document.getElementById('authModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

// Countdown timer cho flash sale
function startCountdown() {
    const h = document.getElementById('hours'), m = document.getElementById('minutes'), s = document.getElementById('seconds');
    if (!h) return;
    let total = 8 * 3600 + 45 * 60 + 23;
    setInterval(() => {
        if (total <= 0) return;
        total--;
        h.textContent = String(Math.floor(total / 3600)).padStart(2, '0');
        m.textContent = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
        s.textContent = String(total % 60).padStart(2, '0');
    }, 1000);
}
startCountdown();

document.querySelectorAll('.cat-card,.product-card,.flash-banner').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); }, { threshold: 0.1 }).observe(el);
});
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); }));

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('authModal');
    if (!modal) return;
    function fill() { var f = document.getElementById('loginForm'); if (f && !f.classList.contains('hidden')) { var inp = f.querySelectorAll('.shop-input'); if (inp.length >= 2) { inp[0].value = 'demo@16pa.us'; inp[1].value = 'Demo@16pa'; } } }
    new MutationObserver(function () { if (modal.classList.contains('open')) fill(); }).observe(modal, { attributes: true, attributeFilter: ['class'] });
    document.querySelectorAll('.shop-pill').forEach(function (t) { t.addEventListener('click', function () { setTimeout(fill, 100); }); });
});

window.openModal = openModal; window.closeModal = closeModal; window.switchTab = switchTab; window.showToast = showToast;