import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
	typography: {
		h1: {
			fontFamily: "Dosis, sans-serif",
			fontSize: 18,
			fontWeight: 600,
			lineHeight: "22px",
		},
		h2: {
			fontFamily: "Dosis, sans-serif",
		},
		h3: {
			fontFamily: "Dosis, sans-serif",
		},
		h4: {
			fontFamily: "Dosis, sans-serif",
		},
		h5: {
			fontFamily: "Dosis, sans-serif",
		},
		fontFamily: "Nunito, sans-serif",
	},
	palette: {
		primary: {
			main: "#4D81B7",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		text: {
			secondary: "#ffffff",
		},
	},
});

export default theme;
