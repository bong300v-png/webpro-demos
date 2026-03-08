---
description: Fix all demo pages - modals, SEO, loginForm IDs, and deploy
---

// turbo-all

## Quy trình fix demo pages

### 1. Fix loginForm IDs cho 4 trang simple modal
- topup-game, proxy-tool, media-podcast, key-phan-mem
- Thêm `id="loginForm"` và `id="registerForm"` vào form trong modal

### 2. Thêm SEO OG tags cho tất cả 22 trang
- Thêm `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:type">`
- Thêm `<meta name="robots" content="index, follow">`

### 3. Stage và commit
```bash
git add -A
```

```bash
git status --short
```

```bash
git commit -m "fix: loginForm IDs + OG tags + robots meta for all demos"
```

### 4. Push deploy
```bash
git push origin master
```

### 5. Verify
- Cloudflare Pages auto-build sau push
- URL: https://webpro-demos.pages.dev
