import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      state = action.payload;
      return state;
    },
    clearFilter(state, action) {
      state = '';
      return state;
    },
  },
});

export const { setFilter, clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
