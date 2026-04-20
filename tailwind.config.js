/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FA",
        foreground: "#111827",
        "card-bg": "#FFFFFF",
        "card-hover": "#F9FAFB",
        primary: "#E4F222",
        "primary-hover": "#CFE020",
        "primary-text": "#1F2937",
        secondary: "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      minHeight: {
        "11": "44px",
      },
      minWidth: {
        "11": "44px",
      },
    },
  },
  plugins: [],
};