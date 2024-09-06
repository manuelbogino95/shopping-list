import { styled } from "@mui/material";

export const HeaderStyled = styled("header")(({ theme }) => ({
	padding: `${theme.spacing(2.5)} ${theme.spacing(3.5)}`,
	backgroundColor: theme.palette.primary.main,
}));
