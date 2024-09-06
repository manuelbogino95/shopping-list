import { z } from "zod";

export interface Item {
	id: number;
	name: string;
	description: string;
	quantity: number;
	purchased: boolean;
}

export enum ItemApiTag {
	Items = "Items",
}

export const ItemSchema = z.object({
	name: z
		.string({ required_error: "Name is required" })
		.min(1, { message: "Name is required" }),
	description: z.string().optional(),
	quantity: z.number({ required_error: "Quantity is required" }),
});
