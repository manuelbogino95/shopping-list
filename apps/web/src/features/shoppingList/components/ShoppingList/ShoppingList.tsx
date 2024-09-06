import { Button, Stack, Typography } from "@mui/material";
import {
	useCreateItemMutation,
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
import { CreateItemDialog } from "../CreateItemDialog";
import { DeleteItemDialog } from "../DeleteItemDialog";

export function ShoppingList() {
	const { data: items = [], isLoading } = useGetItemsQuery();
	const [itemToDelete, setItemToDelete] = useState<number | null>(null);
	const [itemToEdit, setItemToEdit] = useState<number | null>(null);
	const [isCreateItemDialogOpen, setIsCreateItemDialogOpen] = useState(false);
	const [deleteItem] = useDeleteRoadmapItemMutation();
	const [updateItem] = useUpdateItemMutation();
	const [createItem] = useCreateItemMutation();

	function handleOpenDeleteDialog(id: number) {
		setItemToDelete(id);
	}

	function handleCloseDeleteDialog() {
		setItemToDelete(null);
	}

	function handleOpenCreateItemDialog() {
		setIsCreateItemDialogOpen(true);
	}

	function handleCloseCreateItemDialog() {
		setIsCreateItemDialogOpen(false);
		setItemToEdit(null);
	}

	function handleUpdateClick(id: number) {
		setItemToEdit(id);
	}

	async function handleDeleteItem() {
		try {
			if (!itemToDelete) {
				return;
			}

			handleCloseDeleteDialog();
			await deleteItem(itemToDelete).unwrap();
		} catch (error) {}
	}

	async function handleUpdateItem(item: Partial<Item>) {
		try {
			await updateItem(item).unwrap();
			handleCloseCreateItemDialog();
		} catch (error) {}
	}

	async function handleCreateItem(item: Partial<Item>) {
		try {
			await createItem(item).unwrap();
			handleCloseCreateItemDialog();
		} catch (error) {}
	}

	function handleSaveItem(item: Partial<Item>) {
		if (item.id) {
			handleUpdateItem(item);
			return;
		}

		handleCreateItem(item);
	}

	if (isLoading) {
		return <CircularProgress />;
	}

	const isDeleteDialogOpen = Boolean(itemToDelete);

	return (
		<>
			{items.length ? (
				<div style={{ maxWidth: 1025, margin: "auto" }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
					>
						<Typography variant="h2">Your items</Typography>
						<Button variant="contained" onClick={handleOpenCreateItemDialog}>
							Add item
						</Button>
					</Stack>
					<div style={{ height: "76vh", overflow: "auto" }}>
						<AutoSizer>
							{({ height, width }) => (
								<List
									height={height}
									itemCount={items.length}
									width={width}
									itemSize={87}
									itemData={{
										items,
										onDeleteClick: handleOpenDeleteDialog,
										onUpdate: handleUpdateItem,
										onUpdateClick: handleUpdateClick,
									}}
								>
									{ItemRow}
								</List>
							)}
						</AutoSizer>
					</div>
				</div>
			) : (
				<EmptyList onAddItemClick={handleOpenCreateItemDialog} />
			)}
			<DeleteItemDialog
				open={isDeleteDialogOpen}
				onCancel={handleCloseDeleteDialog}
				onDelete={handleDeleteItem}
			/>
			<CreateItemDialog
				open={isCreateItemDialogOpen || Boolean(itemToEdit)}
				item={items.find((item) => item.id === itemToEdit)}
				onCancel={handleCloseCreateItemDialog}
				onSave={handleSaveItem}
			/>
		</>
	);
}
