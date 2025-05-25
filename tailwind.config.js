/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clean-white": "#FFFFFF",
        "deep-forest": "#1A3A3A", // Dark green for text
        "leaf-green": "#4A7A46", // Accent green
        "sage-green": "#8BC34A", // Light accent green
        "stone-grey": "#F0F0F0", // Light grey for backgrounds
        "charcoal-grey": "#555555", // For less important text
      },
      fontFamily: {
        rymaneco: ["RymanEco", "cursive"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}

