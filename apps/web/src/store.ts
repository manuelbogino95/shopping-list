import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itemApi } from "./features/shoppingList/services/item";

export const store = configureStore({
	reducer: {
		[itemApi.reducerPath]: itemApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(itemApi.middleware),
});

setupListeners(store.dispatch);
