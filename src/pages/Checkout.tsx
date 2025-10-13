import { Outlet } from "react-router";
import OrderSummary from "../components/cart/OrderSummary";
import { useState } from "react";

export default function Checkout() {
    const [shippingCost, setShippingCost] = useState<number>(0)

    return (
        <div className="flex flex-row px-50 py-10">
            <div className="flex w-full justify-between">
                <Outlet context={{shippingCost, setShippingCost}}/>
                <OrderSummary showButton={false} shippingCost={shippingCost}/>
            </div>
        </div>
    )
}