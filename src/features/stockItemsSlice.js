import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//test commit
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

export const addStockItem = createAsyncThunk(
  'stockItems/addStockItem',
  async (newItem, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiKey}/stockItem`, newItem);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteStockItem = createAsyncThunk(
  'stockItems/deleteStockItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${apiKey}/stockItem/delete/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
      })
      .addCase(addStockItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addStockItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addStockItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteStockItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStockItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item._id !== action.payload.result._id
        ); // Remove the deleted item from the state
      })
      .addCase(deleteStockItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || action.error.message;
      });
  },
});

export const { selectItem, clearSelectedItem } = stockItemsSlice.actions;
export default stockItemsSlice.reducer;
