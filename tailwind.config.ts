import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          '000': '#FFFFFF',
          '050': '#F7F6F4',
          100: '#EEECEA',
          200: '#DDD9D5',
          300: '#C4BFB9',
          400: '#9E9890',
          500: '#78726A',
          600: '#5C5650',
          700: '#403B36',
          800: '#2A2520',
          900: '#1A1612',
          950: '#100D0A',
        },
        primary: {
          DEFAULT: '#f02065',
          hover: '#c91a54',
          active: '#a11443',
          light: '#f4729a',
          subtle: '#fef0f4',
        },
        secondary: {
          DEFAULT: '#E8B84B',
          hover: '#CF9E32',
          light: '#F0CC7A',
          subtle: '#FDF5DC',
        },
        gradient: {
          red: '#f02065',    // shared gradient start (highlight + wordmark)
          pink: '#d5189b',   // highlight gradient end
          orange: '#ff7700', // wordmark gradient end
        },
        accent: {
          DEFAULT: '#e40089', // brand pink — primary button hover bg
        },
        bg: {
          DEFAULT: '#FFFFFF',
          secondary: '#F7F6F4',
          tertiary: '#EEECEA',
          inverse: '#1A1612',
          brand: '#EAF4F4',
        },
        border: {
          subtle: '#EEECEA',
          DEFAULT: '#DDD9D5',
          strong: '#C4BFB9',
          focus: '#2B6B6B',
        },
        text: {
          primary: '#1A1612',
          secondary: '#5C5650',
          tertiary: '#9E9890',
          placeholder: '#C4BFB9',
          disabled: '#C4BFB9',
          inverse: '#FFFFFF',
          link: '#0a7acc',
          'link-hover': '#085fa0',
          'on-brand': '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-lora)', 'Lora', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '1.5' }],
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.5' }],
        md: ['18px', { lineHeight: '1.5' }],
        lg: ['20px', { lineHeight: '1.5' }],
        xl: ['24px', { lineHeight: '1.25' }],
        '2xl': ['30px', { lineHeight: '1.25' }],
        '3xl': ['36px', { lineHeight: '1.1' }],
        '4xl': ['48px', { lineHeight: '1.1' }],
        '5xl': ['60px', { lineHeight: '1.05' }],
        '6xl': ['72px', { lineHeight: '1' }],
        // Type system roles — mirrors Figma text styles exactly
        'display':      ['3.5rem',   { lineHeight: '1.3' }],
        'h1':           ['2.488rem', { lineHeight: '1.3' }],
        'h2':           ['2.074rem', { lineHeight: '1.3' }],
        'h3':           ['1.728rem', { lineHeight: '1.3' }],
        'body-biggest': ['1.44rem',  { lineHeight: '1.5' }],
        'body-big':     ['1.2rem',   { lineHeight: '1.5' }],
        'body-small':   ['1rem',     { lineHeight: '1.5' }],
        'small':        ['0.833rem', { lineHeight: '1' }],
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        full: '9999px',
      },
      maxWidth: {
        page: '1560px',
      },
      letterSpacing: {
        wordmark: '-0.02em',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(26,22,18,0.05)',
        sm: '0 1px 3px 0 rgba(26,22,18,0.10), 0 1px 2px -1px rgba(26,22,18,0.10)',
        md: '0 4px 6px -1px rgba(26,22,18,0.08), 0 2px 4px -2px rgba(26,22,18,0.08)',
        lg: '0 10px 15px -3px rgba(26,22,18,0.08), 0 4px 6px -4px rgba(26,22,18,0.08)',
        xl: '0 20px 25px -5px rgba(26,22,18,0.08), 0 8px 10px -6px rgba(26,22,18,0.08)',
        '2xl': '0 25px 50px -12px rgba(26,22,18,0.25)',
        inner: 'inset 0 2px 4px 0 rgba(26,22,18,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
