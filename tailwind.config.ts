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
          olive: '#5b5b47',  // Main background color
          cream: '#fffff0',  // Accent color
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
}
export default config
