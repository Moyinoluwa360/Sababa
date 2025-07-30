import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder, getOrders, getOrder, updateOrder } from "../../firebase/firestore";

// Async thunks
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (filters = {}) => {
    const orders = await getOrders(filters);
    return orders;
  }
);

export const fetchOrder = createAsyncThunk(
  "orders/fetchOrder",
  async (orderId) => {
    const order = await getOrder(orderId);
    return order;
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData) => {
    const order = await addOrder(orderData);
    return order;
  }
);

export const updateOrderAction = createAsyncThunk(
  "orders/updateOrder",
  async ({ orderId, updates }) => {
    const order = await updateOrder(orderId, updates);
    return order;
  }
);

const initialState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  error: null,
  filters: {
    orderStatus: "",
    paymentStatus: ""
  }
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    clearError: (state) => {
      state.error = null;
    },
    addToOrders: (state, action) => {
      state.orders.unshift(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Orders
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch Single Order
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedOrder = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Create Order
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.unshift(action.payload);
      })
      // Update Order
      .addCase(updateOrderAction.fulfilled, (state, action) => {
        const index = state.orders.findIndex(o => o.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = { ...state.orders[index], ...action.payload };
        }
        if (state.selectedOrder && state.selectedOrder.id === action.payload.id) {
          state.selectedOrder = { ...state.selectedOrder, ...action.payload };
        }
      });
  }
});

export const { 
  setSelectedOrder, 
  setFilters, 
  clearFilters, 
  clearError,
  addToOrders
} = orderSlice.actions;

export default orderSlice.reducer; 