import {
	Box,
	Button,
	Dialog,
	DialogActions,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Item, ItemSchema } from "../../types/item";
import { DialogHeader, DialogContent } from "./CreateItemDialog.styles";

interface CreateItemDialogProps {
	open: boolean;
	item?: Partial<Item>;
	onCancel: () => void;
	onSave: (item: Partial<Item>) => void;
}

const initialValues: Partial<Item> = {
	name: "",
	description: "",
	quantity: 1,
	purchased: false,
};

export function CreateItemDialog({
	open,
	item = initialValues,
	onCancel,
	onSave,
}: CreateItemDialogProps) {
	const { control, handleSubmit, reset } = useForm<Partial<Item>>({
		resolver: zodResolver(ItemSchema),
		values: item,
	});

	const onSubmit: SubmitHandler<Partial<Item>> = (data) => {
		onSave({ ...data, id: item.id });
		reset();
	};

	const isEditing = Boolean(item.id);
	const title = isEditing ? "Edit an item" : "Add an item";
	const subtitle = isEditing
		? "Edit your item below"
		: "Add your new item below";

	return (
		<Dialog open={open} fullWidth maxWidth="sm" onClose={onCancel}>
			<DialogHeader>
				<Typography variant="h3">SHOPPING LIST</Typography>
			</DialogHeader>
			<DialogContent>
				<Box>
					<Typography variant="h3">{title}</Typography>
					<Typography variant="body2" mt={1}>
						{subtitle}
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Stack gap={2} mt={1}>
							<Controller
								name="name"
								control={control}
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<TextField
										placeholder="Item Name"
										helperText={error ? error.message : null}
										size="small"
										error={!!error}
										onChange={onChange}
										value={value}
										fullWidth
										autoFocus
									/>
								)}
							/>
							<Controller
								name="description"
								control={control}
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<TextField
										placeholder="Description"
										helperText={error ? error.message : null}
										size="small"
										error={!!error}
										onChange={onChange}
										value={value}
										fullWidth
										multiline
										rows={6}
									/>
								)}
							/>
							<Controller
								name="quantity"
								control={control}
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<Select
										placeholder="Description"
										size="small"
										error={!!error}
										onChange={onChange}
										value={value}
										fullWidth
									>
										<MenuItem value={1}>1</MenuItem>
										<MenuItem value={2}>2</MenuItem>
										<MenuItem value={3}>3</MenuItem>
										<MenuItem value={4}>4</MenuItem>
										<MenuItem value={5}>5</MenuItem>
									</Select>
								)}
							/>
							<DialogActions>
								<Button variant="text" onClick={onCancel}>
									Cancel
								</Button>
								<Button type="submit" variant="contained">
									Save
								</Button>
							</DialogActions>
						</Stack>
					</form>
				</Box>
			</DialogContent>
		</Dialog>
	);
}
