/**
 * Gallery — WebPro Demo Showcase
 * Render demo cards, filter by category, animated counter
 */

// ═══════════════════════════════════════════════════════
// DATA — 20 demos, mỗi ngành 1 demo với style & vibe riêng
// ═══════════════════════════════════════════════════════
const demos = [
    {
        id: 1, slug: 'doanh-nghiep',
        title: 'Doanh Nghiệp',
        desc: 'Website doanh nghiệp cao cấp — Navy & Gold, serif typography, thanh lịch và chuyên nghiệp.',
        category: 'business',
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #c9a84c 100%)',
        tags: ['Parallax', 'Scroll Reveal', 'Elegant'],
        status: 'live',
    },
    {
        id: 2, slug: 'saas-app',
        title: 'SaaS / App',
        desc: 'Landing page SaaS hiện đại — Gradient purple-blue, glassmorphism, interactive UI.',
        category: 'saas',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        tags: ['Glassmorphism', 'Gradient', 'Modern'],
        status: 'live',
    },
    {
        id: 3, slug: 'ai-tools',
        title: 'AI Tools',
        desc: 'Nền tảng AI/ML — Neon cyan trên nền tối, hiệu ứng typing, futuristic vibes.',
        category: 'tech',
        gradient: 'linear-gradient(135deg, #0d0d0d 0%, #0a192f 40%, #00d4aa 100%)',
        tags: ['Futuristic', 'Neon', 'AI Effect'],
        status: 'live',
    },
    {
        id: 4, slug: 'ecommerce',
        title: 'E-Commerce',
        desc: 'Cửa hàng trực tuyến — Coral & Warm tones, product showcase, clean grid layout.',
        category: 'ecommerce',
        gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffa07a 50%, #ffe66d 100%)',
        tags: ['Product Grid', 'Cart UI', 'Vibrant'],
        status: 'live',
    },
    {
        id: 5, slug: 'tai-khoan-so',
        title: 'Tài Khoản Số',
        desc: 'Fintech & Digital — Blue-green gradients, data visualization, trustworthy design.',
        category: 'fintech',
        gradient: 'linear-gradient(135deg, #00b4d8 0%, #0077b6 50%, #03045e 100%)',
        tags: ['Fintech', 'Data-driven', 'Clean'],
        status: 'live',
    },
    {
        id: 6, slug: 'key-phan-mem',
        title: 'Key Phần Mềm',
        desc: 'Software license — Dark theme, terminal aesthetic, code-inspired UI elements.',
        category: 'tech',
        gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 40%, #00ff88 100%)',
        tags: ['Terminal', 'Dark Mode', 'Tech'],
        status: 'live',
    },
    {
        id: 7, slug: 'clone-mxh',
        title: 'Clone MXH',
        desc: 'Social media vibe — Colorful cards, Instagram/TikTok feel, modern interactions.',
        category: 'social',
        gradient: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        tags: ['Social', 'Colorful', 'Card-based'],
        status: 'live',
    },
    {
        id: 8, slug: 'topup-game',
        title: 'Top-up / Game',
        desc: 'Gaming aesthetic — Purple neon, pixel accents, dynamic animations, esport energy.',
        category: 'gaming',
        gradient: 'linear-gradient(135deg, #2d1b69 0%, #6c3fa0 40%, #ff6ec7 100%)',
        tags: ['Gaming', 'Neon', 'Dynamic'],
        status: 'live',
    },
    {
        id: 9, slug: 'proxy-tool',
        title: 'Proxy & Tool',
        desc: 'Cyberpunk hacker — Green matrix trên nền đen, tech lines, dashboard feel.',
        category: 'tech',
        gradient: 'linear-gradient(135deg, #000000 0%, #0a0a0a 40%, #00ff41 100%)',
        tags: ['Cyberpunk', 'Matrix', 'Dark'],
        status: 'live',
    },
    {
        id: 10, slug: 'spa-beauty',
        title: 'Spa / Beauty',
        desc: 'Soft pastels & organic — Rose gold, elegant serif, peaceful atmosphere, luxury feel.',
        category: 'beauty',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 40%, #e8a0bf 100%)',
        tags: ['Pastel', 'Elegant', 'Organic'],
        status: 'live',
    },
    {
        id: 11, slug: 'fitness-coaching',
        title: 'Fitness / Coaching',
        desc: 'Bold & energetic — Red-orange, strong typography, powerful imagery, motivation.',
        category: 'fitness',
        gradient: 'linear-gradient(135deg, #eb3349 0%, #f45c43 50%, #f9a825 100%)',
        tags: ['Bold', 'Energetic', 'Strong'],
        status: 'live',
    },
    {
        id: 12, slug: 'khoa-hoc',
        title: 'Khoá Học',
        desc: 'Education platform — Warm blue-yellow, friendly UX, course cards, progress tracking.',
        category: 'education',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)',
        tags: ['Education', 'Friendly', 'Course'],
        status: 'live',
    },
    {
        id: 13, slug: 'dich-vu',
        title: 'Dịch Vụ',
        desc: 'Professional services — Teal & slate, clean lines, service-oriented, business.',
        category: 'business',
        gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        tags: ['Professional', 'Clean', 'Service'],
        status: 'live',
    },
    {
        id: 14, slug: 'healthcare',
        title: 'Healthcare',
        desc: 'Medical & Clinic — Clean white-blue, trustworthy, minimal, appointment booking.',
        category: 'health',
        gradient: 'linear-gradient(135deg, #e0f7fa 0%, #4dd0e1 50%, #00838f 100%)',
        tags: ['Medical', 'Clean', 'Trustworthy'],
        status: 'live',
    },
    {
        id: 15, slug: 'food-restaurant',
        title: 'Food / Restaurant',
        desc: 'Fine dining — Warm appetizing colors, food photography, cozy atmosphere, menu design.',
        category: 'food',
        gradient: 'linear-gradient(135deg, #3e2723 0%, #8d6e63 40%, #ff8a65 100%)',
        tags: ['Warm', 'Appetizing', 'Cozy'],
        status: 'live',
    },
    {
        id: 16, slug: 'creator-kol',
        title: 'Creator / KOL',
        desc: 'Influencer vibe — Trendy pink gradient, bold typography, personal branding, social proof.',
        category: 'creative',
        gradient: 'linear-gradient(135deg, #ff0099 0%, #ff6600 50%, #ffcc00 100%)',
        tags: ['Trendy', 'Bold', 'Personal'],
        status: 'live',
    },
    {
        id: 17, slug: 'media-podcast',
        title: 'Media / Podcast',
        desc: 'Audio visual — Dark purple, sound wave effects, episode cards, audio player UI.',
        category: 'media',
        gradient: 'linear-gradient(135deg, #1a0533 0%, #4a148c 40%, #e040fb 100%)',
        tags: ['Audio', 'Dark', 'Waveform'],
        status: 'live',
    },
    {
        id: 18, slug: 'su-kien',
        title: 'Sự Kiện',
        desc: 'Event & Conference — Dynamic countdown, festive colors, ticket booking, schedule.',
        category: 'event',
        gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 50%, #ff6f61 100%)',
        tags: ['Event', 'Countdown', 'Festive'],
        status: 'live',
    },
    {
        id: 19, slug: 'gaming-esport',
        title: 'Gaming / Esport',
        desc: 'Competitive gaming — Aggressive red-black, angular shapes, esport tournament feel.',
        category: 'gaming',
        gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 40%, #ff0000 80%, #ff4444 100%)',
        tags: ['Aggressive', 'Angular', 'Competitive'],
        status: 'live',
    },
    {
        id: 20, slug: 'custom-shop',
        title: 'Custom Shop',
        desc: 'Artisan handcraft — Earth tones, organic textures, unique boutique experience.',
        category: 'ecommerce',
        gradient: 'linear-gradient(135deg, #4a3728 0%, #8b7355 40%, #c9b89e 70%, #e8d5b7 100%)',
        tags: ['Artisan', 'Earth Tone', 'Boutique'],
        status: 'live',
    },
    {
        id: 21, slug: 'wedding',
        title: 'Wedding',
        desc: 'Thiệp cưới online — Rose gold, romantic serif, countdown, timeline story, RSVP form.',
        category: 'event',
        gradient: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 30%, #c0626a 70%, #b08d57 100%)',
        tags: ['Romantic', 'Countdown', 'RSVP'],
        status: 'live',
    },
    {
        id: 22, slug: 'wedding-decor',
        title: 'Wedding Decor',
        desc: 'Dịch vụ decor cưới trend — Cổng hoa, bàn tiệc, backdrop, gia tiệc, concept design.',
        category: 'creative',
        gradient: 'linear-gradient(135deg, #a8d5a2 0%, #6b8e6b 40%, #f0ece4 70%, #d4a574 100%)',
        tags: ['Trending', 'Decor', 'Organic'],
        status: 'live',
    },
];

// ═══════════════════════════════════════════════════════
// RENDER — Tạo demo cards vào grid
// ═══════════════════════════════════════════════════════
const grid = document.getElementById('demos-grid');
const emptyState = document.getElementById('demos-empty');

/** Tạo HTML cho 1 demo card */
function createCard(demo) {
    // Xác định link: nếu live thì link vào demo, nếu soon thì # 
    const href = demo.status === 'live' ? `/demos/${demo.slug}/` : '#';
    const statusHtml = demo.status === 'live'
        ? '<span class="demo-card__status demo-card__status--live">● Live</span>'
        : '<span class="demo-card__status demo-card__status--soon">Sắp ra mắt</span>';

    return `
    <a class="demo-card" href="${href}" data-category="${demo.category}" ${demo.status !== 'live' ? 'onclick="event.preventDefault()"' : ''}>
      <div class="demo-card__preview">
        <div class="demo-card__gradient" style="background: ${demo.gradient};"></div>
        <span class="demo-card__tag">${demo.title}</span>
        <span class="demo-card__number">${String(demo.id).padStart(2, '0')}</span>
      </div>
      <div class="demo-card__body">
        <h3 class="demo-card__title">${demo.title}</h3>
        <p class="demo-card__desc">${demo.desc}</p>
        <div class="demo-card__tags">
          ${demo.tags.map(t => `<span class="demo-card__tech">${t}</span>`).join('')}
        </div>
        ${statusHtml}
      </div>
      ${demo.status === 'live' ? `
        <div class="demo-card__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      ` : ''}
    </a>
  `;
}

/** Render tất cả cards */
function renderCards(filter = 'all') {
    const filtered = filter === 'all' ? demos : demos.filter(d => d.category === filter);
    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map(createCard).join('');
}

// Render lần đầu
renderCards();

// ═══════════════════════════════════════════════════════
// FILTER — Click vào category để lọc
// ═══════════════════════════════════════════════════════
const filterBar = document.getElementById('filter-bar');

// Cập nhật count cho mỗi filter
function updateCounts() {
    const countAll = document.getElementById('count-all');
    if (countAll) countAll.textContent = demos.length;

    // Đếm theo category
    const cats = {};
    demos.forEach(d => { cats[d.category] = (cats[d.category] || 0) + 1; });

    // Map filter value → categories
    const filterMap = {
        'business': ['business'],
        'ecommerce': ['ecommerce'],
        'saas': ['saas', 'tech'],
        'creative': ['creative', 'social', 'media'],
        'specialized': ['beauty', 'fitness', 'education', 'health', 'food', 'event', 'gaming', 'fintech'],
    };

    Object.entries(filterMap).forEach(([key, categories]) => {
        const el = document.getElementById(`count-${key}`);
        if (el) {
            el.textContent = categories.reduce((sum, c) => sum + (cats[c] || 0), 0);
        }
    });
}
updateCounts();

// Filter click handler
filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Cập nhật active state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Map filter button → actual categories
    const filterMap = {
        'all': null,
        'business': ['business'],
        'ecommerce': ['ecommerce'],
        'saas': ['saas', 'tech'],
        'creative': ['creative', 'social', 'media'],
        'specialized': ['beauty', 'fitness', 'education', 'health', 'food', 'event', 'gaming', 'fintech'],
    };

    const categories = filterMap[filter];
    if (!categories) {
        renderCards('all');
    } else {
        const filtered = demos.filter(d => categories.includes(d.category));
        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            grid.innerHTML = filtered.map(createCard).join('');
        }
    }

    // Re-init Lucide icons cho cards mới render
    if (window.lucide) lucide.createIcons();
});

// ═══════════════════════════════════════════════════════
// COUNTER ANIMATION — Số đếm lên ở hero
// ═══════════════════════════════════════════════════════
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Easing: ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);

            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }
        requestAnimationFrame(update);
    });
}

// Trigger counter khi hero visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

heroObserver.observe(document.getElementById('hero'));

// ═══════════════════════════════════════════════════════
// INIT — Lucide icons
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();
});
