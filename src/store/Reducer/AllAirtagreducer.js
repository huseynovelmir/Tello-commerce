import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    airtagproducts: [],
    airtagloading: false,
    errors: null
}

export const getAllAirtag = createAsyncThunk("AllAirtag/getAllAirtag", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["airtag"],
    })
    return Categories.data;
})


const AllAirtagreducer = createSlice({
    name: "airtag",
    initialState,
    extraReducers: {
        [getAllAirtag.pending]: (state) => {
            state.airtagloading = true
        },

        [getAllAirtag.rejected]: (state, payload) => {
            state.airtagloading = false;
            state.errors = payload
        },

        [getAllAirtag.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.airtagloading = false;
            state.airtagproducts = payload
        }
    }
})

export default AllAirtagreducer.reducer;