/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 4s linear ',
      'safelist': ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00FF00",
        secondary: "#1b1c1d",
        light: "#323334",
        bgicon: "#161617",
        yellow: "#FBBA29",
        dark: "#161617",
        bordercolor:"#2c2d2e"
      },
      width: {
        "100vw": "100vw",
      },
      boxShadow: {
        custom: "0px 0px 43px -4px rgba(255, 255, 255, 0.59)",
      },
    },
    variants: {
      extend: {
        boxShadow: ["hover"],
      },
      transform: {
        'rotate-180': 'rotate(180deg)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
