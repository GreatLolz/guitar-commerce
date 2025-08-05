import { NavLink } from "react-router";
import Rating from "./Rating";

export default function ProductTile({ id, imageUrl, name, price, rating, reviewCount }: { id: string, imageUrl: string, name: string, price: number, rating: number, reviewCount: number }) {
    return (
        <div className="bg-neutral-50 p-10 flex flex-col items-center hover:shadow-md hover:cursor-pointer gap-2 w-70 h-100">
            <NavLink to={`/products/${id}`}>
                <div className="w-full h-50 overflow-hidden">
                    <img src={imageUrl} alt={name} className="w-full h-full object-contain" />
                </div>
                <span className="w-full wrap-break-word line-clamp-2 leading-5 h-10">{name}</span>
                <span className="w-full text-xl font-bold">${price}</span>
            </NavLink>
            <Rating rating={rating} reviewCount={reviewCount}/>
        </div>
    )
}