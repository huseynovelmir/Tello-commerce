import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    commerce
} from "../../Commerce";

const initialState = {
    productsBas: [],
    loadingBas: false,
    errors: null
}

//* create async request

export const getBasket = createAsyncThunk("Basket/getBasket", async () => {
    const Cart = await commerce.cart.contents()
    return Cart;
})

// export const removeBasket = createAsyncThunk("Basket/getBasket", async (id) => {
//     const Cart = await commerce.cart.remove(id)
//     return Cart;
// })

export const deleteBasketItem = createAsyncThunk('basket/fetchBasket', async (data) => {
    try {
        const result = await fetch(`https://api.chec.io/v1/carts/${data?.basket_id}/items/${data?.line_item_id}`, {
            method: "DELETE",
            headers: {
                "X-Authorization": "pk_47547f71f2fe21e68cb5e708e9fb264e744b28679ad95",
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })

        const response = await result.json();
        console.log(response);
        return response?.line_items

    } catch (error) {
        if (!error.response) {
            // console.log(error.message);
            throw error
        }
    }
})

export const updateBasket = createAsyncThunk('basket/fetchBasket', async (data) => {
    const body = {
        "quantity": data.quantity,
    }
    try {
        const result = await fetch(`https://api.chec.io/v1/carts/${data.basket_id}/items/${data.line_item_id}`, {
            method: "PUT",
            headers: {
                "X-Authorization": "pk_47547f71f2fe21e68cb5e708e9fb264e744b28679ad95",
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        console.log(response);
        return response?.line_items

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})

const BasketSlice = createSlice({
    name: "Basket",
    initialState,

    extraReducers: {
        [getBasket.pending]: (state) => {
            state.loadingBas = true
        },

        [getBasket.rejected]: (state, payload) => {
            state.loadingBas = false;
            state.errors = payload
        },

        [getBasket.fulfilled]: (state, {
            payload
        }) => {
            state.loadingBas = false;
            state.productsBas = payload
        },
        [deleteBasketItem.pending]: (state) => {
            state.loadingBas = true
        },
        [deleteBasketItem.rejected]: (state, {
            payload
        }) => {
            state.loadingBas = false
            state.errors = payload
        },
        [deleteBasketItem.fulfilled]: (state, {
            payload
        }) => {
            state.loadingBas = false
            state.productsBas = payload
        },
        [updateBasket.pending]: (state) => {
            state.loadingBas = true
        },

        [updateBasket.rejected]: (state, payload) => {
            state.loadingBas = false;
            state.errors = payload
        },

        [updateBasket.fulfilled]: (state, {
            payload
        }) => {
            state.loadingBas = false;
            state.productsBas = payload
        }
    }
})

// export const {
//     removeFromBasket
// } = BasketSlice.actions;

export default BasketSlice.reducer;
