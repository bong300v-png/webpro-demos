/** AI Tools — NeuraTech: Matrix rain + scroll reveal + counter */

// ── Matrix Rain effect trên canvas ──
const canvas = document.getElementById('matrix-rain');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ニホンゴ01アイウエオカキクケコ∞∑∏√∂∆ABCDEF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(2, 2, 8, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ffd5';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ── Scroll reveal ──
document.querySelectorAll('.tool-card,.how-step,.price-card').forEach(el => {
    el.classList.add('reveal');
    new IntersectionObserver(([e]) => {
        if (e.isIntersecting) e.target.classList.add('visible');
    }, { threshold: 0.15 }).observe(el);
});

// ── Counter animation ──
const counters = document.querySelectorAll('[data-target]');
let started = false;
new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !started) {
        started = true;
        counters.forEach(el => {
            const target = parseInt(el.dataset.target);
            const dur = 1500, start = performance.now();
            (function update(now) {
                const p = Math.min((now - start) / dur, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(update);
            })(start);
        });
    }
}, { threshold: 0.3 }).observe(document.querySelector('.hero__stats-row'));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }); })
);
