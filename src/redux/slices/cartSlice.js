import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, updateUser } from '../../firebase/firestore';

const initialState = {
  items: [],
  totalPrice: 0,
  totalProducts: 0,
  deliveryPrice: 4000,
  orderTotal: 4000,
  loading: false,
  error: null
};

function recalculateTotals(state) {
  state.totalPrice = state.items.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  state.totalProducts = state.items.reduce((count, item) => count + item.quantity, 0);
  state.orderTotal = state.totalPrice + state.deliveryPrice;
}

// Async thunk to fetch cart from Firestore
export const fetchCartFromFirestore = createAsyncThunk(
  'cart/fetchFromFirestore',
  async (userId) => {
    const userDoc = await getUser(userId);
    return userDoc?.cart || [];
  }
);

// Async thunk to update cart in Firestore
export const updateCartInFirestore = createAsyncThunk(
  'cart/updateInFirestore',
  async ({ userId, cart, totalPrice, totalProducts, deliveryPrice, orderTotal }) => {
    await updateUser(userId, { 
      cart, 
      totalPrice: typeof totalPrice === 'number' && !isNaN(totalPrice) ? totalPrice : 0,
      totalProducts: typeof totalProducts === 'number' && !isNaN(totalProducts) ? totalProducts : 0,
      deliveryPrice: typeof deliveryPrice === 'number' && !isNaN(deliveryPrice) ? deliveryPrice : 4000,
      orderTotal: typeof orderTotal === 'number' && !isNaN(orderTotal) ? orderTotal : 4000
    });
    return cart;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        // Calculate final price with 15% markup
        const finalPrice = product.originalPrice * 1.15;
        state.items.push({
          ...product,
          quantity,
          finalPrice: Math.round(finalPrice * 100) / 100 // Round to 2 decimal places
        });
      }
      recalculateTotals(state);
    },
    
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      recalculateTotals(state);
    },
    
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== productId);
        } else {
          item.quantity = quantity;
        }
      }
      recalculateTotals(state);
    },
    
    clearCart: (state) => {
      state.items = [];
      recalculateTotals(state);
    },
    
    setCartItems: (state, action) => {
      state.items = action.payload;
      recalculateTotals(state);
    },
    
    changeQuantityByType: (state, action) => {
      const { productId, actionType } = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
        if (actionType === "add") {
          item.quantity += 1;
        } else if (actionType === "minus") {
          item.quantity -= 1;
          if (item.quantity <= 0) {
            state.items = state.items.filter(item => item.id !== productId);
          }
        }
      }
      recalculateTotals(state);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartFromFirestore.fulfilled, (state, action) => {
        state.items = action.payload;
        recalculateTotals(state);
      });
  }
});

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = (state) => {
  return state.cart.items.reduce((total, item) => {
    return total + (item.finalPrice * item.quantity);
  }, 0);
};

export const selectCartItemCount = (state) => {
  return state.cart.items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);
};

export const selectCartItemsByPlatform = (state) => {
  const items = state.cart.items;
  const grouped = {};
  
  items.forEach(item => {
    if (!grouped[item.platform]) {
      grouped[item.platform] = [];
    }
    grouped[item.platform].push(item);
  });
  
  return grouped;
};

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart,
  setCartItems,
  changeQuantityByType
} = cartSlice.actions;

export default cartSlice.reducer; 