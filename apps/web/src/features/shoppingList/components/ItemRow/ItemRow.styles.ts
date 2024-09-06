import { Box, styled, Typography } from "@mui/material";

interface ItemProps {
	purchased: boolean;
}

export const RowWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== "purchased",
})<ItemProps>(({ theme, purchased }) => ({
	padding: "24px 18px",
	border: "0.5px solid #D5DFE9",
	borderRadius: "4px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "8px",
	...(purchased && {
		backgroundColor: theme.palette.primary.dark,
	}),
}));

export const ItemName = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "purchased",
})<ItemProps>(({ theme, purchased }) => ({
	color: theme.palette.common.black,
	fontWeight: 600,
	...(purchased && {
		color: theme.palette.primary.main,
		textDecoration: "line-through",
	}),
}));

export const ItemDescription = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "purchased",
})<ItemProps>(({ purchased }) => ({
	fontWeight: 600,
	overflow: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	width: "100%",
	...(purchased && {
		textDecoration: "line-through",
	}),
}));
