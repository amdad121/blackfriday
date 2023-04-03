const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			black: '#000',
			white: '#fff',
			gray: colors.coolGray,
			red: colors.red,
			blue: colors.lightBlue,
			orange: colors.orange,
		},
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: theme => ({
				'pattern': "url('../img/pattern.png')",
			})
		},
	},
	variants: {
		extend: {
			boxShadow: ['active'],
		},
	},
	plugins: [],
}
