import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design system tokens
        surface: {
          DEFAULT: '#0D1117',
          hover: '#161B22',
          card: '#0D1117',
        },
        gold: {
          DEFAULT: '#F0A500',
          50: '#FFF8E7',
          100: '#FEEFC3',
          200: '#FDDB87',
          300: '#FCC44B',
          400: '#F0A500',
          500: '#D4880A',
          600: '#A16207',
          700: '#715204',
          muted: '#A16207',
          glow: 'rgba(240, 165, 0, 0.2)',
        },
        teal: {
          DEFAULT: '#2DD4BF',
          dim: 'rgba(45, 212, 191, 0.15)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          subtle: 'rgba(255,255,255,0.04)',
          bright: 'rgba(240,165,0,0.3)',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(240,165,0,0.15) 0%, transparent 60%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F0A500 0%, #D4880A 100%)',
        'gradient-border': 'linear-gradient(135deg, rgba(240,165,0,0.4), rgba(45,212,191,0.2))',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.5), 0 0 32px rgba(240,165,0,0.1)',
        'glow-gold': '0 0 20px rgba(240,165,0,0.25)',
        'glow-teal': '0 0 20px rgba(45,212,191,0.2)',
        'inner-subtle': 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'fade-in': 'fadeIn 0.4s ease both',
        'slide-left': 'slideLeft 0.6s ease both',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(148 163 184)',
            a: { color: '#F0A500', '&:hover': { color: '#FCC44B' } },
            h1: { color: 'rgb(226 232 240)' },
            h2: { color: 'rgb(226 232 240)' },
            h3: { color: 'rgb(226 232 240)' },
            h4: { color: 'rgb(203 213 225)' },
            strong: { color: 'rgb(203 213 225)' },
            code: {
              color: '#2DD4BF',
              backgroundColor: 'rgba(45,212,191,0.1)',
              borderRadius: '4px',
              padding: '0.1em 0.3em',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              borderLeftColor: '#F0A500',
              color: 'rgb(148 163 184)',
            },
            hr: { borderColor: 'rgba(255,255,255,0.06)' },
            'ul > li::before': { backgroundColor: '#F0A500' },
            'ol > li::before': { color: 'rgb(148 163 184)' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
