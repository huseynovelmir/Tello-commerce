import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";

 
const initialState = {
    samsungproduct: [],
    samsungloading: false,
    errors: null
}

export const getSamsung = createAsyncThunk("allsamsung/getSamsung", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["samsung"],
    })
    return Categories.data;
})


const Samsungreducer = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getSamsung.pending]: (state) => {
            state.samsungloading = true
        },

        [getSamsung.rejected]: (state, payload) => {
            state.samsungloading = false;
            state.errors = payload
        },

        [getSamsung.fulfilled]: (state, { payload }) => {
            console.log(payload);
          
            state.samsungloading = false;
            state.samsungproduct = payload
        }
    }
})

export default Samsungreducer.reducer;