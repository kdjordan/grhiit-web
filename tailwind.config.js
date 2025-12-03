/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Core brutalist palette
        "grhiit-white": "#FAFAFA",
        "grhiit-black": "#0A0A0A",
        "grhiit-black-warm": "#141210",  // Warm black for alternate sections
        "grhiit-red": "#E8110F",
        "grhiit-red-dark": "#B80D0B",
        // Gray scale - cool and warm variants
        "grhiit-gray": {
          100: "#F5F5F5",
          200: "#E5E5E5",
          600: "#525252",
          800: "#1A1A1A",
          "800-warm": "#1F1C1A",  // Warm dark for alternate sections
          900: "#0F0F0F",
        },
      },
      fontFamily: {
        // Display: Barlow Condensed - aggressive, forward-leaning (use italic for kinetic energy)
        display: ['"Barlow Condensed"', "Arial Narrow", "sans-serif"],
        // Body: DM Sans - clean, modern readability
        body: ['"DM Sans"', "Arial", "sans-serif"],
        // Mono: JetBrains Mono - for stats/timers/ratios
        mono: ['"JetBrains Mono"', "Consolas", "monospace"],
        // Legacy aliases
        primary: ['"Barlow Condensed"', "Arial Narrow", "sans-serif"],
        secondary: ['"DM Sans"', "Arial", "sans-serif"],
      },
      letterSpacing: {
        "tighter-brutal": "-0.04em",
        "tight-brutal": "-0.02em",
      },
      lineHeight: {
        "brutal": "0.85",
        "brutal-tight": "0.9",
      },
      boxShadow: {
        "glow-red": "0 0 30px rgba(232, 17, 15, 0.3)",
        "glow-red-lg": "0 0 60px rgba(232, 17, 15, 0.4)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "draw-line": "draw-line 1s ease-out forwards",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232, 17, 15, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(232, 17, 15, 0.5)" },
        },
        "draw-line": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
