import { useEffect, useState } from "react";
import ProductTile from "../components/products/ProductTile";
import type { Product } from "../types/product";
import ApiClient from "../utils/api";
import FiltersBar from "../components/products/FiltersBar";
import type { Filters } from "../types/product";

interface ProductsProps {
    category: string | null
}

export default function Products({ category: filter }: ProductsProps) {
    const apiClient = ApiClient.getInstance()
    const [products, setProducts] = useState<Product[]>([])
    const [filters, setFilters] = useState<Filters>({
        brands: [],
        priceMin: 0,
        priceMax: 9999
    })

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

    const isProductFiltered = (product: Product) => {
        const brandFiltered = () => {
            if (filters.brands.length > 0) {
                return filters.brands.includes(product.brand)
            }
            return true
        }

        const priceFiltered = () => {
            if (filters.priceMin > 0 || filters.priceMax > 0) {
                return product.price >= filters.priceMin && product.price <= filters.priceMax
            }
            return true
        }

        return brandFiltered() && priceFiltered()
    }

    return (
        <div className="flex flex-row px-50">
            <FiltersBar filters={filters} setFilters={setFilters} products={products}/>
            <div className="grid grid-cols-4 gap-2 mx-auto py-10">
                {products.filter(isProductFiltered).map((product, index) => (
                    <ProductTile key={index} id={product.id} imageUrl={product.imageUrl} name={product.name} price={product.price} rating={product.rating} reviewCount={product.reviewsCount}/>
                ))}
            </div>
        </div>
    )
}