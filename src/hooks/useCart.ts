import { setActiveCart, setShippingCost } from "../reducers/cart";
import ApiClient from "../utils/api";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux";

export function useCart() {
    const apiClient = ApiClient.getInstance();
    const [loading, setLoading] = useState(false)
    const cart = useAppSelector((state) => state.cart.cart)
    const shippingCost = useAppSelector((state) => state.cart.shippingCost)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getActiveCart()
    }, [])

    const getActiveCart = async () => {
        try {
            setLoading(true)
            const response = await apiClient.getActiveCart()
            dispatch(setActiveCart(response))
        } catch (error) {
            console.error('Error fetching active cart:', error)
        } finally {
            setLoading(false)
        }
    }

    const addCartItem = async (productId: string, quantity: number) => {
        try {
            setLoading(true)
            const response = await apiClient.addCartItem(productId, quantity)

            if (response.status === 200) {
                alert('Item added to cart.')
                getActiveCart()
            }
        } catch (error) {
            console.error('Error adding cart item:', error)
        } finally {
            setLoading(false)
        }
    }

    const removeCartItem = async (id: string) => {
        try {
            setLoading(true)
            const response = await apiClient.removeCartItem(id)

            if (response.status === 200) {
                alert('Item removed from cart.')
                getActiveCart()
            }
        } catch (error) {
            console.error('Error removing cart item:', error)
        } finally {
            setLoading(false)
        }
    }

    const setShipping = (cost: number) => {
        dispatch(setShippingCost(cost))
    }

    return { cart, addCartItem, removeCartItem, loading, setShipping, shippingCost }
}