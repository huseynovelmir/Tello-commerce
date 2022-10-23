import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    elementproduct: [],
    elementloading: false,
    errors: null
}

export const getElement = createAsyncThunk("allelement/getElement", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["xxx"],
    })
    return Categories.data;
})


const elementreducer = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getElement.pending]: (state) => {
            state.samsungloading = true
        },

        [getElement.rejected]: (state, payload) => {
            state.samsungloading = false;
            state.errors = payload
        },

        [getElement.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);

            state.samsungloading = false;
            state.samsungproduct = payload
        }
    }
})

export default elementreducer.reducer;