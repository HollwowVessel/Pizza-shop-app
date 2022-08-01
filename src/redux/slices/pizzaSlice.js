import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
	const { category, sort, search, currentPage } = params;
	const res = await fetch(
		`https://62dd51abccdf9f7ec2c4c001.mockapi.io/items?page=${currentPage}&limit=4&` +
			category +
			sort +
			search,
	).then((res) => res.json());
	return res;
});

const initialState = {
	items: [],
	isLoading: false,
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},
	extraReducers: {
		[fetchData.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.isLoading = false;
		},
		[fetchData.rejected]: (state, action) => {
			state.items = [];
			state.isLoading = true;
			alert('Ошибка загрузки пицц');
		},
		[fetchData.pending]: (state, action) => {
			state.items = [];
			state.isLoading = true;
		},
	},
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
