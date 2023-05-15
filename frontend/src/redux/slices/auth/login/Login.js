import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../InitialState";
import { loginRequest } from "./service";


const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(loginRequest.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(loginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      });
      builder.addCase(loginRequest.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
    },
  });
  


export const authReducer = authSlice.reducer