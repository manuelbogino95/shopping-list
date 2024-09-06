import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item, ItemApiTag } from "../types/item";
import { appConfig } from "../../../config";

export const itemApi = createApi({
	reducerPath: "itemApi",
	baseQuery: fetchBaseQuery({ baseUrl: appConfig.apiUrl }),
	tagTypes: [ItemApiTag.Items],
	endpoints: (builder) => ({
		createItem: builder.mutation<Item, Partial<Item>>({
			query(item) {
				return {
					url: `/item`,
					body: item,
					method: "POST",
				};
			},
			invalidatesTags: [ItemApiTag.Items],
		}),
		getItems: builder.query<Item[], void>({
			query: () => "item",
			providesTags: [ItemApiTag.Items],
		}),
		deleteRoadmapItem: builder.mutation<Item, number>({
			query(id: number) {
				return {
					url: `/item/${id}`,
					method: "DELETE",
				};
			},
			invalidatesTags: [ItemApiTag.Items],
		}),
		updateItem: builder.mutation<Item, Partial<Item>>({
			query({ id, ...rest }) {
				return {
					url: `/item/${id}`,
					body: rest,
					method: "PATCH",
				};
			},
			invalidatesTags: [ItemApiTag.Items],
		}),
	}),
});

export const {
	useCreateItemMutation,
	useGetItemsQuery,
	useDeleteRoadmapItemMutation,
	useUpdateItemMutation,
} = itemApi;
