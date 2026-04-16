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
          '050': '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        primary: {
          DEFAULT: '#9220b5',
          hover: '#7a1b98',
          active: '#63167b',
          light: '#c97ae0',
          subtle: '#fbf5fe',
        },
        secondary: {
          DEFAULT: '#d5189b',
          hover: '#b01482',
          light: '#e87cc4',
          subtle: '#fdf0f9',
        },
        gradient: {
          red: '#f02065',    // shared gradient start (highlight + wordmark)
          pink: '#d5189b',   // highlight gradient end
          orange: '#ff7700', // wordmark gradient end
        },
        accent: {
          DEFAULT: '#f02065', // brand pink — accent color
        },
        bg: {
          DEFAULT: '#fafaf9',
          secondary: '#FFFFFF',
          tertiary: '#f5f5f4',
          inverse: '#1c1917',
          brand: '#EAF4F4',
        },
        border: {
          subtle: '#f5f5f4',
          DEFAULT: '#e7e5e4',
          strong: '#d6d3d1',
          focus: '#2B6B6B',
        },
        text: {
          primary: '#1c1917',
          secondary: '#57534e',
          tertiary: '#78716c',
          placeholder: '#d6d3d1',
          disabled: '#d6d3d1',
          inverse: '#FFFFFF',
          link: '#085fa0',
          'link-hover': '#064b7d',
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
        xs: '0 1px 3px 0 rgba(28,25,23,0.04)',
        sm: '0 2px 6px -1px rgba(28,25,23,0.06), 0 1px 3px -1px rgba(28,25,23,0.04)',
        md: '0 6px 12px -2px rgba(28,25,23,0.06), 0 3px 6px -3px rgba(28,25,23,0.04)',
        lg: '0 12px 24px -4px rgba(28,25,23,0.06), 0 6px 10px -5px rgba(28,25,23,0.04)',
        xl: '0 24px 40px -8px rgba(28,25,23,0.06), 0 10px 16px -6px rgba(28,25,23,0.04)',
        '2xl': '0 32px 64px -16px rgba(28,25,23,0.16)',
        inner: 'inset 0 2px 6px 0 rgba(28,25,23,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
