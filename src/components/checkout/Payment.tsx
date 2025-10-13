import { Radio, RadioGroup } from "@headlessui/react"
import { useState } from "react"
import { DELIVERY_METHODS, PAYMENT_METHODS, type PaymentMethod, type DeliveryMethod } from "../../types/checkout"
import { useOutletContext } from "react-router"

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod | null>(null)
    const { setShippingCost } = useOutletContext<{shippingCost: number, setShippingCost: (cost: number) => void}>();

    const handlePaymentMethodChange = (method: PaymentMethod) => {
        setPaymentMethod(method)
    }

    const handleDeliveryMethodChange = (method: DeliveryMethod) => {
        console.log(method.price)
        setDeliveryMethod(method)
        setShippingCost(method.price)
    }

    return (
        <div className="w-full bg-white ml-10 border-1 border-neutral-300 p-5 h-fit">
            <h1 className="text-3xl font-bold">Payment</h1>
            <hr className="my-3 border-neutral-300"/>
            <h2 className="font-bold text-xl">Payment method</h2>
            <div className="flex gap-5 w-full mt-5">
                <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange} className="flex gap-5">
                    {PAYMENT_METHODS.map((method) => (
                        <Radio key={method.id} value={method} className="group">
                            <div className="w-48 h-32 border-1 border-neutral-300 flex items-center justify-center hover:cursor-pointer hover:bg-neutral-200 group-data-checked:border-2 group-data-checked:border-orange-500">
                                {method.icon ? <img src={method.icon} alt={method.name} className="w-20 min-w-20" /> : <p>{method.name}</p>}
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
            <hr className="my-3 mt-5 border-neutral-300"/>
            <h2 className="font-bold text-xl">Delivery method</h2>
            <div className="flex gap-5 w-full mt-5">
                <RadioGroup value={deliveryMethod} onChange={handleDeliveryMethodChange} className="flex gap-5">
                    {DELIVERY_METHODS.map((method) => (
                        <Radio key={method.id} value={method} className="group">
                            <div className="w-48 h-32 border-1 border-neutral-300 flex items-center justify-center hover:cursor-pointer hover:bg-neutral-200 group-data-checked:border-2 group-data-checked:border-orange-500">
                                {method.icon ? <img src={method.icon} alt={method.name} className="w-20 min-w-20" /> : <p>{method.name}</p>}
                            </div>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}