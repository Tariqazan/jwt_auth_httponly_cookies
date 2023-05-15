import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../InitialState";
import { fetchUser } from "./Service";


const userSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchUser.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
        state.isAuthenticated = true;
      });
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
    },
  });
  


export const userReducer = userSlice.reducer