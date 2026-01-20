/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0B1220',
          white: '#111827',
          accent: '#3B82F6',
          green: '#22D3EE',
        },
        text: {
          primary: '#E5E7EB',
          secondary: '#9CA3AF',
        },
        border: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
