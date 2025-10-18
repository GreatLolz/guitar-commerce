import { CheckCircleIcon } from "lucide-react";
import { NavLink } from "react-router";

export default function PaymentSuccess() {
    return (
        <div className="flex flex-col items-center mt-30 gap-5">
            <CheckCircleIcon size={50} className="text-orange-600"/>
            <h1 className="text-4xl font-bold">Payment successful!</h1>
            <p className="text-xl">Thank you for your purchase.</p>
            <NavLink to="/" className="font-bold hover:cursor-pointer bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm">Back to home</NavLink>
        </div>
    )
}