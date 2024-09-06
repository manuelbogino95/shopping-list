import { CircularProgress as MuiCircularProgress } from "@mui/material";
import { Wrapper } from "./CircularProgress.styles";

export function CircularProgress() {
	return (
		<Wrapper>
			<MuiCircularProgress size={76} />;
		</Wrapper>
	);
}
