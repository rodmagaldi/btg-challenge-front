/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      purple: {
        light: "#c4b5fd",
        dark: "#655CC9",
      },
    },
  },
  plugins: [],
}

