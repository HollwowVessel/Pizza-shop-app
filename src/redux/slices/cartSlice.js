import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: [],
};

function calculatePrice(items) {
	return items.reduce((sum, obj) => {
		return obj.price * obj.quantity + sum;
	}, 0);
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const findItem = state.items.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.size === action.payload.size &&
					obj.type === action.payload.type,
			);
			if (findItem) findItem.quantity++;
			else state.items.push({ ...action.payload, quantity: 1 });
			state.totalPrice = calculatePrice(state.items);
		},
		removeItem(state, action) {
			const findItem = state.items.find(
				(obj) =>
					obj.id === action.payload.id &&
					obj.size === action.payload.size &&
					obj.type === action.payload.type,
			);
			if (findItem) {
				if (findItem.quantity > 1) findItem.quantity--;
				else
					state.items = state.items.filter(
						(obj) =>
							obj.id !== action.payload.id ||
							obj.size !== action.payload.size ||
							obj.type !== action.payload.type,
					);
			}
			state.totalPrice = calculatePrice(state.items);
		},
		clearItem(state, action) {
			state.items = state.items.filter(
				(obj) =>
					obj.id !== action.payload.id ||
					obj.size !== action.payload.size ||
					obj.type !== action.payload.type,
			);
			state.totalPrice = calculatePrice(state.items);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
