import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../../BaseUrl";
import { config } from "../../../WithCredentials";

export const verifyToken = createAsyncThunk(
    'verify/token', async () => {
        const response = await axios.get(`${BASE_URL}/auth/token/verify/`, config);
        return response.data;
    }
);