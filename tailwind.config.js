/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ✅ UPDATED: Ramp-inspired light theme colors
      colors: {
        background: "#F8F9FA",        // Light grey page background (was #0a0a0a)
        foreground: "#111827",        // Dark text (was #ededed)
        "card-bg": "#FFFFFF",         // White cards (was #171717)
        "card-hover": "#F9FAFB",      // Light grey hover (was #262626)
        primary: {
          DEFAULT: "#E4F222",         // Ramp's neon lime green (was #3b82f6 blue)
          hover: "#CFE020",           // Slightly darker on hover (was #2563eb)
          text: "#1F2937",            // Dark text for buttons on green bg
        },
        secondary: "#6B7280",         // Muted grey for secondary text
        border: "#E5E7EB",            // Light border color
      },
      // ✅ KEPT: Your existing customizations
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      minHeight: {
        '11': '44px',
      },
      minWidth: {
        '11': '44px',
      },
    },
  },
  plugins: [],
};