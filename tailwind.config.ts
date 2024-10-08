import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue1: '#08b2be',
        customBlue2: '#08a5cd',
      },
      gradientColorStops: theme => ({
        'custom-start': '#08b2be',
        'custom-end': '#08a5cd',
      }),
    },
  },
  plugins: [],
}
export default config
