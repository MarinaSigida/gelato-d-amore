import { configureStore } from '@reduxjs/toolkit';
import stockItemsReducer from './features/stockItemsSlice';
import ordersReducer from './features/ordersSlice';
import userReducer from './features/userSlice';
import basketReducer from './features/basketSlice';

const store = configureStore({
  reducer: {
    stockItems: stockItemsReducer,
    orders: ordersReducer,
    user: userReducer,
    basket: basketReducer,
  },
});

export default store;
