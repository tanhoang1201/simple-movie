import { createTheme } from "@mui/material";

const themeConfigs = ({ mode }) => {
	const customPalette =
		mode === "dark"
			? {
					primary: {
						main: "#c084fc",
					},

					text: {
						primary: "#fff",
					},

					common: {
						light: "#fff",
						dark: "#000",
					},
			  }
			: {
					primary: {
						main: "#f62682",
					},

					text: {
						primary: "#fff",
					},

					common: {
						light: "#fff",
						dark: "#000",
					},
			  };
	return createTheme({
		palette: {
			mode,
			...customPalette,
		},
		typography: {
			fontFamily: ["DM Sans", "sans-serif"].join(","),
		},
		spacing: 4,
		breakpoints: {
			values: {
				xs: 480,
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1280,
			},
		},
	});
};

export default themeConfigs;
