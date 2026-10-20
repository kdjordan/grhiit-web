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
        "grhiit-white": "#F3F1EA",
        "grhiit-black": "#0B0B0B",
        "grhiit-black-warm": "#141414",  // Warm black for alternate sections
        "grhiit-red": "#B33A1B",
        "grhiit-red-dark": "#8E2D15",
        // Brand palette (mockups)
        obsidian: "#0B0B0B",
        graphite: "#141414",
        iron: "#1D1D1D",
        bone: "#F3F1EA",
        ember: { DEFAULT: "#B33A1B", dark: "#8E2D15" },
        oxygen: "#5C8FA3",
        "iron-ash": "#5C5C5C",
        // Gray scale - cool and warm variants
        "grhiit-gray": {
          100: "#F5F5F5",
          200: "#E5E5E5",
          600: "#5C5C5C",
          800: "#1D1D1D",
          "800-warm": "#1D1D1D",  // Warm dark for alternate sections
          900: "#141414",
        },
      },
      fontFamily: {
        // Display: Bebas Neue - razor-sharp athletic headlines (use skew for forward momentum)
        display: ['"Bebas Neue"', "Impact", "Arial Narrow", "sans-serif"],
        // Body: DM Sans - clean, modern readability
        body: ['"Inter"', "Arial", "sans-serif"],
        // Mono: JetBrains Mono - for stats/timers/ratios
        mono: ['"JetBrains Mono"', "Consolas", "monospace"],
        // Legacy aliases
        primary: ['"Bebas Neue"', "Impact", "Arial Narrow", "sans-serif"],
        secondary: ['"Inter"', "Arial", "sans-serif"],
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
        "glow-red": "0 0 30px rgba(179, 58, 27, 0.3)",
        "glow-red-lg": "0 0 60px rgba(179, 58, 27, 0.4)",
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "draw-line": "draw-line 1s ease-out forwards",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(179, 58, 27, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(179, 58, 27, 0.5)" },
        },
        "draw-line": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      // Typography plugin customization for dark brutalist theme
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#FAFAFA',
            '--tw-prose-headings': '#FAFAFA',
            '--tw-prose-lead': 'rgba(250, 250, 250, 0.8)',
            '--tw-prose-links': '#B33A1B',
            '--tw-prose-bold': '#FAFAFA',
            '--tw-prose-counters': 'rgba(250, 250, 250, 0.6)',
            '--tw-prose-bullets': '#B33A1B',
            '--tw-prose-hr': 'rgba(250, 250, 250, 0.1)',
            '--tw-prose-quotes': '#FAFAFA',
            '--tw-prose-quote-borders': '#B33A1B',
            '--tw-prose-captions': 'rgba(250, 250, 250, 0.6)',
            '--tw-prose-code': '#FAFAFA',
            '--tw-prose-pre-code': '#FAFAFA',
            '--tw-prose-pre-bg': '#0F0F0F',
            '--tw-prose-th-borders': 'rgba(250, 250, 250, 0.2)',
            '--tw-prose-td-borders': 'rgba(250, 250, 250, 0.1)',
            // Custom styling
            color: 'rgba(250, 250, 250, 0.8)',
            maxWidth: 'none',
            a: {
              color: '#B33A1B',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontFamily: '"Bebas Neue", Impact, Arial Narrow, sans-serif',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            },
            h2: {
              fontFamily: '"Bebas Neue", Impact, Arial Narrow, sans-serif',
              fontWeight: '400',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              borderBottom: '1px solid rgba(250, 250, 250, 0.1)',
              paddingBottom: '0.5em',
            },
            h3: {
              fontFamily: '"Bebas Neue", Impact, Arial Narrow, sans-serif',
              fontWeight: '400',
              textTransform: 'uppercase',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '3px',
              borderLeftColor: '#B33A1B',
              backgroundColor: 'rgba(179, 58, 27, 0.05)',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
              paddingTop: '1em',
              paddingBottom: '1em',
            },
            code: {
              fontFamily: '"JetBrains Mono", Consolas, monospace',
              backgroundColor: '#0F0F0F',
              padding: '0.25em 0.5em',
              borderRadius: '0',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#0F0F0F',
              borderRadius: '0',
              border: '1px solid rgba(250, 250, 250, 0.1)',
            },
            strong: {
              color: '#FAFAFA',
            },
            hr: {
              borderColor: 'rgba(250, 250, 250, 0.1)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
