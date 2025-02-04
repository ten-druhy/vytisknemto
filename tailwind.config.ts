import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
    },
  },
}
