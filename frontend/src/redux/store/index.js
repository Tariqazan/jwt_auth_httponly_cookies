import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/auth/login/Login";
import { userReducer } from "../slices/user/User";
import { nutritionReducer } from "../slices/nutrition/Nutrition";
import { userNutritionReducer } from "../slices/userNutritions/UserNutritions";
import { addUserNutritionReducer } from "../slices/addUserNutritions/AddUserNutritions";
import { tokenInfoReducer } from "../slices/auth/verifyToken/VerifyToken";

export default configureStore({
    reducer: {
        tokenInfo: tokenInfoReducer,
        auth: authReducer,
        user: userReducer,
        nutrition: nutritionReducer,
        userNutrition: userNutritionReducer,
        addUserNutrition: addUserNutritionReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})