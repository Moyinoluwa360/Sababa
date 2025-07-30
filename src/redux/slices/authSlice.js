// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlistFromFirestore } from "./wishlistSlice";
import { fetchCartFromFirestore } from "./cartSlice";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;
      state.user = { uid, email, displayName, photoURL };
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

// Thunk to set user and load wishlist and cart
export const setUserAndLoadWishlist = (user) => async (dispatch) => {
  dispatch(authSlice.actions.setUser(user));
  if (user && user.uid) {
    await dispatch(fetchWishlistFromFirestore(user.uid));
    await dispatch(fetchCartFromFirestore(user.uid));
  }
};

export const { setUser, setLoading, setError, clearUser } = authSlice.actions;
export default authSlice.reducer;