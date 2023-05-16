import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../../BaseUrl";
import { config } from "../../../WithCredentials";

export const refreshToken = createAsyncThunk(
    'refresh/token', async (refresh) => {
        const data = { "refresh": refresh }
        await axios.post(`${BASE_URL}/auth/token/refresh/`, data, config)
            .then((response) => console.log(response.data))
    }
);