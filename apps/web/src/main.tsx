import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingList } from "./features/shoppingList/components/ShoppingList/ShoppingList.tsx";
import { Header } from "./components/Header/Header.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ShoppingList />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				<Header />
				<main style={{ padding: 2 }}>
					<RouterProvider router={router} />
				</main>
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
