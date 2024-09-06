import { Button, Typography } from "@mui/material";
import { Wrapper } from "./EmptyList.styles";

interface EmptyListProps {
	onAddItemClick: () => void;
}

export function EmptyList({ onAddItemClick }: EmptyListProps) {
	return (
		<Wrapper>
			<Typography>Your shopping list is empty :(</Typography>
			<Button variant="contained" onClick={onAddItemClick}>
				Add your first item
			</Button>
		</Wrapper>
	);
}
