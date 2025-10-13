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

export interface PaymentMethod {
    id: string,
    name: string,
    icon?: string,
}

export const PAYMENT_METHODS: PaymentMethod[] = [
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

export interface DeliveryMethod {
    id: string,
    name: string,
    icon?: string,
    price: number,
    deliveryTime: string,
}

export const DELIVERY_METHODS: DeliveryMethod[] = [
    {
        id: "standard",
        name: "Standard",
        icon: undefined,
        price: 0,
        deliveryTime: "3-5 business days"
    },
    {
        id: "express",
        name: "Express",
        icon: undefined,
        price: 5,
        deliveryTime: "1-2 business days"
    }
]