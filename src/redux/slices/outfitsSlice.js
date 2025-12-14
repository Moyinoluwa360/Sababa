import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllOutfits, getAllMenOotw, getAllWomenOotw } from '../../firebase/firestore';

export const fetchOutfits = createAsyncThunk(
  'outfits/fetchOutfits',
  async () => {
    const outfits = await getAllOutfits();
    return outfits;
  }
);

export const fetchMenOOTW = createAsyncThunk(
  'outfits/fetchMenOOTW',
  async () => {
    const outfits = await getAllMenOotw();
    return outfits;
  }
);

export const fetchWomenOOTW = createAsyncThunk(
  'outfits/fetchWomenOOTW',
  async () => {
    const outfits = await getAllWomenOotw();
    return outfits;
  }
);




const outfitsSlice = createSlice({
    name: 'outfits',
    initialState: {
      outfitsLoading : false,
      outfits: [], // array of product objects
      menOTTWLoading: false,
      menOOTW: [],
      womenOOTWLoading: false,
      womenOOTW: [], 
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
        .addCase(fetchMenOOTW.pending, (state) => {
          state.menOTTWLoading = true;
        })
        .addCase(fetchMenOOTW.fulfilled, (state, action) => {
          state.menOOTW = action.payload;
          state.menOTTWLoading = false;
          console.log(action.payload)
        })
        .addCase(fetchMenOOTW.rejected, (state) => {
          state.menOTTWLoading = false;
        })
        .addCase(fetchWomenOOTW.pending, (state) => {
          state .womenOOTWLoading= true;
        })
        .addCase(fetchWomenOOTW.fulfilled, (state, action) => {
          state.womenOOTW = action.payload;
          state.womenOOTWLoading = false;
          console.log(action.payload)
        })
        .addCase(fetchWomenOOTW.rejected, (state) => {
          state.womenOOTWLoading = false;
        })
        
    }
  });
  
  export default outfitsSlice.reducer; 