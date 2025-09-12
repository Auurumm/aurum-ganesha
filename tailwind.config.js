module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-text-color": "var(--body-text-color)",
        "cpbg-black": "var(--cpbg-black)",
        "cpbg-white": "var(--cpbg-white)",
        cpblack: "var(--cpblack)",
        "cpbody-seconary-text": "var(--cpbody-seconary-text)",
        "cpbody-text": "var(--cpbody-text)",
        cpstroke: "var(--cpstroke)",
        cpwhite: "var(--cpwhite)",
        gradient: "var(--gradient)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-text": "var(--body-text-font-family)",
        "button-text": "var(--button-text-font-family)",
        "CP-body-4": "var(--CP-body-4-font-family)",
        "CP-body1": "var(--CP-body1-font-family)",
        "CP-body2": "var(--CP-body2-font-family)",
        "CP-body3": "var(--CP-body3-font-family)",
        "CP-btn-text": "var(--CP-btn-text-font-family)",
        "CP-h1": "var(--CP-h1-font-family)",
        "CP-h2": "var(--CP-h2-font-family)",
        "CP-h3": "var(--CP-h3-font-family)",
        h2: "var(--h2-font-family)",
        h4: "var(--h4-font-family)",
        "list-text": "var(--list-text-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "shadow-1": "var(--shadow-1)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
