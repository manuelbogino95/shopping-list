import { ChangeEvent } from "react";
import { Item } from "../../types/item";
import { ItemName, ItemDescription, RowWrapper } from "./ItemRow.styles";
import { Checkbox, Icon, IconButton, Stack } from "@mui/material";
import { ListChildComponentProps } from "react-window";

const ITEM_GAP = 12;

interface ItemRowDataProps {
	items: Item[];
	onDeleteClick: (id: number) => void;
	onUpdateClick: (id: number) => void;
	onUpdate: (item: Item) => void;
}

export function ItemRow(props: ListChildComponentProps<ItemRowDataProps>) {
	const { index, style, data } = props;
	const { items, onDeleteClick, onUpdate, onUpdateClick } = data;
	const item = items[index];

	function handlePurshasedChange(e: ChangeEvent<HTMLInputElement>) {
		onUpdate({ ...item, purchased: e.target.checked });
	}

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
				<Checkbox checked={item.purchased} onChange={handlePurshasedChange} />
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
				<IconButton size="small" onClick={() => onUpdateClick(item.id)}>
					<Icon>edit_outlined</Icon>
				</IconButton>
				<IconButton size="small" onClick={() => onDeleteClick(item.id)}>
					<Icon>delete_outlined</Icon>
				</IconButton>
			</Stack>
		</RowWrapper>
	);
}
