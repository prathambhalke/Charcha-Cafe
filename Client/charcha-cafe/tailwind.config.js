import daisyUi from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#9f86b0', // Replace with the exact hex if necessary
      },
    },
  },
  plugins: [daisyUi],
}

