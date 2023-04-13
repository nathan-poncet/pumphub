const config = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#db2777',
					secondary: '#ffe86b',
					accent: '#e2ba7c',
					neutral: '#131820',
					'base-100': '#F4F3F7',
					info: '#577CC7',
					success: '#80E0B8',
					warning: '#C59207',
					error: '#F85970',

					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "999rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "999rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
				}
			}
		]
	},
	plugins: [require("@tailwindcss/typography"), require('daisyui')]
};

module.exports = config;
