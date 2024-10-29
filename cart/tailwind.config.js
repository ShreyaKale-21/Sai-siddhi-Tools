/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    fontFamily: {
      'display': ['Oswald',],
      'body': ['"Open Sans"', 'Inter'],
    },
    
    extend: {
      // perspective: {
      //   '1000': '1000px',
      // },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': '180deg',
      },
      transformOrigin: {
        'center': 'center center',
      },
      transitionDuration: {
        '500': '500ms',
      },

      //Flip Logo
      keyframes: {
        slideInTop: {
          '0%': { transform: 'translateY(-1000px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      //Slide text
      animation: {
        slideInTop: 'slideInTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective': {
          'perspective': '1000px',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

