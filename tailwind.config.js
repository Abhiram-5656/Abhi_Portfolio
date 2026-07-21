/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0B',
        card: '#111827',
        accent: '#3B82F6',
        secondary: '#06B6D4',
        muted: '#9CA3AF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xl2: '16px',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        pulse2: {
          '0%': { boxShadow: '0 0 0 0 rgba(34,197,94,.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(34,197,94,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(34,197,94,0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'floaty-slow': 'floaty 9s ease-in-out infinite',
        blink: 'blink 1s steps(2) infinite',
        pulse2: 'pulse2 2s infinite',
      },
    },
  },
  plugins: [],
}
