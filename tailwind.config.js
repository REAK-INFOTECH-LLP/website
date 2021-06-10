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
            'xs': '350px',
            ...defaultTheme.screens,
          },
        extend: {},
    variants: {},
    plugins: [],
}}
