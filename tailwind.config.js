/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: '#FFFFFC',      // Background
        matcha: '#84A07C',     // Primary Button
        matchaDark: '#708E67', // Primary Button Event
        copper: '#D4A373',     // Secondary Button
        copperDark: '#CA8F53', // Secondary Button Event
        terracotta: '#E07A5F', // Hover State
        gunmetal: '#1F2937',   // Header and Footer
        linkBlue: '#5985C0'    // Links
      },
    },
  },
  plugins: [],
};
