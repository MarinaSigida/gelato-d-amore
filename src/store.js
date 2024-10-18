import { configureStore } from '@reduxjs/toolkit';
import stockItemsReducer from './features/stockItemsSlice';
import ordersReducer from './features/ordersSlice';
import userReducer from './features/userSlice';
import basketReducer from './features/basketSlice';
import orderItemsReducer from './features/orderItemsSlice';

const store = configureStore({
  reducer: {
    stockItems: stockItemsReducer,
    orders: ordersReducer,
    user: userReducer,
    basket: basketReducer,
    orderItems: orderItemsReducer,
  },
});

export default store;
