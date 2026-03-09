import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://rjt3662.github.io",
  base: "/rajatmishra.github.io/",
  outDir: "./docs",
  integrations: [tailwind()]
});