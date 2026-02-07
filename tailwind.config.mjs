/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'brand-cream': '#F8F5F2',
                'brand-orange': '#FF6B35',
                'menu-1': '#F2ECE4',
                'menu-2': '#FFE4D9',
                'menu-3': '#C6F6B6',
                'menu-4': '#BFA6FF',
                'menu-5': '#FF7F50',
                'menu-6': '#1A1A1A',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Space Grotesk"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
