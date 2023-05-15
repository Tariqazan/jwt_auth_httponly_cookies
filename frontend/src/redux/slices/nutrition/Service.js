import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../BaseUrl";
import { config } from "../../WithCredentials";

export const fetchNutrition = createAsyncThunk(
    'fetch/nutritions', async () => {
        return await axios
        .get(`${BASE_URL}/dummy/list/`, config)
        .then((response) => response.data)
    }
)