import { configureStore } from '@reduxjs/toolkit';
import shopsReducer from './shopsSlice';

const store = configureStore({
  reducer: {
    shops: shopsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
