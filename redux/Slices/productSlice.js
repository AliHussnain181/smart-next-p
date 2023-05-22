import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk(
    "product/getProducts",
    async ({ category , keyword }) => {
        const response = await axios.get(`/api/product/products?keyword=${keyword}&category=${category}`);
        return response.data;
    }
);



export const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})


export default productSlice.reducer;
