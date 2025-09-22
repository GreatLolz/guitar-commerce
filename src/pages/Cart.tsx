import { Button } from "@headlessui/react";
import { useCart } from "../hooks/useCart";
import { NavLink } from "react-router";
import OrderSummary from "../components/cart/OrderSummary";

export default function Cart() {
    const { cart, removeCartItem } = useCart()
    return (
        <div className="flex flex-row px-50 py-10">
            <div className="w-full">
                <h1 className="text-4xl font-bold">Cart <span className="text-lg font-normal">({cart.items.length} items)</span></h1>
                <hr className="my-3 border-neutral-300"/>
                <div className="flex flex-col gap-2 w-full">
                    {cart.items.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-row gap-5 items-center w-full">
                                <NavLink to={`/products/${item.product.id}`}>
                                    <img src={item.product.imageUrl} alt={item.product.name} className="w-40 h-40 object-contain"/>
                                </NavLink>
                                <div className="flex w-full justify-between items-center">
                                    <NavLink to={`/products/${item.product.id}`}><p className="text-xl w-full font-bold hover:cursor-pointer hover:text-orange-600 hover:underline">{item.product.name}</p></NavLink>
                                    <div className="flex flex-col items-start w-full max-w-20">
                                        <p className="font-semibold text-xl text-orange-600">${(item.product.price * item.quantity).toFixed(2)}</p>
                                        <p className="text-md">Qty. {item.quantity}</p>
                                        <Button onClick={() => removeCartItem(item.id)} className="text-sm underline text-orange-600 cursor-pointer">Remove</Button>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 border-neutral-300"/>
                        </div>
                    ))}
                </div>
            </div>
            <OrderSummary showCart={false}/>
        </div>
    )
}