import { Star } from "lucide-react";
import { NavLink } from "react-router";

export default function ProductTile({ id, imageUrl, name, price, rating, reviewCount }: { id: string, imageUrl: string, name: string, price: number, rating: number, reviewCount: number }) {
    return (
        <div className="bg-neutral-50 p-10 flex flex-col items-center hover:shadow-md hover:cursor-pointer gap-2 w-70 h-100">
            <NavLink to={`/products/${id}`}>
                <img src={imageUrl} alt={name} className="w-50 aspect-square" />
                <span className="w-full wrap-break-word line-clamp-2 leading-5 h-10">{name}</span>
                <span className="w-full text-xl font-bold">${price}</span>
            </NavLink>
            <div className="w-full flex relative">
                <div className="flex flex-row w-full">
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <Star className="text-neutral-500" strokeWidth={1} size={20}/>
                    <div className="flex flex-row w-full absolute top-0 left-0">
                        {Array.from({ length: rating }, (_, index) => (
                            <Star key={index} className="text-yellow-500" strokeWidth={2} fill="oklch(79.5% 0.184 86.047)" size={20}/>
                        ))}
                    </div>
                    <span className="text-sm ml-1">({reviewCount})</span>
                </div>
            </div>
        </div>
    )
}