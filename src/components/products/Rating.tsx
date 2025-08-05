import { Star } from "lucide-react";

export default function Rating({ rating, reviewCount }: { rating: number, reviewCount: number }) {
    return (
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
    )
}