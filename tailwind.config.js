/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3D4451',
          nautral: '#3D4451',
          "base-100" : '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/assets/images/bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
