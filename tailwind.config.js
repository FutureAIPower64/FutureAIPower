/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-black": '#09090B',
        "dark-grey": '#27272A',
        "hover-black": '#27272A',
        "hover-grey": '#F4F4F5',
        "hover-blue": 'rgba(23, 37, 84, 0.7)',
        "main-border": "#27272a",
        "card-color": " #020817",
        "card-border": "#27272A",
        "light-gray": "#f4f4f5",
        "border-gray": "#3e3e44",
        // --------new color--------
        "dark-grey": "#27272A",
        // "graycolor-black":"#828283",
        "dark-text-gray": "#9D9DA5",
        "dark-text-grey": "#a2a2a4",
        "dark-bg-btn": "#FAFAFA",
      },
      height: {
        "box": "348px",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      "2xl": '1440px'
    },
    borderWidth: {
      '1': '1px',
    },
    backgroundImage: {
      'Ai-image': "radial-gradient(circle at 38% 0%, rgba(122, 117, 73, 1) 0%, rgba(27, 83, 62, 1) 9%, rgba(40, 30, 59, 1) 19%, rgba(39, 2, 47, 1) 35%, rgba(20, 4, 28, 1) 65%, rgba(18, 1, 22, 1) 92%, rgba(0, 0, 0, 1) 100%);",
      'light-ai-img': "radial-gradient(circle at 38% 0%, rgba(255, 255, 255, 1) 0%, rgba(232, 249, 255, 1) 25%, rgba(213, 234, 255, 1) 51%, rgba(252, 242, 255, 1) 92%)"
    }
  },
  plugins: [],
};
