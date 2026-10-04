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
          50: '#FDFBF7',
          100: '#FAF8F5',  // warm ivory / soft cream background
          200: '#F4EFEA',  // pale oat / warm neutral
          300: '#EAE4DC',  // soft divider / border
          400: '#D6CEBF',
        },
        charcoal: {
          900: '#1A1918',  // deep charcoal / almost-black
          800: '#252321',
          700: '#383430',
          600: '#554F48',
          500: '#68645E',  // muted reading text
          400: '#9C968F',  // subtle hints
        },
        // Botanical / Sage green (PRIMARY action & accent, replaces old orange/coral)
        coral: {
          50: '#EEF5F1',   // pale botanical sage
          100: '#DCECE3',
          200: '#BADCCB',
          300: '#8BC3A8',
          400: '#4E9E78',
          500: '#246B4F',  // botanical sage green (primary action)
          600: '#1D553E',
          700: '#16402E',
        },
        sage: {
          50: '#EEF5F1',
          100: '#DCECE3',
          200: '#BADCCB',
          300: '#8BC3A8',
          400: '#4E9E78',
          500: '#246B4F',
          600: '#1D553E',
          700: '#16402E',
        },
        // Soft Lavender / Lilac (SECONDARY)
        lavender: {
          50: '#F5F3FB',
          100: '#EAE7F7',
          200: '#D8D2F0',
          300: '#B8ADE3',
          400: '#9384D1',
          500: '#7C6DB8',  // soft muted lavender
          600: '#6557A3',
          700: '#504487',
        },
        mint: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#287D54',  // soothing green
          600: '#1E6342',
        },
        // Butter Yellow / Golden (ACCENT)
        butter: {
          50: '#FEFDF5',
          100: '#FEF9E7',  // pale butter cream
          200: '#FDF1C2',
          400: '#F5D365',
          500: '#EBB328',  // butter yellow accent
          600: '#C79316',
        },
        sky: {
          50: '#F2F8FD',
          100: '#E2F0FB',
          200: '#C2E0F7',
          400: '#5EAEEA',
          500: '#328DCE',
        },
        // Muted Coral / Rose (5% small accent only)
        rose: {
          50: '#FDF4F3',
          100: '#FCE7E5',
          200: '#F8C8C4',
          400: '#EE8880',
          500: '#E26357',
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
        'soft': '0 3px 14px -2px rgba(26, 25, 24, 0.05)',
        'soft-lg': '0 10px 28px -4px rgba(26, 25, 24, 0.07)',
        'coral-glow': '0 6px 20px -3px rgba(36, 107, 79, 0.22)',
        'sage-glow': '0 6px 20px -3px rgba(36, 107, 79, 0.22)',
        'lavender-glow': '0 6px 20px -3px rgba(124, 109, 184, 0.22)',
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
