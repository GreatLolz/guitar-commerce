import { createSlice } from "@reduxjs/toolkit";
import type { CheckoutData } from "../types/checkout";

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        checkoutData: {} as CheckoutData
    },
    reducers: {
        setCheckoutData: (state, action) => {
            state.checkoutData = action.payload
        }
    }
})

export const { setCheckoutData } = checkoutSlice.actions

export default checkoutSlice.reducer