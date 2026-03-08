/** Fitness — IRONFIT: Scroll reveal + smooth scroll */
document.querySelectorAll('.program-card,.trainer-card,.join-box').forEach(el => { el.classList.add('reveal'); new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el) });
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