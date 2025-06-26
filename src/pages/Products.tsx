import { useEffect, useState } from "react";
import ProductTile from "../components/products/ProductTile";
import type { Product } from "../types/product";
import ApiClient from "../utils/ApiClient";

export default function Products() {
    const apiClient = ApiClient.getInstance()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProductList()
    }, [])

    const getProductList = async () => {
        try {
            const response = await apiClient.getProductList()
            setProducts(response)
        } catch (error) {
            console.error('Error fetching product list:', error)
        }
    }

    return (
        <div className="grid grid-cols-4 gap-2 mx-auto py-10">
            {products.map((product, index) => (
                <ProductTile key={index} imageUrl={product.imageUrl} name={product.name} price={product.price} rating={product.rating} reviewCount={product.reviewsCount}/>
            ))}
        </div>
    )
}