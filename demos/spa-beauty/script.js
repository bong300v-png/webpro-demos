/** Spa/Beauty — Serene Spa: Scroll reveal + smooth scroll */
function openModal(t) { document.getElementById('authModal').classList.add('open'); if (t === 'register') showRegister(); else showLogin(); }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
/* Spa dùng toggle link thay vì tabs */
function showLogin() { var lf = document.getElementById('loginForm'), rf = document.getElementById('registerForm'); if (lf) lf.classList.remove('hidden'); if (rf) rf.classList.add('hidden'); var tt = document.getElementById('toggleText'), tl = document.getElementById('toggleLink'); if (tt) tt.textContent = 'Chưa có tài khoản?'; if (tl) tl.textContent = 'Đăng ký'; }
function showRegister() { var lf = document.getElementById('loginForm'), rf = document.getElementById('registerForm'); if (lf) lf.classList.add('hidden'); if (rf) rf.classList.remove('hidden'); var tt = document.getElementById('toggleText'), tl = document.getElementById('toggleLink'); if (tt) tt.textContent = 'Đã có tài khoản?'; if (tl) tl.textContent = 'Đăng nhập'; }
function spaToggle() { var lf = document.getElementById('loginForm'); if (lf && !lf.classList.contains('hidden')) showRegister(); else showLogin(); }
function switchTab(t) { if (t === 'register') showRegister(); else showLogin(); }
document.getElementById('authModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

document.querySelectorAll('.neu-card,.exp-card,.neu-stat,.booking-box').forEach(el => { el.classList.add('reveal'); new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el) });
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('authModal');
    if (!modal) return;
    /* Auto-fill: spa dùng spa-input-group input thay vì .modal__input */
    function fill() { var f = document.getElementById('loginForm'); if (f && !f.classList.contains('hidden')) { var inp = f.querySelectorAll('input'); if (inp.length >= 2) { inp[0].value = 'demo@16pa.us'; inp[1].value = 'Demo@16pa'; } } }
    new MutationObserver(function () { if (modal.classList.contains('open')) fill(); }).observe(modal, { attributes: true, attributeFilter: ['class'] });
});

window.openModal = openModal; window.closeModal = closeModal; window.switchTab = switchTab; window.showToast = showToast; window.spaToggle = spaToggle;