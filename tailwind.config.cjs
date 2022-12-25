/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			body: ["DM Sans", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#f62682",
			},
			screens: {
				sx: "480px",
			},
		},
	},
	plugins: [],
};
