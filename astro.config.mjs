// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://navisasabina.github.io',
  base: '/navisasabina.portofolio',
  // Pages are built as abita.html, planet-zeta.html, ... so old links keep working.
  build: { format: 'file' },
});
