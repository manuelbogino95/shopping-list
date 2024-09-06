import { Box, styled } from "@mui/material";

export const DialogHeader = styled(Box)(({ theme }) => ({
	backgroundColor: "#FAFAFA",
	borderBottom: `0.5px solid ${theme.palette.secondary.dark}`,
	padding: `${theme.spacing(2.5)} ${theme.spacing(3.5)}`,
}));

export const DialogContent = styled(Box)(({ theme }) => ({
	borderBottom: `5px solid ${theme.palette.primary.main}`,
	padding: theme.spacing(4),
}));
