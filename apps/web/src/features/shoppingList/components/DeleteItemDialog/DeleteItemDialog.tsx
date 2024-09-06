import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";

interface DeleteItemDialogProps {
	open: boolean;
	onCancel: () => void;
	onDelete: () => void;
}

export function DeleteItemDialog({
	open,
	onCancel,
	onDelete,
}: DeleteItemDialogProps) {
	return (
		<Dialog open={open} onClose={onCancel}>
			<DialogTitle>Delete item?</DialogTitle>
			<DialogContent>
				<Typography variant="body2">
					Are you sure you want to delete this item? This can not be undone.
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCancel} variant="text">
					Cancel
				</Button>
				<Button onClick={onDelete} autoFocus variant="contained">
					Delete
				</Button>
			</DialogActions>
		</Dialog>
	);
}
