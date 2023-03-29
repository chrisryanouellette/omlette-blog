const {
  omletteDesignSystemPlugin,
  omletteTailwindTheme,
} = require("@ouellettec/design-system/build/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ouellettec/design-system/build/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...omletteTailwindTheme,
    },
  },
  plugins: [omletteDesignSystemPlugin],
};
