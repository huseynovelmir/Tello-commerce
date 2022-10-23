import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    watchproducts: [],
    watchloading: false,
    errors: null
}

export const getAllwatch = createAsyncThunk("allwatch/getAllwatch", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["watch"],
    })
    return Categories.data;
})


const Allwatchreducer = createSlice({
    name: "watch",
    initialState,
    extraReducers: {
        [getAllwatch.pending]: (state) => {
            state.watchloading = true
        },

        [getAllwatch.rejected]: (state, payload) => {
            state.watchloading = false;
            state.errors = payload
        },

        [getAllwatch.fulfilled]: (state, {payload}) => {
            console.log(payload);
            console.log("heheheh");
            state.watchloading = false;
            state.watchproducts = payload
        }
    }
})

export default Allwatchreducer.reducer;