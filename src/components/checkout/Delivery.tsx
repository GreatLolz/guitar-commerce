import { Field, Input } from "@headlessui/react";
import { NavLink } from "react-router";

export default function Delivery() {
    return (
        <div className="w-full bg-white ml-10 border-1 border-neutral-300 p-5 h-fit">
            <h1 className="text-3xl font-bold">Delivery</h1>
            <hr className="my-3 border-neutral-300"/>
            <div className="w-full mt-5">
                <h2 className="font-bold text-xl">Contact Information</h2>
                <div className="flex gap-2 w-full mt-2">
                    <Field className="w-full">
                        <Input 
                            type="text" 
                            placeholder="Email"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        />
                    </Field>
                    <Field className="w-full">
                        <Input 
                            type="text" 
                            placeholder="Phone"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        />
                    </Field>
                </div>
            </div>
            <div className="w-full mt-5">
                <h2 className="font-bold text-xl">Shipping Address</h2>
                <div className="flex flex-col gap-2 w-full mt-2">
                    <Field className="w-full">
                        <Input 
                            type="text" 
                            placeholder="Full Name"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        />
                    </Field>
                    <Field className="w-full">
                        <Input 
                            type="text" 
                            placeholder="Address Line 1"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        />
                    </Field>
                    <Field className="w-full">
                        <Input 
                            type="text" 
                            placeholder="Address Line 2"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        />
                    </Field>
                    <div className="flex gap-2 w-full">
                        <Field className="w-full">
                            <Input 
                                type="text" 
                                placeholder="City"
                                className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                            />
                        </Field>
                        <Field className="w-full">
                            <Input 
                                type="text" 
                                placeholder="Country"
                                className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                            />
                        </Field>
                    </div>
                    <Field className="w-full max-w-1/3">
                        <Input 
                            type="text" 
                            placeholder="Zip Code"
                            className="w-full border-1 p-3 text-lg rounded-sm border-neutral-300 placeholder:font-semibold"
                        />
                    </Field>
                    <div className="w-full flex justify-end">
                        <NavLink to="/checkout/payment" className="text-lg text-center bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-1/2">
                            Next
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}