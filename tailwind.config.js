/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#F5E7A0',
          dark: '#9A7D0A',
        },
        secondary: {
          DEFAULT: '#800000', // Maroon
          light: '#B33030',
          dark: '#5C0000',
        },
        accent: {
          DEFAULT: '#FF6F61', // Traditional Wedding Coral
          light: '#FF9C92',
          dark: '#D14C40',
        },
        success: '#2E7D32',
        warning: '#ED6C02',
        error: '#D32F2F',
        neutral: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      fontFamily: {
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mangoleaves-pattern':
          "url('https://images.pexels.com/photos/4551309/pexels-photo-4551309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'wedding-pattern':
          "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 10s linear infinite', // ✅ added
        'float-fast': 'float 4s ease-in-out infinite', // ✅ added
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
