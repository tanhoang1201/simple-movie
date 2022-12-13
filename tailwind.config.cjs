/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			body: ["DM Sans", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#f62682",
			},
		},
	},
	plugins: [],
};
