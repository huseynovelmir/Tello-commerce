import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";


const initialState = {
    xiomioproduct: [],
    xiomioloading: false,
    errors: null
}

export const getxiomio = createAsyncThunk("allxiomio/getxiomio", async () => {
    const Categories = await commerce.products.list({
        category_slug: ["xiaomi"],
    })
    return Categories.data;
})


const Xiomioreducer = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [getxiomio.pending]: (state) => {
            state.xiomioloading = true
        },

        [getxiomio.rejected]: (state, payload) => {
            state.xiomioloading = false;
            state.errors = payload
        },

        [getxiomio.fulfilled]: (state, {
            payload
        }) => {
            console.log(payload);

            state.xiomioloading = false;
            state.xiomioproduct = payload
        }
    }
})

export default Xiomioreducer.reducer;