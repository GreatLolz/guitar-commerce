import paypal from "../assets/paypal.png"

export interface CheckoutData {
    email: string,
    phone: string,
    fullName: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    country: string,
    zipCode: string,
}

export const PAYMENT_METHODS = [
    {
        id: "paypal",
        name: "PayPal",
        icon: paypal
    },
    {
        id: "credit-card",
        name: "Credit Card",
        icon: undefined
    }
]