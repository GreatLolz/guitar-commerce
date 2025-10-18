import { Radio, RadioGroup } from "@headlessui/react"
import { useState } from "react"
import { DELIVERY_METHODS, PAYMENT_METHODS, type PaymentMethod, type DeliveryMethod } from "../../types/checkout"
import { useOutletContext } from "react-router"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useCheckout } from "../../hooks/useCheckout"

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod | null>(null)
    const { setShippingCost } = useOutletContext<{shippingCost: number, setShippingCost: (cost: number) => void}>();
    const { checkout, loading } = useCheckout();

    const stripe = useStripe();
    const elements = useElements();

    const handlePaymentMethodChange = (method: PaymentMethod) => {
        setPaymentMethod(method)
    }

    const handleDeliveryMethodChange = (method: DeliveryMethod) => {
        console.log(method.price)
        setDeliveryMethod(method)
        setShippingCost(method.price)
    }

    const handlePay = async () => {
        if (!stripe || !elements) {
            return;
        }

        const clientSecret = await checkout()
        if (!clientSecret) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement!,
            }
        })

        if (error) {
            console.log(error)
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            alert('Payment successful!')
        }
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
            {paymentMethod?.id == "credit-card" && (
                <div className="flex flex-col w-full mt-5">
                    <CardElement className="w-1/2 text" options={{hidePostalCode: true}}/>
                </div>
            )}
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
            <div className="flex w-full justify-end mt-5">
                <button 
                    className="text-lg text-center bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-1/2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handlePay}
                    disabled={!paymentMethod || !deliveryMethod || loading}
                >
                    {loading ? "Processing..." : "Pay"}
                </button>
            </div>
        </div>
    )
}