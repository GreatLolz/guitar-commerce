import { Radio, RadioGroup } from "@headlessui/react"
import { useState } from "react"
import { PAYMENT_METHODS } from "../../types/checkout"

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null)

    return (
        <div className="w-full bg-white ml-10 border-1 border-neutral-300 p-5 h-fit">
            <h1 className="text-3xl font-bold">Payment</h1>
            <hr className="my-3 border-neutral-300"/>
            <h2 className="font-bold text-xl">Payment method</h2>
            <div className="flex gap-5 w-full mt-5">
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod} className="flex gap-5">
                    {PAYMENT_METHODS.map((method) => (
                        <Radio key={method.id} value={method.id} className="group">
                            <div className="w-48 h-32 border-1 border-neutral-300 flex items-center justify-center hover:cursor-pointer hover:bg-neutral-200 group-data-checked:border-2 group-data-checked:border-orange-500">
                                <img src={method.icon} alt={method.name} className="w-20 min-w-20" />
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}