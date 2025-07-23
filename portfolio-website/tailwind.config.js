module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1A1A2E',
          medium: '#2C2C4A',
          light: '#8D8DDA',
          accent: '#C2C2F0',
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#A0A0B0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 