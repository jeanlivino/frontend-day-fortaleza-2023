import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      fontSizes: {
        sm: { value: '0.875rem' },
        md: { value: '1rem' },
        lg: { value: '1.125rem' },
        xl: { value: '1.25rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '1.875rem' },
        '4xl': { value: '2.25rem' },
        '5xl': { value: '3rem' },
      },
      spacing: {
        px: { value: '1px' },
        0: { value: '0px' },
        0.5: { value: '0.125rem' },
        1: { value: '0.25rem' },
        1.5: { value: '0.375rem' },
        2: { value: '0.5rem' },
        2.5: { value: '0.625rem' },
        3: { value: '0.75rem' },
        3.5: { value: '0.875rem' },
        4: { value: '1rem' },
        5: { value: '1.25rem' },
        6: { value: '1.5rem' },
        7: { value: '1.75rem' },
        8: { value: '2rem' },
        9: { value: '2.25rem' },
        10: { value: '2.5rem' },
        11: { value: '2.75rem' },
        12: { value: '3rem' },
        14: { value: '3.5rem' },
        16: { value: '4rem' },
        20: { value: '5rem' },
        24: { value: '6rem' },
        28: { value: '7rem' },
        32: { value: '8rem' },
        36: { value: '9rem' },
        40: { value: '10rem' },
      },
      colors: {
        primary: {
          DEFAULT: { value: 'rgb(2, 18, 51)' },
          50: { value: 'rgb(249 249 250)' },
          100: { value: ' rgb(235 236 239)' },
          200: { value: ' rgb(220 222 227)' },
          300: { value: ' rgb(203 207 213)' },
          400: { value: ' rgb(181 186 196)' },
          500: { value: ' rgb(154 160 173)' },
          600: { value: ' rgb(124 132 149)' },
          700: { value: ' rgb(98 108 129)' },
          800: { value: ' rgb(78 89 112)' },
          900: { value: ' rgb(50 63 90)' },
          950: { value: ' rgb(23 38 68)' },
        },
        secondary: {
          DEFAULT: { value: 'rgb(81, 202, 253)' },
          50: { value: 'rgb(242 251 255)' },
          100: { value: 'rgb(210 241 254)' },
          200: { value: 'rgb(174 230 254)' },
          300: { value: 'rgb(132 218 254)' },
          400: { value: 'rgb(80 198 248)' },
          500: { value: 'rgb(68 170 214)' },
          600: { value: 'rgb(56 141 176)' },
          700: { value: 'rgb(46 116 145)' },
          800: { value: 'rgb(38 95 119)' },
          900: { value: 'rgb(27 68 85)' },
          950: { value: 'rgb(17 42 52)' },
        },
        tertiary: {
          DEFAULT: { value: 'rgb(255, 133, 6)' },
          50: { value: 'rgb(255 248 241)' },
          100: { value: 'rgb(255 233 209)' },
          200: { value: 'rgb(255 215 174)' },
          300: { value: 'rgb(255 195 133)' },
          400: { value: 'rgb(255 166 73)' },
          500: { value: 'rgb(246 128 6)' },
          600: { value: 'rgb(203 106 5)' },
          700: { value: 'rgb(167 87 4)' },
          800: { value: 'rgb(138 72 3)' },
          900: { value: 'rgb(98 51 2)' },
          950: { value: 'rgb(61 32 1)' },
        },
      },
    },
  },
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
