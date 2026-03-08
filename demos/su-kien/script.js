/* EventHub — Script: modal, toast, countdown, scroll reveal */

// Modal — mở/đóng form đăng ký
function openModal() { document.getElementById('authModal').classList.add('open') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
document.getElementById('authModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });

// Toast — thông báo tạm
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

// Countdown — đếm ngược tới ngày sự kiện (set 12 ngày từ hôm nay)
(function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 12);
    target.setHours(20, 0, 0, 0);

    function update() {
        const diff = target - new Date();
        if (diff <= 0) return;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-d').textContent = String(d).padStart(2, '0');
        document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
        document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
        document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
})();

// Scroll reveal — hiệu ứng appeared khi cuộn
document.querySelectorAll('.ev-card,.ticket').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el);
});

// Smooth scroll — cuộn mượt khi click nav links
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));


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