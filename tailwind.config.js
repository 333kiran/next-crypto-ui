/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
        background: '#F3F4F6',
        text: '#111827',
        footerBg: '#1F2937',
        buttonBg: '#2563EB',
        buttonHoverBg: '#1E40AF',
        buttonText: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
