import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    qolbaqlarproducts: [],
    qolbaqlarloading: false,
    errors: null
}

export const getAllband = createAsyncThunk("Allband/getAllband", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["qolbaqlar"],
    })
    return Categories.data;
})


const Allbandreducer = createSlice({
    name: "qolbaqlar",
    initialState,
    extraReducers: {
        [getAllband.pending]: (state) => {
            state.qolbaqlarloading = true
        },

        [getAllband.rejected]: (state, payload) => {
            state.qolbaqlarloading = false;
            state.errors = payload
        },

        [getAllband.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.qolbaqlarloading = false;
            state.qolbaqlarproducts = payload
        }
    }
})

export default Allbandreducer.reducer;