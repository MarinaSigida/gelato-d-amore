import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const createOrderItem = createAsyncThunk(
  'orderItems/createOrderItem',
  async (orderItemData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/orderItem`, orderItemData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const orderItemsSlice = createSlice({
  name: 'orderItems',
  initialState: {
    orderItems: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrderItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrderItem.fulfilled, (state, action) => {
        state.loading = false;
        state.orderItems.push(action.payload);
      })
      .addCase(createOrderItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderItemsSlice.reducer;
