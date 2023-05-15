import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../../BaseUrl";
import { config } from "../../../WithCredentials";

export const verifyToken = createAsyncThunk(
    'verify/token', async () => {
        const response = await axios.get(`${BASE_URL}/auth/token/verify/`, config);
        if (response.data.valid === true) {
            console.log(response.data)
        } else {
            const data = { "refresh": response.data.token }
            await axios.post(`${BASE_URL}/auth/token/refresh/`, data, config)
            .then((response) => console.log(response.data))
        }
        return response.data;
    }
);