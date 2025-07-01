/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
        'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
        'poppins': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'healing-blue': '#2563EB',
        'compassion-sage': '#16A34A',
        'vitality-amber': '#F59E0B',
        'soft-white': '#FEFEFE',
        'gentle-gray': '#D1D5DB',
      },
    },
  },
  plugins: [],
};