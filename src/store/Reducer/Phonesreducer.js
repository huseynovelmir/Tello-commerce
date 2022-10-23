import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";

 
const initialState = {
    phoneproducts: [],
    phoneloading: false,
    errors: null
}

export const getAllphones = createAsyncThunk("allphones/getAllphones", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["telefonlar"],
    })
    return Categories.data;
})


const Phonesreducer = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getAllphones.pending]: (state) => {
            state.phoneloading = true
        },

        [getAllphones.rejected]: (state, payload) => {
            state.phoneloading = false;
            state.errors = payload
        },

        [getAllphones.fulfilled]: (state, { payload }) => {
            console.log(payload);
          
            state.phoneloading = false;
            state.phoneproducts = payload
        }
    }
})

export default Phonesreducer.reducer;