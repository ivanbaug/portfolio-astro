/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'fugaz': ['"Fugaz One"', 'cursive'],
			  },
		},
	},
	plugins: [
		function({ addComponents, theme }) {
			addComponents({
			  '.bs-container': {
				width: '100%',
				paddingRight: 'calc(1.5rem * 0.5)',
				paddingLeft: 'calc(1.5rem * 0.5)',
				marginRight: 'auto',
				marginLeft: 'auto',
				'@screen sm': {
				  maxWidth: '540px',
				},
				'@screen md': {
				  maxWidth: '720px',
				},
				'@screen lg': {
				  maxWidth: '960px',
				},
			  },
			  '.bs-container-fluid': {
				width: '100%',
				paddingRight: 'calc(1.5rem * 0.5)',
				paddingLeft: 'calc(1.5rem * 0.5)',
				marginRight: 'auto',
				marginLeft: 'auto',
			  },
			})
		  },
	],
}
