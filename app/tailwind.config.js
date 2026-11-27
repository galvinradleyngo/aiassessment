/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SALT palette: the app's "indigo" accent maps to the Ateneo SALT logo colors.
        // 500 = logo blue (#5179b7), 600 = logo navy (#37416b).
        indigo: {
          50: '#f0f4fa',
          100: '#dfe7f3',
          200: '#bfcee7',
          300: '#97b0d5',
          400: '#6f93c8',
          500: '#5179b7',
          600: '#37416b',
          700: '#2e3759',
          800: '#252c47',
          900: '#1c2136',
          950: '#12162a',
        },
      },
    },
  },
  plugins: [],
}