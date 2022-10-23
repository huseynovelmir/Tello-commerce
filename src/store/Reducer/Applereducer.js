import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    appleproduct: [],
    appleloading: false,
    errors: null
}

export const getiphone = createAsyncThunk("alliphone/getiphone", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["iphone"],
    })
    return Categories.data;
})


const Applereducer = createSlice({
    name: "iphone",
    initialState,
    extraReducers: {
        [getiphone.pending]: (state) => {
            state.appleloading = true
        },

        [getiphone.rejected]: (state, payload) => {
            state.appleloading = false;
            state.errors = payload
        },

        [getiphone.fulfilled]: (state, {
            payload
        }) => {
           

            state.appleloading = false;
            state.appleproduct = payload
        }
    }
})

export default Applereducer.reducer;