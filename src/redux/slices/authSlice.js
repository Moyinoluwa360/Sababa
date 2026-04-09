// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlistFromFirestore } from "./wishlistSlice";
import { fetchOutfits } from "./outfitsSlice";

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
      const { uid, email, displayName, photoURL } = action.payload || {};
      if (!uid) {
        state.user = null;
        state.isLoading = false;
        return;
      }
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
export const setPostAuthData = (user) => async (dispatch) => {
  if (!user || !user.uid) {
    dispatch(authSlice.actions.clearUser());
    dispatch(authSlice.actions.setError(null));
    return;
  }

  dispatch(authSlice.actions.setUser(user));
  dispatch(authSlice.actions.setError(null))
  await dispatch(fetchWishlistFromFirestore(user.uid));
  await dispatch(fetchOutfits());
};

export const { setUser, setLoading, setError, clearUser } = authSlice.actions;
export default authSlice.reducer;