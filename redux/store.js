"use client"
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice"
import productReducer from "./Slices/productSlice"
import adminReducer from "./Slices/adminSlice"



export const store = configureStore({
    reducer:{
        user: userReducer,
        product: productReducer,
        admin:adminReducer
    }
})