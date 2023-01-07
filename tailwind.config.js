module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Lato"
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px"
    },
    extend: {
      colors: {
        primary: "#2122353",
        secondary: "#485D68",
        accent: {
          primary: "#9C69E2",
          primary_hover: "#9059DB",
          secondary: "#F063B8",
          secondary_hover: "#E350A9",
          tertiary: "#68C9BA"
        }
      }
    },
  },
  plugins: [],
}
