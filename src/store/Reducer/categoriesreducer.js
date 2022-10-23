import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import { commerce} from "../../Commerce";


const initialState = {
    products1: [],
    loading1: false,
    errors: null
}

export const getAllCategories = createAsyncThunk("categories/getAllCategories", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["accessories"],
    })
    return Categories.data;
})


const categoriesreducer = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getAllCategories.pending]: (state) => { 
            state.loading1 = true
        },

        [getAllCategories.rejected]: (state, payload) => {
            state.loading1 = false;
            state.errors = payload
        },

        [getAllCategories.fulfilled]: (state, {
            payload
        }) => {
            state.loading1 = false;
            state.products1 = payload
        }
    }
})

export default categoriesreducer.reducer;