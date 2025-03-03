import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        mindfulbg: `linear-gradient(${theme('colors.mindfulgray')} ,${theme('colors.mindfulpurple')}})`,
      }),
      colors: {
        mindfulgray: '#EEEEE7',
        mindfulpurple: '#C3AEFD',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['sofia', 'sofia-pro'],
      },
    },
  },
  plugins: [],
} satisfies Config;
