import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, updateUser } from '../../firebase/firestore';

const getWishlistIdentity = (item) => {
  if (!item) return '';
  if (item.wishlistKey) return item.wishlistKey;

  // OOTW can have overlapping ids across men/women collections.
  const isOotw = item.ootdType === 'ootw' || !!item.day;
  if (isOotw) {
    const gender = (item.gender || 'unknown').toString().toLowerCase();
    const idPart = item.id ?? item.day ?? '';
    return `ootw:${gender}:${idPart}`;
  }

  return String(item.id ?? '');
};

// Async thunk to fetch wishlist from Firestore
export const fetchWishlistFromFirestore = createAsyncThunk(
  'wishlist/fetchFromFirestore',
  async (userId) => {
    const userDoc = await getUser(userId);
    return userDoc?.wishlist || [];
  }
);

// Async thunk to update wishlist in Firestore
export const updateWishlistInFirestore = createAsyncThunk(
  'wishlist/updateInFirestore',
  async ({ userId, wishlist }) => {
    await updateUser(userId, { wishlist });
    return wishlist;
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishLoading : false,
    items: [], // array of product objects
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const outfit = action.payload;
      const targetIdentity = getWishlistIdentity(outfit);
      const exists = state.items.some(item => getWishlistIdentity(item) === targetIdentity);
      if (exists) {
        state.items = state.items.filter(item => getWishlistIdentity(item) !== targetIdentity);
      } else {
        state.items.push(outfit);
      }
    },
    setWishlist: (state, action) => {
      state.items = action.payload;
    },
    clearWishlist: (state) => {
      state.items = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistFromFirestore.pending, (state) => {
        state.wishLoading = true;
      })
      .addCase(fetchWishlistFromFirestore.fulfilled, (state, action) => {
        state.items = action.payload;
        state.wishLoading = false;
      })
      .addCase(fetchWishlistFromFirestore.rejected, (state) => {
        state.wishLoading = false;
      })
      .addCase(updateWishlistInFirestore.pending, (state) => {
        state.wishLoading = true;
      })
      .addCase(updateWishlistInFirestore.fulfilled, (state) => {
        state.wishLoading = false;
      })
      .addCase(updateWishlistInFirestore.rejected, (state) => {
        state.wishLoading = false;
      });
  }
});

export const { toggleWishlist, setWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 