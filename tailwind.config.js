/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackgroundColor": '#EEF5FF',
        "columnBackgroundColor": '#176B87'
      }
    },
  },
  plugins: [],
}

