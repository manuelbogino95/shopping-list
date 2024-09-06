import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: "5px",
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
	alignItems: "center",
	justifyContent: "center",
	height: "290px",
	maxWidth: "614px",
	margin: "auto",
	[theme.breakpoints.up("md")]: {
		marginTop: 110,
	},
}));
