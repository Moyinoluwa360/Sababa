// src/redux/store.js
import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import wishlistReducer from "./slices/wishlistSlice";
import outfitsReducer from "./slices/outfitsSlice";
import { toggleWishlist, updateWishlistInFirestore } from "./slices/wishlistSlice";

const wishlistListenerMiddleware = createListenerMiddleware();

wishlistListenerMiddleware.startListening({
  actionCreator: toggleWishlist,
  effect: async (_action, listenerApi) => {
    const state = listenerApi.getState();
    const userId = state.auth?.user?.uid;
    if (!userId) return;

    const wishlist = state.wishlist?.items || [];
    listenerApi.dispatch(updateWishlistInFirestore({ userId, wishlist }));
  },
});

export const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer,
    outfits: outfitsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).prepend(wishlistListenerMiddleware.middleware),
});