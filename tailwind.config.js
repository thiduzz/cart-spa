const pallete = {
    gray: {
        900: "#141B21",
        800: "#192028",
        700: "#1E2530",
        600: "#242A37",
        500: "#292E3E",
        400: "#2F3245", //dark
        300: "#4B505E",
        200: "#686E78",
        100: "#848B91",
         50: "#A0A7AA",
    },
    white: {
        900: "#706F73",
        800: "#8B8A8F",
        700: "#A7A5AB",
        600: "#C3C0C7",
        500: "#E0DCE3",
        400: "#fcf7ff", //light
        300: "#FCF8FF",
        200: "#FBF9FF",
        100: "#FBFAFF",
        50:  "#FCFBFF",
    },
    red: {
        900: "#610B1E",
        800: "#76101E",
        700: "#8A171C",
        600: "#9C231E",
        500: "#AE3727",
        400: "#bf4e30", //secondary
        300: "#C8554C",
        200: "#D1686E",
        100: "#DA8494",
        50:  "#E2A0B6",
    },
    yellow: {

        900: "#73421E",
        800: "#8F5C28",
        700: "#AB7933",
        600: "#C79940",
        500: "#E2BA4D",
        400: "#f9dc5c", //primary
        300: "#FACF72",
        200: "#FBC981", //tertiary
        100: "#FCC59E",
        50:  "#FDC9B4"
    }
};

const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: pallete.white,
                gray: pallete.gray,
                indigo: colors.indigo,
                red: pallete.red,
                yellow: pallete.yellow
            },
            fontFamily: {
                'fabarie': ['"Assistant"', 'sans-serif']
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}