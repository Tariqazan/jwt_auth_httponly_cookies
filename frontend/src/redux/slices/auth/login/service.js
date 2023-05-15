import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../../BaseUrl";
import { config } from "../../../WithCredentials";

export const loginRequest = createAsyncThunk(
    'user/login', async (formData) => {
        const response = await axios.post(`${BASE_URL}/auth/login/`, formData, config);
        if (response.status === 200) {
            window.location.assign("/");
        }
        return response.data;
    }
);