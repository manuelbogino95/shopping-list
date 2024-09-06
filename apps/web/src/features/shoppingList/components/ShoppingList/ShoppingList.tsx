import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
} from "@mui/material";
import {
	useDeleteRoadmapItemMutation,
	useGetItemsQuery,
	useUpdateItemMutation,
} from "../../services/item";
import { EmptyList } from "../EmptyList";
import { CircularProgress } from "../../../../components/CircularProgress";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { ItemRow } from "../ItemRow";
import { useState } from "react";
import { Item } from "../../types/item";

export function ShoppingList() {
	const { data: items, isLoading } = useGetItemsQuery();
	const [itemToDelete, setItemToDelete] = useState<number | null>(null);
	const [deleteItem, { isLoading: isDeletingItem }] =
		useDeleteRoadmapItemMutation();
	const [updateItem] = useUpdateItemMutation();

	function handleOpenDeleteDialog(id: number) {
		setItemToDelete(id);
	}

	function handleCloseDeleteDialog() {
		setItemToDelete(null);
	}

	async function handleDeleteItem() {
		try {
			if (!itemToDelete) {
				return;
			}

			await deleteItem(itemToDelete).unwrap();
		} catch (error) {}
	}

	async function handleUpdateItem(item: Item) {
		try {
			await updateItem({ ...item });
		} catch (error) {}
	}

	if (isLoading) {
		return <CircularProgress />;
	}

	if (!items?.length) {
		return <EmptyList />;
	}

	const isDeleteDialogOpen = Boolean(itemToDelete);

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
								itemData={{
									items,
									onDelete: handleOpenDeleteDialog,
									onUpdate: handleUpdateItem,
								}}
							>
								{ItemRow}
							</List>
						)}
					</AutoSizer>
				</div>
			</div>
			<Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
				<DialogTitle>Delete item?</DialogTitle>
				<DialogContent>
					<Typography variant="body2">
						Are you sure you want to delete this item? This can not be undone.
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleCloseDeleteDialog}
						disabled={isDeletingItem}
						variant="text"
					>
						Cancel
					</Button>
					<Button
						onClick={handleDeleteItem}
						disabled={isDeletingItem}
						autoFocus
						variant="contained"
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
