/** Top-up Game — GameZone: Particles + auth + toast + reveal */
// Particle background
const canvas = document.createElement('canvas'); const pEl = document.getElementById('particles');
if (pEl) {
    pEl.appendChild(canvas); const ctx = canvas.getContext('2d'); canvas.width = innerWidth; canvas.height = innerHeight;
    const dots = Array.from({ length: 60 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 2 + 1, dx: (Math.random() - .5) * .5, dy: (Math.random() - .5) * .5 }));
    function draw() { ctx.clearRect(0, 0, canvas.width, canvas.height); dots.forEach(d => { d.x += d.dx; d.y += d.dy; if (d.x < 0 || d.x > canvas.width) d.dx *= -1; if (d.y < 0 || d.y > canvas.height) d.dy *= -1; ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fillStyle = 'rgba(168,85,247,.25)'; ctx.fill() }); requestAnimationFrame(draw) } draw();
    addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight })
}
function openModal() { document.getElementById('authModal').classList.add('open') }
function closeModal() { document.getElementById('authModal').classList.remove('open') }
document.getElementById('authModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal() });
function showToast() { const t = document.getElementById('toast'); t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); return false }
document.querySelectorAll('.game-card,.deal-banner').forEach(el => { el.classList.add('reveal'); new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el) });
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));
