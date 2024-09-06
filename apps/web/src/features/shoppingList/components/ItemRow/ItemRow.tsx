import { Item } from "../../types/item";
import { ItemName, ItemQuantity, RowWrapper } from "./ItemRow.styles";
import { Checkbox, Icon, IconButton, Stack } from "@mui/material";
import { ListChildComponentProps } from "react-window";

const ITEM_GAP = 12;

export function ItemRow(props: ListChildComponentProps<Item[]>) {
	const { index, style, data } = props;
	const item = data[index];

	return (
		<RowWrapper
			style={{
				...style,
				top: Number(style?.top) + ITEM_GAP,
				height: Number(style?.height) - ITEM_GAP,
			}}
		>
			<Stack direction="row" gap={1}>
				<Checkbox checked={item.purchased} sx={{ borderColor: "#C6C6C6" }} />
				<Stack>
					<ItemName variant="body2">{item.name}</ItemName>
					<ItemQuantity variant="body2">{item.quantity}</ItemQuantity>
				</Stack>
			</Stack>
			<Stack direction="row" gap={2}>
				<IconButton size="small">
					<Icon>edit_outlined</Icon>
				</IconButton>
				<IconButton size="small">
					<Icon>delete_outlined</Icon>
				</IconButton>
			</Stack>
		</RowWrapper>
	);
}
