import { useEffect, useState } from "react";
import ProductTile from "../components/products/ProductTile";
import type { Product } from "../types/product";
import ApiClient from "../utils/api";
import { Button, Radio, RadioGroup } from "@headlessui/react";

export default function Products() {
    const filters = [
        { id: 'guitars', name: 'Guitars' },
        { id: 'basses', name: 'Basses' },
        { id: 'drums', name: 'Drums' },
        { id: 'amps-effects', name: 'Amps & Effects' },
        { id: 'keys-midi', name: 'Keys & MIDI' },
        { id: 'recording', name: 'Recording' },
        { id: 'accessories', name: 'Accessories' },
    ]

    const apiClient = ApiClient.getInstance()
    const [products, setProducts] = useState<Product[]>([])
    const [filter, setFilter] = useState<string | null>(null)

    useEffect(() => {
        getProductList()
    }, [filter])

    const getProductList = async () => {
        try {
            const response = await apiClient.getProductList(20, filter)
            setProducts(response)
        } catch (error) {
            console.error('Error fetching product list:', error)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="bg-neutral-50 border-t border-b border-neutral-200 h-10">
                <RadioGroup value={filter} onChange={setFilter} className="h-full flex justify-between px-50">
                    {filters.map((filter) => (
                        <Radio key={filter.id} value={filter.id} className="group">
                            <Button className="w-50 group-data-checked:font-bold group-data-checked:border-b-2 border-b-orange-500 hover:cursor-pointer h-full px-2">{filter.name}</Button>
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
            <div className="grid grid-cols-4 gap-2 mx-auto py-10">
                {products.map((product, index) => (
                    <ProductTile key={index} imageUrl={product.imageUrl} name={product.name} price={product.price} rating={product.rating} reviewCount={product.reviewsCount}/>
                ))}
            </div>
        </div>
    )
}