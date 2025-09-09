import type { Product } from "./product";

export interface CartItemDTO {
    cartItemId: string,
    productId: string,
    quantity: number
}

export interface CartItem {
    id: string,
    product: Product,
    quantity: number
}

export interface Cart {
    items: CartItem[]
}
