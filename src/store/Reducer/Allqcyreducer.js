import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    qcyproducts: [],
    qcyloading: false,
    errors: null
}

export const getallqcy = createAsyncThunk("allqcy/getallqcy", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["qcy"],
    })
    return Categories.data;
})


const allqcyreducer = createSlice({
    name: "qcy",
    initialState,
    extraReducers: {
        [getallqcy.pending]: (state) => {
            state.qcyloading = true
        },

        [getallqcy.rejected]: (state, payload) => {
            state.qcyloading = false;
            state.errors = payload
        },

        [getallqcy.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.qcyloading = false;
            state.qcyproducts = payload
        }
    }
})

export default allqcyreducer.reducer;