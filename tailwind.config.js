/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  safelist: [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'text-red-500',
    'text-yellow-500',
    'text-green-500',
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
  ],
  plugins: [],
};