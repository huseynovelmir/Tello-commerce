import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from '../../Commerce';


const initialState = {
    searchProduct: [],
    searchloading: false,
    errors: null
}


//* create async request

export const getAllsearch = createAsyncThunk("search/getAllsearch", async (search) => {
    const searchData = await commerce.products.list({
        query: search,
    })
    return searchData.data
})


const Searchreducer = createSlice({
    name: "AllProduct",
    initialState,
    extraReducers: {
        [getAllsearch.pending]: (state) => {
            state.searchloading = true
        },

        [getAllsearch.rejected]: (state, payload) => {
            state.searchloading = false;
            state.errors = payload
        },

        [getAllsearch.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);
            state.searchloading = false;
            state.searchProduct = payload
        }
    }
})

export default Searchreducer.reducer;