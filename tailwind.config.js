module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./assets/js/**/*.js"],
  daisyui: {
    themes: [
      {
        Theme: {
          primary: "#AAAAAA",
          secondary: "#FFFFFF",
          accent: "#CCCCCC",
          neutral: "#2E2E2E",
          "base-100": "#555577",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#AAAAAA",
        "primary-dark": "#999999",
        secondary: "#FFFFFF",
        accent: "#CCCCCC",
        neutral: "#2E2E2E",
        "base-100": "#555577",
      },
      boxShadow: {
        sharp: "0px 2px 0px 0px rgba(0, 0, 0, 0.75)",
        classic: `
          inset 2px -2px 0px #3A3A43,
          inset -2px 2px 0px #FFFFFF,
          0px 0px 0px 1px #000000
        `,
        "classic-dark": `
        inset 3px -2px 0px #404040,
        inset -2px 2px 0px #404040,
        0px 0px 0px 1px #000000
      `,
        "classic-in": `
        inset 2px -2px 0px #FFFFFF,
        inset -2px 2px 0px #3A3A43,
        inset 3px 3px 1px #000000,
        inset -3px -3px 1px #000000
      `,
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "fade-in-delay": "fadeIn 1s ease-out 0.3s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundOpacity: {
        80: "0.8",
        90: "0.9",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
    },
  },
  plugins: [require("daisyui")],
};
