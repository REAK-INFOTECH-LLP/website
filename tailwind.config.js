const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    purge: {
        enabled: false,
        content: [
            './src/**/*.html'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xs': '310px',
            ...defaultTheme.screens,
          },
        extend: {
            width: {
               
                '6/7': '85.7142857%',
              }
       
        },
    variants: {},
    plugins: [],
}}
