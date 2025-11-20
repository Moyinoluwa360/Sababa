import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllOutfits, getAllOotw } from '../../firebase/firestore';

export const fetchOutfits = createAsyncThunk(
  'outfits/fetchOutfits',
  async () => {
    const outfits = await getAllOutfits();
    return outfits;
  }
);

export const fetchOOTW = createAsyncThunk(
  'outfits/fetchOOTW',
  async () => {
    const outfits = await getAllOotw();
    return outfits;
  }
);



const outfitsSlice = createSlice({
    name: 'outfits',
    initialState: {
      outfitsLoading : false,
      outfits: [], // array of product objects
      ootwLoading: false,
      ootw: [], 
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchOutfits.pending, (state) => {
          state.outfitsLoading = true;
        })
        .addCase(fetchOutfits.fulfilled, (state, action) => {
          state.outfits = action.payload;
          state.outfitsLoading = false;
          console.log("shepvwuiarp")
        })
        .addCase(fetchOutfits.rejected, (state) => {
          state.outfitsLoading = false;
        })
        .addCase(fetchOOTW.pending, (state) => {
          state.ootwLoading = true;
          console.log("shepvwuiarp")
        })
        .addCase(fetchOOTW.fulfilled, (state, action) => {
          state.ootw = action.payload;
          state.ootwLoading = false;
          console.log("sharp")
          console.log(action.payload)
        })
        .addCase(fetchOOTW.rejected, (state) => {
          state.ootwLoading = false;
          console.log("bbbbbbbbbbbbbbbcbc")
        })
        
    }
  });
  
  export default outfitsSlice.reducer; 