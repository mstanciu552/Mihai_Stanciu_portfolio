module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-custom": "#f7a55f",
        "pale-blue": "#395671",
        twitter: "#55ACEE",
        facebook: "#3B5998",
        linkedin: "#007AB9",
        "gray-orange": "#FEF2E8",
      },
      spacing: {
        100: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
