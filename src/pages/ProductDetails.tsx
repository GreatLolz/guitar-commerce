import { useParams } from "react-router"
import Rating from "../components/products/Rating"
import { Button, Select } from "@headlessui/react"
import { ShoppingBag } from "lucide-react"
import { useProduct } from "../hooks/useProduct"

export default function ProductDetails() {
    const { productId } = useParams()
    const { product } = useProduct(productId!)

    return (
        <div className="flex flex-col px-50 py-10">
            {product ? (
                <div className="flex flex-row gap-5">

                    <div className="w-full h-200 overflow-hidden bg-white">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain"/>
                    </div>
                    <div className="flex flex-col w-160 gap-3">
                        <div className="flex flex-col">
                            <span className="text-xs">{product.id}</span>
                            <span className="text-xl font-bold">{product.name}</span>
                        </div>
                        <div className="flex flex-row">
                            <span>Brand: <span className="font-bold">{product.brand}</span></span>
                        </div>
                        <Rating rating={product.rating} reviewCount={product.reviewsCount}/>
                        <span className="text-2xl font-bold">${product.price}</span>
                        <div className="flex flex-row gap-1 w-full">
                            <Select className="bg-neutral-100 px-2 rounded-sm hover:cursor-pointer font-bold border-1">
                                {Array.from({ length: Math.min(product.stock, 10) }, (_, index) => (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                ))}
                            </Select>
                            <Button className="bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-full">Add to Cart</Button>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-start items-center gap-2">
                                <ShoppingBag size={20}/>
                                <span className="text-md">In Stock: {product.stock}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-md font-bold">Description</span>
                            <span className="text-md">{product.description}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}