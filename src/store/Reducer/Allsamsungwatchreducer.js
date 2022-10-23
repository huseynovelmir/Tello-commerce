import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    samsungwatchproducts: [],
    samsungwatchloading: false,
    errors: null
}

export const getallsamsungwatch = createAsyncThunk("allsamsungwatch/getallsamsungwatch", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["samsungwatch"],
    })
    return Categories.data;
})


const allsamsungwatchreducer = createSlice({
    name: "samsungwatch",
    initialState,
    extraReducers: {
        [getallsamsungwatch.pending]: (state) => {
            state.samsungwatchloading = true
        },

        [getallsamsungwatch.rejected]: (state, payload) => {
            state.samsungwatchloading = false;
            state.errors = payload
        },

        [getallsamsungwatch.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.samsungwatchloading = false;
            state.samsungwatchproducts = payload
        }
    }
})

export default allsamsungwatchreducer.reducer;