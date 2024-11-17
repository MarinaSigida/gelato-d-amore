import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearOrders } from './ordersSlice';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

const isTokenValid = (expiration) => {
  const currentTime = Math.floor(Date.now() / 1000);
  return expiration > currentTime;
};

export const setUserFromToken = () => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      if (isTokenValid(decoded.exp)) {
        return {
          id: decoded.userId,
          email: decoded.email,
          role: decoded.role,
          token,
        };
      } else {
        console.error('Token has expired');
        localStorage.removeItem('jwtToken');
        return null;
      }
    } catch (error) {
      console.error('Token is invalid', error);
      localStorage.removeItem('jwtToken');
      return null;
    }
  }
  return null;
};

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiKey}/register`, userData);
      localStorage.setItem('jwtToken', response.data.token);
      return {
        id: response.data.user._id,
        email: response.data.user.email,
        role: response.data.user.role,
      };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiKey}/login`, credentials);
      localStorage.setItem('jwtToken', response.data.token);
      return {
        id: response.data.user.id,
        email: response.data.user.email,
        role: response.data.user.role,
        token: response.data.token,
      };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchUserByEmail = createAsyncThunk(
  'user/fetchUserByEmail',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiKey}/user?email=${email}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: setUserFromToken(),
    isAuthenticated: !!setUserFromToken(),
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('jwtToken');
      clearOrders();
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserByEmail.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      });
  },
});

export const monitorTokenExpiration = (dispatch) => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    const decoded = jwtDecode(token);
    const expirationTime = decoded.exp * 1000;
    const currentTime = Date.now();

    if (expirationTime <= currentTime) {
      dispatch(logout());
    } else {
      const timeout = expirationTime - currentTime;
      setTimeout(() => dispatch(logout()), timeout);
    }
  }
};

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;