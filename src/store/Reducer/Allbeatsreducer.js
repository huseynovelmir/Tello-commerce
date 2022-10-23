import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    beatsproducts: [],
    beatsloading: false,
    errors: null
}

export const getAllbeats = createAsyncThunk("Allbeats/getAllbeats", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["beats"],
    })
    return Categories.data;
})


const Allbeatsreducer = createSlice({
    name: "beats",
    initialState,
    extraReducers: {
        [getAllbeats.pending]: (state) => {
            state.beatsloading = true
        },

        [getAllbeats.rejected]: (state, payload) => {
            state.beatsloading = false;
            state.errors = payload
        },

        [getAllbeats.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            console.log("heheheh");
            state.beatsloading = false;
            state.beatsproducts = payload
        }
    }
})

export default Allbeatsreducer.reducer;