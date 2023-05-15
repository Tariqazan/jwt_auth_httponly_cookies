import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../BaseUrl";
import { config } from "../../WithCredentials";

export const addUserNutrition = createAsyncThunk(
    'add/userNutritions', async (data) => {
        return await axios
        .post(`${BASE_URL}/dummy/add/selected/`, data, config)
        .then((response) => response.data)
    }
)