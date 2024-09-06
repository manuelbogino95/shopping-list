import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../types/item";
import { appConfig } from "../../../config";

export const itemApi = createApi({
	reducerPath: "itemApi",
	baseQuery: fetchBaseQuery({ baseUrl: appConfig.apiUrl }),
	endpoints: (builder) => ({
		getItems: builder.query<Item[], void>({
			query: () => "item",
		}),
	}),
});

export const { useGetItemsQuery } = itemApi;
