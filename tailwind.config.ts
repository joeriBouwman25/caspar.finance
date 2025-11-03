export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "840px",
        lg: "1280px",
        xl: "1500px",
      },
      colors: {
        primary: {
          50: "#f7efe2",
          100: "#efe0c6",
          200: "#e0c190",
          300: "#d1a15a",
          400: "#c89239",
          500: "#be9d68", // brand gold / headings
          600: "#9c7d4f",
          700: "#755d3b",
          800: "#4e3d26",
          900: "#271e13",
        },
        brand: {
          muted: "#8b7355", // darker for better contrast
        },
        highlight: "#f6f2c0",
        link: "#f6f2c0", // always use dark theme link color
        "link-dark": "#f6f2c0",
        surface: "#3c3c3c", // always use dark theme surface
        "surface-dark": "#3c3c3c",
        bg: "#1e1e1e", // always use dark theme background
        "bg-dark": "#1e1e1e",
        header: "#2f2f2f",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        btn: "0 2px 6px -1px rgba(0,0,0,0.25)",
      },
      transitionDuration: {
        long: "1500ms",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
