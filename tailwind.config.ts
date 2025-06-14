import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Add custom animations, colors, etc. for a unique feel
      colors: {
        primary: '#1E3A8A', // Example: A deep blue
        secondary: '#3B82F6', // Example: A lighter blue
        accent: '#F59E0B',    // Example: An amber accent
        darkBg: '#111827', // Dark background
        lightText: '#F3F4F6',
        darkText: '#1F2937',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #3B82F6, 0 0 10px #3B82F6' },
          '50%': { boxShadow: '0 0 20px #3B82F6, 0 0 30px #3B82F6' }
        }
      }
    },
  },
  plugins: [],
}
export default config
