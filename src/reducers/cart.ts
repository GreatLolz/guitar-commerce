import { createSlice } from "@reduxjs/toolkit";
import type { Cart } from "../types/cart";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: { items: [] } as Cart,
        shippingCost: 0
    },
    reducers: {
        setActiveCart: (state, action) => {
            state.cart = action.payload
        },
        setShippingCost: (state, action) => {
            state.shippingCost = action.payload
        },
        addCartItem: (state, action) => {
            state.cart.items.push(action.payload)
        },
        removeCartItem: (state, action) => {
            state.cart.items = state.cart.items.filter((item) => item.product.id !== action.payload)
        }
    }
})

export const { setActiveCart, addCartItem, removeCartItem, setShippingCost } = cartSlice.actions

export default cartSlice.reducer
