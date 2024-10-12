import { configureStore } from '@reduxjs/toolkit';
import stockItemsReducer from './features/stockItemsSlice';
import ordersReducer from './features/ordersSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    stockItems: stockItemsReducer,
    orders: ordersReducer,
    user: userReducer,
  },
});

export default store;
