import { defineConfig } from 'vite';
import { resolve } from 'path';
import { globSync } from 'glob';

/**
 * Auto-discover tất cả file index.html trong thư mục demos/
 * Mỗi demo folder chứa 1 index.html riêng → Vite build thành multi-page
 * Compatible với Cloudflare Pages (output: dist/)
 */
function getInputFiles() {
  // Tìm tất cả index.html: root + demos/**/index.html
  const demoPages = globSync('demos/**/index.html');
  
  const input = {
    main: resolve(__dirname, 'index.html'), // Gallery chính
  };

  // Map từng demo thành entry point
  demoPages.forEach((page) => {
    // demos/agency-landing/index.html → agency-landing
    const name = page.split('/')[1] || page.split('\\')[1];
    if (name) {
      input[name] = resolve(__dirname, page);
    }
  });

  return input;
}

export default defineConfig({
  // Build config cho Cloudflare Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getInputFiles(),
    },
    // Tối ưu assets
    assetsInlineLimit: 4096, // Inline files < 4KB
    cssCodeSplit: true,      // Mỗi demo có CSS riêng
  },
  // Cho phép serve files từ thư mục gốc
  publicDir: 'public',
});
