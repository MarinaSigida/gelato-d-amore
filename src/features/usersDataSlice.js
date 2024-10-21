import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchUserEmailById = createAsyncThunk(
  'usersData/fetchUserEmailById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiKey}/user/${id}`);
      return response.data.email;
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
