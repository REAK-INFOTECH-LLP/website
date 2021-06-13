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
            'xs':{'min': '310px', 'max': '768px'}
            ,
            ...defaultTheme.screens,
          },
        extend: {
            width: {
               
                '6/7': '87%',
                 '8/7' :'90%'
              }
       
        },
    variants: {},
    plugins: [],
}}
