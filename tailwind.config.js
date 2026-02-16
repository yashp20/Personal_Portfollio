/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        secondary: '#004e89',
        accent: '#00d9ff',
        dark: '#0a0e27',
        darker: '#050814',
        light: '#f7f7f7',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'gradient-flow': 'gradientFlow 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
