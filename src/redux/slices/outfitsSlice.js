import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllOutfits } from '../../firebase/firestore';

export const fetchOutfits = createAsyncThunk(
  'outfits/fetchOutfits',
  async () => {
    const outfits = await getAllOutfits();
    return outfits;
  }
);

const outfitsSlice = createSlice({
    name: 'outfits',
    initialState: {
      outfitsLoading : false,
      outfits: [], // array of product objects
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchOutfits.pending, (state) => {
          state.outfitsLoading = true;
        })
        .addCase(fetchOutfits.fulfilled, (state, action) => {
        state.outfits = action.payload;
          state.outfitsLoading = false;
        })
        .addCase(fetchOutfits.rejected, (state) => {
          state.outfitsLoading = false;
        })
        
    }
  });
  
  export default outfitsSlice.reducer; 