/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Customblue: '#243c5a',
        customBlue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
      }
    },
  },
  plugins: [],
}
