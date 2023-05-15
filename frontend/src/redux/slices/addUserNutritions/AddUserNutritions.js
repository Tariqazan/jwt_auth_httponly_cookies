import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../InitialState";
import { addUserNutrition } from "./Service";


const addUserNutritionSlice = createSlice({
    name: "addUserNutrition",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(addUserNutrition.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(addUserNutrition.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      });
      builder.addCase(addUserNutrition.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
    },
  });
  


export const addUserNutritionReducer = addUserNutritionSlice.reducer