import { Typography } from "@mui/material";
import { ShoppingList } from "./features/shoppingList/components/ShoppingList";

function App() {
	return (
		<>
			<header>
				<Typography variant="h1">SHOPPING LIST</Typography>
				<ShoppingList />
			</header>
		</>
	);
}

export default App;
