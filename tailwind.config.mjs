/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'brand-cream': '#FBF7EE',    // True DNA Cream
                'brand-orange': '#FF6B35',   // DNA Orange
                'brand-black': '#1A1A1A',    // DNA Carbon Black
                'menu-1': '#F3EDE2',         // Block 1: Beige
                'menu-2': '#FCE6EA',         // Block 2: Pale Pink
                'menu-3': '#A3F7A3',         // Block 3: Mint Green
                'menu-4': '#BCB0FF',         // Block 4: Lavender
                'menu-5': '#FF6B35',         // Block 5: Orange
                'menu-6': '#1A1A1A',         // Block 6: Black
            },
            fontFamily: {
                display: ['Rinter', 'serif'],
                sans: ['"Linear Grotesk"', 'Inter', 'sans-serif'],
                mono: ['monospace'],
            },
            borderRadius: {
                '4xl': '32px',
            }
        },
    },
    plugins: [],
}
