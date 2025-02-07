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
export const fetchStockItemById = createAsyncThunk(
  'stockItems/fetchStockItemById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiKey}/stockItems/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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

export const updateStockItem = createAsyncThunk(
  'stockItems/updateStockItem',
  async ({ id, updatedItem }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${apiKey}/stockItem/update/${id}`,
        updatedItem
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStockItemQuantity = createAsyncThunk(
  'stockItems/updateStockItemQuantity',
  async ({ id, updatedItem }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${apiKey}/stockItem/update/${id}`,
        updatedItem
      );
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
    selectedItem: null,
    error: null,
  },
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
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
      .addCase(fetchStockItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchStockItemById.rejected, (state, action) => {
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
      .addCase(updateStockItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStockItem.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.selectedItem = action.payload;
      })
      .addCase(updateStockItem.rejected, (state, action) => {
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
      })
      .addCase(updateStockItemQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStockItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.selectedItem = action.payload;
      })
      .addCase(updateStockItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectItem, clearSelectedItem } = stockItemsSlice.actions;
export default stockItemsSlice.reducer;
