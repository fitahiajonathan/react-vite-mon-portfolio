/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f9',
          100: '#d6f0f0',
          200: '#aae0e1',
          300: '#7dd0d2', 
          400: '#51c0c3',
          500: '#219B9D', // Votre couleur principale
          600: '#1b7c7e',
          700: '#145d5f',
          800: '#0e3f40',
          900: '#082020',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Exemple de police personnalisée
      },
    },
  },
  plugins: [],
}
