import { Outlet } from "react-router";
import OrderSummary from "../components/cart/OrderSummary";

export default function Checkout() {
    return (
        <div className="flex flex-row px-50 py-10">
            <div className="flex w-full justify-between">
                <Outlet />
                <OrderSummary showButton={false}/>
            </div>
        </div>
    )
}