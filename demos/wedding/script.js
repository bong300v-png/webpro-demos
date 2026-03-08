/* Wedding — Script: modal, toast, countdown, scroll reveal */

// Modal — RSVP form
function openModal() { document.getElementById('authModal').classList.add('open') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
document.getElementById('authModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });

// Toast — thông báo xác nhận
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); closeModal(); return false }

// Countdown — đếm ngược tới ngày cưới 20/04/2026
(function initCountdown() {
    const target = new Date('2026-04-20T10:00:00+07:00');

    function update() {
        const diff = target - new Date();
        if (diff <= 0) {
            document.getElementById('cd-d').textContent = '🎊';
            document.getElementById('cd-h').textContent = '💕';
            document.getElementById('cd-m').textContent = '💍';
            document.getElementById('cd-s').textContent = '✨';
            return;
        }
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

// Scroll reveal — hiệu ứng hiện dần khi cuộn
document.querySelectorAll('.timeline__item,.event-card,.gallery-item').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));
