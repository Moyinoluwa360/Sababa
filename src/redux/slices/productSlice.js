import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";

// Search and fetch products from AliExpress API
export const searchAndFetchProducts = createAsyncThunk(
  "products/searchAndFetch",
  async ({ searchQuery, filters = {} }) => {
    try {
      console.log('🚀 Redux: Starting product search:', { searchQuery, filters });
      
      const products = await apiService.searchProducts(searchQuery, {
        platform: 'aliexpress',
        limit: 20,
        ...filters
      });
      
      console.log('✅ Redux: Products fetched successfully:', products.length);
      return products;
    } catch (error) {
      console.error('❌ Redux: Product search failed:', error);
      throw new Error(`Failed to search products: ${error.message}`);
    }
  }
);

// Fetch product details from AliExpress API
export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId) => {
    try {
      const product = await apiService.getProductDetails(productId, 'aliexpress');
      return product;
    } catch (error) {
      throw new Error(`Failed to fetch product details: ${error.message}`);
    }
  }
);

// Fetch trending products from AliExpress API
export const fetchTrendingProducts = createAsyncThunk(
  "products/fetchTrending",
  async (options = {}) => {
    try {
      const products = await apiService.getAliExpressTrendingProducts(options);
      return products;
    } catch (error) {
      throw new Error(`Failed to fetch trending products: ${error.message}`);
    }
  }
);

const initialState = {
  products: [],
  selectedProduct: null,
  trendingProducts: [],
  loading: false,
  error: null,
  filters: {
    platform: "aliexpress",
    category: "",
    searchQuery: "",
    minPrice: 0,
    maxPrice: 1000,
    sort: "SALE_PRICE_ASC"
  },
  searchLoading: false,
  searchError: null,
  productDetailsLoading: false,
  productDetailsError: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    clearError: (state) => {
      state.error = null;
      state.searchError = null;
      state.productDetailsError = null;
    },
    clearSearchError: (state) => {
      state.searchError = null;
    },
    clearProductDetailsError: (state) => {
      state.productDetailsError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Search and Fetch Products
      .addCase(searchAndFetchProducts.pending, (state) => {
        state.searchLoading = true;
        state.searchError = null;
      })
      .addCase(searchAndFetchProducts.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.products = action.payload;
      })
      .addCase(searchAndFetchProducts.rejected, (state, action) => {
        state.searchLoading = false;
        state.searchError = action.error.message;
      })
      // Fetch Product Details
      .addCase(fetchProductDetails.pending, (state) => {
        state.productDetailsLoading = true;
        state.productDetailsError = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productDetailsLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.productDetailsLoading = false;
        state.productDetailsError = action.error.message;
      })
      // Fetch Trending Products
      .addCase(fetchTrendingProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingProducts = action.payload;
      })
      .addCase(fetchTrendingProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { 
  setSelectedProduct, 
  setFilters, 
  clearFilters, 
  clearError,
  clearSearchError,
  clearProductDetailsError
} = productSlice.actions;

export default productSlice.reducer; 