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
