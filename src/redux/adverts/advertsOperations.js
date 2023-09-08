import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6484488eee799e32162677a6.mockapi.io/';

export const getAllAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/adverts');
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteId = createAction('adverts/addFavoriteId', id => {
  return {
    payload: id,
  };
});

export const removeFavoriteId = createAction('adverts/removeFavoriteId', id => {
  return {
    payload: id,
  };
});
