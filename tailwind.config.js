/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pfPrimary: "#af2676",
        pfPrimaryTransparent: "#af267650",
        pfSecondary: "#441b45",
        pfBg: "#100e24",
        pfBgTransparent: "#100e2480",
        pfDark: "#0d0b1c",
      },
    },
  },
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
