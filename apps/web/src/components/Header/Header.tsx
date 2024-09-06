import { Typography } from "@mui/material";
import { HeaderStyled } from "./Header.styles";

export function Header() {
	return (
		<HeaderStyled>
			<Typography variant="h1" color="textSecondary">
				SHOPPING LIST
			</Typography>
		</HeaderStyled>
	);
}
