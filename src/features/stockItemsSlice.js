import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchStockItems = createAsyncThunk(
  'stockItems/fetchStockItems',
  async () => {
    const response = await axios.get(`${apiKey}/stockItems`);
    return response.data;
  }
);

export const fetchStockItemsByCategory = createAsyncThunk(
  'stockItems/fetchStockItemsByCategory',
  async (category) => {
    const response = await axios.get(`${apiKey}/stockItems/filter/${category}`);
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
      })
      .addCase(fetchStockItemsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockItemsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchStockItemsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectItem, clearSelectedItem } = stockItemsSlice.actions;
export default stockItemsSlice.reducer;
