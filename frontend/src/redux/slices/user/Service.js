import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../BaseUrl";
import { config } from "../../WithCredentials";

export const fetchUser = createAsyncThunk(
    'user/data', async () => {
        return await axios
        .get(`${BASE_URL}/cookies/token/user/`, config)
        .then((response) => response.data)
    }
)