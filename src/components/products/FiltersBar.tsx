import { Checkbox } from "@headlessui/react"
import type { Product } from "../../types/product"
import { Check } from "lucide-react"
import type { Filters } from "../../types/product"

interface FiltersBarProps {
    filters: Filters,
    setFilters: (filters: Filters) => void,
    products: Product[]
}

export default function FiltersBar({ filters, setFilters, products }: FiltersBarProps) {
    const brands = Array.from(new Set(products.map(product => product.brand)))
    
    const handleBrandToggle = (brand: string) => {
        const newBrands = filters.brands.includes(brand)
            ? filters.brands.filter(b => b !== brand)
            : [...filters.brands, brand]
            
        setFilters({
            ...filters,
            brands: newBrands
        })
    }
    
    return (
        <div className="w-60 bg-white mt-10 p-5 border-1 border-neutral-300 h-fit">
            <div className="flex flex-col w-full gap-2">
                <span className="text-xl">Filter by</span>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-md font-bold">Brand</span>
                    {brands.map((brand, index) => (
                        <span key={index} className="text-md flex flex-row items-center gap-2 cursor-pointer">
                            <Checkbox 
                                checked={filters.brands.includes(brand)}
                                onChange={() => handleBrandToggle(brand)}
                                className={`w-5 h-5 border-1 flex items-center justify-center rounded-sm ${
                                    filters.brands.includes(brand) ? 'bg-orange-600 border-orange-600' : 'border-gray-300'
                                }`}
                            >
                                <Check size={16} className="text-white font-bold"/>
                            </Checkbox>
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}