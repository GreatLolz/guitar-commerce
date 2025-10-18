import { setCheckoutData } from "../reducers/checkout";
import type { CheckoutData } from "../types/checkout";
import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect, useState } from "react";
import ApiClient from "../utils/api";

export function useCheckout() {
    const apiClient = ApiClient.getInstance();
    const [loading, setLoading] = useState(false)
    const checkoutData = useAppSelector((state) => state.checkout.checkoutData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getCheckoutData();
    }, [])

    const getCheckoutData = () => {
        const checkoutData = localStorage.getItem('checkoutData')
        if (checkoutData) {
            dispatch(setCheckoutData(JSON.parse(checkoutData)))
        }
    }

    const setCheckout = (data: CheckoutData) => {
        dispatch(setCheckoutData(data))
        localStorage.setItem('checkoutData', JSON.stringify(data))
    }

    const checkout = async () => {
        try {
            setLoading(true)
            return await apiClient.checkout(checkoutData)
        } catch (error) {
            console.error('Error checking out:', error)
        } finally {
            setLoading(false)
        }
    }

    return {
        checkoutData,
        setCheckout,
        checkout,
        loading
    }
}
