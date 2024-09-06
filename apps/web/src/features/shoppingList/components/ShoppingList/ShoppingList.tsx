import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetItemsQuery } from "../../services/item";

export function ShoppingList() {
	const { data: items, isLoading } = useGetItemsQuery();

	if (isLoading || !items) {
		return <CircularProgress />;
	}

	return (
		<Box>
			{items.map((item) => (
				<Typography variant="body1">{item.id}</Typography>
			))}
		</Box>
	);
}
