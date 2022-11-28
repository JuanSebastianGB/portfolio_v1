/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          'url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
      },
    },
    colors: {
      custom_blue: {
        primary: '#173B6c',
        secondary: '#149ddd',
      },
      custom_black: {
        primary: '#040b14',
        secondary: '#2c2f3f',
      },
      custom_gray: {
        primary: '#a8a9b4',
      },
      custom_white: {
        primary: '#f5f8fd',
      },
    },
  },
  plugins: [],
};
