import { Button, Typography } from "@mui/material";
import { Wrapper } from "./EmptyList.styles";

export function EmptyList() {
	return (
		<Wrapper>
			<Typography>Your shopping list is empty :(</Typography>
			<Button variant="contained">Add your first item</Button>
		</Wrapper>
	);
}
