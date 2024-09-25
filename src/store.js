import { configureStore } from '@reduxjs/toolkit';
import stockItemsReducer from './features/stockItemsSlice';

const store = configureStore({
  reducer: {
    stockItems: stockItemsReducer,
  },
});

export default store;
