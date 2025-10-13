import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router";

interface OrderSummaryProps {
    showButton?: boolean;
    showCart?: boolean;
    shippingCost?: number;
}

export default function OrderSummary({ showButton = true, showCart = true, shippingCost = 0 }: OrderSummaryProps) {
    const { cart } = useCart()

    return (
        <div className="w-full max-w-1/3 bg-white ml-10 border-1 border-neutral-300 p-5 h-fit">
            <h1 className="text-3xl font-bold">Order summary</h1>
            <hr className="my-3 border-neutral-300"/>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                    <p className="text-lg">Subtotal</p>
                    <p className="text-lg font-bold">${cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-lg">Shipping</p>
                    <p className="text-lg font-bold">${shippingCost.toFixed(2)}</p>
                </div>
                <hr className="my-3 border-neutral-300"/>
                <div className="flex flex-row justify-between">
                    <p className="text-lg font-bold">Estimated Total</p>
                    <p className="text-lg font-bold">${(cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0) + shippingCost).toFixed(2)}</p>
                </div>
                {showCart && (
                    <div>
                        <h1 className="text-xl font-bold mt-5">Cart <span className="text-sm font-normal">({cart.items.length} items)</span></h1>
                        <div className="grid grid-cols-5 gap-5 mt-2">
                        {cart.items.map((item, index) => (
                            <NavLink key={index} to={`/products/${item.product.id}`}>
                                <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 object-contain"/>
                            </NavLink>
                        ))}
                        </div>
                    </div>
                )}
                {showButton && (
                    <NavLink 
                        to="/checkout" 
                        className="text-lg text-center bg-orange-600 hover:bg-orange-500 text-white p-2 px-4 rounded-sm hover:cursor-pointer font-bold w-full"
                    >
                        Checkout
                    </NavLink>
                )}
            </div>
        </div>
    )
}