import ApiClient from "../utils/api"
import type { Product } from "../types/product"
import { useEffect, useState } from "react"

export function useProduct(productId: string) {
    const apiClient = ApiClient.getInstance()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await apiClient.getProduct(productId)
                setProduct(response)
            } catch (error) {
                console.error('Error fetching product:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [productId, apiClient])

    return { product, loading }
}
