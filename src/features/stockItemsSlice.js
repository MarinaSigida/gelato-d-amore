import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchStockItems = createAsyncThunk(
  'stockItems/fetchStockItems',
  async () => {
    const response = await axios.get(`${API_BASE_URL}/stockItems`);
    return response.data;
  }
);

const stockItemsSlice = createSlice({
  name: 'stockItems',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = state.items.find(
        (item) => item._id === action.payload
      );
    },
    clearSelectedItem: (state) => {
      state.selectedItem = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchStockItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectItem, clearSelectedItem } = stockItemsSlice.actions;
export default stockItemsSlice.reducer;
