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
      },
      boxShadow: {
        'default': 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;',
      }
    }
  },
  plugins: [],
}
export default config
