// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://patriciavielmag-eng.github.io',
    base: '/sancocho',
    integrations: [tailwind()],
});
