import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchUserEmailById = createAsyncThunk(
  'userOrderData/fetchUserEmailById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiKey}/user/${id}`);
      return response.data.email;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const userOrderSlice = createSlice({
  name: 'userOrderData',
  initialState: {
    email: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserEmailById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserEmailById.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload;
      })
      .addCase(fetchUserEmailById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userOrderSlice.reducer;
