import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts } from './advertsOperations';

const advertsInitialState = {
  adverts: [],
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.adverts = action.payload;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getAllAdverts.fulfilled, handleFulfilledGet)
      .addCase(getAllAdverts.pending, handlePending)
      .addCase(getAllAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
