import { createSlice } from '@reduxjs/toolkit';
import { fetchGetShops } from 'services/shopsService';

type Shop = {
  id: number;
  name: string;
  location: number[];
  streetAddress: string;
  inOpen: boolean;
  inNear: boolean;
  description: string;
};

type ShopsState = {
  shops: Shop[];
  loading: boolean;
  error: string | null;
};

const initialState: ShopsState = {
  shops: [],
  loading: false,
  error: null,
};

export const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetShops.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchGetShops.fulfilled, (state, action) => {
      state.loading = false;
      state.shops = action.payload;
    });
  },
});

export default shopsSlice.reducer;
