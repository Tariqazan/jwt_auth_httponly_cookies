import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../InitialState";
import { verifyToken } from "./Service";


const tokenInfoSlice = createSlice({
    name: "tokenInfo",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(verifyToken.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(verifyToken.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
        state.tokenInfo = true;
      });
      builder.addCase(verifyToken.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
        state.tokenInfo = false;
      });
    },
  });
  


export const tokenInfoReducer = tokenInfoSlice.reducer