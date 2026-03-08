/** E-Commerce — VivaMart: Countdown timer + scroll reveal */
// Countdown timer cho flash sale
function startCountdown() {
    const h = document.getElementById('hours'), m = document.getElementById('minutes'), s = document.getElementById('seconds');
    if (!h) return;
    let total = 8 * 3600 + 45 * 60 + 23; // 8h45m23s
    setInterval(() => {
        if (total <= 0) return;
        total--;
        h.textContent = String(Math.floor(total / 3600)).padStart(2, '0');
        m.textContent = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
        s.textContent = String(total % 60).padStart(2, '0');
    }, 1000);
}
startCountdown();

// Scroll reveal
document.querySelectorAll('.cat-card,.product-card,.flash-banner').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); }, { threshold: 0.1 }).observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); }));

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