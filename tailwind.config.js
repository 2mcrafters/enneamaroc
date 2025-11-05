/** @type {import('tailwindcss').Config} */
export default {
  // Ensure Tailwind utilities win over legacy/global CSS when specificity ties
  // This prevents rules like `.h1` from overriding utility classes
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
