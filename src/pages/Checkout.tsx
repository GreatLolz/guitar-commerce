import { Outlet } from "react-router";
import OrderSummary from "../components/cart/OrderSummary";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function Checkout() {
    const [shippingCost, setShippingCost] = useState<number>(0)

    return (
        <div className="flex flex-row px-50 py-10">
            <div className="flex w-full justify-between">
                <Elements stripe={stripePromise}>
                    <Outlet context={{shippingCost, setShippingCost}}/>
                </Elements>
                <OrderSummary showButton={false} shippingCost={shippingCost}/>
            </div>
        </div>
    )
}