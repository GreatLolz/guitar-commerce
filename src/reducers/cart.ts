import { createSlice } from "@reduxjs/toolkit";
import type { Cart } from "../types/cart";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: { products: [] } as Cart
    },
    reducers: {
        setActiveCart: (state, action) => {
            state.cart = action.payload
        },
        addCartItem: (state, action) => {
            state.cart.products.push(action.payload)
        },
        removeCartItem: (state, action) => {
            state.cart.products = state.cart.products.filter((item) => item.product.id !== action.payload)
        }
    }
})

export const { setActiveCart, addCartItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer
