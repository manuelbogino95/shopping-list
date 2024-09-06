import { Box, CircularProgress, Typography } from "@mui/material";
import { useGetItemsQuery } from "../../services/item";
import { EmptyList } from "../EmptyList";

export function ShoppingList() {
	const { data: items, isLoading } = useGetItemsQuery();

	if (isLoading) {
		return <CircularProgress />;
	}

	if (!items?.length) {
		return <EmptyList />;
	}

	return (
		<Box>
			{items.map((item) => (
				<Typography variant="body1">{item.id}</Typography>
			))}
		</Box>
	);
}
