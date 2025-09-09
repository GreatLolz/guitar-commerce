import { setActiveCart } from "../reducers/cart";
import ApiClient from "../utils/api";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";

export function useCart() {
    const apiClient = ApiClient.getInstance();
    const cart = useAppSelector((state) => state.cart.cart)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getActiveCart()
    }, [])

    const getActiveCart = async () => {
        try {
            const response = await apiClient.getActiveCart()
            dispatch(setActiveCart(response))
        } catch (error) {
            console.error('Error fetching active cart:', error)
        }
    }

    return { cart }
}