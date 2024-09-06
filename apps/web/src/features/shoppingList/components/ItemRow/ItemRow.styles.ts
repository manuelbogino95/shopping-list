import { Box, styled, Typography } from "@mui/material";

export const RowWrapper = styled(Box)({
	padding: "24px 18px",
	border: "0.5px solid #D5DFE9",
	borderRadius: "4px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

export const ItemName = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontWeight: 600,
}));

export const ItemQuantity = styled(Typography)({
	fontWeight: 600,
});
