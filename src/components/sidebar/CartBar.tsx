import { Button } from "@headlessui/react";
import { useCart } from "../../hooks/useCart";
import { useSidebar } from "../../hooks/useSidebar";
import { X } from "lucide-react";
import { NavLink } from "react-router";

export default function CartBar() {
    const { cart, removeCartItem } = useCart()
    const { closeSidebar } = useSidebar()

    return (
        <div className="p-5 flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <div className="flex flex-row gap-2 items-end justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <p className="text-xl">Total:</p>
                    <p className="text-xl font-bold">${cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}</p>
                </div>
                <NavLink to="/cart" onClick={() => closeSidebar()} className="text-sm underline text-orange-600">View Cart</NavLink>
            </div>
            {cart.items.length > 0 && (
                <Button 
                    onClick={() => closeSidebar()}
                    className="bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-full"
                >
                    Checkout
                </Button>
            )}
            {cart.items.map((item, index) => (
                <div key={index} className="flex flex-row gap-2 items-center justify-between bg-white px-5 p-3 hover:shadow-md">
                    <NavLink 
                        to={`/products/${item.product.id}`} 
                        className="flex flex-row gap-3 items-center"
                        onClick={() => closeSidebar()}
                    >
                        <p className="w-full max-w-6 text-xl">{item.quantity}</p>
                        <img src={item.product.imageUrl} alt={item.product.name} className="w-25 h-25 object-contain"/>
                        <div>
                            <p className="text-ellipsis line-clamp-1">{item.product.name}</p>
                            <p className="font-semibold text-md w-full text-orange-600">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </NavLink>
                    <Button onClick={() => removeCartItem(item.id)} className="bg-neutral-400 rounded-full p-0.5 hover:cursor-pointer hover:bg-orange-600">
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
