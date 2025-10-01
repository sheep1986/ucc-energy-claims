/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Refined Premium Palette
        'navy': '#0F172A',
        'navy-light': '#1E293B',
        'ice': '#38BDF8',
        'ice-dark': '#0284C7',
        'ice-light': '#E0F2FE',
        'emerald': '#10B981',
        'emerald-light': '#D1FAE5',
        
        // Neutrals
        'slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          300: '#CBD5E1',
          500: '#64748B',
          700: '#334155',
          900: '#0F172A',
        }
      },
      fontFamily: {
        'display': ['Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.667rem',
        '4xl': '3.556rem',
        '5xl': '4.741rem',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.025em',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'blob': 'blob 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}