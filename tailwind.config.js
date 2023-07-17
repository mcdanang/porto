/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			donker: "#0a192f",
			white: "#ccd6f6",
			gray: "#8892b0",
			teal: "#64ffda",
			black: "#000000",
			dark: "#728C9F",
		},
		fontFamily: {
			roboto: "Roboto-Medium",
			"roboto-mono": "RobotoMono-Regular",
		},
	},
	plugins: [],
};
