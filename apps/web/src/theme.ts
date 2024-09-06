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
			fontSize: 18,
			lineHeight: "24px",
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
		body1: {
			fontSize: 18,
			color: "#87898C",
		},
		body2: {
			fontSize: 14,
			color: "#7D7A7A",
		},
	},
	palette: {
		primary: {
			main: "#4D81B7",
			dark: "#D5DFE92B",
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
		divider: "#C6C6C6",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				containedPrimary: {
					backgroundColor: "#1871E8",
					textTransform: "none",
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					color: "#C6C6C6",
				},
			},
		},
	},
});

export default theme;
