import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../InitialState";
import { fetchUserNutrition } from "./Service";


const userNutritionSlice = createSlice({
    name: "userNutrition",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchUserNutrition.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchUserNutrition.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      });
      builder.addCase(fetchUserNutrition.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
    },
  });
  


export const userNutritionReducer = userNutritionSlice.reducer