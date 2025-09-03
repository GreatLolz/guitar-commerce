import { Checkbox } from "@headlessui/react"
import type { Product } from "../../types/product"
import { Check } from "lucide-react"

interface FiltersBarProps {
    products: Product[]
}

export default function FiltersBar({ products }: FiltersBarProps) {
    const brands = Array.from(new Set(products.map(product => product.brand)))
    
    return (
        <div className="w-60 bg-white mt-10 p-5 border-1 border-neutral-300 h-fit">
            <div className="flex flex-col w-full gap-2">
                <span className="text-xl">Filter by</span>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-md font-bold">Brand</span>
                    {brands.map((brand, index) => (
                        <span key={index} className="text-md flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                onChange={() => {}} 
                                className="w-5 h-5 border-1 flex items-center justify-center rounded-sm"
                            >
                                <Check size={16} className="font-bold"/>
                            </Checkbox>
                            {brand}

                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}