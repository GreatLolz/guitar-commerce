import { useEffect, useState } from "react";
import ProductTile from "../components/products/ProductTile";
import type { Product } from "../types/product";
import ApiClient from "../utils/api";
import FiltersBar from "../components/products/FiltersBar";

interface ProductsProps {
    filter: string | null
}

export default function Products({ filter }: ProductsProps) {
    const apiClient = ApiClient.getInstance()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const getProductList = async () => {
            try {
                const response = await apiClient.getProductList(20, filter)
                setProducts(response)
            } catch (error) {
                console.error('Error fetching product list:', error)
            }
        }
        getProductList()
    }, [filter, apiClient])

    return (
        <div className="flex flex-row px-50">
            <FiltersBar products={products}/>
            <div className="grid grid-cols-4 gap-2 mx-auto py-10">
                {products.map((product, index) => (
                    <ProductTile key={index} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} rating={product.rating} reviewCount={product.reviewsCount}/>
                ))}
            </div>
        </div>
    )
}