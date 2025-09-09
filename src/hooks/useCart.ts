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

    const addCartItem = async (productId: string, quantity: number) => {
        try {
            const response = await apiClient.addCartItem(productId, quantity)

            if (response.status === 200) {
                alert('Item added to cart.')
                getActiveCart()
            }
        } catch (error) {
            console.error('Error adding cart item:', error)
        }
    }

    const removeCartItem = async (productId: string) => {
        try {
            const response = await apiClient.removeCartItem(productId)

            if (response.status === 200) {
                alert('Item removed from cart.')
                getActiveCart()
            }
        } catch (error) {
            console.error('Error removing cart item:', error)
        }
    }

    return { cart, addCartItem, removeCartItem }
}