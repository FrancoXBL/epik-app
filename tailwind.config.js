const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      button: "20px",
      ...defaultTheme.borderRadius,
    },
    padding: {
      "16px": "16px",
      "24px": "24px",
      ...defaultTheme.padding,
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      epikYellow: "#FFD601",
      white: "#FFFFFF",
      gray: {
        1: "#F2F2F2",
        2: "#9C9C9C",
      },
      secondary: {
        normal: "#FFFFFF",
        hover: "#E5E5E5",
        icon: "#000000",
      },
      confirm: {
        normal: "#FFD601",
        hover: "#FFDD2A",
      },
      delete: {
        normal: "#FF3131",
        hover: "#FF4F4F",
        icon: "#FFFFFF",
      },
      primary: {
        100: "#FF5733",
        200: "#ff8a5f",
        300: "#fff3bf",
      },
      accent: {
        100: "#FFC300",
        200: "#916600",
      },
      text: {
        100: "#FFFFFF",
        200: "#e0e0e0",
      },
      bg: {
        100: "#1f1f1f",
        200: "#2b2b2b",
        300: "#333333",
      },
      mineshaft: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#303030",
      },
    },
    extend: {},
  },
  plugins: [],
};
