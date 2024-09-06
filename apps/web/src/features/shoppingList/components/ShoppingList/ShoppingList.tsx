import { Button, Stack, Typography } from "@mui/material";
import { useGetItemsQuery } from "../../services/item";
import { EmptyList } from "../EmptyList";
import { CircularProgress } from "../../../../components/CircularProgress";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { ItemRow } from "../ItemRow";

export function ShoppingList() {
	const { data: items, isLoading } = useGetItemsQuery();

	if (isLoading) {
		return <CircularProgress />;
	}

	if (!items?.length) {
		return <EmptyList />;
	}

	return (
		<>
			<div style={{ maxWidth: 1025, margin: "auto" }}>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography variant="h2">Your items</Typography>
					<Button variant="contained">Add item</Button>
				</Stack>
				<div style={{ height: "75vh", overflow: "auto" }}>
					<AutoSizer>
						{({ height, width }) => (
							<List
								height={height}
								itemCount={items.length}
								width={width}
								itemSize={87}
								itemData={items}
							>
								{ItemRow}
							</List>
						)}
					</AutoSizer>
				</div>
			</div>
		</>
	);
}
