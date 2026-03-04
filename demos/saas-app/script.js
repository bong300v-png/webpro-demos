/** SaaS App — CloudSync: Scroll reveal + navbar */
window.addEventListener('scroll', () => { document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 50) });
document.querySelectorAll('.feature-card,.price-card,.testi-card,.cta-box').forEach(el => { el.classList.add('reveal'); new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add('visible') }, { threshold: .15 }).observe(el) });
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' }) }));
