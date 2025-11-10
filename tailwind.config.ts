// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
// export default config

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         gotham: ['Gotham', 'sans-serif'],
//       },
//       colors: {
//         brand: {
//           dark: '#475045',
//           mid: '#909B99',
//           beige: '#D6CBBF',
//           light: '#DDD3C1',
//         },
//       },
//     },
//   },
//   plugins: [],
// };

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',         // if using /pages
    './components/**/*.{js,ts,jsx,tsx}',    // if using /components
    './app/**/*.{js,ts,jsx,tsx}',           // if using App Router (optional)
    './src/pages/**/*.{js,ts,jsx,tsx}',     // if using /src/pages
    './src/components/**/*.{js,ts,jsx,tsx}',// if using /src/components
    './src/app/**/*.{js,ts,jsx,tsx}',       // optional
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#475045',
          mid: '#909B99',
          beige: '#E3DCCE',
          light: '#DDD3C6',
          white: '#FFFFFF',
          gray: '#7F7F7F',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config