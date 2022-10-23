import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    applewatchproducts: [],
    applewatchloading: false,
    errors: null
}

export const getAllapplewatch = createAsyncThunk("Allapplewatch/getAllapplewatch", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["applewatch"],
    })
    return Categories.data;
})


const Allapplewatchreducer = createSlice({
    name: "applewatch",
    initialState,
    extraReducers: {
        [getAllapplewatch.pending]: (state) => {
            state.applewatchloading = true
        },

        [getAllapplewatch.rejected]: (state, payload) => {
            state.applewatchloading = false;
            state.errors = payload
        },

        [getAllapplewatch.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.applewatchloading = false;
            state.applewatchproducts = payload
        }
    }
})

export default Allapplewatchreducer.reducer;