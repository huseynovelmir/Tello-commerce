import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../Commerce';


const initialState = {
    products: [],
    loading: false,
    errors: null
}


//* create async request

export const getAllProducts = createAsyncThunk("Products/getAllProducts", async () => {
    const products = await commerce.products.list();
    return products.data;
})


const fetchSlice = createSlice({
    name: "AllProduct",
    initialState,
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.loading = true
        },

        [getAllProducts.rejected]: (state, payload) => {
            state.loading = false;
            state.errors = payload
        },

        [getAllProducts.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.loading = false;
            state.products = payload
        }
    }
})

export default fetchSlice.reducer;