const { Font } = require("three/examples/jsm/Addons.js");
const { color } = require("three/tsl");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./src/**/*.js"],
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
      typography: ({ theme }) => ({
        default: {
          css: {
            "--tw-prose-body": theme("colors.gray.900"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-lead": theme("colors.gray.800"),
            "--tw-prose-links": theme("colors.blue.700"),
            "--tw-prose-bold": theme("colors.gray.900"),
            "--tw-prose-counters": theme("colors.gray.600"),
            "--tw-prose-bullets": theme("colors.gray.700"),
            "--tw-prose-hr": theme("colors.gray.300"),
            "--tw-prose-quotes": theme("colors.gray.900"),
            "--tw-prose-quote-borders": theme("colors.gray.300"),
            "--tw-prose-captions": theme("colors.gray.700"),
            "--tw-prose-code": theme("colors.gray.800"),
            "--tw-prose-pre-code": theme("colors.gray.100"),
            "--tw-prose-pre-bg": theme("colors.gray.900"),
            "--tw-prose-th-borders": theme("colors.gray.300"),
            "--tw-prose-td-borders": theme("colors.gray.200"),
            "--tw-prose-invert-body": theme("colors.gray.100"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.gray.400"),
            "--tw-prose-invert-links": theme("colors.blue.300"),
            "--tw-prose-invert-bold": theme("colors.gray.100"),
            "--tw-prose-invert-counters": theme("colors.gray.400"),
            "--tw-prose-invert-bullets": theme("colors.gray.600"),
            "--tw-prose-invert-hr": theme("colors.gray.700"),
            "--tw-prose-invert-quotes": theme("colors.gray.100"),
            "--tw-prose-invert-quote-borders": theme("colors.gray.700"),
            "--tw-prose-invert-captions": theme("colors.gray.400"),
            "--tw-prose-invert-code": theme("colors.gray.100"),
            "--tw-prose-invert-pre-code": theme("colors.gray.300"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.gray.600"),
            "--tw-prose-invert-td-borders": theme("colors.gray.700"),
            maxWidth: "150ch",
            "b, strong": {
              fontWeight: "normal",
              color: theme("colors.base-100"),
            },
            pre: {
              borderRadius: "0",
              overflowX: "auto",
              padding: theme("spacing.4"),
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.100"),
              border: `1px solid ${theme("colors.gray.300")}`,
            },
          },
        },
      }),
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
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
