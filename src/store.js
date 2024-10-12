import { configureStore } from '@reduxjs/toolkit';
import stockItemsReducer from './features/stockItemsSlice';
import ordersReducer from './features/ordersSlice';

const store = configureStore({
  reducer: {
    stockItems: stockItemsReducer,
    orders: ordersReducer,
  },
});

export default store;
