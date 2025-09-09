import { Button } from "@headlessui/react";
import { useCart } from "../../hooks/useCart";
import { useSidebar } from "../../hooks/useSidebar";
import { X } from "lucide-react";
import { NavLink } from "react-router";

export default function CartBar() {
    const { cart, removeCartItem } = useCart()
    const { closeSidebar } = useSidebar()

    return (
        <div className="p-5 flex flex-col gap-2">
            {cart.items.map((item, index) => (
                <div key={index} className="flex flex-row gap-2 items-center justify-between bg-white px-5 p-3 hover:shadow-md">
                    <NavLink 
                        to={`/products/${item.product.id}`} 
                        className="flex flex-row gap-3 items-center"
                        onClick={() => closeSidebar()}
                    >
                        <p className="w-full max-w-5">{item.quantity}</p>
                        <img src={item.product.imageUrl} alt={item.product.name} className="w-25 h-25 object-contain"/>
                        <p className="font-semibold text-ellipsis line-clamp-2">{item.product.name}</p>
                    </NavLink>
                    <Button onClick={() => removeCartItem(item.product.id)} className="bg-neutral-400 rounded-full p-0.5 hover:cursor-pointer hover:bg-orange-600">
                        <X size={10} className="text-white"/>
                    </Button>
                </div>
            ))}
            <div className="mt-5">
                {cart.items.length === 0 && <p className="text-center text-lg text-neutral-500">Your cart is empty.</p>}
            </div>
        </div>
    )
}
