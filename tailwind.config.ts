import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // neutrals (light theme)
        sand: {
          50:  '#FCF8F3', // page bg
          100: '#FCF4E5', // alt band
          200: '#F7EADB', // warm light
          300: '#DDD1C1', // borders/dividers
        },
        // text inks from the image’s dark tones
        ink: {
          900: '#23280F', // primary text
          700: '#394D41', // strong/mid
          500: '#5E706E', // muted
        },
        // blue accent (from the water)
        ocean: {
          50:  '#EAF4F9', // subtle tint / selection
          500: '#0A6F9D', // primary brand
          700: '#084E6F', // hover/active
        },
        // optional supporting tones
        driftwood: { 400: '#8F7E59' }, // tiny highlights only
        stoneish:  { 400: '#9E9E90' }, // neutral gray accents
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,.08)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
} satisfies Config
