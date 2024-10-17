import { createSlice } from '@reduxjs/toolkit';

const loadBasketFromLocalStorage = () => {
  const basket = localStorage.getItem('basket');
  return basket
    ? JSON.parse(basket)
    : { items: [], totalQuantity: 0, totalAmount: 0 };
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: loadBasketFromLocalStorage(),
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.price * action.payload.quantity;
      localStorage.setItem('basket', JSON.stringify(state));
    },
    removeFromBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalAmount -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
      localStorage.setItem('basket', JSON.stringify(state));
    },
    updateBasketQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalAmount +=
          (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
      }
      localStorage.setItem('basket', JSON.stringify(state));
    },
    clearBasket: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      localStorage.removeItem('basket');
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  updateBasketQuantity,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
