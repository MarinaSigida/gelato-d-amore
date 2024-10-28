import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchUserById = createAsyncThunk(
  'usersData/fetchUserById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiKey}/user/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  'usersData/fetchAllUsers',
  async () => {
    const response = await axios.get(`${apiKey}/users`);
    return response.data;
  }
);

const usersDataSlice = createSlice({
  name: 'usersData',
  initialState: {
    users: [],
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersDataSlice.reducer;
