import { ChangeEvent } from "react";
import {
	useDeleteRoadmapItemMutation,
	useUpdateItemMutation,
} from "../../services/item";
import { Item } from "../../types/item";
import { ItemName, ItemDescription, RowWrapper } from "./ItemRow.styles";
import { Checkbox, Icon, IconButton, Stack } from "@mui/material";
import { ListChildComponentProps } from "react-window";

const ITEM_GAP = 12;

export function ItemRow(props: ListChildComponentProps<Item[]>) {
	const { index, style, data } = props;
	const item = data[index];
	const [deleteItem, { isLoading: isDeletingItem }] =
		useDeleteRoadmapItemMutation();
	const [updateItem, { isLoading: isUpdateItem }] = useUpdateItemMutation();

	async function handleDeleteItem() {
		try {
			await deleteItem(item.id).unwrap();
		} catch (error) {}
	}

	async function handlePurshasedChange(e: ChangeEvent<HTMLInputElement>) {
		try {
			await updateItem({ ...item, purchased: e.target.checked });
		} catch (error) {}
	}

	const isLoading = isUpdateItem || isDeletingItem;

	return (
		<RowWrapper
			style={{
				...style,
				top: Number(style?.top) + ITEM_GAP,
				height: Number(style?.height) - ITEM_GAP,
			}}
			purchased={item.purchased}
		>
			<Stack direction="row" gap={1} maxWidth="100%" overflow="hidden">
				<Checkbox
					checked={item.purchased}
					onChange={handlePurshasedChange}
					disabled={isLoading}
				/>
				<Stack maxWidth="100%" overflow="hidden">
					<ItemName variant="body2" purchased={item.purchased}>
						{item.name}
					</ItemName>
					<ItemDescription
						variant="body2"
						purchased={Boolean(item.purchased && item.description)}
					>
						{item.description ? item.description : "--"}
					</ItemDescription>
				</Stack>
			</Stack>
			<Stack direction="row" gap={1}>
				<IconButton size="small" disabled={isLoading}>
					<Icon>edit_outlined</Icon>
				</IconButton>
				<IconButton
					size="small"
					disabled={isLoading}
					onClick={handleDeleteItem}
				>
					<Icon>delete_outlined</Icon>
				</IconButton>
			</Stack>
		</RowWrapper>
	);
}
