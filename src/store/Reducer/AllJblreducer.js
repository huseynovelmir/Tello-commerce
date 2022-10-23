import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    jblproducts: [],
    jblloading: false,
    errors: null
}

export const getAlljbl = createAsyncThunk("alljbl/getAlljbl", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["jbl"],
    })
    return Categories.data;
})


const Alljblreducer = createSlice({
    name: "jbl",
    initialState,
    extraReducers: {
        [getAlljbl.pending]: (state) => {
            state.jblloading = true
        },

        [getAlljbl.rejected]: (state, payload) => {
            state.jblloading = false;
            state.errors = payload
        },

        [getAlljbl.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.jblloading = false;
            state.jblproducts = payload
        }
    }
})

export default Alljblreducer.reducer;