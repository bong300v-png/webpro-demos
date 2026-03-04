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
