const config = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#e11d48',
					secondary: '#ffe86b',
					accent: '#e2ba7c',
					neutral: '#131820',
					'base-100': '#F4F3F7',
					info: '#577CC7',
					success: '#80E0B8',
					warning: '#C59207',
					error: '#F85970'
				}
			}
		]
	},
	plugins: [require("@tailwindcss/typography"), require('daisyui')]
};

module.exports = config;
