import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";



const initialState = {
    product: [],
    loading: false,
    error: null,
}

export const getProduct = createAsyncThunk("Product/getProduct", async ({
    id
}) => {
    const Product = await commerce.products.retrieve(id);
    return Product;
})


const productSlice = createSlice({
    name: 'Product',
    initialState,
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.loading = true
        },

        [getProduct.rejected]: (state, {
            payload
        }) => {
            state.loading = false;
            state.error = payload
        },

        [getProduct.fulfilled]: (state, {
            payload
        }) => {
            state.loading = false;
            state.product = payload
        }
    }
})

export default productSlice.reducer;