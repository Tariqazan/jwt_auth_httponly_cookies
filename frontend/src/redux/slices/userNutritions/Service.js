import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../BaseUrl";
import { config } from "../../WithCredentials";

export const fetchUserNutrition = createAsyncThunk(
    'fetch/userNutritions', async () => {
        return await axios
        .get(`${BASE_URL}/dummy/selected/`, config)
        .then((response) => response.data)
    }
)