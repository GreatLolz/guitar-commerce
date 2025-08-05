import { useParams } from "react-router"
import type { Product } from "../types/product"
import { useState } from "react"
import { useEffect } from "react"
import ApiClient from "../utils/api"

export default function ProductDetails() {
    const { productId } = useParams()
    const [product, setProduct] = useState<Product | null>(null)

    const apiClient = ApiClient.getInstance()

    useEffect(() => {
        getProductDetails()
    }, [productId])

    const getProductDetails = async () => {
        try {
            const response = await apiClient.getProduct(productId!)
            setProduct(response)
        } catch (error) {
            console.error('Error fetching product details:', error)
        }
    }

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <img src={product.imageUrl} alt={product.name} />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}