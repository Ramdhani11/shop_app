/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#055429",
        secondary: "#e3ffdc",
        grey: "#5a645f",
        smoothGrey: "#9d9d9d",
        myBlack: "#04170d",
        lightWhite: "#fafafa",
        borderColor: "#f8f8f9",
      },
    },
  },
  plugins: [],
};
