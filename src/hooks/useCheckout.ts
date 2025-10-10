import { setCheckoutData } from "../reducers/checkout";
import type { CheckoutData } from "../types/checkout";
import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect } from "react";

export function useCheckout() {
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

    return {
        checkoutData,
        setCheckout
    }
}
