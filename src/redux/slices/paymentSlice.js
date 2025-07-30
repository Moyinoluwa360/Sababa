import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentStatus: "idle", // idle, processing, success, failed
  paymentData: null,
  error: null,
  loading: false
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
    setPaymentData: (state, action) => {
      state.paymentData = action.payload;
    },
    setPaymentError: (state, action) => {
      state.error = action.payload;
      state.paymentStatus = "failed";
    },
    setPaymentLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearPayment: (state) => {
      state.paymentStatus = "idle";
      state.paymentData = null;
      state.error = null;
      state.loading = false;
    },
    resetPaymentStatus: (state) => {
      state.paymentStatus = "idle";
      state.error = null;
    }
  }
});

export const { 
  setPaymentStatus, 
  setPaymentData, 
  setPaymentError, 
  setPaymentLoading,
  clearPayment,
  resetPaymentStatus
} = paymentSlice.actions;

export default paymentSlice.reducer; 