// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: if deploying to https://<user>.github.io/<repo>/ set `base` to '/<repo>'.
// For a user/organization page (https://<user>.github.io) or a custom domain, keep base '/'.
// Override at build time with SITE and BASE env vars if needed.
export default defineConfig({
  site: process.env.SITE ?? 'https://richi9pp.github.io',
  base: process.env.BASE ?? '/PatrykPiasecki',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
