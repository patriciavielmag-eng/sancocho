/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'brand-cream': '#F2F4EB',    // Gray sand
                'brand-orange': '#FF7640',   // Orange
                'brand-green': '#074C41',    // Deep water Green
                'brand-black': '#161616',    // Pale Black
                'menu-1': '#FFE1D9',         // Peach sand
                'menu-2': '#B6A5FF',         // Purple moody
                'menu-3': '#FFA7E5',         // Pink
                'menu-4': '#C6F6B6',         // Verde Apple
                'menu-5': '#074C41',         // Deep water Green
                'menu-6': '#161616',         // Pale Black
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Space Grotesk"', 'sans-serif'],
                linear: ['"Linear Grotesk"', 'sans-serif'],
                rinter: ['"Rinter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
