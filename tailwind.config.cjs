/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: { sm: '768px', md: '1024px', lg: '1280px', xl: '1440px', '2xl': '1920px' },
		container: {
			center: true,
			padding: { DEFAULT: '1rem', md: '1.5rem', lg: '2rem', xl: '4rem', '2xl': '5rem' }
		},
		zIndex: { '-1': -1, 0: 0, 10: 10, 20: 20, 30: 30, 40: 40, 50: 50, 100: 100, 999: 999 },

		extend: {
			backgroundImage: {
				divider: 'url(./watercolor-divider.png)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			colors: {
				primary: '#e53357',
				secondary: '#A84D85',
				accent: '#EACE78',
				alert: '#70bbe4',
				success: '#4caf50',
				neutral: '#f3f3f2',
				gray: '#A9A9A5',
				dark: '#53534C',
				light: '#ece3e7',
				black: '#744659',
				white: '#ffffff'
			},
			fontSize: {
				xs: ['14px', { letterSpacing: '0' }],
				sm: ['16px', { letterSpacing: '0' }],
				base: ['20px', { letterSpacing: '0' }],
				lg: ['24px', { letterSpacing: '0' }],
				xl: ['28px', { letterSpacing: '0' }],
				'2xl': ['36px', { letterSpacing: '0' }],
				'3xl': ['48px', { letterSpacing: '0' }],
				'4xl': ['72px', { letterSpacing: '0' }],
				'5xl': ['96px', { letterSpacing: '0' }]
			},
			fontFamily: {
				sans: ['Fira Sans Condensed', 'Helvetica', 'Arial', 'sans-serif'],
				heading: ['Playfair Display Variable', 'Helvetica', 'Arial', 'sans-serif'],
				logo: ['saonara', 'Helvetica', 'Arial', 'sans-serif']
			}
		}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
