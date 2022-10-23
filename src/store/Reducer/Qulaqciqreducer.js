import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    qulaqciqlarproducts: [],
    qulaqciqlarloading: false,
    errors: null
}

export const getAllqulaqciq = createAsyncThunk("allqulaqciq/getAllqulaqciq", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["qulaqciqlar"],
    })
    return Categories.data;
})


const Qulaqciqreducer = createSlice({
    name: "qulaqciqlar",
    initialState,
    extraReducers: {
        [getAllqulaqciq.pending]: (state) => {
            state.qulaqciqlarloading = true
        },

        [getAllqulaqciq.rejected]: (state, payload) => {
            state.qulaqciqlarloading = false;
            state.errors = payload
        },

        [getAllqulaqciq.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.qulaqciqlarloading = false;
            state.qulaqciqlarproducts = payload
        }
    }
})

export default Qulaqciqreducer.reducer;