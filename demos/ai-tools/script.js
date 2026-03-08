/** AI Tools — NeuraTech: Modal, Toast, Console demo, Matrix rain + scroll reveal + counter */

// ── Modal — mở/đóng form đăng ký/đăng nhập ──
function openModal(t) { document.getElementById('authModal').classList.add('open'); switchTab(t || 'login') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
function switchTab(t) { document.querySelectorAll('.modal__tab').forEach((b, i) => b.classList.toggle('active', (t === 'login' && i === 0) || (t === 'register' && i === 1))); document.getElementById('loginForm').classList.toggle('hidden', t !== 'login'); document.getElementById('registerForm').classList.toggle('hidden', t !== 'register') }
document.getElementById('authModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });

// ── Toast — thông báo tạm ──
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }

// ── Console demo — giả lập chạy AI ──
function runDemo() {
    const output = document.getElementById('consoleOutput');
    output.innerHTML = '<span class="cyan">▶</span> Đang xử lý...';
    setTimeout(() => {
        output.innerHTML = `<span class="green">✓</span> Kết quả từ GPT-5 Turbo:\n\n<span class="dim">───────────────────────────</span>\nXin chào! Đây là demo AI Console.\nTính năng đầy đủ sẽ có trong phiên bản chính thức.\n<span class="dim">───────────────────────────</span>\n\n<span class="cyan">Tokens:</span> 128 · <span class="cyan">Latency:</span> 0.3s`;
    }, 1500);
}

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