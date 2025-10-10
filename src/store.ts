import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import cartReducer from "./reducers/cart";
import checkoutReducer from "./reducers/checkout";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        checkout: checkoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store