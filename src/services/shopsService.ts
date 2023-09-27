import { createAsyncThunk } from '@reduxjs/toolkit';

export const shopsService = {
  fetchGetShops: () => fetch('http://localhost:8000/shops'),
};

export const fetchGetShops = createAsyncThunk('shops/fetchShops', async () => {
  const response = await shopsService.fetchGetShops();

  return await response.json();
});
