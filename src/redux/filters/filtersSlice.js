import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carBrand: '',
  price: '',
  from: '',
  to: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
