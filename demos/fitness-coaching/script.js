/** Fitness — IRONFIT: Scroll reveal + aggressive modal */
var fitMode = 'login';
function openModal(t) { fitMode = t || 'login'; showFitForm(); document.getElementById('authModal').classList.add('open'); }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function showFitForm() { var lf = document.getElementById('loginForm'), rf = document.getElementById('registerForm'), h = document.querySelector('.fit-modal__head h3'), n = document.querySelector('.fit-modal__num'), tl = document.getElementById('fitToggleLink'); if (fitMode === 'login') { if (lf) lf.classList.remove('hidden'); if (rf) rf.classList.add('hidden'); if (h) h.textContent = 'ĐĂNG NHẬP'; if (n) n.textContent = '01'; if (tl) tl.textContent = 'CHƯA CÓ TÀI KHOẢN? ĐĂNG KÝ'; } else { if (lf) lf.classList.add('hidden'); if (rf) rf.classList.remove('hidden'); if (h) h.textContent = 'ĐĂNG KÝ'; if (n) n.textContent = '02'; if (tl) tl.textContent = 'ĐÃ CÓ TÀI KHOẢN? ĐĂNG NHẬP'; } }
function fitToggle() { fitMode = fitMode === 'login' ? 'register' : 'login'; showFitForm(); }
function switchTab(t) { fitMode = t; showFitForm(); }
document.getElementById('authModal')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

document.querySelectorAll('.program-card,.trainer-card,.join-box').forEach(el => { el.classList.add('reveal'); new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el) });
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('authModal');
    if (!modal) return;
    function fill() { var f = document.getElementById('loginForm'); if (f && !f.classList.contains('hidden')) { var inp = f.querySelectorAll('.modal__input'); if (inp.length >= 2) { inp[0].value = 'demo@16pa.us'; inp[1].value = 'Demo@16pa'; } } }
    new MutationObserver(function () { if (modal.classList.contains('open')) fill(); }).observe(modal, { attributes: true, attributeFilter: ['class'] });
});

window.openModal = openModal; window.closeModal = closeModal; window.switchTab = switchTab; window.showToast = showToast; window.fitToggle = fitToggle;