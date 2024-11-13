/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"
    
  ],
  theme: {
    extend: {
      colors:{
        'cyan':'#00ffff',
        'gold':'#ffd700',
        primary: '#F2DAD7',
        secondary: '#D1A39E',
        light: '#CECDCA',
        dark: '#474545',

      },
      fontFamily: {
        body: ['Inconsolata', 'monospace'],
        big: ['Merriweather', 'serif'],
      },
     },
  },
  plugins: [],
}



