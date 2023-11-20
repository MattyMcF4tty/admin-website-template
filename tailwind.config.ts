import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "company-color": {
          "primary": "#44A935",
          "secondary": "#87C77E",
          "tertiary": "#BBD8A0"
        },
        "disabled": "#DCDCDC"
      }
    }
  },
  plugins: [],
}
export default config
