import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


export default defineConfig({
  site: "https://tecnowoke.github.io",
  base: "/TilaSite/",
  output: "static",
  integrations: [react()],
});
