import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sell-tickets-mob": "url('/img/sell-tickets/hero-mobile.png')",
        "sell-tickets": "url('/img/sell-tickets/hero.png')"
      },
      colors: {
        beige: '#F6F2EB',
        focus: '#e5e2dd',
        secondary: '#001942',
        error: '#9F2532',
        errorBg: '#dec5c8',
        'button-hover': '#c8c8c8'
      },
    },
  },
  plugins: [],
};
export default config;
