import type { Product } from "./product";

export interface CartItemDTO {
    productId: string,
    quantity: number
}

export interface CartItem {
    product: Product,
    quantity: number
}

export interface Cart {
    products: CartItem[]
}
