import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async ({ page, limit }) => {
    const response = await axios.get(`${apiKey}/orders`, {
      params: { page, limit },
    });
    return response.data;
  }
);

export const fetchOrderById = createAsyncThunk(
  'orders/fetchOrderById',
  async (id) => {
    const response = await axios.get(`${apiKey}/orders/${id}`);
    return response.data;
  }
);

export const fetchOrdersByUserId = createAsyncThunk(
  'orders/fetchOrdersByUserId',
  async ({ userId, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiKey}/orders/userId/${userId}`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData, { rejectWithValue, dispatch, getState }) => {
    try {
      const response = await axios.post(`${apiKey}/order`, orderData);
      //retrieve the current user from Redux state
      const { user } = getState().user;
      if (user && user._id) {
        dispatch(fetchOrdersByUserId(user._id));
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const cancelOrder = createAsyncThunk(
  'orders/cancelOrder',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${apiKey}/orders/cancel/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Échec de l'annulation de la commande"
      );
    }
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ id, updatedOrder }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${apiKey}/orders/update/${id}`,
        updatedOrder
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
    selectedOrder: null,
    error: null,
    currentPage: 1,
    totalPages: 1,
    totalOrders: 0,
  },
  reducers: {
    selectOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    clearSelectedOrder: (state) => {
      state.selectedOrder = null;
    },

    clearOrders: (state) => {
      state.orders = [];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.totalOrders;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedOrder = {
          order: action.payload.order,
          orderItems: action.payload.orderItems,
        };
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchOrdersByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.totalOrders;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchOrdersByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        const order = state.orders.find(
          (order) => order._id === action.meta.arg
        );
        if (order) {
          order.status = 'canceled';
        }
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.orders.findIndex(
          (order) => order._id === action.payload.order._id
        );
        if (index !== -1) {
          state.orders[index] = action.payload.order;
        }
        state.selectedOrder = {
          order: action.payload.order,
          orderItems: action.payload.orderItems,
        };
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectOrder, clearSelectedOrder, clearOrders, setCurrentPage } =
  ordersSlice.actions;
export default ordersSlice.reducer;
