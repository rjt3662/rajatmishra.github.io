import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://rjt3662.github.io",
  // repository moved to a user site; assets are now served from root
  base: "/",
  outDir: "./docs",
  integrations: [tailwind()]
});