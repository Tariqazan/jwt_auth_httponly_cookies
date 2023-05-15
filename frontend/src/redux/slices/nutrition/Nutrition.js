import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../InitialState";
import { fetchNutrition } from "./Service";


const nutritionSlice = createSlice({
    name: "nutrition",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchNutrition.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchNutrition.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      });
      builder.addCase(fetchNutrition.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
    },
  });
  


export const nutritionReducer = nutritionSlice.reducer