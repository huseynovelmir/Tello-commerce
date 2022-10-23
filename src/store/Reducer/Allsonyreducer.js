import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    sonyproducts: [],
    sonyloading: false,
    errors: null
}

export const getAllsony = createAsyncThunk("Allsony/getAllsony", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["sony"],
    })
    return Categories.data;
})


const Allsonyreducer = createSlice({
    name: "sony",
    initialState,
    extraReducers: {
        [getAllsony.pending]: (state) => {
            state.sonyloading = true
        },

        [getAllsony.rejected]: (state, payload) => {
            state.sonyloading = false;
            state.errors = payload
        },

        [getAllsony.fulfilled]: (state, {payload}) => {
            console.log(payload);
            console.log("heheheh");
            state.sonyloading = false;
            state.sonyproducts = payload
        }
    }
})

export default Allsonyreducer.reducer;