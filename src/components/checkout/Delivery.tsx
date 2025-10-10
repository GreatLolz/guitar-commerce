import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { CheckoutData } from "../../types/checkout";
import { useCheckout } from "../../hooks/useCheckout";
import { useEffect } from "react";

export default function Delivery() {
    const navigate = useNavigate();
    const { checkoutData, setCheckout } = useCheckout();

    useEffect(() => {
        reset(checkoutData)
    }, [checkoutData])
    
    const { register, handleSubmit, reset } = useForm<CheckoutData>({
        defaultValues: {
            email: checkoutData.email,
        }
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
        setCheckout(data);
        navigate("/checkout/payment");
    });
    return (
        <form onSubmit={onSubmit} className="w-full bg-white ml-10 border-1 border-neutral-300 p-5 h-fit">
            <h1 className="text-3xl font-bold">Delivery</h1>
            <hr className="my-3 border-neutral-300"/>
            <div className="w-full mt-5">
                <h2 className="font-bold text-xl">Contact Information</h2>
                <div className="flex gap-2 w-full mt-2">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        {...register("email", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        {...register("phone", { required: true })}
                    />
                </div>
            </div>
            <div className="w-full mt-5">
                <h2 className="font-bold text-xl">Shipping Address</h2>
                <div className="flex flex-col gap-2 w-full mt-2">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        {...register("fullName", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Address Line 1"
                        className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        {...register("addressLine1", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Address Line 2 (optional)"
                        className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        {...register("addressLine2")}
                    />
                    <div className="flex gap-2 w-full">
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                            {...register("city", { required: true })}
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                            {...register("country", { required: true })}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Zip Code"
                        className="w-1/3 border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        {...register("zipCode", { required: true })}
                    />
                    <div className="w-full flex justify-end">
                        <button type="submit" className="text-lg text-center bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-1/2">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}