import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../InitialState";
import { verifyToken } from "./Service";


const isAuthenticatedSlice = createSlice({
    name: "isAuthenticated",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(verifyToken.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(verifyToken.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
        state.isAuthenticated = true;
      });
      builder.addCase(verifyToken.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
        state.isAuthenticated = false;
      });
    },
  });
  


export const isAuthenticatedReducer = isAuthenticatedSlice.reducer