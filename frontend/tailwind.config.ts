import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      open: ['var(--font-open-sans)', 'sans-serif'],
      bebas: ['var(--font-bebas)', 'sans-serif'],
      calsans: ['"Cal Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a66c2",     // ana renk (örneğin mavi)
          light: "#60A5FA",       // açık tonu
          dark: "#2563EB",        // koyu tonu
        },
      }, 
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

export default config
