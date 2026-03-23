import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#5b5b47',   // Brand green from logo – nav, dark sections, headings
          cream: '#faf6f0',    // Warm ivory – backgrounds, text on dark
          copper: '#c17f3e',   // Warm copper/amber – accents, CTAs, highlights
          charcoal: '#2c2c24', // Darker shade of brand green – deep backgrounds, text
          stone: '#eee8dc',    // Warm stone – page background, cards
          sage: '#7d7d65',     // Lighter shade of brand green – secondary accents, borders
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
