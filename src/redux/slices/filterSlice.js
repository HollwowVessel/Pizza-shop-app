import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sortId: 0,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSortFilter(state, action) {
			state.sortId = action.payload;
		},
	},
});

export const { setCategoryId, setSortFilter } = filterSlice.actions;
export default filterSlice.reducer;
