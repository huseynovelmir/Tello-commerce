import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    honorproduct: [],
    honorloading: false,
    errors: null
}

export const getHonor = createAsyncThunk("allhonor/getHonor", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["honor"],
    })
    return Categories.data;
})


const Honorreducer = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getHonor.pending]: (state) => {
            state.honorloading = true
        },

        [getHonor.rejected]: (state, payload) => {
            state.honorloading = false;
            state.errors = payload
        },

        [getHonor.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);

            state.honorloading = false;
            state.honorproduct = payload
        }
    }
})

export default Honorreducer.reducer;