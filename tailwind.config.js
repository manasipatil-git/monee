/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF8F5',
          200: '#F4EFEA',
          300: '#ECE3DA',
          400: '#DED1C4',
        },
        charcoal: {
          900: '#181615',
          800: '#23201E',
          700: '#34302D',
          600: '#524C47',
          500: '#736B64',
          400: '#9C938B',
        },
        coral: {
          50: '#FFF4EE',
          100: '#FFE7DB',
          200: '#FFCEB8',
          300: '#FFAF8F',
          400: '#FF8860',
          500: '#FF5C38', // monee primary accent
          600: '#EB441F',
          700: '#C4300F',
        },
        lavender: {
          50: '#F6F5FF',
          100: '#ECE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
        },
        mint: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#10B981',
          600: '#059669',
        },
        butter: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          400: '#FACC15',
          500: '#EAB308',
        },
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          400: '#38BDF8',
          500: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(24, 22, 21, 0.06)',
        'soft-lg': '0 10px 30px -4px rgba(24, 22, 21, 0.08)',
        'coral-glow': '0 8px 24px -4px rgba(255, 92, 56, 0.35)',
      },
      animation: {
        'bounce-soft': 'bounceSoft 2s infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
