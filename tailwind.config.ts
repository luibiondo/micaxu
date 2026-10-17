import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          background: 'var(--bg)',
          cream: 'var(--cream)',
          surface: 'var(--surface)',
        },
        whatsapp: 'var(--whatsapp)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
