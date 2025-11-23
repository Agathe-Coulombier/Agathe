import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#0a2342', // Deep navy
  				dark: '#102a43',
  				light: '#1b3a5b',
  			},
  			accent: {
  				DEFAULT: '#ff6f3c', // Vibrant orange
  				light: '#ff9a3c',
  			},
  			secondary: {
  				DEFAULT: '#3a6ea5', // Soft blue
  				light: '#b3cde0',
  			},
  			neutral: {
  				DEFAULT: '#f4f4f4', // Off-white
  			},
  			sand: {
  				'50': '#FCF8F3',
  				'100': '#FCF4E5',
  				'200': '#F7EADB',
  				'300': '#DDD1C1'
  			},
  			ink: {
  				'500': '#5E706E',
  				'700': '#394D41',
  				'900': '#23280F'
  			},
  			ocean: {
  				'50': '#EAF4F9',
  				'500': '#0A6F9D',
  				'700': '#084E6F'
  			},
  			driftwood: {
  				'400': '#8F7E59'
  			},
  			stoneish: {
  				'400': '#9E9E90'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			card: '0 8px 24px rgba(0,0,0,.08)'
  		},
  		borderRadius: {
  			'2xl': '1rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config
